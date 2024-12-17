// Base class: Human (Abstraction and Encapsulation)
class Human {
    constructor(name, age) {
        this.name = name; // Public property
        this._age = age;  // Encapsulated property (denoted by `_`)
    }

    // Getter for age (Encapsulation)
    get age() {
        return this._age;
    }

    // Setter for age with validation (Encapsulation)
    set age(value) {
        if (value < 0) {
            console.error("Age cannot be negative!");
        } else {
            this._age = value;
        }
    }

    // Method to display details
    displayDetails() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
    
    // Static method (shared among all instances)
    static species() {
        return "Homo sapiens";
    }
}

// Derived class: Student (Inheritance and Polymorphism)
class Student extends Human {
    constructor(name, age, grade) {
        super(name, age); // Call parent class constructor
        this.grade = grade; // Additional property specific to Student
    }

    // Overriding the displayDetails method (Polymorphism)
    displayDetails() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
    }
}

// Derived class: Teacher (Inheritance and Polymorphism)
class Teacher extends Human {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }

    // Overriding the displayDetails method (Polymorphism)
    displayDetails() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Subject: ${this.subject}`);
    }
}

// Utility class: ComplexNumber (Encapsulation and Static Methods)
class ComplexNumber {
    constructor(real, imaginary) {
        this._real = real;
        this._imaginary = imaginary;
    }

    // Getter and setter for real part
    get real() {
        return this._real;
    }

    set real(value) {
        this._real = value;
    }

    // Getter and setter for imaginary part
    get imaginary() {
        return this._imaginary;
    }

    set imaginary(value) {
        this._imaginary = value;
    }

    // Method to add another complex number
    add(complex) {
        return new ComplexNumber(this.real + complex.real, this.imaginary + complex.imaginary);
    }

    // Static method to display a complex number
    static display(complex) {
        return `${complex.real} + ${complex.imaginary}i`;
    }
}

// Example usage of classes and objects

// Create instances of Human, Student, and Teacher
const human = new Human("John Doe", 45);
human.displayDetails(); // Output: Name: John Doe, Age: 45

const student = new Student("Alice", 20, "A");
student.displayDetails(); // Output: Name: Alice, Age: 20, Grade: A

const teacher = new Teacher("Mr. Smith", 50, "Mathematics");
teacher.displayDetails(); // Output: Name: Mr. Smith, Age: 50, Subject: Mathematics

// Demonstrating static methods
console.log(Human.species()); // Output: Homo sapiens

// Demonstrating encapsulation with validation
human.age = -5; // Output: Age cannot be negative!
human.age = 30;
console.log(human.age); // Output: 30

// Using ComplexNumber class
const num1 = new ComplexNumber(3, 4);
const num2 = new ComplexNumber(1, 2);
const sum = num1.add(num2);

console.log(ComplexNumber.display(sum)); // Output: 4 + 6i

// Check instanceof relationships
console.log(student instanceof Human); // Output: true
console.log(teacher instanceof Human); // Output: true
console.log(student instanceof Teacher); // Output: false
