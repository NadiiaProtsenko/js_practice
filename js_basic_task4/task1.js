const numbers = [5, -4, 0, 6, 7, -1, 0, 0];

let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

for (let i = 0; i < numbers.length; i++) {
    let currentNumber = numbers[i];

    if (currentNumber > 0) {
        positiveCount++;
    } else if (currentNumber < 0) {
        negativeCount++;
    } else {
        zeroCount++;
    }
}

console.log("Positive numbers:", positiveCount);
console.log("Negative numbers:", negativeCount);
console.log("Zeros:", zeroCount);