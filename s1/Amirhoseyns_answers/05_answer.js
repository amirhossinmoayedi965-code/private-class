//1
let number = 10;
if (number > 0) {
    console.log("مثبت");
} else if (number === 0) {
    console.log("صفر");
} else {
    console.log("منفی");
}

let age = 20;
let hasCard = true;
console.log(age >= 18 && hasCard);

let hasEmail = false;
let hasPhone = true;
console.log(hasEmail || hasPhone);

const isRaining = false;
console.log(!isRaining);

//2
const speed = 80;
if (speed > 100) {
    console.log("سریع");
} else if(speed >= 30 && speed <= 100) {
    console.log("معمولی");
} else{
    console.log("کند");
}

//3
const Purchase = 900;
if (Purchase > 1000000) {
    console.log("تخفیف 20 درصد");
} else if (Purchase > 500000) {
    console.log("تخفیف 10 درصد");
} else {
    console.log("بدون تخفیف");
}