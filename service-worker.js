/* ================================================================
   CHIATECH JAMB CBT PRACTICE 2026 — service-worker.js
   - Static asset caching
   - Offline shell support
   - Faster repeat loading
   - Auto-caches diagram files on first use
================================================================ */

const SW_VERSION = "ct-cbt-v1.1.1";
const STATIC_CACHE = `static-${SW_VERSION}`;
const PAGE_CACHE = `pages-${SW_VERSION}`;
const QUESTION_CACHE = `questions-${SW_VERSION}`;
const ASSET_CACHE = `assets-${SW_VERSION}`;
const DIAGRAM_CACHE = `diagrams-${SW_VERSION}`;
const RUNTIME_CACHE = `runtime-${SW_VERSION}`;

const APP_SHELL = [
  "/",
  "/index.html",
  "/subject.html",
  "/test-selection.html",
  "/results.html",
  "/manifest.json",

  "/css/style.css",

  "/js/app.js",
  "/js/calculator.js",
  "/js/timer.js",

  "/questions/english.js",
  "/questions/mathematics.js",
  "/questions/physics.js",
  "/questions/chemistry.js",
  "/questions/biology.js",
  "/questions/economics.js",
  "/questions/geography.js",
  "/questions/government.js",
  "/questions/commerce.js",
  "/questions/accounting.js",
  "/questions/literature.js",
  "/questions/crk.js",
  "/questions/computer.js",

  "/icons/icon-192.png",
  "/icons/icon-512.png",
  "/assets/logo.png",

  "/mathjax/es5/tex-mml-chtml.js"
];

const OFFLINE_HTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Offline - CHIATECH CBT</title>
  <style>
    body{
      margin:0;
      font-family:Arial,sans-serif;
      background:#163f28;
      color:#fff;
      display:grid;
      place-items:center;
      min-height:100vh;
      padding:24px;
      box-sizing:border-box;
    }
    .card{
      max-width:560px;
      width:100%;
      background:#fff;
      color:#17351d;
      border-radius:18px;
      padding:28px;
      box-shadow:0 10px 30px rgba(0,0,0,.18);
      text-align:center;
    }
    h1{
      margin:0 0 12px;
      color:#184d28;
      font-size:1.8rem;
    }
    p{
      line-height:1.7;
      margin:10px 0;
    }
    .small{
      color:#5f6f63;
      font-size:.95rem;
    }
    button{
      margin-top:14px;
      border:none;
      background:#1f7a2f;
      color:#fff;
      padding:12px 18px;
      border-radius:999px;
      font-weight:700;
      cursor:pointer;
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>CHIATECH CBT Offline</h1>
    <p>You are currently offline and this page is not yet cached.</p>
    <p class="small">Reconnect once so the page and diagrams can be stored for faster access next time.</p>
    <button onclick="location.reload()">Try Again</button>
  </div>
</body>
</html>
`;

/* ═══════════════════════════════════════════════════════════════
   INSTALL
═══════════════════════════════════════════════════════════════ */
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

/* ═══════════════════════════════════════════════════════════════
   ACTIVATE
═══════════════════════════════════════════════════════════════ */
self.addEventListener("activate", (event) => {
  const keep = [
    STATIC_CACHE,
    PAGE_CACHE,
    QUESTION_CACHE,
    ASSET_CACHE,
    DIAGRAM_CACHE,
    RUNTIME_CACHE
  ];

  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => !keep.includes(key))
          .map((key) => caches.delete(key))
      )
    )
  );

  self.clients.claim();
});

/* ═══════════════════════════════════════════════════════════════
   FETCH
═══════════════════════════════════════════════════════════════ */
self.addEventListener("fetch", (event) => {
  const req = event.request;
  const url = new URL(req.url);

  if (req.method !== "GET") return;
  if (!url.protocol.startsWith("http")) return;

  // HTML navigation: network first
  if (req.mode === "navigate") {
    event.respondWith(networkFirstPage(req));
    return;
  }

  // Question banks: cache first
  if (url.pathname.startsWith("/questions/")) {
    event.respondWith(cacheFirst(req, QUESTION_CACHE));
    return;
  }

  // Diagram images: auto-cache on first use
  if (isDiagramPath(url.pathname)) {
    event.respondWith(cacheFirst(req, DIAGRAM_CACHE));
    return;
  }

  // Other assets: cache first
  if (
    url.pathname.startsWith("/assets/") ||
    url.pathname.startsWith("/icons/")
  ) {
    event.respondWith(cacheFirst(req, ASSET_CACHE));
    return;
  }

  // CSS / JS / local MathJax / manifest: stale-while-revalidate
  if (
    url.pathname.startsWith("/css/") ||
    url.pathname.startsWith("/js/") ||
    url.pathname.startsWith("/mathjax/") ||
    url.pathname.endsWith(".json")
  ) {
    event.respondWith(staleWhileRevalidate(req, STATIC_CACHE));
    return;
  }

  // Default runtime
  event.respondWith(staleWhileRevalidate(req, RUNTIME_CACHE));
});

/* ═══════════════════════════════════════════════════════════════
   CACHE STRATEGIES
═══════════════════════════════════════════════════════════════ */
async function networkFirstPage(request) {
  const cache = await caches.open(PAGE_CACHE);

  try {
    const fresh = await fetch(request);
    if (fresh && fresh.ok) {
      cache.put(request, fresh.clone());
    }
    return fresh;
  } catch (err) {
    const cached = await cache.match(request);
    if (cached) return cached;

    const shell = await caches.open(STATIC_CACHE);
    const fallback =
      (await shell.match("/subject.html")) ||
      (await shell.match("/index.html"));

    if (fallback) return fallback;

    return new Response(OFFLINE_HTML, {
      headers: { "Content-Type": "text/html; charset=UTF-8" }
    });
  }
}

async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);

  if (cached) return cached;

  try {
    const fresh = await fetch(request);
    if (fresh && (fresh.ok || fresh.type === "opaque")) {
      cache.put(request, fresh.clone());
    }
    return fresh;
  } catch (err) {
    return cached || new Response("", { status: 404, statusText: "Not Found" });
  }
}

async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);

  const networkFetch = fetch(request)
    .then((fresh) => {
      if (fresh && (fresh.ok || fresh.type === "opaque")) {
        cache.put(request, fresh.clone());
      }
      return fresh;
    })
    .catch(() => null);

  return cached || (await networkFetch) || new Response("", { status: 504, statusText: "Gateway Timeout" });
}

/* ═══════════════════════════════════════════════════════════════
   DIAGRAM PATH DETECTION
═══════════════════════════════════════════════════════════════ */
function isDiagramPath(pathname) {
  // Matches:
  // /assets/biology/test1/question2.png
  // /assets/accounting/test16/question10_12.png
  return /^\/assets\/[^/]+\/test\d+\/question[\w-]+\.(png|jpg|jpeg|webp)$/i.test(pathname);
}