    // VARIABLES
    // ==========================================================================

var words = ['computer', 'remote', 'monitor', 'keyboard', 'desktop', 'laptop', 'headset', 'mouse', 'joystick', 'gamepad'];
var number = Math.floor(Math.random() * words.length);
var currentWord = words[number];

// Arrays
var currentWordArray = currentWord.split("");
var currentDashArray = Array(currentWord.length).fill("-");

var guessesRemaining = 15;
var lettersGuessed = "";



document.getElementById("current-word").innerHTML = currentDashArray.join('');
document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
// document.getElementById("letters-guessed").innerHTML = lettersGuessed;


    // FUNCTIONS
    // ==========================================================================
// onKeyEvent();


    // MAIN PROCESS
    // ==========================================================================

// Captures keyboard input.
document.onkeyup = function (event) {

var userKey = event.key.toLowerCase();

    if (currentWord.includes(userKey)) {
        for (i = 0; i < currentWord.length; i++) {
            if (currentWordArray[i] === userKey) {

                currentDashArray[i] = userKey;

                document.getElementById("current-word").innerHTML = currentDashArray.join('');

            // Displays Console Logs
                console.log(userKey + " key Matched " + "current word index of " + i);
                console.log(currentDashArray);

                return;
            }
        }
    } if (!/^[a-z]$/.test(userKey)) {

        alert(userKey + " is not a valid guess!");

        return;
        
    } if (lettersGuessed.includes(userKey)) {

        console.log("letter already guessed");
        return;

    } 
    else {
            guessesRemaining-- // causes more than one to be removed due to loop
            lettersGuessed += userKey;

            document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
            document.getElementById("letters-guessed").innerHTML = lettersGuessed;

        }
}




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
