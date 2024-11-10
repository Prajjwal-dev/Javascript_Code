const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askAge() {
  // Prompt the user for their age
  rl.question("Please enter your age: ", function(age) {
    // Convert the input to a number
    age = Number(age);

    // Check if the age is greater than 4
    if (age > 4) {
      console.log("You will be redirected to Google.");
      console.log("Redirecting to: https://www.google.com");
    } else {
      console.log("You are too young to be redirected to Google.");
    }

    rl.close();  // Close the interface
  });
}

// Start the process
askAge();
