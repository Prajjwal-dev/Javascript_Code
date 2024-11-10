function findMean(num1, num2, num3, num4, num5) {
    let sum = num1 + num2 + num3 + num4 + num5;  // Calculate the sum of the numbers
    let mean = sum / 5;  // Divide the sum by 5 to get the mean
    return mean;
}

// Example usage
let mean = findMean(10, 20, 30, 40, 50);
console.log("The mean of the numbers is:", mean);
