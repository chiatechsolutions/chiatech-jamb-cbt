/* ═══════════════════════════════════════════════
   CHIATECH CBT — Timer Module
   ═══════════════════════════════════════════════ */
let timerInterval = null;

function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(timerTick, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function timerTick() {
  if (state.timeRemaining <= 0) {
    stopTimer();
    autoSubmit();
    return;
  }

  state.timeRemaining--;
  const h = Math.floor(state.timeRemaining / 3600);
  const m = Math.floor((state.timeRemaining % 3600) / 60);
  const s = state.timeRemaining % 60;

  document.getElementById("timerHours").textContent   = String(h).padStart(2, "0");
  document.getElementById("timerMinutes").textContent = String(m).padStart(2, "0");
  document.getElementById("timerSeconds").textContent = String(s).padStart(2, "0");

  const display = document.getElementById("timerDisplay");
  if (state.timeRemaining <= 300) {    // Last 5 minutes → red pulse
    display.classList.add("danger");
  } else if (state.timeRemaining <= 600) {   // Last 10 minutes → warning
    display.style.color = "#ffcc02";
  }
}

function autoSubmit() {
  if (!state.submitted) {
    alert("⏰ Time is up! Your exam has been automatically submitted.");
    state.submitted = true;
    state.examActive = false;
    calculateAndShowResults();
  }
}