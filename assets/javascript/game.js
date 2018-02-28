
// variables
var alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];
var userGuess = null;
var computerGuess = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + lettersGuessed + " Computer picked: " + computerGuess);


document.onkeyup = function(event) {

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    //guesses so far
    if (lettersGuessed.indexOf(userGuess) < 0 && alphabetLetters.indexOf(userGuess) >= 0) {
        lettersGuessed[lettersGuessed.length] = userGuess;
        guessesLeft--;
    }

    // letter to be guessed
    if (computerGuess == userGuess) {
        wins++;
        console.log("You won!");
        alert("You have the gift!");
        guessesLeft = 9;
        lettersGuessed = [];
        computerGuess = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
        console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + lettersGuessed + " Computer picked: " + computerGuess);
    }

    // guesses left
    if (guessesLeft == 0) {
        losses++;
        console.log("You lost!");
        alert("Either you have it or you don't!")
        guessesLeft = 9;
        lettersGuessed = [];
        computerGuess = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
        console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + lettersGuessed + " Computer picked: " + computerGuess);
    }


    var html =
        "<p><h1>The Psychic Game</h1></p>" +
        "<p><h4>Guess what letter I\'m thinking of</h4></p>" +
        "<p><h4>Wins: " + wins + "</h4></p>" +
        "<p><h4>Losses: " + losses + "</h4></p>" +
        "<p><h4>Guesses Left: " + guessesLeft +
        "</h4></p>" + "<p><h4>Your guesses so far: " + lettersGuessed + "</h4></p>";
    document.querySelector("#game").innerHTML = html;

}