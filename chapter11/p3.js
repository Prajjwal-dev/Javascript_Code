// Base class: Human
class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method to display information
    displayInfo() {
        return `I am ${this.name}, and I am ${this.age} years old.`;
    }
}

// Derived class: Student
class Student extends Human {
    constructor(name, age, grade) {
        super(name, age); // Call the constructor of the parent class
        this.grade = grade;
    }

    // Overriding the displayInfo method
    displayInfo() {
        return `I am ${this.name}, a student in grade ${this.grade}, and I am ${this.age} years old.`;
    }
}

// Example usage:

// Create an instance of Human
const human = new Human("Alice", 30);
console.log(human.displayInfo()); // Output: I am Alice, and I am 30 years old.

// Create an instance of Student
const student = new Student("Bob", 16, 10);
console.log(student.displayInfo()); // Output: I am Bob, a student in grade 10, and I am 16 years old.
