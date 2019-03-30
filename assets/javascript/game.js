var alphabet = [
    "a", "b", "c", "d", "e", "f","g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

var compChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

var wins = 0;
var losses = 0;
var guessesLeft = 25;
var guessesSoFar = [];


var checkUserInput = function(userGuess) { 
    if (userGuess === compChoice) {
        wins++;
        guessesSoFar = [];
        guessesLeft = 25;
        compChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    } else if( guessesLeft===1) {
        losses++;
        guessesSoFar = [];
        guessesLeft = 25;
        compChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    } else {
        guessesLeft--;
        guessesSoFar.push(userGuess);
    }
}

var winsSlot = document.getElementById('wins-slot');

var userInput = document.getElementById('userGuess');
userInput.onkeyup = function(event) {
    var userGuess = event.target.value;  
    checkUserInput(userGuess);
    winsSlot.textContent = wins;
    event.target.value = null;
};
