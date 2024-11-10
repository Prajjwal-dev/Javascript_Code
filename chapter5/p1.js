const readline = require('readline');

// Create an interface for user input/output in Node.js
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numbers = [];  // Initialize an empty array

// Function to ask for user input
function askQuestion() {
    rl.question("Enter a number to add to the array (or type 'stop' to end): ", (input) => {
        if (input.toLowerCase() === "stop") {
            console.log("Final Array:", numbers);
            rl.close();  // Close the readline interface
        } else {
            let num = Number(input);  // Convert input to a number
            if (!isNaN(num)) {
                numbers.push(num);  // Add number to array
                console.log(`Added ${num} to the array.`);
            } else {
                console.log("Please enter a valid number.");
            }
            askQuestion();  // Ask for input again
        }
    });
}

// Start asking questions
askQuestion();
