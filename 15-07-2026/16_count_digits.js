// Program: Count Digits in a Number

let number = 987654;
let count = 0;

while (number > 0) {
    count++;
    number = Math.floor(number / 10);
}

console.log("Number of Digits =", count);