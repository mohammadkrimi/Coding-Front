let playerScore = 0;
let computerScore = 0;
const TARGET = 5; 
const choices = ["Rock", "Paper", "Scissors"];

const computerPick = () => choices[Math.floor(Math.random() * 3)];

const whoWins = (player, computer) => {
  if (player === computer) return "draw";
  if (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Paper" && computer === "Rock") ||
    (player === "Scissors" && computer === "Paper")
  ) {
    return "player";
  }
  return "computer";
};

const setPlayButtonsDisabled = (disabled) => {
  document.getElementById("btnRock").disabled = disabled;
  document.getElementById("btnPaper").disabled = disabled;
  document.getElementById("btnScissors").disabled = disabled;
};

const play = (playerChoice) => {
  if (playerScore >= TARGET || computerScore >= TARGET) return;

  const computerChoice = computerPick();
  const winner = whoWins(playerChoice, computerChoice);

  if (winner === "player") playerScore++;
  else if (winner === "computer") computerScore++;

  let message;
  if (playerScore >= TARGET || computerScore >= TARGET) {
    const youWon = playerScore > computerScore;
    message = youWon
      ? `Game Over — You win the match! (${playerScore}:${computerScore})`
      : `Game Over — Computer wins the match! (${playerScore}:${computerScore})`;
    setPlayButtonsDisabled(true);
  } else {
    message =
      winner === "draw"
        ? `Draw! You: ${playerChoice} | Computer: ${computerChoice}`
        : winner === "player"
        ? `You Win! You: ${playerChoice} | Computer: ${computerChoice}`
        : `You Lose! You: ${playerChoice} | Computer: ${computerChoice}`;
  }

  document.getElementById("result").textContent = message;
  document.getElementById("playerScore").textContent = playerScore;
  document.getElementById("computerScore").textContent = computerScore;
};

const resetGame = () => {
  playerScore = 0;
  computerScore = 0;
  setPlayButtonsDisabled(false);
  document.getElementById("result").textContent =
    `First to ${TARGET}. Click a button to play!`;
  document.getElementById("playerScore").textContent = playerScore;
  document.getElementById("computerScore").textContent = computerScore;
};


document.getElementById("btnRock").addEventListener("click", () => play("Rock"));
document.getElementById("btnPaper").addEventListener("click", () => play("Paper"));
document.getElementById("btnScissors").addEventListener("click", () => play("Scissors"));
document.getElementById("btnReset").addEventListener("click", resetGame);

document.getElementById("result").textContent =
`First to ${TARGET}. Click a button to play!`;