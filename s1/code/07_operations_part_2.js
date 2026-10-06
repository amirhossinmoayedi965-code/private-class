// درس 7: Operation - Part 2

// Comparison Operators
// این عملگرها دو مقدار را مقایسه می‌کنند و نتیجه آن‌ها true یا false است.

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

// Example
let playerHealth = 80;
let enemyHealth = 50;
let requiredLevel = 10;
let playerLevel = 10;

console.log("Player is stronger:", playerHealth > enemyHealth);
console.log("Enemy is stronger:", enemyHealth > playerHealth);
console.log("Player can enter:", playerLevel >= requiredLevel);
console.log("Player level is exactly 10:", playerLevel === 10);
console.log("Player health is not zero:", playerHealth !== 0);
