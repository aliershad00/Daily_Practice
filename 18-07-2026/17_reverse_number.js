// Program: Reverse a Number

let number = 12345;
let reverse = 0;

while (number > 0) {
    let digit = number % 10;
    reverse = reverse * 10 + digit;
    number = Math.floor(number / 10);
}

console.log("Reversed Number =", reverse);