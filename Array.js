// 1. Creating arrays
const numbers = [1, 2, 3, 4, 5];              // Array of numbers
const fruits = ["Apple", "Banana", "Cherry"];  // Array of strings
const mixed = [42, "hello", true, { id: 1 }];  // Mixed array (numbers, strings, objects)

// 2. Accessing array elements
console.log("First fruit:", fruits[0]);
console.log("Last fruit:", fruits[fruits.length - 1]);

// 3. Modifying elements
fruits[1] = "Blueberry";    // Change "Banana" to "Blueberry"
console.log("Updated fruits:", fruits);

// 4. Adding and removing elements
fruits.push("Orange");      // Add to end
fruits.unshift("Strawberry");  // Add to start
console.log("Fruits after adding:", fruits);

fruits.pop();               // Remove from end
fruits.shift();             // Remove from start
console.log("Fruits after removing:", fruits);

// 5. Checking array length
console.log("Number of fruits:", fruits.length);

// 6. Finding an element
console.log("Index of Cherry:", fruits.indexOf("Cherry"));

// 7. Array methods
const doubledNumbers = numbers.map(num => num * 2); // map - create a new array with each element doubled
console.log("Doubled Numbers:", doubledNumbers);

const evenNumbers = numbers.filter(num => num % 2 === 0); // filter - create a new array with even numbers
console.log("Even Numbers:", evenNumbers);

const sum = numbers.reduce((acc, num) => acc + num, 0);   // reduce - sum all numbers in the array
console.log("Sum of Numbers:", sum);

const containsThree = numbers.includes(3);                // includes - check if 3 is in the array
console.log("Contains 3:", containsThree);

// 8. Iterating over an array
console.log("For Loop:");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

console.log("For...of Loop:");
for (let fruit of fruits) {
  console.log(fruit);
}

console.log("ForEach Loop:");
fruits.forEach(fruit => console.log(fruit));

// 9. Concatenating arrays
const moreFruits = ["Pineapple", "Mango"];
const allFruits = fruits.concat(moreFruits);
console.log("All Fruits:", allFruits);

// 10. Slicing and Splicing
const slicedFruits = allFruits.slice(1, 3); // slice - create a new array from index 1 to 3 (not including 3)
console.log("Sliced Fruits (index 1 to 3):", slicedFruits);

const splicedFruits = [...allFruits];       // Copy array to avoid mutating the original
splicedFruits.splice(2, 1, "Peach", "Grape"); // splice - remove 1 element at index 2, add "Peach" and "Grape"
console.log("Spliced Fruits:", splicedFruits);

// 11. Sorting an array
const unsortedNumbers = [34, 10, 3, 5, 7];
const sortedNumbers = [...unsortedNumbers].sort((a, b) => a - b);  // sort in ascending order
console.log("Sorted Numbers:", sortedNumbers);

// 12. Joining an array into a string
const fruitString = fruits.join(", "); // Join fruits array into a comma-separated string
console.log("Fruit String:", fruitString);

// 13. Using Array.from and Array.fill
const filledArray = Array.from({ length: 5 }, (_, i) => i + 1); // Create array [1, 2, 3, 4, 5] with Array.from
const zeroArray = new Array(3).fill(0);  // Create array [0, 0, 0] with Array.fill
console.log("Filled Array:", filledArray);
console.log("Zero Array:", zeroArray);

// 14. Flattening nested arrays (ES6+)
const nestedArray = [1, [2, [3, [4]], 5]];
const flatArray = nestedArray.flat(2);  // Use .flat() to flatten 2 levels deep
console.log("Flat Array:", flatArray);

// 15. Spread operator with arrays
const spreadArray = [...numbers, ...fruits]; // Combine numbers and fruits arrays
console.log("Spread Array:", spreadArray);

// 16. Copying arrays
const numbersCopy = [...numbers];           // Shallow copy using spread operator
console.log("Numbers Copy:", numbersCopy);

// Summary
console.log("Final arrays:");
console.log("Numbers:", numbers);
console.log("Fruits:", fruits);
console.log("Mixed Array:", mixed);
