"use strict";
const toggler = document.querySelector(".header__themes--toggle");
const themeOne = document.querySelector(".one");
const themeTwo = document.querySelector(".two");
const themeThree = document.querySelector(".three");
let colorTheme;

function sum(n1, n2) {
  return n1 + n2;
}

function subtract(n1, n2) {
  return n1 - n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}

function divide(n1, n2) {
  return n1 / n2;
}

function operate(operator, n1, n2) {
  if (operator === "+") {
    return sum(n1, n2);
  } else if (operator === "-") {
    return subtract(n1, n2);
  } else if (operator === "*") {
    return multiply(n1, n2);
  } else if (operator === "/") {
    return divide(n1, n2);
  }
}

const changeColorTheme = function () {
  if (colorTheme === 1) {
    toggler.classList.remove("theme-two");
    toggler.classList.remove("theme-three");
    document.body.classList.remove("theme-two");
    document.body.classList.remove("theme-three");
  } else if (colorTheme === 2) {
    toggler.classList.remove("theme-three");
    document.body.classList.remove("theme-three");
    toggler.classList.add("theme-two");
    document.body.classList.add("theme-two");
  } else if (colorTheme === 3) {
    toggler.classList.add("theme-three");
    document.body.classList.add("theme-three");
  }
};

themeOne.addEventListener("click", () => {
  colorTheme = 1;
  changeColorTheme();
});

themeTwo.addEventListener("click", () => {
  colorTheme = 2;
  changeColorTheme();
});

themeThree.addEventListener("click", () => {
  colorTheme = 3;
  changeColorTheme();
});
