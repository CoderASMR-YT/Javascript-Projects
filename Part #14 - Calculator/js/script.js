const currDisplay = document.querySelector(".curr-display"),
  prevDisplay = document.querySelector(".prev-display"),
  buttons = document.querySelectorAll(".button"),
  operator = document.querySelectorAll(".operator"),
  clear = document.querySelector(".clear"),
  del = document.querySelector(".del"),
  equal = document.querySelector(".equal");

let operation;

const getNumber = (num) => {
  currDisplay.innerText += num;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const keyValue = e.target.innerText;
    getNumber(keyValue);
  });
});

const getOperator = (operator) => {
  if (currDisplay.innerText === "") return;
  operation = operator;
  currDisplay.innerText += operator;
  prevDisplay.innerText = currDisplay.innerText;
  currDisplay.innerText = "";
};

operator.forEach((button) => {
  button.addEventListener("click", (e) => {
    const keyValue = e.target.innerText;
    getOperator(keyValue);
  });
});

const compute = () => {
  let result;
  const previousValue = parseFloat(prevDisplay.innerText);
  const currentValue = parseFloat(currDisplay.innerText);

  if (isNaN(previousValue) || isNaN(currentValue)) return;
  switch (operation) {
    case "+":
      result = previousValue + currentValue;
      break;
    case "-":
      result = previousValue - currentValue;
      break;
    case "*":
      result = previousValue * currentValue;
      break;
    case "/":
      result = previousValue / currentValue;
      break;
    case "%":
      result = previousValue % currentValue;
      break;
    default:
      return;
  }
  currDisplay.innerText = result;
};

clear.addEventListener("click", () => {
  currDisplay.innerText = "";
  prevDisplay.innerText = "";
});

del.addEventListener("click", () => {
  currDisplay.innerText = currDisplay.innerText.slice(0, -1);
});

equal.addEventListener("click", () => {
  compute();
  prevDisplay.innerText = "";
});
