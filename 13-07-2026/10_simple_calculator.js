// Program: Simple Calculator

let num1 = 15;
let num2 = 5;
let operator = "*";

switch (operator) {
    case "+":
        console.log(`Result = ${num1 + num2}`);
        break;

    case "-":
        console.log(`Result = ${num1 - num2}`);
        break;

    case "*":
        console.log(`Result = ${num1 * num2}`);
        break;

    case "/":
        if (num2 !== 0) {
            console.log(`Result = ${num1 / num2}`);
        } else {
            console.log("Division by zero is not allowed.");
        }
        break;

    default:
        console.log("Invalid Operator");
}