class ComplexNumber {
    // Constructor to initialize real and imaginary parts
    constructor(real, imaginary) {
        this.real = real;           // Real part
        this.imaginary = imaginary; // Imaginary part
    }

    // Method to display the complex number
    display() {
        return `${this.real} + ${this.imaginary}i`;
    }

    // Method to add two complex numbers
    add(otherComplex) {
        const realPart = this.real + otherComplex.real;
        const imaginaryPart = this.imaginary + otherComplex.imaginary;
        return new ComplexNumber(realPart, imaginaryPart);
    }

    // Method to subtract two complex numbers
    subtract(otherComplex) {
        const realPart = this.real - otherComplex.real;
        const imaginaryPart = this.imaginary - otherComplex.imaginary;
        return new ComplexNumber(realPart, imaginaryPart);
    }

    // Method to multiply two complex numbers
    multiply(otherComplex) {
        const realPart = (this.real * otherComplex.real) - (this.imaginary * otherComplex.imaginary);
        const imaginaryPart = (this.real * otherComplex.imaginary) + (this.imaginary * otherComplex.real);
        return new ComplexNumber(realPart, imaginaryPart);
    }

    // Method to divide two complex numbers
    divide(otherComplex) {
        const denominator = (otherComplex.real ** 2) + (otherComplex.imaginary ** 2);
        const realPart = ((this.real * otherComplex.real) + (this.imaginary * otherComplex.imaginary)) / denominator;
        const imaginaryPart = ((this.imaginary * otherComplex.real) - (this.real * otherComplex.imaginary)) / denominator;
        return new ComplexNumber(realPart, imaginaryPart);
    }
}

// Example usage:

const complex1 = new ComplexNumber(3, 2); // 3 + 2i
const complex2 = new ComplexNumber(1, 7); // 1 + 7i

console.log("Complex 1:", complex1.display()); // 3 + 2i
console.log("Complex 2:", complex2.display()); // 1 + 7i

// Adding complex numbers
const sum = complex1.add(complex2);
console.log("Sum:", sum.display()); // 4 + 9i

// Subtracting complex numbers
const difference = complex1.subtract(complex2);
console.log("Difference:", difference.display()); // 2 - 5i

// Multiplying complex numbers
const product = complex1.multiply(complex2);
console.log("Product:", product.display()); // -11 + 23i

// Dividing complex numbers
const quotient = complex1.divide(complex2);
console.log("Quotient:", quotient.display()); // 0.47058823529411764 + 0.4117647058823529i
