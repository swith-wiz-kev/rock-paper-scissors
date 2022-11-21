// @ts-check

let rollCount=0;
const li1 = document.querySelector('.first');
const li2 = document.querySelector('.second');
const li3 = document.querySelector('.third');

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

function swap() {
    console.log (this.className);

    if (rollCount>0 && (this.className == "second")) {
    const li1 = document.querySelector('.first');
    const li2 = document.querySelector('.second');
    const li3 = document.querySelector('.third');
    console.log(li1.className);
    li1.className ="third";
    console.log(li1.className);
    li2.className ="first";
    li3.className ="second"; 
    rollCount--;
    console.log(rollCount);
    }

}

function startRoll() {
    const li1 = document.querySelector('.first');
    const li2 = document.querySelector('.second');
    const li3 = document.querySelector('.third');
    
    const sieun1 = document.querySelector('.halfheart');
    const clone1 = sieun1.cloneNode(false);
    li1?.appendChild(clone1);

    const sieun2 = document.querySelector('.wink');
    const clone2 = sieun2.cloneNode(false);
    li2?.appendChild(clone2);

    const sieun3 = document.querySelector('.peace');
    const clone3 = sieun3.cloneNode(false);
    li3?.appendChild(clone3);

    li1.className ="third";
    li2.className ="first";
    li3.className ="second"; 
    
    rollCount=10 + Math.floor(Math.random()*3);
    
    return;
}

function playerHasSelected (e) {
    console.log(e);
    console.log(e.target.className);
    while (!buttonState) {
    const playerChoicediv= document.querySelector('.playerChoice');
    const clone = e.target.cloneNode(false);
    playerChoicediv?.appendChild(clone);
    startRoll();
    disallowButtons();
    }
}

function disallowButtons() {
    buttonState = true;
    const status = document.querySelector('.status');
    status.textContent= 'Waiting for results..';
}

let buttonState = false;
const selector = document.querySelectorAll('.selector');
selector.forEach(element => element.addEventListener('click',playerHasSelected));

const rollList = document.querySelectorAll('li');
rollList.forEach(element => element.addEventListener('transitionend',swap));

