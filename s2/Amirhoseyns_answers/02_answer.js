const a = [12, 23, 3, 34, 45, 5, 67, 78, 8, 9];
const Amir = [];

for (let Hadi = 0; Hadi < a.length; Hadi++) {
    Amir.push(a[Hadi] * 2);
}
console.log(Amir);

//2
const numbers = [5, 12, 8, 20, 3, 15, 7, 10];
const result = [];

for (let i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * 3);
}
console.log(result);

//3

function checknumber(num) {
    if (num < 0 || num > 100) {
        return "Invalid Num"
    }
    else if (num >= 90) {
        return "عالی"
    }
    else if (num >= 70) {
        return "خوب"
    }
    else if (num >= 50) {
        return "معمولی"
    }
    else {
        return "مردود"
    }
}
console.log(checknumber(100))