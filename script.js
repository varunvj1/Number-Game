// Variable to store the list of guesses
let guesses = [];

// Variable for store the correct random number
let correctNumber = getRandomNumber();

//Run this function when the webpage loads
window.onload = function () {
  document.getElementById("number-submit").addEventListener("click", playGame);
  document.getElementById("restart-game").addEventListener("click", initGame);
};

//Functionality for playing the whole game
function playGame() {
  let numberGuess = document.getElementById("number-guess").value;
  displayResult(numberGuess);
  saveGuessHistory(numberGuess);
  displayHistory();
}

//Show the result for if the guess it too high, too low, or correct
function displayResult(numberGuess) {
  if (numberGuess > correctNumber) {
    showNumberAbove();
  }
  else if (numberGuess == correctNumber) {
    showYouWon();
  }
  else {
    showNumberBelow();
  }
}

// Initialise the new game by resetting all values and content on the page
function initGame() {
  //Reset the random number
  correctNumber = getRandomNumber();

  //Empty the input tag
  document.getElementById("number-guess").value = "";

  //Empty the result tag
  document.getElementById("result").innerHTML = "";

  //Empty the guesses array
  guesses = [];

  //Empty the history display tag
  document.getElementById("history").innerHTML = "";
}


function getRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  return randomNumber;
}

//Save guess history
function saveGuessHistory(guess) {
  guesses.push(guess);
}

// Display guess history to user
function displayHistory() {
  let index = guesses.length - 1;
  let list = "<ul class='list-group'>";
  while (index >= 0) {
    list += '<li class = "list-group-item">' + `You guessed ${guesses[index]}` + '</li>';
    index--;
  }
  list += "</ul>";
  document.getElementById("history").innerHTML = list;
}


//Retrieve the dialog based on if the guess is wrong or correct
function getDialog(dialogType, text) {
  let dialog;
  switch (dialogType) {
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>";
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>";
      break;
  }
  dialog += text;
  dialog += "</div>";
  return dialog;
}

function showYouWon() {
  const text = "Awesome job, you got it!";
  /**
   * We retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   */
  let dialog = getDialog("won", text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove() {
  const text = "Your guess is too high!";
  /**
   * We retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   */
  let dialog = getDialog("warning", text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow() {
  const text = "Your guess is too low!";
  /**
   * We retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   */
  let dialog = getDialog("warning", text);
  document.getElementById("result").innerHTML = dialog;
}
