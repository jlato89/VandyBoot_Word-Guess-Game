// VARIABLES
// ==========================================================================

// var userText = document.getElementById('user-text');
var gameWords = ['computer', 'remote', 'monitor', 'keyboard', 'desktop', 'laptop', 'headset', 'mouse', 'joystick', 'gamepad'];
var number = Math.floor(Math.random() * gameWords.length);
// var currentWord = document.getElementById('current-word');
var wordLetters = [];

var guessesRemaining = 0;


// FUNCTIONS
// ==========================================================================

function guessesRemaining() { 
    var guessesRemaining = 9;
    document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
  }


// MAIN PROCESS
// ==========================================================================

// Captures keyboard input.
document.onkeyup = function(event) {
    
    var letter = event.key.toLowerCase();

    if (letter === wordLetters) {
        // fill in letter for current word, add letter to guessed letters
    }else {
        // add letter to guessed letters, subtract 1 from guesses remaining
    }
};


// CONSOLE LOG
// ==========================================================================

console.log(guessesRemaining);
// console.log(currentWord);