/* ═══════════════════════════════════════════════════
   CHIATECH JAMB CBT 2026 — Core Application Logic
   ═══════════════════════════════════════════════════ */

// ─────────────────────────────────────────────────────
//  CONFIG
// ─────────────────────────────────────────────────────
const CONFIG = {
  ACCESS_PIN: "CHIATECH2026",           // Change this PIN
  APPS_SCRIPT_URL: "Yhttps://script.google.com/macros/s/AKfycby-mBrCG5N8_qA8FkloEenTiSgSNiWSgSfrJpy1bH_7ATr3RrKR3tdSzWJCRQ0nKBmyRg/exec",
  EXAM_DURATION: 7200,                   // 120 minutes in seconds
  TOTAL_TESTS: 20,
  ENGLISH_QUESTIONS: 60,
  OTHER_QUESTIONS: 40,
};

// ─────────────────────────────────────────────────────
//  APP STATE
// ─────────────────────────────────────────────────────
const state = {
  student: { name: "", email: "", phone: "" },
  selectedTest: 1,
  selectedSubjects: [],          // e.g. ["English","Physics","Chemistry","Biology"]
  currentSubjectIdx: 0,
  currentQIdx: 0,
  answers: {},                   // { "Physics_1": "A", "English_5": "C" }
  flagged: {},                   // { "Physics_3": true }
  timeRemaining: CONFIG.EXAM_DURATION,
  examActive: false,
  submitted: false,
  currentReviewSubject: "",
};

// Helper: question key
const qKey = (subject, idx) => `${subject}_${idx}`;

// ─────────────────────────────────────────────────────
//  SCREEN MANAGEMENT
// ─────────────────────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  const el = document.getElementById(id);
  if (el) { el.classList.add("active"); window.scrollTo(0,0); }
}

// ─────────────────────────────────────────────────────
//  STEP 1: VERIFY ACCESS GATE
// ─────────────────────────────────────────────────────
function verifyAndProceed() {
  const name    = document.getElementById("studentName").value.trim();
  const email   = document.getElementById("studentEmail").value.trim();
  const phone   = document.getElementById("studentPhone").value.trim();
  const pin     = document.getElementById("accessPin").value.trim();
  const errEl   = document.getElementById("gateError");
  const loadEl  = document.getElementById("gateLoading");

  // Validation
  if (!name) return showError(errEl, "⚠ Please enter your full name.");
  if (pin !== CONFIG.ACCESS_PIN) return showError(errEl, "❌ Invalid Access PIN. Contact your tutor.");

  const checked = [...document.querySelectorAll(".subject-grid input:checked")].map(i => i.value);
  if (checked.length !== 3) return showError(errEl, "⚠ Please select exactly 3 subjects (English is auto-included).");

  errEl.style.display = "none";
  loadEl.style.display = "flex";

  // Style selected subject pills
  document.querySelectorAll(".subject-pill").forEach(p => {
    p.classList.toggle("selected", p.querySelector("input").checked);
  });

  setTimeout(() => {
    loadEl.style.display = "none";
    state.student = { name, email, phone };
    state.selectedSubjects = ["English", ...checked];
    buildTestSelectionScreen();
    showScreen("testSelectScreen");
  }, 800);
}

function showError(el, msg) {
  el.textContent = msg;
  el.style.display = "flex";
  el.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

// ─────────────────────────────────────────────────────
//  STEP 2: BUILD TEST SELECTION SCREEN
// ─────────────────────────────────────────────────────
function buildTestSelectionScreen() {
  document.getElementById("testSelectStudent").textContent = `Welcome, ${state.student.name}`;

  const badgeRow = document.getElementById("testSelectSubjects");
  badgeRow.innerHTML = state.selectedSubjects.map(s =>
    `<span class="badge-green">${s}</span>`).join("");

  const grid = document.getElementById("testGrid");
  grid.innerHTML = "";

  for (let t = 1; t <= CONFIG.TOTAL_TESTS; t++) {
    const card = document.createElement("div");
    card.className = "test-card";
    card.innerHTML = `
      <div class="test-num">${t}</div>
      <div class="test-label">TEST ${t}</div>
      <div class="test-qs">
        Eng: ${CONFIG.ENGLISH_QUESTIONS}Q<br>
        Others: ${CONFIG.OTHER_QUESTIONS}Q each
      </div>
    `;
    card.onclick = () => selectTest(t);
    grid.appendChild(card);
  }
}

function selectTest(testNum) {
  state.selectedTest = testNum;
  buildInstructionsScreen();
  showScreen("instructionsScreen");
}

// ─────────────────────────────────────────────────────
//  STEP 3: INSTRUCTIONS SCREEN
// ─────────────────────────────────────────────────────
function buildInstructionsScreen() {
  document.getElementById("instrName").textContent = state.student.name;
  document.getElementById("instrTest").textContent = `Test ${state.selectedTest}`;

  const subjectRow = document.getElementById("instrSubjects");
  subjectRow.innerHTML = state.selectedSubjects.map(s =>
    `<span class="badge-green">${s}</span>`).join("");
}

// ─────────────────────────────────────────────────────
//  STEP 4: BEGIN EXAM
// ─────────────────────────────────────────────────────
function beginExam() {
  // Reset state
  state.answers  = {};
  state.flagged  = {};
  state.currentSubjectIdx = 0;
  state.currentQIdx = 0;
  state.submitted = false;
  state.timeRemaining = CONFIG.EXAM_DURATION;

  // Build exam UI
  buildSubjectTabs();
  loadSubject(0);

  // Update student badge
  document.getElementById("examStudentBadge").textContent = state.student.name;

  showScreen("examScreen");
  startTimer();
  state.examActive = true;
}

// ─────────────────────────────────────────────────────
//  BUILD SUBJECT TABS
// ─────────────────────────────────────────────────────
function buildSubjectTabs() {
  const bar = document.getElementById("subjectTabsBar");
  bar.innerHTML = "";
  state.selectedSubjects.forEach((sub, idx) => {
    const btn = document.createElement("button");
    btn.className = "subject-tab" + (idx === 0 ? " active" : "");
    btn.textContent = sub.toUpperCase();
    btn.id = `tab_${idx}`;
    btn.onclick = () => switchSubject(idx);
    bar.appendChild(btn);
  });
}

// ─────────────────────────────────────────────────────
//  LOAD SUBJECT
// ─────────────────────────────────────────────────────
function loadSubject(subIdx) {
  state.currentSubjectIdx = subIdx;
  state.currentQIdx = 0;

  // Update tab styling
  document.querySelectorAll(".subject-tab").forEach((t,i) => {
    t.classList.toggle("active", i === subIdx);
  });

  buildPalette();
  loadQuestion();
}

function switchSubject(subIdx) {
  loadSubject(subIdx);
}

// ─────────────────────────────────────────────────────
//  GET CURRENT SUBJECT DATA
// ─────────────────────────────────────────────────────
function getCurrentSubject() {
  return state.selectedSubjects[state.currentSubjectIdx];
}

function getQuestions(subject, testNum) {
  const bank = window.QUESTION_BANK;
  if (!bank || !bank[subject]) return [];
  const key = `test${testNum}`;
  return bank[subject][key] || [];
}

function getQuestionsForCurrentSubject() {
  return getQuestions(getCurrentSubject(), state.selectedTest);
}

function getTotalQuestionsForSubject(subject) {
  return subject === "English" ? CONFIG.ENGLISH_QUESTIONS : CONFIG.OTHER_QUESTIONS;
}

// ─────────────────────────────────────────────────────
//  LOAD QUESTION
// ─────────────────────────────────────────────────────
function loadQuestion() {
  const subject  = getCurrentSubject();
  const questions = getQuestionsForCurrentSubject();
  const total    = questions.length || getTotalQuestionsForSubject(subject);
  const qIdx     = state.currentQIdx;
  const q        = questions[qIdx];

  // Update label
  document.getElementById("questionLabel").textContent =
    `${subject}: Question ${qIdx + 1} of ${total}`;

  // Flag indicator
  const key = qKey(subject, qIdx);
  const isFlagged = !!state.flagged[key];
  document.getElementById("flagIndicator").style.display = isFlagged ? "flex" : "none";
  const flagBtn = document.getElementById("flagBtn");
  flagBtn.classList.toggle("active", isFlagged);

  if (!q) {
    document.getElementById("questionText").textContent = `Question ${qIdx + 1} — (Content coming soon. Check questions/${subject.toLowerCase()}.js)`;
    document.getElementById("optionsContainer").innerHTML = "";
    document.getElementById("passagePanel").style.display = "none";
    document.getElementById("diagramContainer").style.display = "none";
    updatePalette();
    return;
  }

  // Passage
  const passPanel = document.getElementById("passagePanel");
  if (q.passage) {
    passPanel.style.display = "block";
    document.getElementById("passageText").innerHTML = q.passage;
  } else {
    passPanel.style.display = "none";
  }

  // Diagram
  const diagContainer = document.getElementById("diagramContainer");
  if (q.image) {
    diagContainer.style.display = "block";
    document.getElementById("questionDiagram").src = q.image;
  } else {
    diagContainer.style.display = "none";
  }

  // Question text
  document.getElementById("questionText").innerHTML = q.question;

  // Options
  const optContainer = document.getElementById("optionsContainer");
  optContainer.innerHTML = "";
  const selectedAns = state.answers[key];

  Object.entries(q.options).forEach(([letter, text]) => {
    const div = document.createElement("div");
    div.className = "option-item" + (selectedAns === letter ? " selected" : "");
    div.innerHTML = `<span class="opt-letter">${letter}</span><span class="opt-text">${text}</span>`;
    div.onclick = () => selectAnswer(letter);
    optContainer.appendChild(div);
  });

  // Nav buttons
  document.getElementById("prevBtn").disabled = qIdx === 0;
  document.getElementById("nextBtn").textContent = (qIdx === total - 1) ? "END ✓" : "NEXT ›";

  updatePalette();

  // Re-render MathJax
  if (window.MathJax) {
    MathJax.typesetPromise([document.getElementById("questionText"),
                            document.getElementById("optionsContainer")]).catch(console.error);
  }
}

// ─────────────────────────────────────────────────────
//  SELECT ANSWER
// ─────────────────────────────────────────────────────
function selectAnswer(letter) {
  if (state.submitted) return;
  const subject = getCurrentSubject();
  const key = qKey(subject, state.currentQIdx);
  state.answers[key] = letter;

  // Update option UI
  document.querySelectorAll(".option-item").forEach(opt => {
    const optLetter = opt.querySelector(".opt-letter").textContent;
    opt.classList.toggle("selected", optLetter === letter);
    opt.querySelector(".opt-letter").style.background = optLetter === letter ? "var(--primary)" : "";
    opt.querySelector(".opt-letter").style.color = optLetter === letter ? "white" : "";
  });

  updatePalette();
  updateProgress();
}

// ─────────────────────────────────────────────────────
//  NAVIGATION
// ─────────────────────────────────────────────────────
function nextQuestion() {
  const questions = getQuestionsForCurrentSubject();
  const total = questions.length || getTotalQuestionsForSubject(getCurrentSubject());

  if (state.currentQIdx < total - 1) {
    state.currentQIdx++;
    loadQuestion();
  }
}

function prevQuestion() {
  if (state.currentQIdx > 0) {
    state.currentQIdx--;
    loadQuestion();
  }
}

// ─────────────────────────────────────────────────────
//  FLAG QUESTION
// ─────────────────────────────────────────────────────
function flagQuestion() {
  const key = qKey(getCurrentSubject(), state.currentQIdx);
  state.flagged[key] = !state.flagged[key];
  loadQuestion(); // refresh display
}

// ─────────────────────────────────────────────────────
//  PALETTE
// ─────────────────────────────────────────────────────
function buildPalette() {
  const subject  = getCurrentSubject();
  const questions = getQuestionsForCurrentSubject();
  const total    = questions.length || getTotalQuestionsForSubject(subject);
  const palette  = document.getElementById("questionPalette");
  palette.innerHTML = "";

  for (let i = 0; i < total; i++) {
    const key = qKey(subject, i);
    const btn = document.createElement("div");
    btn.className = "palette-btn";
    btn.textContent = i + 1;
    btn.id = `pb_${i}`;

    if (state.flagged[key]) btn.classList.add("flagged");
    else if (state.answers[key]) btn.classList.add("answered");
    if (i === state.currentQIdx) btn.classList.add("current");

    btn.onclick = () => { state.currentQIdx = i; loadQuestion(); };
    palette.appendChild(btn);
  }

  updateProgress();
}

function updatePalette() {
  const subject  = getCurrentSubject();
  const questions = getQuestionsForCurrentSubject();
  const total    = questions.length || getTotalQuestionsForSubject(subject);

  for (let i = 0; i < total; i++) {
    const key = qKey(subject, i);
    const btn = document.getElementById(`pb_${i}`);
    if (!btn) continue;
    btn.className = "palette-btn";
    if (state.flagged[key]) btn.classList.add("flagged");
    else if (state.answers[key]) btn.classList.add("answered");
    if (i === state.currentQIdx) btn.classList.add("current");
  }

  updateProgress();
}

function updateProgress() {
  let total = 0, answered = 0;
  state.selectedSubjects.forEach(sub => {
    const qs = getQuestions(sub, state.selectedTest);
    const t = qs.length || getTotalQuestionsForSubject(sub);
    total += t;
    for (let i = 0; i < t; i++) {
      if (state.answers[qKey(sub, i)]) answered++;
    }
  });

  const pct = total > 0 ? (answered / total) * 100 : 0;
  document.getElementById("progressBar").style.width = pct + "%";
  document.getElementById("progressText").textContent = `${answered} / ${total} answered`;
}

// ─────────────────────────────────────────────────────
//  SUBMIT
// ─────────────────────────────────────────────────────
function confirmSubmit() {
  let total = 0, answered = 0, flaggedCount = 0;

  state.selectedSubjects.forEach(sub => {
    const qs = getQuestions(sub, state.selectedTest);
    const t = qs.length || getTotalQuestionsForSubject(sub);
    total += t;
    for (let i = 0; i < t; i++) {
      const key = qKey(sub, i);
      if (state.answers[key]) answered++;
      if (state.flagged[key]) flaggedCount++;
    }
  });

  const unanswered = total - answered;

  document.getElementById("submitStats").innerHTML = `
    <div>✅ Answered: <strong>${answered}</strong></div>
    <div>⚠ Unanswered: <strong style="color:var(--danger)">${unanswered}</strong></div>
    <div>🚩 Flagged: <strong style="color:var(--accent)">${flaggedCount}</strong></div>
    <div>📋 Total: <strong>${total}</strong></div>
  `;

  document.getElementById("submitModal").style.display = "flex";
}

function closeSubmitModal() {
  document.getElementById("submitModal").style.display = "none";
}

function submitExam() {
  closeSubmitModal();
  stopTimer();
  state.submitted = true;
  state.examActive = false;
  calculateAndShowResults();
}

// ─────────────────────────────────────────────────────
//  CALCULATE RESULTS (JAMB SCALE)
// ─────────────────────────────────────────────────────
function calculateAndShowResults() {
  const results = {};
  let totalScaled = 0;

  state.selectedSubjects.forEach(subject => {
    const questions = getQuestions(subject, state.selectedTest);
    const maxRaw = subject === "English" ? CONFIG.ENGLISH_QUESTIONS : CONFIG.OTHER_QUESTIONS;
    let correct = 0;

    questions.forEach((q, i) => {
      if (state.answers[qKey(subject, i)] === q.correct) correct++;
    });

    const raw    = correct;
    const scaled = Math.round((correct / maxRaw) * 100);
    results[subject] = { correct, total: questions.length || maxRaw, raw, scaled };
    totalScaled += scaled;
  });

  showResults(results, totalScaled);
  sendResultsToBackend(results, totalScaled);
}

// ─────────────────────────────────────────────────────
//  SHOW RESULTS SCREEN
// ─────────────────────────────────────────────────────
function showResults(results, totalScore) {
  document.getElementById("resultsStudentName").textContent = state.student.name;
  document.getElementById("resultsTestLabel").textContent  = `TEST ${state.selectedTest}`;

  // Score ring
  document.getElementById("totalScoreDisplay").textContent = totalScore;

  // Grade & emoji
  let grade = "", emoji = "", color = "";
  if (totalScore >= 300) { grade = "EXCELLENT 🏆"; emoji = "🏆"; color = "var(--primary)"; }
  else if (totalScore >= 250) { grade = "VERY GOOD ⭐"; emoji = "⭐"; color = "#0288d1"; }
  else if (totalScore >= 200) { grade = "GOOD 👍"; emoji = "👍"; color = "#f57c00"; }
  else if (totalScore >= 150) { grade = "AVERAGE 📚"; emoji = "📚"; color = "#9e9e9e"; }
  else { grade = "NEEDS WORK 💪"; emoji = "💪"; color = var(--danger)"; }

  document.getElementById("resultIcon").textContent = emoji;
  const gradeEl = document.getElementById("scoreGrade");
  gradeEl.textContent = grade.split(" ")[0];
  gradeEl.style.color = color;

  // Score ring color
  const ring = document.querySelector(".total-score-ring");
  const pct  = (totalScore / 400) * 100;
  ring.style.background = `conic-gradient(${color} ${pct}%, #e0e0e0 ${pct}%)`;

  // Breakdown cards
  const breakdown = document.getElementById("scoreBreakdown");
  breakdown.innerHTML = "";

  state.selectedSubjects.forEach(sub => {
    const r = results[sub];
    if (!r) return;
    const pct = r.scaled;

    const card = document.createElement("div");
    card.className = "score-card";
    card.innerHTML = `
      <div class="sc-subject">${sub}</div>
      <div class="sc-score">${r.scaled}<span style="font-size:1rem;color:var(--text-light)">/100</span></div>
      <div class="sc-scaled">${r.correct} / ${r.total} correct</div>
      <div class="sc-bar"><div class="sc-fill" style="width:${pct}%"></div></div>
    `;
    breakdown.appendChild(card);
  });

  // Performance message
  let msg = "";
  if (totalScore >= 300) {
    msg = `🎉 <strong>Outstanding!</strong> You scored ${totalScore}/400 — you are on track for admission to top universities! Keep it up!`;
  } else if (totalScore >= 250) {
    msg = `💪 <strong>Great effort!</strong> You scored ${totalScore}/400. You are close to 300! Focus on weak subjects and try more tests.`;
  } else if (totalScore >= 200) {
    msg = `📚 <strong>Good progress!</strong> You scored ${totalScore}/400. Review your explanations carefully and practice daily.`;
  } else {
    msg = `🔥 <strong>Keep pushing!</strong> You scored ${totalScore}/400. Study your explanations below — every test makes you stronger!`;
  }
  document.getElementById("performanceMsg").innerHTML = msg;

  showScreen("resultsScreen");
}

// ─────────────────────────────────────────────────────
//  SHOW REVIEW SCREEN
// ─────────────────────────────────────────────────────
function showReview() {
  buildReviewTabs();
  loadReview(state.selectedSubjects[0]);
  showScreen("reviewScreen");
}

function buildReviewTabs() {
  const tabsEl = document.getElementById("reviewSubjectTabs");
  tabsEl.innerHTML = "";

  state.selectedSubjects.forEach(sub => {
    const btn = document.createElement("button");
    btn.className = "review-tab" + (sub === state.selectedSubjects[0] ? " active" : "");
    btn.textContent = sub;
    btn.onclick = () => {
      document.querySelectorAll(".review-tab").forEach(t => t.classList.remove("active"));
      btn.classList.add("active");
      loadReview(sub);
    };
    tabsEl.appendChild(btn);
  });
}

function loadReview(subject) {
  state.currentReviewSubject = subject;
  const questions = getQuestions(subject, state.selectedTest);
  const container = document.getElementById("reviewContainer");
  container.innerHTML = "";

  if (!questions.length) {
    container.innerHTML = `<div class="review-container" style="text-align:center;padding:40px;">
      <i class="fas fa-info-circle fa-3x" style="color:#ccc;"></i>
      <p style="margin-top:16px;color:#999;">Questions for ${subject} Test ${state.selectedTest} not yet added.</p>
      <p style="color:#999;font-size:0.85rem;">See questions/${subject.toLowerCase()}.js</p>
    </div>`;
    return;
  }

  questions.forEach((q, i) => {
    const key       = qKey(subject, i);
    const studentAns = state.answers[key];
    const isCorrect = studentAns === q.correct;
    const isSkipped = !studentAns;

    let status = isSkipped ? "skipped" : isCorrect ? "correct" : "wrong";
    let badge  = isSkipped ? "SKIPPED" : isCorrect ? "✓ CORRECT" : "✗ WRONG";

    const div = document.createElement("div");
    div.className = `review-question ${status}`;

    let optionsHTML = "";
    Object.entries(q.options).forEach(([letter, text]) => {
      let cls = "neutral-ans";
      if (letter === q.correct) cls = "correct-ans";
      else if (letter === studentAns && !isCorrect) cls = "wrong-ans";

      optionsHTML += `<div class="review-opt ${cls}">
        <strong>${letter}.</strong> ${text}
        ${letter === q.correct ? " ✓" : ""}
        ${letter === studentAns && !isCorrect ? " ← Your answer" : ""}
      </div>`;
    });

    div.innerHTML = `
      <div class="review-q-header">
        <span class="review-q-num">Q${i + 1} &bull; ${q.topic || subject}</span>
        <span class="review-badge ${status}">${badge}</span>
      </div>
      <div class="review-q-text">${q.question}</div>
      <div class="review-options">${optionsHTML}</div>
      <div class="review-explanation">
        <strong><i class="fas fa-lightbulb"></i> Explanation:</strong>
        ${q.explanation || "Correct answer: " + q.correct}
      </div>
    `;
    container.appendChild(div);
  });

  // Re-render MathJax
  if (window.MathJax) MathJax.typesetPromise([container]).catch(console.error);
}

// ─────────────────────────────────────────────────────
//  SEND RESULTS TO GOOGLE APPS SCRIPT
// ─────────────────────────────────────────────────────
function sendResultsToBackend(results, totalScore) {
  if (!CONFIG.APPS_SCRIPT_URL || CONFIG.APPS_SCRIPT_URL.includes("YOUR_")) return;

  const payload = {
    name:     state.student.name,
    email:    state.student.email,
    phone:    state.student.phone,
    test:     state.selectedTest,
    subjects: state.selectedSubjects,
    results:  results,
    total:    totalScore,
    date:     new Date().toLocaleString("en-NG", { timeZone: "Africa/Lagos" }),
  };

  fetch(CONFIG.APPS_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }).catch(err => console.warn("Backend notification failed:", err));
}

// ─────────────────────────────────────────────────────
//  CALCULATOR TOGGLE
// ─────────────────────────────────────────────────────
function toggleCalculator() {
  const modal = document.getElementById("calculatorModal");
  modal.style.display = modal.style.display === "none" ? "flex" : "none";
}

function closeCalcOutside(e) {
  if (e.target === document.getElementById("calculatorModal")) toggleCalculator();
}

// ─────────────────────────────────────────────────────
//  PREVENT ACCIDENTAL NAVIGATION
// ─────────────────────────────────────────────────────
window.addEventListener("beforeunload", e => {
  if (state.examActive && !state.submitted) {
    e.preventDefault();
    e.returnValue = "Exam is in progress. Are you sure you want to leave?";
  }
});

// Subject pills toggle (visual)
document.querySelectorAll(".subject-pill input").forEach(inp => {
  inp.addEventListener("change", function () {
    this.closest(".subject-pill").classList.toggle("selected", this.checked);
    const checked = [...document.querySelectorAll(".subject-grid input:checked")];
    if (checked.length > 3) {
      this.checked = false;
      this.closest(".subject-pill").classList.remove("selected");
      showError(document.getElementById("gateError"), "⚠ You can only select exactly 3 subjects.");
    } else {
      document.getElementById("gateError").style.display = "none";
    }
  });
});