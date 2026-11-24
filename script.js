// Math.random method
let humanScore = 0;
let computerScore = 0;
function computerBattleMove() {
  const battleMove = ["rock", "paper", "scissors"];
  const computerselection = Math.floor(Math.random() * battleMove.length);

  const randomSelection = battleMove[computerselection];
  return randomSelection;
}
const element = document.getElementById("target");
element.textContent = computerBattleMove();

function playerBattleMove() {
  const humanSelection = prompt("Select an option (Rock,paper,scissors)");
  return humanSelection;
}

function playRound() {
  let computerResults = computerBattleMove();
  let humanbattleMove = playerBattleMove();

  if (humanbattleMove === null) {
    return "Try again";
  }
  humanSelection = humanSelection.lower();
  //   computer wins below here
  if (humanbattleMove === "rock" && computerResults === "paper") {
    computerScore += 1;
    return "computer wins!";
  } else if (humanbattleMove === "scissors" && computerResults === "rock") {
    computerScore += 1;
    return "computer wins!";
  } else if (humanbattleMove === "paper" && computerResults === "scissors") {
    computerScore += 1;
    return "computer wins!";
  }

  //   player wins below
  else if (humanbattleMove === "paper" && computerResults === "rock") {
    humanScore += 1;
    return "human wins!";
  } else if (humanbattleMove === "rock" && computerResults === "scissors") {
    humanScore += 1;
    return "human wins!";
  } else if (humanbattleMove === "scissors" && computerResults === "paper") {
    humanScore += 1;
    return "human wins!";
  } else {
    computerScore += 1;
    return "computer wins, this is not an option!";
  }
}

console.log(playRound());
