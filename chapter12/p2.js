// Function to calculate the average of numbers in an array
function calculateAverage(...numbers) {
    if (numbers.length === 0) {
        return 0; // Return 0 if no numbers are provided
    }

    const sum = numbers.reduce((acc, num) => acc + num, 0); // Calculate the sum
    return sum / numbers.length; // Calculate and return the average
}

// Example array
const numbersArray = [10, 20, 30, 40, 50];

// Spread the array into the function
const average = calculateAverage(...numbersArray);

console.log(`The average of [${numbersArray.join(", ")}] is: ${average}`);
