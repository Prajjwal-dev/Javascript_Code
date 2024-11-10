// Basic String Declaration
let singleQuoteString = 'Hello, this is a single-quote string.';
let doubleQuoteString = "Hello, this is a double-quote string.";
let multiLineString = `This is a
multi-line
string using template literals.`;

// String Concatenation
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log("Concatenated Full Name: " + fullName);

// String Length
console.log("Length of fullName: " + fullName.length);

// Accessing Characters
console.log("First character of fullName: " + fullName[0]);
console.log("Last character of fullName: " + fullName[fullName.length - 1]);

// Template Literals (using backticks)
let age = 25;
let info = `Name: ${firstName} ${lastName}, Age: ${age}`;
console.log("Using Template Literals: " + info);

// Escape Sequences
let escapeSequenceExample = "This is a \"quote\" inside double quotes.\nNew line here.\tAnd a tab space.";
console.log("Escape Sequence Example:\n" + escapeSequenceExample);

// Common String Methods
let sampleText = "  Hello, JavaScript Strings!  ";

// Trim
console.log("Trimmed Text: '" + sampleText.trim() + "'");

// toUpperCase and toLowerCase
console.log("Uppercase: " + sampleText.toUpperCase());
console.log("Lowercase: " + sampleText.toLowerCase());

// Substring
console.log("Substring (0, 5): " + sampleText.substring(0, 5));

// Slice
console.log("Slice (-8): " + sampleText.slice(-8));

// IndexOf and LastIndexOf
console.log("Index of 'JavaScript': " + sampleText.indexOf("JavaScript"));
console.log("Last Index of 'S': " + sampleText.lastIndexOf("S"));

// Includes
console.log("Includes 'JavaScript': " + sampleText.includes("JavaScript"));

// StartsWith and EndsWith
console.log("Starts with 'Hello': " + sampleText.trim().startsWith("Hello"));
console.log("Ends with 'Strings!': " + sampleText.trim().endsWith("Strings!"));

// Replace
console.log("Replace 'JavaScript' with 'JS': " + sampleText.replace("JavaScript", "JS"));

// Repeat
console.log("Repeat 'Hello' 3 times: " + "Hello ".repeat(3));

// Splitting Strings
let languages = "JavaScript, Python, C++, Java";
let languageArray = languages.split(", ");
console.log("Languages Array: ", languageArray);

// Joining Strings
console.log("Joined Languages: " + languageArray.join(" | "));

// Advanced Template Literals
let student = {
    name: "Alice",
    score: 90,
    grade: "A"
};

let studentInfo = `Student Information:
Name: ${student.name}
Score: ${student.score}
Grade: ${student.grade}`;
console.log(studentInfo);

// Multi-line Template Literal Example
let address = `123 Main St
Cityville, State
Country - 12345`;
console.log("Multi-line Address:\n" + address);

// String Padding
let paddedString = "123".padStart(5, "0"); // pads "123" to "00123"
console.log("Padded String (Start): " + paddedString);

paddedString = "123".padEnd(5, "0"); // pads "123" to "12300"
console.log("Padded String (End): " + paddedString);
