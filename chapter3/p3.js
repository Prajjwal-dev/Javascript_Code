const readline = require('readline');

// Create an interface to read input from the command line
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let correctNumber = 5; // Correct number
let userInput;

// Function to prompt user for input and check if it is correct
function askQuestion() {
    rl.question("Enter the correct number: ", (userInput) => {
        // Convert input to an integer
        userInput = parseInt(userInput, 10);
        
        if (userInput !== correctNumber) {
            console.log("Try again");
            askQuestion(); // Recursively ask the question until the correct number is entered
        } else {
            console.log("Correct number entered!");
            rl.close(); // Close the interface once the correct number is entered
        }
    });
}

askQuestion(); // Start the question prompt
