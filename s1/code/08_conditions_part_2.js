// درس 8: Conditions - Part 2

// در شرط‌ها می‌توانیم چند مقایسه را با logical operatorها ترکیب کنیم.

// &&
// وقتی از && استفاده می‌کنیم، هر دو شرط باید true باشند.
let playerLevel = 12;
let hasKey = true;

if (playerLevel >= 10 && hasKey) {
  console.log("You can enter the castle");
} else {
  console.log("You cannot enter the castle");
}

// ||
// وقتی از || استفاده می‌کنیم، اگر یکی از شرط‌ها true باشد کافی است.
let playerMoney = 5000;
playerLevel = 8;

if (playerMoney >= 4000 || playerLevel >= 20) {
  console.log("You can buy the car");
} else {
  console.log("You cannot buy the car");
}

// !
// ! مقدار true و false را برعکس می‌کند.
let isBanned = false;

if (!isBanned) {
  console.log("You can play");
} else {
  console.log("You cannot play");
}

// Example
let enemyHealth = 0;
let enemyIsNear = true;

if (enemyHealth > 0 && enemyIsNear) {
  console.log("Attack the enemy");
} else if (enemyHealth === 0 || !enemyIsNear) {
  console.log("Mission finished");
} else {
  console.log("Wait");
}
