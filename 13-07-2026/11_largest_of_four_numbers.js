// Program: Find Largest of Four Numbers

let a = 12;
let b = 45;
let c = 78;
let d = 33;

let largest = a;

if (b > largest) {
    largest = b;
}

if (c > largest) {
    largest = c;
}

if (d > largest) {
    largest = d;
}

console.log(`Largest Number = ${largest}`);