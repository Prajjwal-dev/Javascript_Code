// Object containing student names and their marks
let obj = { harry: 98, rohan: 70, aakash: 7 };

// Using a for loop to iterate over the object keys and print marks
for (let student in obj) {
    console.log(`${student} scored ${obj[student]} marks.`);
}
