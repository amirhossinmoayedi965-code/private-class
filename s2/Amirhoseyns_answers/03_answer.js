//1
const Amir = [1, 2, 3, 445, 12, 23, 34, 45, 46];
const Moayedi = [];

for (let i = 0; i < Amir.length; i++) {
    Moayedi.push(Amir[i] * 2);
}
console.log(Moayedi);

//2
function testNumber(number) {
    if (number >= 18 && number <= 20) {
        console.log("عالی")
    }
    else if (number >= 15 && number <= 17) {
        console.log("خوب");
    }
    else if (number >= 10 && number <= 14) {
        console.log("قابل قبول")
    }
    else {
        console.log("نیاز به تلاش بیشتر")
    }
}
testNumber(20)