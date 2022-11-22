// @ts-check

let rollCount=0;
let playerScore =0;
let computerScore =0;

function fight(a,b) {

    if (a == b) {
        result(1);
    } else if ((a == "halfheart" && b =="wink") || 
                (a == "wink" && b =="peace") || 
                (a == "peace" && b =="halfheart") )  {
                    result(2);
    } else {
        result(0);
    }

    return ;
}

function updateResult () {
    const computerScoreElement = document.querySelector('.computerScore');
    const playerScoreElement = document.querySelector('.playerScore');
    const computerRow = document.querySelector('.computer.row');
    const playerRow = document.querySelector('.player.row');
    computerScoreElement.textContent = `${computerScore}`;
    playerScoreElement.textContent = `${playerScore}`;
    if (playerScore == 5) {
        playerRow.className = "player row win";
    } else if (computerScore==5) {
        computerRow.className = "computer row win";
    } else {
        playerRow.className = "player row";
        computerRow.className = "computer row";
    }
}

function result(a) {
    // a: 0=lose, 1= draw, 2=win
    const playerResult = document.querySelector('.playerResult');
    const computerResult = document.querySelector('.computerResult');
    switch (a) {
        case 0:
            playerResult.className="playerResult lose";
            computerResult.className="computerResult win";
            computerScore++;
            updateResult();
            break;
        case 1:
            playerResult.className="playerResult draw";
            computerResult.className="computerResult draw";
            break;
        case 2:
            playerResult.className="playerResult win";
            computerResult.className="computerResult lose";
            playerScore++;
            updateResult();
            break;
        default:
            break;
    }
}

function win () {

}

function lose () {

}

function swap() {


    if (rollCount>0 && (this.className == "second")) {
    const li1 = document.querySelector('.first');
    const li2 = document.querySelector('.second');
    const li3 = document.querySelector('.third');

    li1.className ="third";

    li2.className ="first";
    li3.className ="second"; 
    rollCount--;

    } else if (rollCount==0 && (this.className == "second")) {
        console.log(this.firstChild.className);
        const playerChoicediv= document.querySelector('.playerChoice');
        fight(playerChoicediv?.firstChild?.className,this.firstChild.className);

    }

}

function startRoll() {
    const li1 = document.querySelector('.first');
    const li2 = document.querySelector('.second');
    const li3 = document.querySelector('.third');
    if (li1.firstChild) {li1?.removeChild(li1.firstChild)};
    if (li2.firstChild) {li2?.removeChild(li2.firstChild)};
    if (li3.firstChild) {li3?.removeChild(li3.firstChild)};
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
    if (playerChoicediv.firstChild) {
        playerChoicediv.removeChild(playerChoicediv.firstChild);
    }
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

