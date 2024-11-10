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

    // Check if the user can drive
    if (age >= 18) {
      console.log("You can drive.");
    } else {
      console.log("You cannot drive.");
    }

    // Ask if they want to enter the age again
    rl.question("Would you like to enter your age again? (yes/no): ", function(answer) {
      if (answer.toLowerCase() === 'yes') {
        askAge(); // Call the function again if the user wants to try again
      } else {
        console.log("Goodbye!");
        rl.close(); // Close the interface if the user doesn't want to try again
      }
    });
  });
}

// Start the process
askAge();
