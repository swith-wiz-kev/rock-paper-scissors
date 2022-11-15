// @ts-check
function getComputerChoice() {
    const choice = Math.floor(Math.random()*3);
    if (choice == 0) {
        return "Rock";
    } else if (choice == 1) {
        return "Paper";
    } else {
        return "Scissors";
    }   
}

function fight(a,b) {
    let playerOutcome = "";
    if (a == b) {
        playerOutcome = "Draw! Both chose " + a + ".";
    } else if ((a == "Rock" && b =="Scissors") || (a == "Scissors" && b =="Paper") || (a == "Paper" && b =="Rock") )  {
        playerOutcome = "You Win! " + a + "(You) beats " + b + "(Computer).";
    } else {
        playerOutcome = "You Lose! " + b + "(Computer) beats " + a + "(You).";
    }

    return playerOutcome;
}

function getPlayerChoice() {
    let playerSelection;
    let playerSelectionCorrected;
    while (playerSelectionCorrected != "Rock" && playerSelectionCorrected != "Paper" && playerSelectionCorrected != "Scissors" ) {
        playerSelection = prompt("Rock, Paper, Scissors?");
        if  (typeof playerSelection == "string") {
            playerSelectionCorrected= playerSelection.slice(0,1).toUpperCase() + playerSelection.slice(1).toLowerCase();
        }
    }
    return playerSelectionCorrected;
}

function game() {
    let playerScore =0;
    let computerScore =0;
    for (let i = 0; i < 5; i++) {
        if (i>0) {
            console.log("Player: " + playerScore.toString());
            console.log("Computer: " + computerScore.toString());
        }
        console.log("");
        let result = fight(getPlayerChoice(),getComputerChoice());
        if (result.includes("Win")) {
            playerScore += 1;
            console.log(result);
        } else if (result.includes("Lose")) {
            computerScore += 1;
            console.log(result);
        } else {
            console.log(result);
        }
    }
    console.log("Final Scores!");
    console.log("Player: " + playerScore.toString());
    console.log("Computer: " + computerScore.toString());
    if (playerScore > computerScore) {
        console.log("The winner is You!");
    } else if (computerScore > playerScore) {
        console.log("The winner is Computer!");
    } else {
        console.log("The game is a Draw!")
    }
}