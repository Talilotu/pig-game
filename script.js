'use strict';
// 1. Put the score to 0 and make the dice disappear

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('btn--hold');
const turn0El = document.querySelector('#turn--0');
const turn1El = document.querySelector('#turn--1');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
turn0El.classList.add('hidden');
turn1El.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
// this currentScore cannot be insdie a function because then it would set to 0 after we click the button, so best to set it ouside the function.
let activePlayer = 0;

// 2. Implement game functionality
// Roll the dice
btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  // 2. Display dice
  diceEl.classList.remove('hidden');

  //dice-${} because the number of the images start with dice.
  diceEl.src = `dice-${dice}.png`;

  // 3. Check for rolled 1: if true,
  if (dice !== 1) {
    //Add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    document.getElementById(`turn--${activePlayer}`).classList.add('hidden');
  } else {
    // Switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;

    activePlayer = activePlayer === 0 ? 1 : 0;
    //set current score back to 0
    document.getElementById(`turn--${activePlayer}`).classList.remove('hidden');
    currentScore = 0;
    // toggle will add the class if it is not there, and if it is there then it will remove it.
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
