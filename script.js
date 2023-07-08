// Array of words
const words = ["apple", "banana", "cherry", "dragonfruit", "elderberry", "fig", "grapefruit", "honeydew", "kiwi", "lemon"];

let score = 0;
let wordIndex = 0;
let currentWord = words[wordIndex];

// Display a new word
function displayWord() {
  document.getElementById("word").textContent = currentWord;
}

// Check if the typed word matches the current word
function checkWord() {
  const input = document.getElementById("input").value;
  
  if (input.toLowerCase() === currentWord) {
    score++;
    document.getElementById("score").textContent = "Score: " + score;
    wordIndex++;
    
    if (wordIndex >= words.length) {
      // Game over
      document.getElementById("word").textContent = "Game Over";
      document.getElementById("input").setAttribute("disabled", "true");
    } else {
      currentWord = words[wordIndex];
      document.getElementById("input").value = "";
      displayWord();
    }
  }
}

// Event listener for typing input
document.getElementById("input").addEventListener("input", checkWord);

// Start the game
displayWord();
