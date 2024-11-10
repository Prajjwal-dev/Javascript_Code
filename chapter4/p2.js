let text = "Hello, welcome to JavaScript programming!";

// Using includes()
console.log("Using includes:");
console.log(text.includes("JavaScript"));    // true
console.log(text.includes("Python"));        // false
console.log(text.includes("welcome", 10));   // false (starts searching after "welcome")
console.log(text.includes("welcome", 5));    // true  (starts searching before "welcome")

// Using startsWith()
console.log("\nUsing startsWith:");
console.log(text.startsWith("Hello"));       // true
console.log(text.startsWith("welcome"));     // false
console.log(text.startsWith("welcome", 7));  // true (starts searching from position 7)

// Using endsWith()
console.log("\nUsing endsWith:");
console.log(text.endsWith("programming!"));  // true
console.log(text.endsWith("JavaScript"));    // false
console.log(text.endsWith("JavaScript", 25));// true (considers only the first 25 characters)
