const result = document.querySelector(".result-container");
const subResult = document.querySelector(".calculations-container");

// Basic functions

function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return +(num1 / num2).toFixed(2);
}
