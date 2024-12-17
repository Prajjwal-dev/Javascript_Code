// Global Scope
const globalVariable = "I'm a global variable!";

console.log(globalVariable); // Accessible anywhere in the program

// IIFE (Immediately Invoked Function Expression)
(function() {
    console.log("This is an IIFE - executed immediately!");
})();

// Function to demonstrate Local Scope, Hoisting, and Block Scope
function scopeDemo() {
    console.log("\n--- Scope Demonstration ---");

    // Local Scope
    let localVariable = "I'm a local variable!";

    // Hoisting with `var` (Declaration is hoisted, but not initialization)
    console.log("Hoisted var (before initialization):", hoistedVar); // undefined
    var hoistedVar = "I'm hoisted with var!";

    // Hoisting with `let` (Throws error if accessed before declaration)
    // console.log("Hoisted let (before declaration):", hoistedLet); // Uncomment to see error
    let hoistedLet = "I'm hoisted with let, but not accessible before declaration!";

    console.log(localVariable);
    console.log(hoistedVar);
    console.log(hoistedLet);

    // Block Scope with `let` and `const`
    if (true) {
        let blockScopedLet = "I'm block-scoped (let)!";
        const blockScopedConst = "I'm block-scoped (const)!";
        console.log(blockScopedLet);
        console.log(blockScopedConst);
    }

    // console.log(blockScopedLet); // Uncomment to see error
    // console.log(blockScopedConst); // Uncomment to see error
}

scopeDemo();

// Destructuring and Spread Syntax
console.log("\n--- Destructuring and Spread Syntax ---");

// Array Destructuring
const array = [1, 2, 3, 4, 5];
const [first, second, ...rest] = array; // Destructure first two elements and use spread syntax for the rest
console.log("First:", first);
console.log("Second:", second);
console.log("Rest of the array:", rest);

// Object Destructuring
const person = {
    name: "John",
    age: 30,
    city: "New York"
};
const { name, age, city } = person; // Destructure object properties
console.log(`Name: ${name}, Age: ${age}, City: ${city}`);

// Spread Syntax for Arrays
const newArray = [...array, 6, 7, 8];
console.log("Spread Array:", newArray);

// Spread Syntax for Objects
const newPerson = { ...person, country: "USA" };
console.log("Spread Object:", newPerson);

// Demonstrate hoisting with `var` and `let`
console.log("\n--- Hoisting Differences ---");

console.log("Var hoisting: ", hoistedVarExample); // undefined (hoisted declaration)
var hoistedVarExample = "I'm hoisted and initialized!";

// Uncomment to see the error
// console.log("Let hoisting: ", hoistedLetExample); // ReferenceError (not hoisted initialization)
let hoistedLetExample = "I'm block-scoped and not hoisted like var!";

// Combining all concepts in a single use case
console.log("\n--- Combined Example ---");

(function() {
    console.log("Global Variable from IIFE:", globalVariable);

    const settings = {
        theme: "dark",
        layout: "grid",
        language: "en"
    };

    const additionalSettings = {
        language: "fr",
        showNotifications: true
    };

    // Using Spread and Destructuring
    const updatedSettings = { ...settings, ...additionalSettings };
    console.log("Updated Settings:", updatedSettings);

    // Block Scope
    if (updatedSettings.theme === "dark") {
        let themeMessage = "Dark mode is enabled!";
        console.log(themeMessage);
    }

    // console.log(themeMessage); // Uncomment to see error: Block-scoped variable

    // Hoisting Demonstration
    console.log("Hoisted var inside IIFE:", hoistedInsideIIFE); // undefined
    var hoistedInsideIIFE = "I'm hoisted inside IIFE!";
})();
