let playerScore = 0;
let computerScore = 0;

let playerChoice;
let computerChoice;

const modal = document.querySelector('#modal');
const modalTitle = document.querySelector('#modal-title');
const closeModalButton = document.querySelector('#modal-btn');
const overlay = document.querySelector('#overlay');

const wonLost = document.querySelector('#won-lost');
const scoreMessage = document.querySelector('#score-message');

const playerScoreText = document.querySelector('#player-score');
const cpuScoreText = document.querySelector('#cpu-score');

const rockButton = document.querySelector('#rock-button');
const paperButton = document.querySelector('#paper-button');
const scissorsButton = document.querySelector('#scissors-button');

function getComputerChoice() {

  let randomNumber = Math.floor(Math.random() * (3 - 1 + 1) + 1);

  let computerChoice;

  switch (randomNumber) {
    case  1:
      computerChoice = 'rock';
      break;
    case 2:
      computerChoice = 'paper';
      break;
    case 3:
      computerChoice = "scissors";
      break;
  }

  return computerChoice;
}