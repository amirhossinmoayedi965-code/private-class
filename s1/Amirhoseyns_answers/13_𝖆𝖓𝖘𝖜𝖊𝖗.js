let numbers = [12, 45, 78, 23, 56,89, 10, 34, 67, 91,15, 48, 72, 29, 53,86, 19, 41, 65, 97];

function dobleNamber(number){
    return number*2
}
let test= dobleNamber(10);
console.log(test);

let dobleNambers =[];
for(let i=0;i<numbers.length;i++){
    let result = dobleNamber(numbers[i]);
    dobleNambers.push(result);
}
console.log(dobleNambers);