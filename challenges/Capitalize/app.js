/*
Capitalize Challange
instruction:
Take the variable myString and capitalize it.
*/
const userInput = document.querySelector("#text");
const form = document.querySelector("#form");
const result = document.querySelector("#result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = userInput.value;
  let capitalize = "";
  const arr = input.split(" ");
  arr.forEach((item) => {
    item = item.charAt(0).toUpperCase() + item.substring(1) + " ";
    capitalize += item;
  });
  result.innerHTML = capitalize;
  userInput.value = " ";
});
