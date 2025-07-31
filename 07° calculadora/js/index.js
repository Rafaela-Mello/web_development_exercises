let display = document.getElementById("display");
let expressao = "";

function updateDisplay() {
  display.textContent = expressao || "0";
}

function appendNumber(num) {
  expressao += num;
  updateDisplay();
}

function appendOperator(op) {
  const lastChar = expressao.charAt(expressao.length - 1);
  if ("+-*/".includes(lastChar)) {
    expressao = expressao.slice(0, -1);
  }
  expressao += op;
  updateDisplay();
}

function appendComma() {
  expressao += ".";
  updateDisplay();
}

function clearEntry() {
  expressao = expressao.slice(0, -1);
  updateDisplay();
}

function clearAll() {
  expressao = "";
  updateDisplay();
}

function backspace() {
  expressao = expressao.slice(0, -1);
  updateDisplay();
}

function toggleSign() {
  try {
    if (expressao) {
      const resultado = eval(expressao);
      expressao = (-resultado).toString();
      updateDisplay();
    }
  } catch {
    display.textContent = "Erro";
  }
}

function calculate() {
  try {
    const resultado = eval(expressao);
    expressao = resultado.toString();
    updateDisplay();
  } catch {
    display.textContent = "Erro";
    expressao = "";
  }
}
