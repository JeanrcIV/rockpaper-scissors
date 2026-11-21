let humanScore = 0;

let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];

  const randomChoice = choices[Math.floor(Math.random() * choices.length)];

  return randomChoice;
}

function getHumanChoice() {
  let rawInput = prompt("Select an option(rock,paper,scissors)");
  if (rawInput === null) {
    return "try again";
  } else if (rawInput === rock) {
    return true;
  }
  let cleanInput = rawInput.toLowerCase();

  return cleanInput;
}

function playRound(humanChoice, computerChoice) {
  let humangameplay = getHumanChoice(humanChoice);

  let computergameplay = getComputerChoice(computerChoice);

  // computer wins here

  if (computergameplay === humangameplay) {
    return "Tie!";
  } else if (computergameplay === "rock" && humangameplay === "scissors") {
    computerScore += 1;

    return "computer wins";
  } else if (computergameplay === "scissors" && humangameplay === "paper") {
    computerScore += 1;

    return "computer wins";
  } else if (computergameplay === "paper" && humangameplay === "rock") {
    computerScore += 1;

    return "computer wins";
  }

  // Human wins here
  else if (humangameplay === "rock" && computergameplay === "scissors") {
    humanScore += 1;

    return "Human wins";
  } else if (humangameplay === "scissors" && computergameplay === "paper") {
    humanScore += 1;

    return "Human wins";
  } else if (humangameplay === "paper" && computergameplay === "rock") {
    humanScore += 1;

    return "Human wins";
  }
}

for (let i = 0; i < 5; i++) {
  console.log(playRound());
}
if (humanScore > computerScore) {
  console.log("You won this!");
} else if (computerScore > humanScore) {
  console.log("The computer has won this!");
} else if (computerScore === humanScore) {
  console.log("It's a tie!");
} else {
  console.log("Try again");
}

console.log(`The amount of times the human score is: ${humanScore}`);

console.log(`The amount of times the computer score is: ${computerScore}`);
