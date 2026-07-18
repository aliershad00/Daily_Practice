// Program: Sum of Digits

let number = 5837;
let sum = 0;

while (number > 0) {
    let digit = number % 10;
    sum += digit;
    number = Math.floor(number / 10);
}

console.log("Sum of Digits =", sum);