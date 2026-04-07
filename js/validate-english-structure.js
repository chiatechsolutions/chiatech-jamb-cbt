"use strict";

/*
  CHIATECH English Question Bank Auto-Validator
  ------------------------------------------------
  How to use:
  1. Load english.js before this file in subject.html
     OR paste this in browser console after english.js has loaded.
  2. Run:
       validateEnglishQuestionBank(window.QUESTION_BANK["English"]);
*/

function validateEnglishQuestionBank(englishBank) {
  const report = {
    passed: true,
    testsChecked: 0,
    errors: [],
    warnings: []
  };

  if (!englishBank || typeof englishBank !== "object") {
    report.passed = false;
    report.errors.push("English question bank not found or invalid.");
    return report;
  }

  for (let t = 1; t <= 20; t++) {
    const testName = `test${t}`;
    const questions = englishBank[testName];

    if (!Array.isArray(questions)) {
      report.passed = false;
      report.errors.push(`${testName}: missing or not an array.`);
      continue;
    }

    report.testsChecked++;
    validateSingleTest(testName, questions, report);
  }

  printValidationReport(report);
  return report;
}

function validateSingleTest(testName, questions, report) {
  if (questions.length !== 60) {
    fail(report, `${testName}: expected 60 questions, found ${questions.length}.`);
  }

  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    const expectedId = i + 1;

    if (!q || typeof q !== "object") {
      fail(report, `${testName}: question ${expectedId} is missing or invalid.`);
      continue;
    }

    if (q.id !== expectedId) {
      fail(report, `${testName}: expected id ${expectedId}, found ${q.id}.`);
    }

    validateCommonQuestionFields(testName, q, report);
  }

  validateSectionPattern(testName, questions, report);
}

function validateCommonQuestionFields(testName, q, report) {
  if (!q.topic || typeof q.topic !== "string") {
    fail(report, `${testName} Q${q.id}: missing or invalid topic.`);
  }

  if (!q.question || typeof q.question !== "string") {
    fail(report, `${testName} Q${q.id}: missing or invalid question text.`);
  }

  if (!q.options || typeof q.options !== "object") {
    fail(report, `${testName} Q${q.id}: missing options object.`);
  } else {
    const letters = ["A", "B", "C", "D"];
    for (const letter of letters) {
      if (
        !Object.prototype.hasOwnProperty.call(q.options, letter) ||
        typeof q.options[letter] !== "string" ||
        !q.options[letter].trim()
      ) {
        fail(report, `${testName} Q${q.id}: missing or invalid option ${letter}.`);
      }
    }

    const optionKeys = Object.keys(q.options).sort().join(",");
    if (optionKeys !== "A,B,C,D") {
      warn(report, `${testName} Q${q.id}: option keys should be exactly A, B, C, D.`);
    }
  }

  if (!["A", "B", "C", "D"].includes(q.correct)) {
    fail(report, `${testName} Q${q.id}: correct answer must be A, B, C, or D.`);
  }

  if (!q.explanation || typeof q.explanation !== "string") {
    fail(report, `${testName} Q${q.id}: missing explanation.`);
  }
}

function validateSectionPattern(testName, questions, report) {
  const q = (n) => questions[n - 1];

  validatePassageStarter(testName, q(1), "Comprehension", report, { requirePassage: true });
  validatePassageFollowers(testName, questions, 2, 5, report, { mustBeNull: true });

  validatePassageStarter(testName, q(6), "Cloze Test", report, { requirePassage: true });
  validatePassageFollowers(testName, questions, 7, 15, report, { mustBeNull: true });

  validateLekkiStarter(testName, q(16), report);
  validateLekkiFollowers(testName, questions, 17, 25, report);

  validateResetQuestion(testName, q(26), report);
  validatePostResetQuestions(testName, questions, 27, 60, report);

  validateAnswerDistribution(testName, questions, report);
}

function validatePassageStarter(testName, q, expectedTopicText, report, opts = {}) {
  if (!q) {
    fail(report, `${testName}: missing required starter question.`);
    return;
  }

  if (!String(q.topic || "").toLowerCase().includes(expectedTopicText.toLowerCase())) {
    warn(report, `${testName} Q${q.id}: topic should clearly indicate ${expectedTopicText}.`);
  }

  if (opts.requirePassage) {
    if (typeof q.passage !== "string" || !q.passage.trim()) {
      fail(report, `${testName} Q${q.id}: must start section with a real non-empty passage.`);
    }
  }
}

function validatePassageFollowers(testName, questions, start, end, report, opts = {}) {
  for (let n = start; n <= end; n++) {
    const item = questions[n - 1];
    if (!item) {
      fail(report, `${testName} Q${n}: missing question.`);
      continue;
    }

    if (opts.mustBeNull && item.passage !== null) {
      fail(report, `${testName} Q${n}: passage must be null to continue shared passage block.`);
    }
  }
}

function validateLekkiStarter(testName, q, report) {
  if (!q) {
    fail(report, `${testName} Q16: missing Lekki Headmaster starter.`);
    return;
  }

  if (!String(q.topic || "").toLowerCase().includes("lekki")) {
    warn(report, `${testName} Q16: topic should indicate The Lekki Headmaster.`);
  }

  if (typeof q.passage !== "string" || !q.passage.trim()) {
    fail(report, `${testName} Q16: must contain a real passage/instruction string.`);
  }

  if (q.diagram !== "assets/english/lekkiheadmaster.png") {
    fail(report, `${testName} Q16: diagram must be "assets/english/lekkiheadmaster.png".`);
  }
}

function validateLekkiFollowers(testName, questions, start, end, report) {
  for (let n = start; n <= end; n++) {
    const item = questions[n - 1];
    if (!item) {
      fail(report, `${testName} Q${n}: missing Lekki question.`);
      continue;
    }

    if (item.passage !== null) {
      fail(report, `${testName} Q${n}: passage must be null in Lekki continuation block.`);
    }

    if (item.diagram !== "assets/english/lekkiheadmaster.png") {
      fail(report, `${testName} Q${n}: diagram must remain assets/english/lekkiheadmaster.png.`);
    }
  }
}

function validateResetQuestion(testName, q, report) {
  if (!q) {
    fail(report, `${testName} Q26: missing reset question.`);
    return;
  }

  if (q.passage !== "") {
    fail(report, `${testName} Q26: must reset passage with passage: "".`);
  }

  if (typeof q.diagram !== "undefined") {
    fail(report, `${testName} Q26: must not carry Lekki diagram.`);
  }
}

function validatePostResetQuestions(testName, questions, start, end, report) {
  for (let n = start; n <= end; n++) {
    const item = questions[n - 1];
    if (!item) {
      fail(report, `${testName} Q${n}: missing question.`);
      continue;
    }

    if (item.diagram === "assets/english/lekkiheadmaster.png") {
      fail(report, `${testName} Q${n}: Lekki diagram must not appear after Q25.`);
    }

    if (typeof item.passage !== "undefined" && item.passage !== null && item.passage !== "") {
      warn(report, `${testName} Q${n}: has extra passage content after reset; check if intentional.`);
    }
  }
}

function validateAnswerDistribution(testName, questions, report) {
  const counts = { A: 0, B: 0, C: 0, D: 0 };

  for (const q of questions) {
    if (counts[q.correct] !== undefined) {
      counts[q.correct]++;
    }
  }

  const values = Object.values(counts);
  const max = Math.max(...values);
  const min = Math.min(...values);

  if (max - min > 8) {
    warn(
      report,
      `${testName}: answer distribution is uneven. A=${counts.A}, B=${counts.B}, C=${counts.C}, D=${counts.D}`
    );
  }
}

function fail(report, message) {
  report.passed = false;
  report.errors.push(message);
}

function warn(report, message) {
  report.warnings.push(message);
}

function printValidationReport(report) {
  console.group("CHIATECH English Question Bank Validation Report");
  console.log(`Passed: ${report.passed ? "YES" : "NO"}`);
  console.log(`Tests checked: ${report.testsChecked}`);
  console.log(`Errors: ${report.errors.length}`);
  console.log(`Warnings: ${report.warnings.length}`);

  if (report.errors.length) {
    console.group("Errors");
    report.errors.forEach((e, i) => console.log(`${i + 1}. ${e}`));
    console.groupEnd();
  }

  if (report.warnings.length) {
    console.group("Warnings");
    report.warnings.forEach((w, i) => console.log(`${i + 1}. ${w}`));
    console.groupEnd();
  }

  console.groupEnd();
}