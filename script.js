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
        playerOutcome = "You Win! " + a + " beats " + b + ".";
    } else {
        playerOutcome = "You Lose! " + b + " beats " + a + ".";
    }

    return playerOutcome;
}

// let playerSelection = prompt("Rock, Paper, Scissors?");
// while (playerSelection != "Rock" && playerSelection != "Paper" && playerSelection != "Scissors" ) {
//     playerSelection = prompt("Rock, Paper, Scissors?");
        // if  (typeof playerSelection == "string") {
        //     playerSelection= playerSelection.slice(0,1).toUpperCase() + playerSelection.slice(1).toLowerCase();
        // }
// }

// let playerSelectionCorrected = playerSelection.slice(0,1).toUpperCase() + playerSelection.slice(1).toLowerCase();

// let computerSelection = getComputerChoice();


