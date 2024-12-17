// Array of jokes
const jokesArray = [
    "Why don’t skeletons fight each other? They don’t have the guts.",
    "What do you call fake spaghetti? An impasta.",
    "Why don’t eggs tell jokes? They’d crack each other up.",
    "What’s orange and sounds like a parrot? A carrot!",
    "Why couldn’t the bicycle stand up by itself? It was two tired.",
    "Why are elevator jokes so classic and good? They work on many levels.",
    "How does a penguin build its house? Igloos it together.",
    "What do you call cheese that isn't yours? Nacho cheese.",
    "How does a taco say grace? Lettuce pray.",
    "Why did the scarecrow win an award? Because he was outstanding in his field."
  ];
  
  // Function to generate a random joke
  async function generateJoke() {
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      const jokeData = await response.json();
      const joke = `${jokeData.setup} - ${jokeData.punchline}`;
      document.getElementById('joke').innerHTML = joke;
    } catch (error) {
      document.getElementById('joke').innerHTML = "Oops! Couldn't fetch a joke. Try again.";
    }
  }
  
  
  // Generate the first joke on page load
  generateJoke();
  