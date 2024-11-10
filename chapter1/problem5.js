//Write a js program to create a word-meaning dictionary oof 5 words
// Create a word-meaning dictionary object
const dictionary = {
    "apple": "A round fruit with red or green skin and a white interior.",
    "banana": "A long, curved fruit with a yellow skin and soft, sweet flesh.",
    "cherry": "A small, round fruit that is typically red or black and has a pit.",
    "date": "A sweet fruit from the date palm, often eaten dried.",
    "elderberry": "A small, dark purple fruit from the elder tree, often used in syrups and jams."
};

// Function to display the dictionary
function displayDictionary(dict) {
    console.log("Word-Meaning Dictionary:");
    for (const word in dict) {
        console.log(`${word}: ${dict[word]}`);
    }
}

// Call the function to display the dictionary
displayDictionary(dictionary);
