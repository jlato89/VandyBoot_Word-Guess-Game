    // VARIABLES
    // ==========================================================================

var words = ['computer', 'remote', 'monitor', 'keyboard', 'desktop', 'laptop', 'headset', 'mouse', 'joystick', 'gamepad', 'speaker', 'server'];
var number = Math.floor(Math.random() * words.length);
var currentWord = words[number];

// Arrays
var currentWordArray = currentWord.split("");
var currentDashArray = Array(currentWord.length).fill("-");

var guessesRemaining = 10;
var lettersGuessed = "";
var wins = 0;
var losses = 0;


document.getElementById("current-word").innerHTML = currentDashArray.join('');
document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
document.getElementById("letters-guessed").innerHTML = "none";
document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;


    // FUNCTIONS
    // ==========================================================================
function nextWord () {
    number = Math.floor(Math.random() * words.length);
    currentWord = words[number];
    currentWordArray = currentWord.split("");
    currentDashArray = Array(currentWord.length).fill("-");  
    lettersGuessed = "";
    guessesRemaining = 10;


    document.getElementById("current-word").innerHTML = currentDashArray.join('');
    document.getElementById("letters-guessed").innerHTML = "none";
    document.getElementById("guesses-remaining").innerHTML = guessesRemaining; 
}

    // MAIN PROCESS
    // ==========================================================================

    // Captures keyboard input.
document.onkeyup = function (event) {

var userKey = event.key.toLowerCase();

document.getElementById("1").style.display = "";
document.getElementById("2").style.display = "";
document.getElementById("3").style.display = "";
document.getElementById("4").style.display = "";


    // check if user key matches word, if so do loop check of characters
    if (currentWord.includes(userKey)) {
        for (i = 0; i < currentWord.length; i++) {
            if (currentWordArray[i] === userKey) {

                currentDashArray[i] = userKey;

                document.getElementById("current-word").innerHTML = currentDashArray.join('');

                // if word is completed then end game and reset word
                if (!currentDashArray.includes("-")) {
                    document.getElementById("3").style.display = "inline";
                    wins++
                    document.getElementById("wins").innerHTML = wins;

                    nextWord();                    
                } 
            }
        } return;

    // check is userKey is valid character
    } else if (!/^[a-z]$/.test(userKey)) {
        document.getElementById("1").style.display = "inline";

    // check if userKey has already been guessed
    }else if (lettersGuessed.includes(userKey)) {
        document.getElementById("2").style.display = "inline";

    } 
    // if all else fails, subtract 1 from guesses remaining and add userKey to letters guessed
    else {
        guessesRemaining--
        lettersGuessed += userKey;

        document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
        document.getElementById("letters-guessed").innerHTML = lettersGuessed;
        
        // if guesses remaining equals 0 then end game and reset word
        if (guessesRemaining === 0) {
            document.getElementById("4").style.display = "inline";
            losses++
            document.getElementById("losses").innerHTML = losses;

            nextWord();
        }
    }
}