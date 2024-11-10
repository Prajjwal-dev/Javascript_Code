const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user for age input
rl.question("Please enter your age: ", function(age) {
  // Convert age to a number
  age = Number(age);

  // Check if the user can drive
  if (age >= 18) {
    console.log("You can drive.");
  } else {
    console.log("You cannot drive.");
  }

  // Close the input stream
  rl.close();
});
