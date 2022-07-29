"use strict";
const toggler = document.querySelector(".header__themes--toggle");
const themeOne = document.querySelector(".one");
const themeTwo = document.querySelector(".two");
const themeThree = document.querySelector(".three");
const numberBtn = document.querySelectorAll(".number");
const displayScreen = document.querySelector(".calc-screen");
const operatorBtn = document.querySelectorAll(".operator");
let colorTheme;

//
//Color Themes
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

//Eventlisteners to change calc's color theme
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

//
//Math functions
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
    const total = sum(n1, n2);
    displayScreen.textContent = `${convertStr(total)}`;
  } else if (operator === "-") {
    const total = subtract(n1, n2);
    displayScreen.textContent = `${convertStr(total)}`;
  } else if (operator === "x") {
    const total = multiply(n1, n2);
    displayScreen.textContent = `${convertStr(total)}`;
  } else if (operator === "/") {
    const total = divide(n1, n2);
    displayScreen.textContent = `${convertStr(total)}`;
  }
}

function convertStr(n) {
  return n.toString().replace(".", ",");
}

const parsedNumber = function (array) {
  return parseFloat(array.join(""), 10);
};

//
//Printing number in calc's display

let arr = [];
const storedNumbers = [];
let mathOperation = "";

numberBtn.forEach(btn =>
  btn.addEventListener("click", e => {
    let int = e.target.textContent;
    arr.push(int);
    int = parsedNumber(arr);
    displayScreen.textContent = `${convertStr(int)}`;
  })
);

operatorBtn.forEach(btn =>
  btn.addEventListener("click", e => {
    storedNumbers.push(parsedNumber(arr));

    arr = [];

    const str = e.target.textContent;
    mathOperation = str;

    if (storedNumbers.length === 2) {
      operate(mathOperation, ...storedNumbers);
    }
  })
);
