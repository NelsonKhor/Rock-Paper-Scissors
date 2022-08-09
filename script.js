/*
Pseudocode:
Start game
Ask player to start game or exit
    if Start game
        Initialize scores
        Start round
            Ask player to make a choice
            Generate a computer choice
            Compare player choice with computer choice
            if player wins
                player score + 1
            else if computer wins
                computer score + 1
            else tie
                do nothing
            if player's score or computer's score is 5
                announce winner
                Exit round
            else
                Repeat round
    else
        Exit game
Exit program
*/

// DOM Buttons Initialization

const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const resetButton = document.querySelector('#resetButton');

const buttonChoices = document.querySelectorAll('.choice');

buttonChoices.forEach((button) => {
    button.addEventListener('click', playerChooseThis);
});
resetButton.addEventListener('click', resetRound);

let count = 0;
let playerWon = 0;
let computerWon = 0;

// DOM Function: Reset rounds
function resetRound() {
    playerScore.textContent = 0;
    playerWon = 0;
    computerScore.textContent = 0;
    computerWon = 0;
    count = 0;
}

// Function: check if either player have 5 rounds

// DOM Function: Assign player selection value
function playerChooseThis(e) {
    let playerChoice = e.target.value;
    let compChoice = getComputerChoice();
    let result = compareSelection(playerChoice,compChoice);
    if (result === "playerWin") {
        playerWon++;
        playerScore.textContent = playerWon;
    }
    if (result === "computerWin") {
        computerWon++;
        computerScore.textContent = computerWon;
    }
    count++;
    console.log(`Count = ${count}; Player = ${playerWon}; Computer = ${computerWon}`);
}

// Function: Generate Computer's Choice
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3);
    if (randomNumber === 0) {
        return 'ROCK';
    } else if (randomNumber === 1){
        return 'PAPER';
    } else {
        return 'SCISSORS';
    }
}

// Function: Compare Player and Computer Choices
function compareSelection(player, computer) {
    if (player === computer) {
        console.log(`IT'S A TIE! YOU BOTH CHOSE ${player}`);
        return "tie";
    }
    if (player === "ROCK") {
        if (computer === "SCISSORS") {
            console.log(`YOU WIN! ${player} BEATS ${computer}`);
            return "playerWin";
        } else {
            console.log(`YOU LOSE! ${computer} BEATS ${player}`);
            return "computerWin"
        }
    }
    if (player === "PAPER") {
        if (computer === "ROCK") {
            console.log(`YOU WIN! ${player} BEATS ${computer}`);
            return "playerWin";
        } else {
            console.log(`YOU LOSE! ${computer} BEATS ${player}`);
            return "computerWin"
        }
    }
    if (player === "SCISSORS") {
        if (computer === "PAPER") {
            console.log(`YOU WIN! ${player} BEATS ${computer}`);
            return "playerWin";
        } else {
            console.log(`YOU LOSE! ${computer} BEATS ${player}`);
            return "computerWin"
        }
    }
    // invalid comparison
    console.log("INVALID INPUT: CHOOSE BETWEEN ROCK, PAPER, AND SCISSOR");
}