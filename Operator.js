// Program to showcase arithmetic operators in JavaScript

// Declare two numbers
let num1 = 15;
let num2 = 4;

// Perform arithmetic operations
let addition = num1 + num2;          // Addition
let subtraction = num1 - num2;       // Subtraction
let multiplication = num1 * num2;    // Multiplication
let division = num1 / num2;          // Division
let modulus = num1 % num2;           // Modulus (remainder)
let exponentiation = num1 ** num2;   // Exponentiation (num1 raised to the power of num2)

// Display the results
console.log("Arithmetic Operations:");
console.log(`Addition: ${num1} + ${num2} = ${addition}`);
console.log(`Subtraction: ${num1} - ${num2} = ${subtraction}`);
console.log(`Multiplication: ${num1} * ${num2} = ${multiplication}`);
console.log(`Division: ${num1} / ${num2} = ${division}`);
console.log(`Modulus: ${num1} % ${num2} = ${modulus}`);
console.log(`Exponentiation: ${num1} ** ${num2} = ${exponentiation}`);

// Program to showcase assignment, logical, and comparison operators in JavaScript

// Assignment Operators
let a = 10;       // Assignment
let b = 5;        // Assignment

// Using compound assignment operators
a += 2;          // a = a + 2
b *= 3;          // b = b * 3

console.log("After Assignment Operators:");
console.log(`a = ${a}`); // Output: a = 12
console.log(`b = ${b}`); // Output: b = 15

// Comparison Operators
console.log("\nComparison Operators:");
console.log(`a > b: ${a > b}`);          // Greater than
console.log(`a < b: ${a < b}`);          // Less than
console.log(`a >= b: ${a >= b}`);        // Greater than or equal to
console.log(`a <= b: ${a <= b}`);        // Less than or equal to
console.log(`a == b: ${a == b}`);        // Equal to
console.log(`a === b: ${a === b}`);      // Strictly equal to (type and value)
console.log(`a != b: ${a != b}`);        // Not equal to
console.log(`a !== b: ${a !== b}`);      // Strictly not equal to (type and value)

// Logical Operators
let x = true;
let y = false;

console.log("\nLogical Operators:");
console.log(`x && y: ${x && y}`); // Logical AND
console.log(`x || y: ${x || y}`); // Logical OR
console.log(`!x: ${!x}`);          // Logical NOT
