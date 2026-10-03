// Array 0.1
let names = ["Ali", "Reza", "Sara"];

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

let t = ["Apple", "Banana"];
//NOTE: ایمجا غلطه پوش پرانتز میخواد
t.push = "Orange";
console.log(t);

//NOTE:  اسم وریبل جدید باید بزاری قبلا این رو معرفی کردی
let t = ["Apple", "Banana", "Orange"];
t.pop();
console.log(t);

let n = ["Ali", "Reza", "Sara"];

console.log(n.length);

// ---------------------------------

// Condition 0.2
let ege = 20;
if (ege >= 18) {
  console.log("مجاز است");
}

let s = 18;
if (s >= 18) {
  console.log("مجاز است");
} else {
  console.log("مجاز نیست");
}

let score = 17;

if (score >= 18) {
  console.log("عالی");
} else if (score >= 12) {
  console.log("قبول");
} else {
  console.log("مردود");
}
