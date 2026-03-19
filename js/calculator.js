/* ═══════════════════════════════════════════════
   CHIATECH CBT — Scientific Calculator Module
   ═══════════════════════════════════════════════ */
(function initCalculator() {
  const buttons = [
    { label: "C",    type: "clear" },
    { label: "±",    type: "op",  action: "negate" },
    { label: "%",    type: "op",  action: "%" },
    { label: "÷",    type: "op",  action: "/" },
    { label: "7",    type: "num" },
    { label: "8",    type: "num" },
    { label: "9",    type: "num" },
    { label: "×",    type: "op",  action: "*" },
    { label: "4",    type: "num" },
    { label: "5",    type: "num" },
    { label: "6",    type: "num" },
    { label: "−",    type: "op",  action: "-" },
    { label: "1",    type: "num" },
    { label: "2",    type: "num" },
    { label: "3",    type: "num" },
    { label: "+",    type: "op",  action: "+" },
    { label: "0",    type: "num zero" },
    { label: ".",    type: "num" },
    { label: "⌫",    type: "op",  action: "del" },
    { label: "=",    type: "equals" },
  ];

  let calcExpr = "";

  document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("calcGrid");
    if (!grid) return;

    buttons.forEach(b => {
      const btn = document.createElement("button");
      btn.className = `calc-btn ${b.type}`;
      btn.textContent = b.label;

      btn.onclick = () => {
        const disp = document.getElementById("calcDisplay");
        const hist = document.getElementById("calcHistory");

        if (b.type === "clear") {
          calcExpr = "";
          disp.value = "";
          hist.textContent = "";
          return;
        }

        if (b.type === "num" || b.type === "num zero") {
          if (b.label === "." && calcExpr.includes(".")) return;
          calcExpr += b.label;
          disp.value = calcExpr;
          return;
        }

        if (b.action === "del") {
          calcExpr = calcExpr.slice(0, -1);
          disp.value = calcExpr;
          return;
        }

        if (b.action === "negate") {
          if (calcExpr.startsWith("-")) calcExpr = calcExpr.slice(1);
          else calcExpr = "-" + calcExpr;
          disp.value = calcExpr;
          return;
        }

        if (b.action === "%") {
          try {
            const val = eval(calcExpr) / 100;
            hist.textContent = calcExpr + " %";
            calcExpr = String(val);
            disp.value = calcExpr;
          } catch { disp.value = "Error"; calcExpr = ""; }
          return;
        }

        if (b.type === "equals") {
          try {
            const result = Function('"use strict"; return (' + calcExpr + ')')();
            hist.textContent = calcExpr + " =";
            calcExpr = String(parseFloat(result.toFixed(10)));
            disp.value = calcExpr;
          } catch {
            disp.value = "Error";
            calcExpr = "";
          }
          return;
        }

        // Operator
        const lastChar = calcExpr.slice(-1);
        if (["+","-","*","/"].includes(lastChar)) {
          calcExpr = calcExpr.slice(0, -1);
        }
        calcExpr += b.action;
        disp.value = calcExpr;
      };

      grid.appendChild(btn);
    });
  });
})();