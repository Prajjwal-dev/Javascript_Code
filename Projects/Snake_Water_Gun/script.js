// Play the game
function playGame(playerChoice) {
    const options = ['S', 'W', 'G'];
    const computerChoice = options[Math.floor(Math.random() * options.length)];
  
    let resultMessage = `You chose: ${playerChoice} | Computer chose: ${computerChoice}.<br>`;
  
    // Determine the result
    if (playerChoice === computerChoice) {
      resultMessage += "It's a Tie! 😐";
    } else if (
      (playerChoice === 'S' && computerChoice === 'W') ||
      (playerChoice === 'W' && computerChoice === 'G') ||
      (playerChoice === 'G' && computerChoice === 'S')
    ) {
      resultMessage += "You Win! 🎉";
    } else {
      resultMessage += "You Lose! 😔";
    }
  
    // Display result
    document.getElementById("result").innerHTML = resultMessage;
  }
  
  // Restart the game
  function restartGame() {
    // Clear the result display
    document.getElementById("result").innerHTML = "";
  }
  