// Program: Swap Two Numbers Without Using a Third Variable

let a = 10;
let b = 20;

console.log("Before Swapping:");
console.log("a =", a);
console.log("b =", b);

a = a + b;
b = a - b;
a = a - b;

console.log("\nAfter Swapping:");
console.log("a =", a);
console.log("b =", b);