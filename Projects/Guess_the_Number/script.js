// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Initialize variables
let score = 100;
let guessCount = 0;

// Elements
const userGuessInput = document.getElementById("userGuess");
const submitGuessBtn = document.getElementById("submitGuess");
const restartGameBtn = document.getElementById("restartGame");
const feedbackDiv = document.getElementById("feedback");
const scoreDiv = document.getElementById("score");

// Submit guess event
submitGuessBtn.addEventListener("click", () => {
    const userGuess = parseInt(userGuessInput.value);

    // Validation for empty or invalid input
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        feedbackDiv.textContent = "Please enter a number between 1 and 100!";
        feedbackDiv.style.color = "red";
        return;
    }

    guessCount++;
    if (userGuess === randomNumber) {
        feedbackDiv.textContent = `🎉 Congratulations! You guessed it in ${guessCount} attempts!`;
        feedbackDiv.style.color = "green";
        submitGuessBtn.disabled = true;
        userGuessInput.disabled = true;
    } else if (userGuess < randomNumber) {
        feedbackDiv.textContent = "Too low! Try again.";
        feedbackDiv.style.color = "blue";
        score -= 2;
    } else {
        feedbackDiv.textContent = "Too high! Try again.";
        feedbackDiv.style.color = "blue";
        score -= 2;
    }

    // Update score
    scoreDiv.textContent = `Score: ${score}`;
});

// Restart game event
restartGameBtn.addEventListener("click", () => {
    location.reload(); // Reload the page to reset the game
});
