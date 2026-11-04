const numbers = [42, 7, 85, 19, 63, 28, 91, 54, 3, 76];

const newNumbers = [];

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] > 10 && numbers[i] < 14) {

        newNumbers.push(numbers[i]);

    } else if (numbers[i] === 10 || numbers[i] === 14) {

        console.log("عدد برابر با مرزهای بازه است:", numbers[i]);

    } else {

        console.log("عدد در بازه موردنظر نیست:", numbers[i]);

    }

}

console.log("آرایه جدید:", newNumbers);