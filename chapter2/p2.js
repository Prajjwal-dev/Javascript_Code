// Function to perform calculations
function calculator(num1, num2, operator) {
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                console.log("Error: Division by zero.");
                return;
            }
            break;
        case '%':
            result = num1 % num2;
            break;
        default:
            console.log("Invalid operator.");
            return;
    }

    console.log(`${num1} ${operator} ${num2} = ${result}`);
}

// Example Usage
calculator(10, 5, '+'); // Output: "10 + 5 = 15"
calculator(10, 5, '-'); // Output: "10 - 5 = 5"
calculator(10, 5, '*'); // Output: "10 * 5 = 50"
calculator(10, 5, '/'); // Output: "10 / 5 = 2"
calculator(10, 0, '/'); // Output: "Error: Division by zero."
calculator(10, 5, '%'); // Output: "10 % 5 = 0"
calculator(10, 5, '^'); // Output: "Invalid operator."
