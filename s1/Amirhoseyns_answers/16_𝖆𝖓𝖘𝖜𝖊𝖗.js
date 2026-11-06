const exercise = [3, 23, 12, 34, 45, 6, 4, 5];
const number = [];

for (let b = 0; b < exercise.length; b++) {
    if (exercise[b] > 5)
        number.push(exercise[b] - 5)
}
console.log(number);
