const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const secretNumber = Math.floor(Math.random() * 10) + 1;
let attempt = 1;

function guessNumber() {
  rl.question(`Enter your ${attempt} guess (1-10): `, (input) => {
    const guess = Number(input);

    if (guess === secretNumber) {
      console.log(`🎉 Correct! You guessed it on the ${attempt} attempt.`);
      rl.close();
    } else {
      console.log(`❌ ${attempt} guess is wrong.`);
      attempt++;
      guessNumber(); // Ask again
    }
  });
}

guessNumber();