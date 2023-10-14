// create an object that shows the winning combinations
const winningCombinations = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
}
// create a variable that stores computer choices
const computerChoices = Object.keys(winningCombinations);
// need a function called getComputerChoice
// the function should return a random choice of rock, paper, or scissors
function getComputerChoice() {
  let randomizedChoice = Math.floor(Math.random() * computerChoices.length)

  return computerChoices[randomizedChoice];
}

const computerSelection = getComputerChoice();

console.log(computerSelection);

// write a function that plays a single round of rock paper scissors
// function should take two parameters: playerSelection and computerSelection
// function should return a string that declares the winner of the round
function gameSession(computerSelection, playerSelection) {
  playerSelection = playerSelection.toLowerCase(); // Make player's selection case-insensitive

  if (playerSelection === computerSelection) {
    return `It's a tie! You both chose ${playerSelection}`

  } else if (playerSelection === "rock" && computerSelection === "scissors") {
      return "You win! Rock beats scissors"

  } else if (playerSelection === "paper" && computerSelection === "rock") {
      return "You win! Paper beats rock"

  } else if (playerSelection === "scissors" && computerSelection === "paper") {
      return "You win! Scissors beats paper"

  } else
      return `You lose! ${computerSelection} beats ${playerSelection}`;

}

// the players selection should be case insensitive
let playerSelection = prompt("Choose rock, paper, or scissors");
console.log(gameSession(computerSelection, playerSelection));
