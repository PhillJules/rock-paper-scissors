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
// the players selection should be case insensitive
