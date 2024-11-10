function extractAmount(str) {
    // Regular expression to match digits after the currency symbol
    let regex = /Rs\s(\d+)/;
    let result = str.match(regex);
    
    // If match is found, return the amount, otherwise return null
    if (result) {
        return result[1];  // The amount is the first captured group
    } else {
        return null; // No match found
    }
}

// Example usage
let str = "Please give Rs 1000";
let amount = extractAmount(str);

console.log("Extracted Amount:", amount);
