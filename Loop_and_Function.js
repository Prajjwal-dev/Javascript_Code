// Function to check if a number is prime
function isPrime(number) {
    if (number <= 1) return false; // Numbers less than or equal to 1 are not prime
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false; // If divisible by any number other than 1 and itself, it's not prime
    }
    return true;
}

// Array of numbers
let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using a for loop to check if each number is prime
console.log("Using for loop:");
for (let i = 0; i < numbers.length; i++) {
    console.log(`${numbers[i]} is ${isPrime(numbers[i]) ? "prime" : "not prime"}`);
}

// Using a while loop to check if each number is prime
console.log("\nUsing while loop:");
let j = 0;
while (j < numbers.length) {
    console.log(`${numbers[j]} is ${isPrime(numbers[j]) ? "prime" : "not prime"}`);
    j++;
}

// Using a do-while loop to check if each number is prime
console.log("\nUsing do-while loop:");
let k = 0;
do {
    console.log(`${numbers[k]} is ${isPrime(numbers[k]) ? "prime" : "not prime"}`);
    k++;
} while (k < numbers.length);

// Using forEach to check if each number is prime
console.log("\nUsing forEach loop:");
numbers.forEach((number) => {
    console.log(`${number} is ${isPrime(number) ? "prime" : "not prime"}`);
});
