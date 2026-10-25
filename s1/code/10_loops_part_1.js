// درس 10: For Loop

let list_a = [10, 20, 30, 1, 2, 4, 5, 6];

for (let i of list_a) {
  if (i % 2 === 0) {
    console.log(i, "is divisible by 2");
  } else {
    console.log(i, "is not divisible by 2");
  }
}

// For loop with range and break
for (let b = 1; b < 100; b++) {
  console.log(b);

  if (b % 9 === 0) {
    break;
  }
}

// continue
for (let b = 1; b < 100; b++) {
  if (b % 9 === 0) {
    continue;
  }

  console.log(b);
}
