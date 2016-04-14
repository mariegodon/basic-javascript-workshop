// give a user four tries to guess a random number

var userGuess = [];
userGuess[0] = parseInt(prompt("Enter a number between 1 and 100"));

//generate random number between 1 and 100
var randomNumber = Math.floor((Math.random() * 99) + 1);

var i = 0;

//give users three more tries
//if wrong, display correct number and user guesses

while (i <= 3) {
    if (i === 3) {
        alert("Your tries are up. The correct number was " + randomNumber + ". Your guesses were " + userGuess);
        break;
    }
    else if (randomNumber === userGuess[i]) {
        alert("Congratulations you guessed the correct number!");
        break;
    }
    else if (randomNumber < userGuess[i]) {
        userGuess[i + 1] = parseInt(prompt("The number is LOWER than your current guess. Guess again."));
    }
    else if (randomNumber > userGuess[i]) {
        userGuess[i + 1] = parseInt(prompt("The number is HIGHER than your current guess. Guess again."));
    }
    i++;
    
}
