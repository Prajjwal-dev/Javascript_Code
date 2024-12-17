class ComplexNumber {
    constructor(real, imaginary) {
        this._real = real; // Using underscore to indicate private variables
        this._imaginary = imaginary;
    }

    // Getter for the real part
    get real() {
        return this._real;
    }

    // Setter for the real part
    set real(value) {
        this._real = value;
    }

    // Getter for the imaginary part
    get imaginary() {
        return this._imaginary;
    }

    // Setter for the imaginary part
    set imaginary(value) {
        this._imaginary = value;
    }

    // Method to display the complex number
    display() {
        return `${this.real} + ${this.imaginary}i`;
    }

    // Method to add another complex number
    add(complex) {
        this.real += complex.real;
        this.imaginary += complex.imaginary;
    }
}

// Example usage
const num1 = new ComplexNumber(2, 3); // Create a complex number 2 + 3i
console.log(`Initial: ${num1.display()}`); // Output: 2 + 3i

// Use setters to update the values
num1.real = 5;
num1.imaginary = 7;
console.log(`After update: ${num1.display()}`); // Output: 5 + 7i

// Create another complex number
const num2 = new ComplexNumber(1, 1);

// Add the second complex number to the first
num1.add(num2); 
console.log(`After addition: ${num1.display()}`); // Output: 6 + 8i

// Use getters to retrieve the real and imaginary parts
console.log(`Real part: ${num1.real}`);      // Output: 6
console.log(`Imaginary part: ${num1.imaginary}`); // Output: 8
