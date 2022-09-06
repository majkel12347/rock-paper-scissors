const startGameBtn = document.getElementById('start-game-btn');

const showComputer = document.getElementById("show-computer");
const showPlayer = document.getElementById("show-player");

const imageP = document.getElementById("image-player");
const imageC = document.getElementById("image-computer");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const RESULT_DRAW = "DRAW";
const PLAYER_WIN = "PLAYER";
const COMPUTER_WIN = "COMPUTER";
const DEFAULT_USER_CHOICE = "ROCK";

let gameIsRunnung = false;

// adding user choices to the game

const getPlayerChoice = () => {
  let selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}`, "").toUpperCase();

  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    imageP.src = "rock.png";
    alert(`Wrong choice, we choose ${DEFAULT_USER_CHOICE} for you: !`);
    return DEFAULT_USER_CHOICE;
  }

  return selection;
};

// adding computer choice
const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    imageC.src = "rock.png";
    return ROCK;
  } else if (randomValue < 0.67) {
    imageC.src = "paper.png";
    return PAPER;
  } else {
    imageC.src = "scissors.png";
    return SCISSORS;
  }
};

// adding check who win
const getWinner = (cChoice, pChoice) => {
  return cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === SCISSORS && pChoice === ROCK) ||
      (cChoice === PAPER && pChoice === SCISSORS)
    ? PLAYER_WIN
    : COMPUTER_WIN;
};

startGameBtn.addEventListener("click", function () {
  if (gameIsRunnung) {
    return;
  }
  gameIsRunnung = true;
  console.log("Game is starting");
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const winner = getWinner(computerChoice, playerChoice);

  let message = `You pick: ${playerChoice}, computer pick: ${computerChoice} `;

  winner === RESULT_DRAW
    ? (message += "DRAW!")
    : winner === PLAYER_WIN
    ? (message += "Player Win!")
    : (message += "Computer Win!");

  console.log(`${message} `);
  gameIsRunnung = false;
});
