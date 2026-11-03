function fuTest(test) {
    if (test > 10) {
        test = test - 10
        return test
    }
    else {
        return test;
    };
}

const a = fuTest(9)
console.log(a);
//2
function New(a, b) {
    if (b > a) {
        const g = b - a
        return g
    }
    else {
        const i = a - b
        return i
    }
}
const l = New(100, 80);
console.log(l);

//3
let v = [40, 180, 30, 400]
const m = v[1]
v.push(100)
console.log(v)
