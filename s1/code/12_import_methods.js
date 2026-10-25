// درس 12: نصب و استفاده از mathjs

// مرحله 1: ترمینال را در پوشه پروژه باز کنید.

// مرحله 2: یک پروژه Node.js بسازید.
// npm init -y

// مرحله 3: امکان استفاده از import را فعال کنید.
// npm pkg set type=module

// مرحله 4: پکیج mathjs را نصب کنید.
// npm install mathjs

// مرحله 5: موارد موردنیاز را از mathjs ایمپورت و استفاده کنید.
import { add, subtract, multiply, divide, sqrt, pow } from "mathjs";

console.log(add(10, 5));       // 15
console.log(subtract(10, 5));  // 5
console.log(multiply(10, 5));  // 50
console.log(divide(10, 5));    // 2
console.log(sqrt(25));         // 5
console.log(pow(2, 3));        // 8
