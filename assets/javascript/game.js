    // VARIABLES
    // ==========================================================================

var words = ['computer', 'remote', 'monitor', 'keyboard', 'desktop', 'laptop', 'headset', 'mouse', 'joystick', 'gamepad'];
var number = Math.floor(Math.random() * words.length);
var currentWord = words[number];

// Arrays
var currentWordArray = currentWord.split("");
var currentDashArray = Array(currentWord.length).fill("-");

var guessesRemaining = 15;
var lettersGuessed = "NOT SET YET";



document.getElementById("current-word").innerHTML = currentDashArray.join('');
document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
document.getElementById("letters-guessed").innerHTML = lettersGuessed;


    // FUNCTIONS
    // ==========================================================================



    // MAIN PROCESS
    // ==========================================================================

// Captures keyboard input.
document.onkeyup = function game (event) {

    var userKey = event.key.toLowerCase();

    for (i = 0; i < currentWord.length; i++) {

        if (currentWordArray[i] === userKey) {

            currentDashArray[i] = userKey;

        // Displays Console Logs
            console.log(userKey + " key Matched " + "current word index of " + i);
            console.log(currentDashArray);
        };

        
// for statement console logs    
    // console.log(userKey);
    // console.log(currentWordArray[i]);
    }
};




    // CONSOLE LOG
    // ==========================================================================

// console.log("-----------");
// console.log(guessesRemaining);
// console.log(words);
// console.log(number);
console.log(currentWord);
console.log(currentWordArray);
// console.log(currentWordLength);
console.log(currentDashArray);
