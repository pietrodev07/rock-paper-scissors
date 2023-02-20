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

function playRound(computer, player) {

  if(computer === player) {
    wonLost.textContent = "It's a tie";
    scoreMessage.textContent = `${capitalizeFirstLetter(playerChoice)} ties with ${computerChoice}`;
  } else if(computer === "rock" && player === "scissors") {
    computerScore += 1;
    wonLost.textContent = "You lose!";
    scoreMessage.textContent = `${capitalizeFirstLetter(playerChoice)} is beaten by ${computerChoice}`;
  } else if(computer === "scissors" && player === "paper") {
    computerScore += 1;
    wonLost.textContent = "You lose!";
    scoreMessage.textContent = `${capitalizeFirstLetter(playerChoice)} is beaten by ${computerChoice}`;
  }  else if(computer === "paper" && player === "rock") {
    computerScore += 1;
    wonLost.textContent = "You lose!";
    scoreMessage.textContent = `${capitalizeFirstLetter(playerChoice)} is beaten by ${computerChoice}`;
  } else {
    playerScore += 1;
    wonLost.textContent = "You win!"
    scoreMessage.textContent = `${capitalizeFirstLetter(playerChoice)} beats ${computerChoice}`;
  }

  setTexts();

  return [computerScore, playerScore];

}

function setTexts() {
  playerScoreText.textContent = playerScore.toString();
  cpuScoreText.textContent = computerScore.toString();
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}