/*
* Functions:
*   1. getPlayerChoice()
*   2. getComputerChoice())
*   3. game()
*   4. playRound()
*   
* Parameters:
*   1. playerSelection
*   2. computerSelection
*/

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

playRound();

// Function: Generate Computer's Choice
function getComputedChoice() {
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

// Function: Start the round
function playRound() {
    let playerScore = 0;
    let computerScore = 0;
    while((playerScore < 5) && (computerScore < 5)) {
        // Ask Player's Choice
        let playerSelection = prompt("Rock, Paper, or Scissors?").toUpperCase();
        // Generate Computer's Choice
        let computerSelection = getComputedChoice();
        // Compare Choices
        let result = compareSelection(playerSelection, computerSelection);
        if (result === "playerWin"){
            playerScore++;
        }
        if (result === "computerWin"){
            computerScore++;
        }
        console.log(`Player: ${playerScore}; Computer: ${computerScore}`);
    }
    if (playerScore > computerScore) {
        console.log("You Win!");
    } else {
        console.log("You Lose!");
    }
}

// Function: Start the game
function game() {

}
