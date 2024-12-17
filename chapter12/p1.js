// Print "Hello" after 2 seconds
setTimeout(() => {
    console.log("Hello");
    
    // Print "World" after another 2 seconds
    setTimeout(() => {
        console.log("World");
    }, 2000);
}, 2000);
