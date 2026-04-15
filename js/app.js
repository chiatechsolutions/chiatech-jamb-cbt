/* ================================================================
   CHIATECH JAMB CBT PRACTICE 2026 — app.js
   Final production version
   - Backend-only PIN verification
   - Form-encoded POST to Google Apps Script
   - Fixes MathJax crash
   - Supports side diagrams
   - 20 tests, 120 minutes, English 60 / others 40
   - Scores each subject over 100, total over 400
================================================================ */
"use strict";

/* ═══════════════════════════════════════════════════════════════
   1. CONFIG
═══════════════════════════════════════════════════════════════ */
const CFG = {
  GAS_URL:"https://script.google.com/macros/s/AKfycby2Y4YhJ9dSop4CNM6E4-Sa1yxumSM6fhocyGyxnHQesEv0U2E5ZR3B_mTmCdb1eg8Pow/exec",
  EXAM_SECS: 7200,
  TOTAL_TESTS: 20,
  ENG_QS: 60,
  OTHER_QS: 40,
  AUTOSAVE_MS: 30000,
  STORAGE_KEY: "ct_cbt_session_v4",
  APP_NAME: "CHIATECH JAMB CBT PRACTICE 2026"
};

/* ═══════════════════════════════════════════════════════════════
   2. STATE
═══════════════════════════════════════════════════════════════ */
let S = {
  student: { name: "", email: "", phone: "", pin: "" },
  subjects: [],
  testNumber: null,
  questions: {},
  answers: {},
  flagged: {},
  scores: {},
  curSubject: "English",
  curIdx: 0,
  timerLeft: CFG.EXAM_SECS,
  timerRef: null,
  autoSaveRef: null,
  submitted: false,
  pinVerified: false,
  reviewSubject: "English"
};
let _mathJaxBusy = false;

/* ═══════════════════════════════════════════════════════════════
   3. BOOT
═══════════════════════════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
  S.subjects = [];
  wireGateCheckboxes();
  restoreSession();
});

/* ═══════════════════════════════════════════════════════════════
   4. HELPERS
═══════════════════════════════════════════════════════════════ */
function byId(id) {
  return document.getElementById(id);
}

function val(id) {
  return (byId(id)?.value || "").trim();
}

function setHTML(id, html) {
  const el = byId(id);
  if (el) el.innerHTML = html;
}

function setText(id, text) {
  const el = byId(id);
  if (el) el.textContent = text;
}

function escapeHtml(str) {
  return String(str ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function safeMathHtml(html) {
  return String(html ?? "");
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function pad2(n) {
  return String(n).padStart(2, "0");
}

function mkKey(subject, idx) {
  return `${subject}|${idx}`;
}

function testKey(n) {
  return `test${n}`;
}

function prettyNow() {
  try {
    return new Date().toLocaleString("en-NG", {
      dateStyle: "medium",
      timeStyle: "short"
    });
  } catch (_) {
    return new Date().toLocaleString();
  }
}

function cssEscapeValue(str) {
  if (window.CSS && typeof window.CSS.escape === "function") {
    return CSS.escape(str);
  }
  return String(str).replace(/["\\]/g, "\\$&");
}

/* ───── DEVICE ID (ADD THIS EXACTLY HERE) ───── */
function getOrCreateDeviceId() {
  let id = localStorage.getItem("ct_device_id");
  if (!id) {
    id = "dev-" + Math.random().toString(36).slice(2) + Date.now();
    localStorage.setItem("ct_device_id", id);
  }
  return id;
}

/* ═══════════════════════════════════════════════════════════════
   5. SCREEN CONTROL
═══════════════════════════════════════════════════════════════ */
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(el => el.classList.remove("active"));
  const sc = byId(id);
  if (sc) {
    sc.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

/* ═══════════════════════════════════════════════════════════════
   6. ACCESS GATE
═══════════════════════════════════════════════════════════════ */
function wireGateCheckboxes() {
  document
    .querySelectorAll(".subject-grid input[type='checkbox']")
    .forEach(cb => cb.addEventListener("change", handleSubjectChange));
}

function handleSubjectChange(e) {
  const value = e.target.value;

  if (e.target.checked) {
    if (S.subjects.length >= 3) {
      e.target.checked = false;
      showGateError("⚠️ Select exactly 3 subjects besides English.");
      return;
    }
    if (!S.subjects.includes(value)) S.subjects.push(value);
  } else {
    S.subjects = S.subjects.filter(s => s !== value);
  }

  clearGateMessages();
}

function showGateError(msg) {
  const el = byId("gateMessage");
  if (!el) return;
  el.style.color = "#9b1111";
  el.innerHTML = msg;
}

function showGateSuccess(msg) {
  const el = byId("gateMessage");
  if (!el) return;
  el.style.color = "#17652c";
  el.innerHTML = msg;
}

function clearGateMessages() {
  const el = byId("gateMessage");
  if (!el) return;
  el.innerHTML = "";
}

function setGateLoading(loading) {
  const btn = byId("continueBtn");
  if (!btn) return;

  btn.disabled = !!loading;
  btn.style.opacity = loading ? "0.7" : "1";
  btn.innerHTML = loading
    ? `<i class="fas fa-spinner fa-spin"></i> Verifying PIN...`
    : `<i class="fas fa-circle-play"></i> Proceed to Test Selection`;
}

async function verifyAndProceed() {
  const name = val("studentName");
  const email = val("studentEmail");
  const phone = val("studentPhone");
  const pin = val("accessPin").toUpperCase();
  const deviceId = getOrCreateDeviceId();

  if (!name) return showGateError("⚠️ Full name is required.");
  if (!email) return showGateError("⚠️ Email address is required.");
  if (!isValidEmail(email)) return showGateError("⚠️ Enter a valid email address.");
  if (!pin) return showGateError("⚠️ Access PIN is required.");
  if (S.subjects.length !== 3) {
    return showGateError("⚠️ Select exactly 3 subjects besides English.");
  }

  setGateLoading(true);
  clearGateMessages();

  try {
    const formData = new URLSearchParams();
    formData.append("action", "verifyPin");
    formData.append("pin", pin);
    formData.append("email", email);
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("deviceId", deviceId);

    const res = await fetch(CFG.GAS_URL, {
      method: "POST",
      body: formData
    });

    const text = await res.text();

    let data = {};
    try {
      data = JSON.parse(text);
    } catch (e) {
      throw new Error("Backend did not return valid JSON: " + text);
    }

    if (!res.ok || !data.success) {
      setGateLoading(false);
      return showGateError("❌ " + (data.message || "PIN verification failed."));
    }

    S.student = { name, email, phone, pin };
    S.subjects = ["English", ...S.subjects];
    S.pinVerified = true;

    saveSession();
    showGateSuccess("✅ PIN verified successfully.");
    setGateLoading(false);

    buildTestSelectionScreen();
    showScreen("testSelectScreen");
  } catch (err) {
    console.error("PIN verification error:", err);
    setGateLoading(false);
    showGateError("❌ Unable to verify PIN right now. Check internet and try again.");
  }
}

/* ═══════════════════════════════════════════════════════════════
   7. TEST SELECTION
═══════════════════════════════════════════════════════════════ */
function buildTestSelectionScreen() {
  setHTML("testSelectStudent", `
    <p><strong>Candidate:</strong> ${escapeHtml(S.student.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(S.student.email)}</p>
  `);

  setHTML(
    "testSelectSubjects",
    S.subjects.map(sub => `<span class="badge-subject">${escapeHtml(sub)}</span>`).join("")
  );

  const grid = byId("testGrid");
  if (!grid) return;

  const totalQ = S.subjects.reduce(
    (sum, sub) => sum + (sub === "English" ? CFG.ENG_QS : CFG.OTHER_QS),
    0
  );

  grid.innerHTML = "";

  for (let t = 1; t <= CFG.TOTAL_TESTS; t++) {
    const card = document.createElement("div");
    card.className = "test-card";
    card.innerHTML = `
      <div class="test-card-number">Test ${t}</div>
      <div class="test-card-label">${escapeHtml(testLabel(t))}</div>
      <div class="test-card-info">
        <i class="fas fa-question-circle"></i> ${totalQ} Questions &nbsp;|&nbsp;
        <i class="fas fa-clock"></i> 120 Minutes
      </div>
      <button class="btn-primary btn-sm" type="button" onclick="selectTest(${t})">
        <i class="fas fa-play"></i> Start
      </button>
    `;
    grid.appendChild(card);
  }
}

function testLabel(t) {
  if (t <= 4) return "Build Your Confidence";
  if (t <= 8) return "Step Up Your Confidence";
  if (t <= 12) return "Speed, Accuracy and Mastery";
  if (t <= 16) return "300+ Readiness Challenge";
  return "Mixed Difficult Questions";
}

function selectTest(num) {
  S.testNumber = num;
  saveSession();

  setText("instrName", S.student.name);
  setText("instrTest", `Test ${num} — ${testLabel(num)}`);
  setHTML(
    "instrSubjects",
    S.subjects.map(sub => `<span class="badge-subject">${escapeHtml(sub)}</span>`).join("")
  );

  showScreen("instructionsScreen");
}

/* ═══════════════════════════════════════════════════════════════
   8. BEGIN EXAM
═══════════════════════════════════════════════════════════════ */
function beginExam() {
  if (!window.QUESTION_BANK) {
    alert("Question bank not loaded. Please refresh the page.");
    return;
  }
  if (!S.testNumber) {
    alert("Please select a test first.");
    return;
  }

  S.questions = {};
  S.answers = {};
  S.flagged = {};
  S.scores = {};
  S.submitted = false;
  S.curIdx = 0;
  S.timerLeft = CFG.EXAM_SECS;

  const tKey = testKey(S.testNumber);

  for (const sub of S.subjects) {
    const bank = window.QUESTION_BANK[sub];
    if (!bank || !bank[tKey]) {
      alert(`⚠️ Questions missing: ${sub} ${tKey}.`);
      return;
    }

    const limit = sub === "English" ? CFG.ENG_QS : CFG.OTHER_QS;
    S.questions[sub] = bank[tKey].slice(0, limit);
  }

  S.curSubject = S.subjects[0];
  window._cbtCurrentPassage = "";

  buildExamUI();
  showScreen("examScreen");
  startTimer();
  startAutoSave();
  saveSession();
}

/* ═══════════════════════════════════════════════════════════════
   9. EXAM UI
═══════════════════════════════════════════════════════════════ */
function buildExamUI() {
  setText("examStudentBadge", `${S.student.name} — Test ${S.testNumber}`);
  buildSubjectTabs();
  buildPalette();
  renderQuestion();
  renderTimer();
}

function buildSubjectTabs() {
  const el = byId("subjectTabs");
  if (!el) return;

  el.innerHTML = S.subjects.map(sub => `
    <button
      class="subject-tab ${sub === S.curSubject ? "active" : ""}"
      type="button"
      onclick="switchSubject('${escapeHtml(sub).replaceAll("'", "\\'")}')"
    >
      ${escapeHtml(sub)} (${(S.questions[sub] || []).length})
    </button>
  `).join("");
}

function switchSubject(subject) {
  if (!S.questions[subject]) return;
  S.curSubject = subject;
  S.curIdx = 0;
  buildSubjectTabs();
  buildPalette();
  renderQuestion();
  saveSession();
  window._cbtCurrentPassage = "";
}

function buildPalette() {
  const el = byId("questionPalette");
  if (!el) return;
  el.innerHTML = "";

  (S.questions[S.curSubject] || []).forEach((_, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "palette-btn";
    btn.textContent = String(idx + 1);
    btn.dataset.idx = String(idx);
    btn.addEventListener("click", () => jumpToQuestion(idx));
    el.appendChild(btn);
  });

  updatePalette();
}

function updatePalette() {
  const qs = S.questions[S.curSubject] || [];
  qs.forEach((_, idx) => {
    const key = mkKey(S.curSubject, idx);
    const btn = document.querySelector(`#questionPalette .palette-btn[data-idx="${idx}"]`);
    if (!btn) return;

    btn.classList.remove("answered", "flagged", "current", "unanswered");

    if (idx === S.curIdx) btn.classList.add("current");
    else if (S.flagged[key]) btn.classList.add("flagged");
    else if (S.answers[key]) btn.classList.add("answered");
    else btn.classList.add("unanswered");
  });
}

function renderQuestion() {
  const qs = S.questions[S.curSubject] || [];
  const q = qs[S.curIdx];
  // ===== JAMB PASSAGE SYSTEM =====
if (typeof window._cbtCurrentPassage === "undefined") {
  window._cbtCurrentPassage = "";
}

/* passage control
   - string with content => start new passage block
   - null => continue previous passage block
   - "" or false => clear passage block
*/
if (q.passage === "" || q.passage === false) {
  window._cbtCurrentPassage = "";
} else if (q.passage !== null && q.passage !== undefined) {
  window._cbtCurrentPassage = q.passage;
}

const passageHTML = window._cbtCurrentPassage
  ? `<div class="cbt-passage math-content">${safeMathHtml(window._cbtCurrentPassage)}</div>`
  : "";
  if (!q) return;

  const key = mkKey(S.curSubject, S.curIdx);
  const selected = S.answers[key] || "";

  const diagramHtml = q.diagram ? `
    <aside class="question-diagram-box">
      <img
        src="${q.diagram}"
        alt="Question diagram"
        class="question-diagram"
        onerror="this.closest('.question-diagram-box').style.display='none';"
      />
      <div class="question-diagram-caption">Question Diagram</div>
    </aside>
  ` : "";

  const optionsHtml = ["A", "B", "C", "D"].map(letter => {
    const optionText = q.options?.[letter];
    if (!optionText) return "";

    return `
      <label class="option-card option-item ${selected === letter ? "selected" : ""}" data-key="${key}" data-letter="${letter}">
        <input
          type="radio"
          name="q_${escapeHtml(key)}"
          value="${letter}"
          ${selected === letter ? "checked" : ""}
          onchange="selectAnswer('${key.replaceAll("\\", "\\\\").replaceAll("'", "\\'")}','${letter}')"
        />
        <span class="option-letter">${letter}.</span>
        <span class="option-text math-content">${safeMathHtml(optionText)}</span>
      </label>
    `;
  }).join("");

  const html = `
  <div class="question-wrap ${q.diagram ? "has-diagram" : ""}">
    <div class="question-main">
      <div class="question-meta">
        <span class="question-number">Question ${S.curIdx + 1} of ${qs.length}</span>
        <span class="question-topic">${escapeHtml(q.topic || S.curSubject)}</span>
        ${S.flagged[key] ? `<span class="question-topic" style="background:#fff3d4;color:#7a5400;">Flagged</span>` : ""}
      </div>

      ${passageHTML}

      <div class="question-text math-content">${safeMathHtml(q.question)}</div>

      <div class="options-container">${optionsHtml}</div>
    </div>
    ${diagramHtml}
  </div>
`;

  setHTML("questionContainer", html);
  buildSubjectTabs();
  updatePalette();
  safeTypesetMath([byId("questionContainer")]);
  saveSession();
}

/* ═══════════════════════════════════════════════════════════════
   10. MATHJAX
═══════════════════════════════════════════════════════════════ */
function safeTypesetMath(elements = []) {
  if (!window.MathJax || !window.mathJaxReady || _mathJaxBusy) return;

  const valid = elements.filter(el => el && el.nodeType === 1);
  if (!valid.length) return;

  _mathJaxBusy = true;

  MathJax.typesetPromise(valid)
    .catch(err => console.warn("MathJax render error:", err))
    .finally(() => {
      _mathJaxBusy = false;
    });
}

/* ═══════════════════════════════════════════════════════════════
   11. ANSWERS
═══════════════════════════════════════════════════════════════ */
function selectAnswer(key, letter) {
  if (S.submitted) return;
  S.answers[key] = letter;

  document
    .querySelectorAll(`.option-item[data-key="${cssEscapeValue(key)}"]`)
    .forEach(el => {
      el.classList.toggle("selected", el.dataset.letter === letter);
      const input = el.querySelector("input[type='radio']");
      if (input) input.checked = el.dataset.letter === letter;
    });

  updatePalette();
  saveSession();
}

function toggleFlagCurrent() {
  if (S.submitted) return;
  const key = mkKey(S.curSubject, S.curIdx);
  S.flagged[key] = !S.flagged[key];
  renderQuestion();
  updatePalette();
  saveSession();
}

/* ═══════════════════════════════════════════════════════════════
   12. NAVIGATION
═══════════════════════════════════════════════════════════════ */
function nextQuestion() {
  const qs = S.questions[S.curSubject] || [];
  if (S.curIdx < qs.length - 1) {
    S.curIdx++;
    renderQuestion();
    return;
  }

  const subIndex = S.subjects.indexOf(S.curSubject);
  if (subIndex < S.subjects.length - 1) {
    S.curSubject = S.subjects[subIndex + 1];
    S.curIdx = 0;
    buildSubjectTabs();
    buildPalette();
    renderQuestion();
  }
}

function prevQuestion() {
  if (S.curIdx > 0) {
    S.curIdx--;
    renderQuestion();
    return;
  }

  const subIndex = S.subjects.indexOf(S.curSubject);
  if (subIndex > 0) {
    const prevSub = S.subjects[subIndex - 1];
    S.curSubject = prevSub;
    S.curIdx = (S.questions[prevSub] || []).length - 1;
    buildSubjectTabs();
    buildPalette();
    renderQuestion();
  }
}

function jumpToQuestion(idx) {
  S.curIdx = idx;
  renderQuestion();
}

/* ═══════════════════════════════════════════════════════════════
   13. TIMER
═══════════════════════════════════════════════════════════════ */
function startTimer() {
  stopTimer();

  S.timerRef = setInterval(() => {
    S.timerLeft--;
    renderTimer();

    const timerEl = byId("examTimer");
    if (timerEl && S.timerLeft <= 300) {
      timerEl.style.background = "#ffd9d9";
      timerEl.style.color = "#7d1111";
    }

    if (S.timerLeft <= 0) {
      stopTimer();
      autoSubmit();
    }
  }, 1000);
}

function stopTimer() {
  if (S.timerRef) {
    clearInterval(S.timerRef);
    S.timerRef = null;
  }
}

function renderTimer() {
  const secs = Math.max(0, S.timerLeft);
  const h = Math.floor(secs / 3600);
  const m = Math.floor((secs % 3600) / 60);
  const s = secs % 60;
  setText("examTimer", `${pad2(h)}:${pad2(m)}:${pad2(s)}`);
}

function autoSubmit() {
  alert("⏰ Time is up. Your exam will now be submitted.");
  submitExam();
}

/* ═══════════════════════════════════════════════════════════════
   14. REVIEW
═══════════════════════════════════════════════════════════════ */
function goToReviewScreen() {
  if (!S.submitted) return;
  S.reviewSubject = (S.subjects && S.subjects.length) ? S.subjects[0] : "English";
  renderReview();
  showScreen("reviewScreen");
}
function buildReviewSubjectTabs() {
  const wrap = byId("reviewSubjectTabs");
  if (!wrap) return;

  wrap.innerHTML = "";

  (S.subjects || []).forEach(sub => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "subject-tab" + (S.reviewSubject === sub ? " active" : "");
    btn.textContent = sub;
    btn.onclick = () => {
      S.reviewSubject = sub;
      renderReview();
    };
    wrap.appendChild(btn);
  });
}
function renderReview() {
  computeScores();

  const totalAnswered = countAnswered();
  const totalQuestions = countQuestions();

  const subject = S.reviewSubject || (S.subjects && S.subjects[0]) || "English";
  const subjectQs = S.questions[subject] || [];
  const sc = S.scores[subject] || { raw: 0, total: 0, scaled: 0 };

  setHTML("reviewSummary", `
    <p><strong>Candidate:</strong> ${escapeHtml(S.student.name)}</p>
    <p><strong>Test:</strong> Test ${S.testNumber}</p>
    <p><strong>Answered:</strong> ${totalAnswered} / ${totalQuestions}</p>
    <p><strong>Subject:</strong> ${escapeHtml(subject)} — ${sc.raw}/${sc.total} correct (${sc.scaled}/100)</p>
  `);

  buildReviewSubjectTabs();

  const html = subjectQs.map((q, idx) => {
    const key = mkKey(subject, idx);
    const userAns = S.answers[key] || "";
    const correct = q.correct || "";
    const isCorrect = !!userAns && userAns === correct;

    const optionsHtml = ["A", "B", "C", "D"].map(letter => {
      const text = q.options?.[letter];
      if (!text) return "";

      let cls = "review-option";
      if (letter === correct) cls += " correct";
      if (letter === userAns) cls += " chosen";
      if (letter === userAns && userAns !== correct) cls += " wrong";

      return `
        <div class="${cls}">
          <strong>${letter}.</strong> <span class="math-content">${safeMathHtml(text)}</span>
        </div>
      `;
    }).join("");

    return `
      <div class="review-item">
        <h4>
          Q${idx + 1} — ${escapeHtml(q.topic || subject)}
          ${isCorrect ? "✓" : userAns ? "✗" : "—"}
        </h4>

        ${q.diagram ? `
          <div class="question-diagram-box" style="max-width:360px;margin-bottom:12px;">
            <img
              src="${q.diagram}"
              alt="Question diagram"
              class="question-diagram"
              onerror="this.closest('.question-diagram-box').style.display='none';"
            />
          </div>
        ` : ""}

        ${q.passage ? `
          <div class="question-text math-content" style="margin-bottom:12px;">
            ${safeMathHtml(q.passage)}
          </div>
        ` : ""}

        <div class="question-text math-content" style="margin-bottom:12px;">
          ${safeMathHtml(q.question)}
        </div>

        <div>${optionsHtml}</div>

        <div style="margin-top:10px;">
          <strong>Your Answer:</strong> ${userAns || "<em>Not answered</em>"}<br/>
          <strong>Correct Answer:</strong> ${escapeHtml(correct)}<br/>
          <strong>Explanation:</strong>
          <span class="explanation-text math-content">${safeMathHtml(q.explanation || "<em>No explanation available.</em>")}</span>
        </div>
      </div>
    `;
  }).join("");

  setHTML("reviewContainer", html);
  safeTypesetMath([byId("reviewContainer")]);
}

/* ═══════════════════════════════════════════════════════════════
   15. SCORING + SUBMIT
═══════════════════════════════════════════════════════════════ */
function computeScores() {
  const scores = {};

  for (const subject of S.subjects) {
    const qs = S.questions[subject] || [];
    let raw = 0;

    qs.forEach((q, idx) => {
      const key = mkKey(subject, idx);
      if (S.answers[key] && S.answers[key] === q.correct) raw++;
    });

    const total = qs.length;
    const scaled = total ? Math.round((raw / total) * 100) : 0;

    scores[subject] = { raw, total, scaled };
  }

  S.scores = scores;
  return scores;
}

function totalScore400() {
  computeScores();
  return S.subjects.reduce((sum, sub) => sum + (S.scores[sub]?.scaled || 0), 0);
}

function countAnswered() {
  let answered = 0;
  for (const subject of S.subjects) {
    const qs = S.questions[subject] || [];
    qs.forEach((_, idx) => {
      if (S.answers[mkKey(subject, idx)]) answered++;
    });
  }
  return answered;
}

function countQuestions() {
  let total = 0;
  for (const subject of S.subjects) {
    total += (S.questions[subject] || []).length;
  }
  return total;
}

async function submitExam() {
  if (S.submitted) return;

  const confirmed = confirm("Submit exam now? You will not be able to change answers after submission.");
  if (!confirmed) return;

  S.submitted = true;
  stopTimer();
  stopAutoSave();
  computeScores();

  const total = totalScore400();
  renderResults(total);
  showScreen("resultScreen");
  saveSession();

  try {
    await sendResultEmail(total);
  } catch (err) {
    console.warn("Result send failed:", err);
  }
}

function renderResults(total) {
  const grade =
    total >= 300 ? "Outstanding" :
    total >= 250 ? "Very Good" :
    total >= 200 ? "Good" :
    "Keep Practising";

  setHTML("resultSummary", `
    <p><strong>Candidate:</strong> ${escapeHtml(S.student.name)}</p>
    <p><strong>Test:</strong> Test ${S.testNumber}</p>
    <p><strong>Total Score:</strong> <span style="font-size:1.3rem;font-weight:800;">${total}/400</span></p>
    <p><strong>Remark:</strong> ${grade}</p>
  `);

  const rows = S.subjects.map(subject => {
    const sc = S.scores[subject] || { raw: 0, total: 0, scaled: 0 };
    return `
      <tr>
        <td>${escapeHtml(subject)}</td>
        <td>${sc.raw}/${sc.total}</td>
        <td>${sc.scaled}/100</td>
      </tr>
    `;
  }).join("");

  setHTML("resultBreakdown", `
    <table class="result-table">
      <thead>
        <tr>
          <th>Subject</th>
          <th>Raw Score</th>
          <th>Scaled Score</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `);
}

async function sendResultEmail(total) {
  if (!S.student.email) return;

  const deviceId = getOrCreateDeviceId();

  const breakdown = S.subjects.map(subject => {
    const sc = S.scores[subject];
    return `${subject}: ${sc.raw}/${sc.total} -> ${sc.scaled}/100`;
  }).join("\n");

  const formData = new URLSearchParams();
  formData.append("action", "sendResult");
  formData.append("name", S.student.name);
  formData.append("email", S.student.email);
  formData.append("phone", S.student.phone);
  formData.append("pin", S.student.pin);
  formData.append("deviceId", deviceId);
  formData.append("testNo", S.testNumber);
  formData.append("total", total);
  formData.append("subjects", S.subjects.join(", "));
  formData.append("breakdown", breakdown);
  formData.append("date", prettyNow());

  const res = await fetch(CFG.GAS_URL, {
    method: "POST",
    body: formData
  });

  const text = await res.text();

  let data = {};
  try {
    data = JSON.parse(text);
  } catch (e) {
    throw new Error("Backend did not return valid JSON: " + text);
  }

  if (!res.ok || !data.success) {
    throw new Error(data.message || "Failed to send result.");
  }
}

/* ═══════════════════════════════════════════════════════════════
   16. SESSION
═══════════════════════════════════════════════════════════════ */
function saveSession() {
  try {
    localStorage.setItem(CFG.STORAGE_KEY, JSON.stringify({
      student: S.student,
      subjects: S.subjects,
      testNumber: S.testNumber,
      questions: S.questions,
      answers: S.answers,
      flagged: S.flagged,
      scores: S.scores,
      curSubject: S.curSubject,
      curIdx: S.curIdx,
      timerLeft: S.timerLeft,
      submitted: S.submitted,
      pinVerified: S.pinVerified
    }));
  } catch (err) {
    console.warn("Session save failed:", err);
  }
}

function restoreSession() {
  try {
    const raw = localStorage.getItem(CFG.STORAGE_KEY);
    if (!raw) return;

    const saved = JSON.parse(raw);
    if (!saved || typeof saved !== "object") return;

    S.student = saved.student || S.student;
    S.subjects = Array.isArray(saved.subjects) ? saved.subjects.filter(s => s !== "English") : [];
    S.testNumber = saved.testNumber || null;
    S.pinVerified = !!saved.pinVerified;

    if (byId("studentName")) byId("studentName").value = S.student.name || "";
    if (byId("studentEmail")) byId("studentEmail").value = S.student.email || "";
    if (byId("studentPhone")) byId("studentPhone").value = S.student.phone || "";
    if (byId("accessPin")) byId("accessPin").value = S.student.pin || "";

    document
      .querySelectorAll(".subject-grid input[type='checkbox']")
      .forEach(cb => {
        cb.checked = S.subjects.includes(cb.value);
      });

    if (S.pinVerified && S.student.name && S.testNumber) {
      S.subjects = saved.subjects || [];
      S.questions = saved.questions || {};
      S.answers = saved.answers || {};
      S.flagged = saved.flagged || {};
      S.scores = saved.scores || {};
      S.curSubject = saved.curSubject || S.subjects[0] || "English";
      S.curIdx = Number.isInteger(saved.curIdx) ? saved.curIdx : 0;
      S.timerLeft = Number.isInteger(saved.timerLeft) ? saved.timerLeft : CFG.EXAM_SECS;
      S.submitted = !!saved.submitted;

    if (Object.keys(S.questions).length) {
        if (S.submitted) {
          const total = totalScore400();
          renderResults(total);
          showScreen("resultScreen");
        } else {
          buildExamUI();
          showScreen("examScreen");
          startTimer();
          startAutoSave();
        }
      } else {
        buildTestSelectionScreen();
        showScreen("testSelectScreen");
      }
    }
  } catch (err) {
    console.warn("Session restore failed:", err);
  }
}

function clearSession() {
  try {
    localStorage.removeItem(CFG.STORAGE_KEY);
  } catch (_) {}
}

function startAutoSave() {
  stopAutoSave();
  S.autoSaveRef = setInterval(saveSession, CFG.AUTOSAVE_MS);
}

function stopAutoSave() {
  if (S.autoSaveRef) {
    clearInterval(S.autoSaveRef);
    S.autoSaveRef = null;
  }
}

/* ═══════════════════════════════════════════════════════════════
   17. RESET
═══════════════════════════════════════════════════════════════ */
function restartApp() {
  stopTimer();
  stopAutoSave();
  clearSession();

  S = {
    student: { name: "", email: "", phone: "", pin: "" },
    subjects: [],
    testNumber: null,
    questions: {},
    answers: {},
    flagged: {},
    scores: {},
    curSubject: "English",
    curIdx: 0,
    timerLeft: CFG.EXAM_SECS,
    timerRef: null,
    autoSaveRef: null,
    submitted: false,
    pinVerified: false,
    reviewSubject: "English"
  };

  if (byId("studentName")) byId("studentName").value = "";
  if (byId("studentEmail")) byId("studentEmail").value = "";
  if (byId("studentPhone")) byId("studentPhone").value = "";
  if (byId("accessPin")) byId("accessPin").value = "";

  document
    .querySelectorAll(".subject-grid input[type='checkbox']")
    .forEach(cb => cb.checked = false);

  clearGateMessages();
  showScreen("gateScreen");
}
function goToTestSelection() {
  stopTimer();
  stopAutoSave();

  S.questions = {};
  S.answers = {};
  S.flagged = {};
  S.scores = {};
  S.curSubject = "English";
  S.curIdx = 0;
  S.timerLeft = CFG.EXAM_SECS;
  S.timerRef = null;
  S.autoSaveRef = null;
  S.submitted = false;

  saveSession();
  buildTestSelectionScreen();
  showScreen("testSelectScreen");
}

function repeatCurrentTest() {
  stopTimer();
  stopAutoSave();

  S.questions = {};
  S.answers = {};
  S.flagged = {};
  S.scores = {};
  S.curSubject = "English";
  S.curIdx = 0;
  S.timerLeft = CFG.EXAM_SECS;
  S.timerRef = null;
  S.autoSaveRef = null;
  S.submitted = false;

  saveSession();
  beginExam();
}

/* ═══════════════════════════════════════════════════════════════
   18. GLOBAL EXPORTS
═══════════════════════════════════════════════════════════════ */
window.showScreen = showScreen;
window.verifyAndProceed = verifyAndProceed;
window.selectTest = selectTest;
window.beginExam = beginExam;
window.switchSubject = switchSubject;
window.prevQuestion = prevQuestion;
window.nextQuestion = nextQuestion;
window.jumpToQuestion = jumpToQuestion;
window.selectAnswer = selectAnswer;
window.toggleFlagCurrent = toggleFlagCurrent;
window.goToReviewScreen = goToReviewScreen;
window.submitExam = submitExam;
window.restartApp = restartApp;
window.goToTestSelection = goToTestSelection;
window.repeatCurrentTest = repeatCurrentTest;