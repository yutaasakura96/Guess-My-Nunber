'use strict';

// DEFAULT APPLICATION STATE VARIABLES
let score = 20;
let highScore = 0;

// DOM MANIPULATION : FUNCTIONS
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

// SECRET NUMBER GENERATOR
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// CHECK BUTTON FUNCTIONALITY
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // GAME LOGIC
  // NO INPUT NUMBER
  if (!guess) {
    displayMessage('⛔ No Number!');

    // PLAYER WINS
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // WHEN GUESS IS WRONG
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('💥 You lost the game!');
      // document.querySelector('.score').textContent = 0;
      displayScore(0);
    }
  }
});

// AGAIN BUTTON FUNCTIONALITY
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  displayScore(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
