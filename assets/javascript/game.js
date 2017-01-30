var possibleAns = ["Paris", "Amsterdam", "Tokyo", "Seoul", "Taipei", "Manila", "Mumbai", "Delhi", "Cairo", "Moscow", "Shanghai", "Beijing"];
var currentAns = "";
var alreadyGuessed = [];
var userGuess = "";
var currentAnsArr = [];

window.onload = function newGame () {
	//declare current answer
	currentAns = possibleAns[Math.floor(Math.random() * possibleAns.length)];
	console.log("Current answer: " + currentAns);
	//reset guesses remaining and already guessed
	// document.getElementById("guessesRemaining").innerHTML = "10";
	// document.getElementById("alreadyGuessed").innerHTML = "";
}

window.onkeydown = function(event) {

	userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log("userGuess: " + userGuess);
	alreadyGuessed.push(userGuess);

	//count number of characters in current answer
	currentAnsArr = currentAns.split("");
	console.log("Length of current answer: " + currentAnsArr.length);
	alreadyGuessed.push(userGuess);

	//display in underscores number of characters in current answer
	var count = 0;
	while (count < currentAnsArr.length) {
		var underscores = document.getElementById("answerDisplay").innerHTML;
		underscores += "_ ";
		document.getElementById("answerDisplay").innerHTML = underscores;
		count++;
	}

	//use for loop to check if user's guess match any letters of current answer
	for (var i = 0; i < currentAnsArr.length; i++) {
		if (currentAnsArr[i].toLowerCase() == userGuess) {
			console.log("Index " + i + " guessed correctly");
		} else {
			
		}
	}

	//decrease number of guesses remaining by one
	var decGuesses = document.getElementById("guessesRemaining").innerHTML;
		decGuesses -= 1;
		document.getElementById("guessesRemaining").innerHTML = decGuesses;

	//if guessed correctly, replace underscore


	//if did not guess correctly, display letter in letters already guessed section


	//decrease number of guesses remaining


	//if guess all letters, increase wins by one and change image src


	//if run out of guesses, reset the game

}