// Person's age
let age = 65;

// Determine if the person can vote
let canVote;
if (age >= 18) {
    canVote = "Yes, you can vote.";
} else {
    canVote = "No, you are too young to vote.";
}

// Determine if the person qualifies for a senior citizen discount
let seniorDiscount;
if (age >= 60) {
    seniorDiscount = "Eligible for a senior discount.";
} else {
    seniorDiscount = "Not eligible for a senior discount.";
}

// Provide a custom greeting based on age
let greeting;
if (age < 12) {
    greeting = "Hello, young one!";
} else if (age < 20) {
    greeting = "Hey, teenager!";
} else if (age < 60) {
    greeting = "Hello, adult!";
} else {
    greeting = "Greetings, senior citizen!";
}

// Display results
console.log("Can Vote? " + canVote);
console.log("Senior Discount: " + seniorDiscount);
console.log("Greeting: " + greeting);
