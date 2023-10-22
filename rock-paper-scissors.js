function game() {

// create an object that shows the winning combinations
  const winningCombinations = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  }
// create a variable that stores computer choices
const computerChoices = Object.keys(winningCombinations);
// create a variable that stores the player's score
// create a variable that stores the computer's score
// create a variable that stores the number of games played
let gameCount = 0;
let playerScore = 0;
let computerScore = 0;





  //while (gameCount < 5 && (playerScore < 3 && computerScore < 3) ) {

      function getComputerChoice() {
        let randomizedChoice = Math.floor(Math.random() * computerChoices.length)

        return computerChoices[randomizedChoice];
      }

      const computerSelection = getComputerChoice();

      console.log(computerSelection);

      function gameSession(computerSelection, playerSelection) {
          playerSelection = playerSelection.toLowerCase(); // Make player's selection case-insensitive

          if (playerSelection === computerSelection) {
            return `It's a tie! You both chose ${playerSelection}`

          } else if (
          (playerSelection === "rock" && computerSelection === "scissors") ||
          (playerSelection === "paper" && computerSelection === "rock") ||
          (playerSelection === "scissors" && computerSelection === "paper")
          ) {
              playerScore++;

                return  `You win! ${playerSelection} beats ${computerSelection}`

            } else {
          computerScore++;

          return `You lose! ${computerSelection} beats ${playerSelection}`
        }
      }
      // the players selection should be case insensitive
      let playerSelection = prompt("Choose rock, paper, or scissors");
      console.log(gameSession(computerSelection, playerSelection));

      gameCount++;

        if  (playerScore === 3) {
          console.log ("You win best out of 3!")
        } else if (computerScore === 3) {
          console.log ("You lose best out of 3!")
        } else if (gameCount === 5 && playerScore > computerScore) {
          console.log (`You win ${playerScore} to ${computerScore}!`)
        } else if (gameCount === 5 && computerScore > playerScore) {
          console.log (`You lose ${computerScore} to ${playerScore}!`)
        }

        console.log(gameCount);
        console.log(playerScore);
        console.log(computerScore);
  //}
}

game();
