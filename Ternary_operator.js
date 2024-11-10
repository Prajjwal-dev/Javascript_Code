// Person's age
let age = 65;

// Determine if the person can vote
let canVote = (age >= 18) ? "Yes, you can vote." : "No, you are too young to vote.";

// Determine if the person qualifies for a senior citizen discount
let seniorDiscount = (age >= 60) ? "Eligible for a senior discount." : "Not eligible for a senior discount.";

// Provide a custom greeting based on age
let greeting = (age < 12) 
    ? "Hello, young one!" 
    : (age < 20) 
        ? "Hey, teenager!" 
        : (age < 60) 
            ? "Hello, adult!" 
            : "Greetings, senior citizen!";

// Display results
console.log("Can Vote? " + canVote);
console.log("Senior Discount: " + seniorDiscount);
console.log("Greeting: " + greeting);
