// console.log("Hello World");

let humanScore = 0, computerScore = 0;

function getHumanChoice() {
    let humanChoice = prompt("Open the Console to play Rock, Paper or Scissors!");
    if (['rock', 'paper', 'scissors'].includes(humanChoice.toLowerCase())) {
        return humanChoice.toLowerCase();
    } else {
        console.log("Incorrect entry");
        return null; // Return null to indicate invalid input
    }
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice, computerChoice) {
    if (!humanChoice) return; // Exit if humanChoice is null

    if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock')) {
        console.log("You Win " + humanChoice + " beats " + computerChoice);
        humanScore++;
        checkWinCondition();
    } else if (humanChoice === computerChoice) {
        console.log("It's a Draw You both selected " + humanChoice);
    } else {
        console.log("You Lose " + computerChoice + " beats " + humanChoice);
        computerScore++;
        checkWinCondition();
    }
}

function checkWinCondition() {
    if (humanScore >= 5) {
        console.log("Congratulations You have won 5 games in a row.");
        return true; // Stop further rounds
    }
    return false; // Continue playing
}

function score() {
    console.log("Current score: Player:" + humanScore + " Computer: " + computerScore);
}

function finalscore() {
    if (humanScore > computerScore) {
        console.log("You Win " + humanScore + " to " + computerScore + " Congratulations!");
    } else if (humanScore < computerScore) {
        console.log("You Lose " + humanScore + " to " + computerScore);
    } else {
        console.log("Game Ends in a draw, " + humanScore);
    }
}

function game() {
    for (let i = 0; i < 5; i++) { // Play exactly 5 rounds
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        score();
    }
    finalscore();
}

game();