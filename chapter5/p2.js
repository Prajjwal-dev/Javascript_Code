const prompt = require('prompt-sync')();

let numbers = [];

while (true) {
    let input = prompt("Enter a number to add to the array (or type '0' to stop): ");
    let num = Number(input);

    if (num === 0) {
        console.log("Final Array:", numbers);
        break;
    } else if (!isNaN(num)) {
        numbers.push(num);
        console.log(`Added ${num} to the array.`);
    } else {
        console.log("Please enter a valid number.");
    }
}
