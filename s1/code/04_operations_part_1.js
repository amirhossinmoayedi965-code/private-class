// درس 4: Operation - Part 1

// Arithmetic Operators
let a = 5;
let b = 9;

let plusResult = a + b;
let minusResult = b - a;
let multiplyResult = a * b;
let divisionResult = b / a;
let powerResult = a ** b;
let remainderResult = b % a;

console.log("-----------------------Arithmetic Operators-----------------------");
console.log("a + b =", plusResult);
console.log("b - a =", minusResult);
console.log("a * b =", multiplyResult);
console.log("b / a =", divisionResult);
console.log("a ** b =", powerResult);
console.log("b % a =", remainderResult);
console.log("------------------------------------------------------------------");

// Assignment Operators
let number1 = 2;
let number2 = 5;

number1 += 1;
number2 -= 10;

console.log("-----------------------Assignment Operators-----------------------");
console.log("number1 is", number1);
console.log("number2 is", number2);
console.log("------------------------------------------------------------------");

// Example
let playerMoney = 5000;
let carPrice = 3000;
let gunPrice = 1200;

let totalCost = carPrice + gunPrice;
let remainingMoney = playerMoney - totalCost;

console.log("-----------------------Example-----------------------");
console.log("Total cost:", totalCost);
console.log("Remaining money:", remainingMoney);
console.log("-----------------------------------------------------");

// Comparison Operators
let varA = 10;
let varB = 20;
let varC = 20;

console.log("-----------------------Comparison Operators-----------------------");
console.log("varA > varB:", varA > varB);
console.log("varA < varB:", varA < varB);
console.log("varA <= varB:", varA <= varB);
console.log("varC <= varB:", varC <= varB);
console.log("varC < varB:", varC < varB);
console.log("varC >= varB:", varC >= varB);
console.log("varA === varB:", varA === varB);
console.log("varB === varC:", varB === varC);
console.log("varB !== varC:", varB !== varC);
console.log("------------------------------------------------------------------");
