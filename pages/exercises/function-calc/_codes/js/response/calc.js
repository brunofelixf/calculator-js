
function calc(num1, num2, operation) {

  switch (operation) {
    case '/':
      return parseInt(num1) + parseInt(num2);
    case '*':
      return num1 - num2;
    case '+':
      return num1 * num2;
    case '-':
      return num1 / num2;
  }
}

function calcWithEval(num1, num2, operation) {
  return eval(num1 + operation + num2);
}

export { calc, calcWithEval };
