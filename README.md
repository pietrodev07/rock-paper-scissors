# ROCK PAPER SCISSORS

Rock Paper Scissors is a game in which you have to beat the computer.

You can choose between:

- **Rock**
- **Paper**
- **Scissors**

The rules are:

- **Rock beats Scissors**

- **Scissors beat Paper**

- **Paper beats Rock**

First to score 6 points wins the game.

The computer randomly choose its move:

```js
function getComputerChoice() {

  const randomNumber = Math.floor(Math.random() * (3 - 1 + 1) + 1);

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
```

The project is structured in the following method:

- **index.html** (defines the structure of the page)

- **style.css** (defines the style of the page)

- **main.js** (defines the logic of the page)