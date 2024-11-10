const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 50, 60]; // Example array

// Use the filter method to get numbers divisible by 10
const divisibleBy10 = numbers.filter(num => num % 10 === 0);

console.log("Numbers divisible by 10:", divisibleBy10);
