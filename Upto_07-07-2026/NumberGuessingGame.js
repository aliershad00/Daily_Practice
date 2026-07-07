// Generate a random number between 1 and 10
const secretNumber = Math.floor(Math.random() * 10) + 1;

// Simulate user input (change this value to test)
let guess = 5;

if (guess === secretNumber) {
    console.log("🎉 Correct! You guessed the number.");
} else {
    console.log(`❌ Wrong! The correct number was ${secretNumber}.`);
}