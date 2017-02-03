var possibleAns = ["paris", "amsterdam", "tokyo", "seoul", "taipei", "manila", "mumbai", "delhi", "cairo", "moscow", "shanghai", "beijing", "london"];
var currentAns;
var alreadyGuessed = [];
var userGuess;
var currentAnsArr = [];
var dupeGuess;
var guessesRemaining;
var audioSound;

function newGame() {
	//declare current answer
	currentAns = possibleAns[Math.floor(Math.random() * possibleAns.length)];
	console.log("Current answer: " + currentAns);
	//count number of characters in current answer
	currentAnsArr = currentAns.split("");
	console.log("Length of current answer: " + currentAnsArr.length);
	console.log(currentAnsArr);
	document.getElementById('answerDisplay').innerHTML = "";
	// use loop to add underscores
	for (var i=0; i < currentAnsArr.length; i++) {
		var newSpan = $("<span>");
		newSpan.html("_ ");
		$("#answerDisplay").append(newSpan);
	}
	//reset guesses remaining, already guessed, already guessed array
	document.getElementById("guessesRemaining").innerHTML = "10";
	document.getElementById("alreadyGuessed").innerHTML = "";
	alreadyGuessed = [];
}

function winGame() {
	console.log("running winGame function");
	var newWinCount = Number(document.getElementById("winsCount").innerHTML);
	newWinCount += 1;
	document.getElementById("winsCount").innerHTML = newWinCount;
	newGame();
}

function checkAlreadyGuessed() {
   // check if userGuess is a duplicate guess
    if (alreadyGuessed.length == 0) {
        console.log("array empty");
        dupeGuess = false;
    }   else {
        for (i = 0; i < alreadyGuessed.length; i++) {
            if (userGuess === alreadyGuessed[i]) {
                console.log("duplicate guess = true");
                dupeGuess = true;
                return true;
            } else {
                dupeGuess = false;
                console.log("duplicate guess = false");
            }
        }
    }
}

function checkAnsArray() {
	// check if userGuess matches any letter in answer
	for (var i=0; i < currentAnsArr.length; i++) {
		if (userGuess === currentAnsArr[i]) {
			var childSelector = document.getElementById('answerDisplay').childNodes;
			childSelector[i].innerHTML = userGuess;
		}
	}
	// win game if entire array guessed correctly
	var str = String(document.getElementById('answerDisplay').innerHTML);
	var n = str.includes("_");

	if (n === false) {
		playSound();
		winGame();
	}
}

function playSound() {
    audioSound = new Audio("assets/yodalaughing.mp3");
	audioSound.play();
}

window.onkeydown = function(event) {
	if (event.keyCode >= 65 && event.keyCode <= 90) {
		userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		console.log("userGuess: " + userGuess);
		// check userGuess against alreadyGuessed array
		checkAlreadyGuessed();
		// add userGuess to alreadyGuessed array if not dupe guess
		if (dupeGuess === false) {
			alreadyGuessed.push(userGuess);
			console.log(alreadyGuessed);
			// decrease guesses remaining by one if not dupe guess
			guessesRemaining = Number(document.getElementById("guessesRemaining").innerHTML);
			guessesRemaining -= 1
			document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
			// log guess under already guessed section
			document.getElementById("alreadyGuessed").innerHTML += userGuess + ", ";

			checkAnsArray();
		}
	}

	if (guessesRemaining === 0) {
		console.log("you lose");
		newGame();
	}
}

newGame();