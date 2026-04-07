/* ================================================================
   ChiaTech CBT — calculator.js
================================================================ */
"use strict";

const CALC_BTNS = [
  ["C","⌫","(",")"],
  ["7","8","9","÷"],
  ["4","5","6","×"],
  ["1","2","3","−"],
  ["±","0",".","="],
  ["√","x²","%","+"],
];

let calcExpr = "";

function toggleCalculator() {
  const modal = document.getElementById("calculatorModal");
  if (!modal) return;
  const isHidden = modal.style.display === "none" || modal.style.display === "";
  modal.style.display = isHidden ? "flex" : "none";
  if (isHidden) buildCalc();
}

function buildCalc() {
  const grid = document.getElementById("calcGrid");
  if (!grid || grid.children.length) return;   // already built
  CALC_BTNS.flat().forEach(label => {
    const btn = document.createElement("button");
    btn.className   = "calc-btn";
    btn.textContent = label;
    if (label === "=")  btn.classList.add("calc-eq");
    if (label === "C")  btn.classList.add("calc-clear");
    btn.addEventListener("click", () => handleCalc(label));
    grid.appendChild(btn);
  });
}

function handleCalc(label) {
  const disp = document.getElementById("calcDisplay");
  const hist = document.getElementById("calcHistory");
  if (!disp) return;

  switch (label) {
    case "C":  calcExpr = ""; break;
    case "⌫":  calcExpr = calcExpr.slice(0,-1); break;
    case "=": {
      try {
        const expr = calcExpr
          .replace(/÷/g, "/")
          .replace(/×/g, "*")
          .replace(/−/g, "-");
        const result = Function('"use strict"; return (' + expr + ')')();
        if (hist) hist.textContent = calcExpr + " =";
        calcExpr = String(parseFloat(result.toFixed(10)));
      } catch {
        calcExpr = "Error";
        setTimeout(() => { calcExpr = ""; disp.value = ""; }, 1000);
      }
      break;
    }
    case "√": {
      try {
        const n = parseFloat(calcExpr);
        calcExpr = String(Math.sqrt(n));
      } catch { calcExpr = "Error"; }
      break;
    }
    case "x²": {
      try {
        const n = parseFloat(calcExpr);
        calcExpr = String(n * n);
      } catch { calcExpr = "Error"; }
      break;
    }
    case "%": {
      try {
        const n = parseFloat(calcExpr);
        calcExpr = String(n / 100);
      } catch { calcExpr = "Error"; }
      break;
    }
    case "±": {
      if (calcExpr.startsWith("-")) calcExpr = calcExpr.slice(1);
      else if (calcExpr) calcExpr = "-" + calcExpr;
      break;
    }
    default: calcExpr += label;
  }
  disp.value = calcExpr || "0";
}

function closeCalcOutside(e) {
  if (e.target === document.getElementById("calculatorModal"))
    toggleCalculator();
}