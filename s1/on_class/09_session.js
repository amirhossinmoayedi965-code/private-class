let a = 10;
if (a > 5 || a < 9) {
  a = a - 1;
} else if (a > 2) {
  a = a - 0.5;
} else {
  a = a + 1;
}

console.log(a);
// -------------------------------------------
function jam_adad(a, s) {
  const y = a + s;
  return y;
}

const m = jam_adad(2, 3);
console.log(m);

// -------------------------------------------

const mo = [1, 2, 342, 34, 45, 23];
for (let i = 0; i < mo.length; i++) {
  const c = mo[i];
  console.log(c);
}
console.log(c);
