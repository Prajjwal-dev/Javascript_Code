//Create a const object in javascript. Can you change it to hold a number later?
// Create a const object
const student = {
    name: "Alice",
    age: 20
};

// Modify the properties of the object (this is allowed)
student.age = 21;
console.log(student);  // Output: { name: "Alice", age: 21 }

// Trying to reassign the object to a number will throw an error
// student = 42;  // This will cause a TypeError: Assignment to constant variable
