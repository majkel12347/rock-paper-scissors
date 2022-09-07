const startGameBtn = document.getElementById("start-game-btn");

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

let playerScore = document.getElementById("pScore");
let computerScore = document.getElementById("cScore");
let draw = document.getElementById("draw");
let pScore = 0;
let cScore = 0;

// set get score function
function getScore(win) {
  if (win === COMPUTER_WIN) {
    cScore++;
    computerScore.textContent = cScore;
    computerScore.style.color = "orangered";
    draw.textContent = "";
  } else if (win === PLAYER_WIN) {
    pScore++;
    playerScore.textContent = pScore;
    playerScore.style.color = "green";
    draw.textContent = "";
  } else if (RESULT_DRAW) {
    draw.textContent = "DRAW";
  }
}

function endGame() {
  if (pScore === 2 || cScore === 2) {
    computerScore.textContent = 0;
    playerScore.textContent = 0;
    draw.textContent = "END GAME";
    return (gameIsRunnung = true);
  }
}

// adding user choices to the game

const getPlayerChoice = () => {
  let selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}`, "").toUpperCase();

  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    imageP.src = "rock.png";
    alert(`Wrong choice, we choose ${DEFAULT_USER_CHOICE} for you: !`);
    return DEFAULT_USER_CHOICE;
  } else if (selection === SCISSORS) {
    imageP.src = "scissors.png";
    return SCISSORS;
  } else if (selection === PAPER) {
    imageP.src = "paper.png";
    return PAPER;
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

  getScore(winner);

  gameIsRunnung = false;
  endGame();
});
