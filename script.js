"use strict";
const toggler = document.querySelector(".header__themes--toggle");
const themeOne = document.querySelector(".one");
const themeTwo = document.querySelector(".two");
const themeThree = document.querySelector(".three");
const numberBtn = document.querySelectorAll(".number");
const displayScreen = document.querySelector(".calc-screen");
const operatorBtn = document.querySelectorAll(".operator");
const equalBtn = document.querySelector(".red__btn");
const resetBtn = document.getElementById("clear");
let colorTheme;

//
////////////////////////
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

//
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
//////////////////////
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

const updateStoredNumber = function (number) {
  storedNumbers = [];
  storedNumbers.push(number);
};

const displayOperation = function (number) {
  displayScreen.textContent = `${convertStr(number)}`;
};

const operate = function (operator, n1, n2) {
  if (operator === "+") {
    const total = sum(n1, n2);
    displayOperation(total);
    return total;
  } else if (operator === "-") {
    const total = subtract(n1, n2);
    displayOperation(total);
    return total;
  } else if (operator === "x") {
    const total = multiply(n1, n2);
    displayOperation(total);
    return total;
  } else if (operator === "/") {
    const total = divide(n1, n2);
    displayOperation(total);
    return total;
  }
};

function convertStr(n) {
  return n.toString().replace(".", ",");
}

const parsedNumber = function (array) {
  return parseFloat(array.join(""), 10);
};

//
//
//Printing number in calc's display

let arr = [0];

let storedNumbers = [];

let mathOperation = "";

numberBtn.forEach(btn =>
  btn.addEventListener("click", e => {
    arr.push(e.target.textContent);
    const int = parsedNumber(arr);
    displayScreen.textContent = `${convertStr(int)}`;
  })
);

operatorBtn.forEach(btn =>
  btn.addEventListener("click", e => {
    if (arr.some(element => typeof element === "string")) {
      storedNumbers.push(parsedNumber(arr));
      arr = [];
      console.log(`Stored number: ${storedNumbers}`);
    }

    //
    //With this if statement the first complete number is stored for a math operation
    if (!storedNumbers.length) {
      storedNumbers.push(parsedNumber(arr));
      arr = [0];
      console.log(`Stored number: ${storedNumbers}`);
    }

    //Automatically calculate the math operation When the user keeps doing calculations without pressing the equal sign:
    if (storedNumbers.length === 2) {
      const result = operate(mathOperation, ...storedNumbers);
      storedNumbers = [];
      storedNumbers.push(result);
    }

    mathOperation = e.target.textContent;
    console.log(mathOperation);
  })
);

equalBtn.addEventListener("click", function () {
  //Need to fix bug in case user clicks multiple times equalbtn
  storedNumbers.push(parsedNumber(arr));
  arr = [0];
  const result = operate(mathOperation, ...storedNumbers);
  mathOperation = "";
  storedNumbers = [];
  storedNumbers.push(result);
  console.log(`Stored number: ${storedNumbers}`);
});

resetBtn.addEventListener("click", function () {
  storedNumbers = [];
  mathOperation = "";
  arr = [0];
  displayScreen.textContent = `0`;
});
