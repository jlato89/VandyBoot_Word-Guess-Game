    // VARIABLES
    // ==========================================================================

var words = ['computer', 'remote', 'monitor', 'keyboard', 'desktop', 'laptop', 'headset', 'mouse', 'joystick', 'gamepad'];
var number = Math.floor(Math.random() * words.length);
var currentWord = words[number];
var currentWordSplit = currentWord.split("");
var currentDashesSplit = 
var currentDashesSplit = currentWord.length;


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
    var search = /userKey/g;

    if (currentWord.search(userKey) !== -1) {
        alert("You Matched!")
    }

    // var str = "Visit W3Schools!"; 
    // var n = str.search("w");
    // document.getElementById("demo").innerHTML = n;

// repeat and includes for above
    console.log(userKey);
    console.log('currentWord.search(userKey): ', currentWord.search(userKey));

};


    // CONSOLE LOG
    // ==========================================================================

console.log("-----------");
// console.log(guessesRemaining);
// console.log(words);
// console.log(number);
console.log(currentWord);
console.log(currentWordSplit);
console.log(currentDashesSplit);
