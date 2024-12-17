// Function to return a promise that resolves after n seconds
function resolveAfterNSeconds(n) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Resolved after ${n} seconds`);
        }, n * 1000); // Convert seconds to milliseconds
    });
}

// Using an IIFE to execute the function with different values of n
(async () => {
    console.log("Starting...");
    
    const promises = [
        resolveAfterNSeconds(1),
        resolveAfterNSeconds(2),
        resolveAfterNSeconds(3),
    ];

    for (const promise of promises) {
        const message = await promise; // Await each promise sequentially
        console.log(message);
    }

    console.log("All promises resolved!");
})();
