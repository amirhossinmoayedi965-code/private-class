//01
let numbers = [
  42, 7, 91, 15, 63, 28, 4, 76, 33, 58, 12, 99, 21, 67, 38, 5, 84, 49, 73, 30,
];

let result = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 10) result.push(numbers[i]);
}
console.log(result);

//02
let number = [
  42, 7, 91, 15, 63, 28, 4, 76, 33, 58, 12, 99, 21, 67, 38, 5, 84, 49, 73, 30,
];
let x = [];

for (let b = 0; b < number.length; b++) {
  x.push(number[x] * 2);
}
console.log(x);

//03
const m = [
  42, 7, 91, 15, 63, 28, 4, 76, 33, 58, 12, 99, 21, 67, 38, 5, 84, 49, 73, 30,
];
const o = [];
for (let q = 0; q < m.length; q++) {
  let s = m[q] / 2;
  m.push(s);
}
console.log(o);
