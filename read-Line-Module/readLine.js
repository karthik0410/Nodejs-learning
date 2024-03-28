const readLine = require("readline");
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let num1 = Math.floor(Math.random() * 10 + 1);
let num2 = Math.floor(Math.random() * 10 + 1);
let answer = num1 + num2;

rl.question(`What is ${num1} + ${num2}?`, (userInput) => {
  if (userInput.trim() == answer) {
    rl.close();
  } else {
    rl.setPrompt("Invalid response! please try again.");
    rl.prompt();
    rl.on("line", (userInput) => {
      if (userInput.trim() == answer) {
        rl.close();
      } else {
        rl.setPrompt(`Invalid response for ${num1} + ${num2} please try again`);
        rl.prompt();
      }
    });
  }
});
rl.on("close", () => {
  console.log("Correct!");
});
