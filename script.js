// Declare DOM Buttons
const announcement = document.querySelector('.announcement')
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const resetButton = document.querySelector('#resetButton');
const buttonChoices = document.querySelectorAll('.choice');

// Assign Event listener to each buttons
resetButton.addEventListener('click', resetRound);
buttonChoices.forEach((button) => {
    button.addEventListener('click', playerChooseThis);
    button.style.visibility = "visible";
});

// Initialize Score
let playerWon = 0;
let computerWon = 0;

// DOM Function: Reset the Rounds
function resetRound() {
    playerScore.textContent = 0;
    playerWon = 0;
    computerScore.textContent = 0;
    computerWon = 0;
    buttonChoices.forEach((button) => {
        button.style.visibility = "visible";
    });
    announcement.textContent = ""
}

// Function: Check if either players won 5 rounds
function checkRound() {
    if (playerWon == 5) {
        announcement.textContent = "Player Won! Click 'Reset' to play again!";
        buttonChoices.forEach((button) => {
            button.style.visibility = "hidden";
        });
    }
    if (computerWon == 5) {
        announcement.textContent = "Computer Won! Click 'Reset' to play again!"
        buttonChoices.forEach((button) => {
            button.style.visibility = "hidden";
        });
    }
}

// DOM Function: Assign Player Selected Choice(Value)
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
    checkRound();
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
        announcement.textContent = `IT'S A TIE! YOU BOTH CHOSE ${player}`;
        return "tie";
    }
    if (player === "ROCK") {
        if (computer === "SCISSORS") {
            announcement.textContent = `YOU WIN! ${player} BEATS ${computer}`;
            return "playerWin";
        } else {
            announcement.textContent = `YOU LOSE! ${computer} BEATS ${player}`;
            return "computerWin"
        }
    }
    if (player === "PAPER") {
        if (computer === "ROCK") {
            announcement.textContent = `YOU WIN! ${player} BEATS ${computer}`;
            return "playerWin";
        } else {
            announcement.textContent = `YOU LOSE! ${computer} BEATS ${player}`;
            return "computerWin"
        }
    }
    if (player === "SCISSORS") {
        if (computer === "PAPER") {
            announcement.textContent = `YOU WIN! ${player} BEATS ${computer}`;
            return "playerWin";
        } else {
            announcement.textContent = `YOU LOSE! ${computer} BEATS ${player}`;
            return "computerWin"
        }
    }
}