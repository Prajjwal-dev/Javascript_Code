const n = 5; // Example number for which we want to calculate the factorial

// Create an array of first 'n' natural numbers (1 to n)
const numbers = Array.from({ length: n }, (_, i) => i + 1);

// Use reduce to calculate the factorial
const factorial = numbers.reduce((acc, curr) => acc * curr, 1);

console.log(`Factorial of ${n} is: ${factorial}`);
