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
  let computerSelection = getComputerChoice();
  let playerSelection = "";

  let roundResult = document.getElementById('round-result');
  let gameResult = document.getElementById('game-result');

    // create variables that store the values of the buttons
    // const rockButton = document.querySelector('#rock');
    // const paperButton = document.querySelector('#paper');
    // const scissorsButton = document.querySelector('#scissors');

        function getComputerChoice() {
          let randomizedChoice = Math.floor(Math.random() * computerChoices.length)

          return computerChoices[randomizedChoice];
        }


        console.log(`Computer chose: ${computerSelection}`);

        const restart = document.getElementById('restart');
        const buttons = document.querySelectorAll('button');

      buttons.forEach((button) => {
        button.addEventListener('click', gameSession => {
          playerSelection = button.id;
          console.log(playerSelection);
          // const computerSelection = getComputerChoice();
          result = gameSession(computerSelection, playerSelection);
          // console.log(result);
          // alert(result);
          gameCount++;  // increment the game count

          computerSelection = getComputerChoice();

          let round = document.getElementById('round');
          round.textContent = `Round: ${gameCount}`;
          let playerPoints = document.getElementById('player-points');
          playerPoints.textContent = `Player: ${playerScore}`;
        let computerPoints = document.getElementById('computer-points');
          computerPoints.textContent = `Computer: ${computerScore}`;


            if (gameCount === 5 && playerScore > computerScore) {
              gameResult.innerHTML = `You win ${playerScore} to ${computerScore}! Congratulations!`;
              round.style.visibility = "hidden";
              gameResult.style.marginRight = "auto";
              playerPoints.style.visibility = "hidden";
              computerPoints.style.visibility = "hidden";

            } else if (gameCount === 5 && computerScore > playerScore) {
              gameResult.textContent = `You lose ${computerScore} to ${playerScore}! Better luck next time!`;
              playerPoints.style.visibility = "hidden";
              computerPoints.style.visibility = "hidden";

            } else if (gameCount === 5 && computerScore === playerScore) {
              gameResult.textContent = `It's a tie! You both won ${playerScore} out of 5!`;

              playerPoints.style.visibility = "hidden";
              computerPoints.style.visibility = "hidden";

            }else if (gameCount > 5) {
              gameResult.textContent = `Game over!`;
              gameResult.style.alignContent = "center";
              round.style.visibility = "hidden";
              roundResult.style.visibility = "hidden";
              playerPoints.style.visibility = "hidden";
              computerPoints.style.visibility = "hidden";

            }
             else {
              if (gameCount < 5 && playerScore === 3) {
                gameResult.textContent = `You win ${playerScore} to ${computerScore}!`;

            } else if (gameCount < 5 && computerScore === 3) {
              gameResult.textContent = `You lose ${computerScore} to ${playerScore}!`;

            }
            }

            console.log(computerSelection)

        function gameSession(computerSelection, playerSelection) {
            // playerSelection = playerSelection.toLowerCase();

              gameResult.textContent = "";
            if (playerSelection === computerSelection) {
              roundResult.textContent = `It's a tie! You both chose ${playerSelection}`;
              return

            } else if (
            (playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")
            ) {
                playerScore++;
                roundResult.textContent = `You win! ${playerSelection} beats ${computerSelection}`;


              } else {
            computerScore++;

            roundResult.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;


         }

        }


         function refreshPage(){
           window.location.reload();
          }

         document.getElementById("restart").addEventListener("click", refreshPage);



          console.log(gameCount);
          console.log(playerScore);
          console.log(computerScore);

        })
      })
  }

  game();
