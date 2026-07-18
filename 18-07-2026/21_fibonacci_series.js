// Program: Fibonacci Series

let n = 10;
let first = 0;
let second = 1;

console.log("Fibonacci Series:");

for (let i = 1; i <= n; i++) {
    console.log(first);

    let next = first + second;
    first = second;
    second = next;
}