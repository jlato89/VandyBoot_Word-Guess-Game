    // VARIABLES
    // ==========================================================================

var words = ['computer', 'remote', 'monitor', 'keyboard', 'desktop', 'laptop', 'headset', 'mouse', 'joystick', 'gamepad'];
var number = Math.floor(Math.random() * words.length);
var currentWord = words[number];

var guessesRemaining = 15;
var lettersGuessed = "NOT SET YET";



document.getElementById("current-word").innerHTML = "- ".repeat(currentWord.length);
document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
document.getElementById("letters-guessed").innerHTML = lettersGuessed;


    // FUNCTIONS
    // ==========================================================================

    

// function guessesRemaining() { 
//     var guessesRemaining = 9;
//     document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
//   }


    // MAIN PROCESS
    // ==========================================================================

// Captures keyboard input.
document.onkeyup = function (event) {
    
    var userKey = event.key.toLowerCase();

    if (userKey == currentWord.search) {
        alert("You Matched!")
    }

// repeat and includes for above

    console.log(userKey);
};


    // CONSOLE LOG
    // ==========================================================================

// console.log(guessesRemaining);
// console.log(words);
// console.log(number);
console.log(currentWord);
// console.log(wordDashes);
// console.log("-".repeat(wordDashes));
