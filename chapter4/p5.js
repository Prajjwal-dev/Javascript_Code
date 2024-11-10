let str = "Hello, World!";
console.log("Original String:", str);

// Attempt to change the 4th character (index 3) to "X"
// This won't work as strings are immutable
str[3] = "X";
console.log("After attempting direct modification:", str);  // Output: Hello, World!

// Correct approach: create a new string with the modified character
let modifiedStr = str.slice(0, 3) + "X" + str.slice(4);
console.log("Modified String:", modifiedStr); // Output: HelXo, World!
