// درس 5: input

// برای گرفتن مقدار از کاربر در Node.js می‌توانیم از readline استفاده کنیم.
// مقدار question همیشه به صورت string ذخیره می‌شود.

const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your name: ", (playerName) => {
  console.log("Hello", playerName);
  console.log(typeof playerName);

  // اگر عدد بخواهیم، باید مقدار ورودی را تبدیل کنیم.
  rl.question("Enter your age: ", (ageInput) => {
    let age = Number(ageInput);

    console.log("Your age is", age);
    console.log(typeof age);

    // مثال ساده
    rl.question("Enter first number: ", (number1Input) => {
      rl.question("Enter second number: ", (number2Input) => {
        let number1 = Number(number1Input);
        let number2 = Number(number2Input);

        let sumResult = number1 + number2;

        console.log("Sum is", sumResult);
        rl.close();
      });
    });
  });
});
