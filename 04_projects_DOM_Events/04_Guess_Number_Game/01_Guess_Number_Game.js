
// We can use input type also a submit(buttons are not only made for submitting, we can use input tags too)
//*** The images for reference how the actual things are happening are attached in the folder

// Consider this HTML code for below JS scripts

{/* <form class="form">
  <label for="guessField" id="guess">Guess a number</label>
  <input type="text" id="guessField" class="guessField">
  <input type="submit" id="subt" value="Submit guess" class="guessSubmit">
</form>

<div class="resultParas">
  <p>Previous Guesses: <span class="guesses"></span></p>
  <p>Guesses Remaining: <span class="lastResult">10</span></p>
  <p class="lowOrHi"></p>
</div> */}




// now the JS logic scripts are below-->


let randomNumber = parseInt(Math.random() * 100 + 1); // We have to guess this number

const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

let btn=document.createElement('button'); // we will use this on endGame, to show a button that onclick it restart a new game;

let prevGuess = []; //stores all the values that user guess in array to show him all the previous guesses he did till now
let numGuess = 1; // to check whether the number of guess gets more than 10, if yes then he lost

let playGame = true;

// now check whether user can play game, if yes then take the input guessed valu from user and pass to next step for validation
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

// to check the entry must be in the limit
// if in the limit, then check whether the remainig guess chance is less than 11, if yes then move to checking phase for hinit to user
// if not then game over becoz remaninng guesses are over
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

// to check whether true gueesed if not then give hints to user so that he make correct guess on next attempt
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

// to clean the input tag, show guessed number and decrease the guess count remaining
function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `; // here adding previous guesses as string everytime (having a comma with space)
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

// to run when the game over  due to guess count remaining limit reached to 10.
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

// if the game ends then clear the input, make input tag disabled(by using setAttribute)
// then make a button in DOM with "new game as title", if clicked then run the new game
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', ''); // as setAttribute reuires in key,value thus giving vaue as empty, else 'disable' is enough to work
  btn.innerHTML = `<h2 id="newGame">Start new Game</h2>`; // using the already created button at top(not used till now, not 
    // the part of actual DOM currently), we create it then append at last into last section
  startOver.appendChild(btn);
  playGame = false; // so that user don't input the further values
  newGame();
}


function newGame() {
  const newGameButton = document.querySelector('#newGame'); // now on clicking this button we run the new game
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled'); // so that user now can again type into the input
    startOver.removeChild(btn); // removing the button shown at last with title as "STart new Game"

    playGame = true; // at last so that user don't input the further values untill we clear everything from screens
  });
}

