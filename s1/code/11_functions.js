// درس 11: Functions
// در این درس فقط روش معمولی تعریف تابع با کلمه function را یاد می‌گیریم.

// تابع بدون پارامتر
function sayHello() {
  console.log("Hello");
}

// تابع با پارامتر
function greet(firstName) {
  console.log("Hello", firstName);
}

// تابع با مقدار برگشتی
function add(number1, number2) {
  let result = number1 + number2;
  return result;
}

// تابع همراه با حلقه
function printNumbers(start, end) {
  for (let number = start; number < end; number++) {
    console.log(number);
  }
}

// تابع با چند پارامتر
function showUser(firstName, lastName, age) {
  console.log("First name is", firstName);
  console.log("Last name is", lastName);
  console.log("Age is", age);
}

// پارامتر با مقدار پیش‌فرض
function greetWithDefault(firstName = "User") {
  console.log("Hello", firstName);
}

sayHello();
greet("Ahmadreza");

let sumNumber = add(12, 54);
console.log("Sum number is", sumNumber);

printNumbers(1, 6);
showUser("Ahmadreza", "Taheri", 20);

greetWithDefault();
greetWithDefault("Ali");
