let playerScore = 0;
let compScore = 0;

function getComputerChoice() {
  const randInt = Math.floor(Math.random() * 3);
  let choice = "";

  if (randInt === 0) {
    choice = "rock";
  } else if (randInt === 1) {
    choice = "paper";
  } else {
    choice = "scissors";
  }

  return choice;
}
function updateScore(result, computer) {
  const dispToUpdate = document.querySelector("#display");
  if (result === "win") {
    playerScore += 1;
    const textToUpdate = document.querySelector("#player-score");
    textToUpdate.textContent = `Your Score Is: ${playerScore.toString()}`;
    dispToUpdate.textContent = `Computer picked ${computer}, you won!`;
  } else if (result === "loss") {
    compScore += 1;
    const textToUpdate = document.querySelector("#computer-score");
    textToUpdate.textContent = `Computer Score Is: ${compScore.toString()}`;
    dispToUpdate.textContent = `Computer picked ${computer}, you lost!`;
  } else {
    dispToUpdate.textContent = `Computer picked ${computer}, it's a tie!`;
  }
}

function endGame() {
  const dispToUpdate = document.querySelector("#display");

  if (playerScore === 5) {
    dispToUpdate.textContent = "Game Over, you won! :)";
  } else {
    dispToUpdate.textContent = "Game Over, you lost! :(";
  }
}
function playRound(player, computer) {
  const tie = "tie";
  const win = "win";
  const loss = "loss";
  let result = "";

  switch (true) {
    case player === "rock" && computer === "scissors":
      result = win;
      break;
    case player === "rock" && computer === "paper":
      result = loss;
      break;
    case player === "paper" && computer === "rock":
      result = win;
      break;
    case player === "paper" && computer === "scissors":
      result = loss;
      break;
    case player === "scissors" && computer === "paper":
      result = win;
      break;
    case player === "scissors" && computer === "rock":
      result = loss;
      break;
    case player === computer:
      result = tie;
      break;
    default:
      return tie;
  }

  if (playerScore < 5 && compScore < 5) {
    updateScore(result, computer);
  }
  if (playerScore === 5 || compScore === 5) {
    endGame(result);
  }
  return result;
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id, getComputerChoice());
  });
});
