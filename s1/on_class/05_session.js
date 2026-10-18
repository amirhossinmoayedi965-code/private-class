const aa = "rgdrfgd";

const bb = 124;

const cc = 12.2;

const dd = bb + cc;
console.log(dd);

const Hadi = ["AMIr", 1234, true];
const AMIR = Hadi[1];
console.log(AMIR);
Hadi.push(false);

//-----------------------Comparision---------------------------
console.log(
  "-----------------------------Comparision----------------------------",
);

const a = 20;
const b = 20;

if (a > b) {
  console.log("Hello");
} else if (a < b) {
  console.log("buye");
} else if (a == b) {
  console.log("good");
}

//-----------------------------Logacial Operation----------------------------
console.log("------------------------Logacial Operation----------------------");
// &&  and
// ||  or
const number_1 = 40;
const number_2 = 50;
const number_3 = 20;

if (number_1 < number_2 && number_1 < number_3) {
  console.log("hello");
} else if (number_1 < number_2 || number_1 < number_3) {
  console.log("hello");
}
//-----------------------------For Loop----------------------------
console.log("------------------------For Loop----------------------");

const array_1 = ["ali", "javad", "mehdi", "mobin", "omid"];
// console.log(array_1.length);
for (let i = 0; i <= 4; i++) {
  const element = array_1[i];
  console.log("Hello ", element);
}

console.log("---------------------------------------------------------");

const array_2 = ["ali", "javad", "mehdi", "mobin", "omid"];
for (let B = 0; B < array_2.length; B++) {
  console.log(array_2[B]);
}

console.log("------------------------of array--------------------------");
for (n of array_2) {
  console.log(n);
}
