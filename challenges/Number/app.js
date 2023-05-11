const num1 = document.querySelectorAll(".num1");
const num2 = document.querySelectorAll(".num2");
const sum = document.querySelector(".sum");
const difference = document.querySelector(".difference");
const product = document.querySelector(".product");
const quotient = document.querySelector(".quotient");
const remainder = document.querySelector(".remainder");

const randomNumberOne = Math.floor(Math.random() * 100 + 1);
const randomNumberTwo = Math.floor(Math.random() * 50 + 1);

num1.forEach((item) => {
  item.innerHTML = randomNumberOne;
});
num2.forEach((item) => {
  item.innerHTML = randomNumberTwo;
});

sum.innerHTML = randomNumberOne + randomNumberTwo;
difference.innerHTML = randomNumberOne - randomNumberTwo;
product.innerHTML = randomNumberOne * randomNumberTwo;
quotient.innerHTML = (randomNumberOne / randomNumberTwo).toFixed(2);
remainder.innerHTML = randomNumberOne % randomNumberTwo;
