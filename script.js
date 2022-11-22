// @ts-check

let rollCount=0;
let playerScore =0;
let computerScore =0;
let buttonState = false;
let timer1 = "first";

function fight(a) {
    const playerChoicediv= document.querySelector('.playerChoice');
    const b = playerChoicediv.firstChild.className
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
    allowButtons();
}

function win () {

}

function lose () {

}



function startRoll() {
    function initializeCard(liElement,pick) {
        if (liElement.firstChild) {liElement?.removeChild(liElement.firstChild)};
        const sieun = document.querySelector(pick);
        const clone = sieun.cloneNode(false);
        liElement?.appendChild(clone);
    }
    
    function startMove(element1,element2,element3,timer) {
        function moveall () {
            if (rollCount <= 0 && chosenElement.offsetTop<=141 && chosenElement.offsetTop >=131 ) {
                clearInterval(timer);
                element1.style.top = '0px';
                element2.style.top = '0px';
                element3.style.top = '0px';
                chosenElement.style.top = '131px';
                fight(chosenElement.firstChild.className);
            } else {
                let pos = element3.offsetTop;
                rollCount--;
                pos = pos - 11;
                const pos1 = ((pos-262)%393+393)%393;
                const pos2 = ((pos-131)%393+393)%393;
                const pos3 = (pos%393+393)%393;
                element1.style.top = pos1 + 'px';
                element2.style.top = pos2 + 'px';
                element3.style.top = pos3 + 'px';
                    }
        }
        element1.style.top = '0px';
        element2.style.top = '131px';
        element3.style.top = '262px';
        clearInterval(timer);
        timer = setInterval(moveall,20);
    }

    function getComputerChoice() {
        const random =Math.floor(Math.random()*3)
        switch (random) {
            case 0:
                chosenElement = li1;
                break;
            case 1:
                chosenElement = li2;
                break;
            case 2:
                chosenElement = li3;
                break;
            default:
                break;
        }
    }

    const li1 = document.querySelector('.first');
    const li2 = document.querySelector('.second');
    const li3 = document.querySelector('.third');
    initializeCard(li1,'.halfheart');
    initializeCard(li2,'.wink');
    initializeCard(li3,'.peace');
    let chosenElement = li1;
    getComputerChoice();
    rollCount=5*25; 
    console.log(chosenElement);
    startMove(li1,li2,li3,timer1);
    return;
}

function playerHasSelected (e) {
    const playerResult = document.querySelector('.playerResult');
    const computerResult = document.querySelector('.computerResult');
    playerResult.className="playerResult";
    computerResult.className="computerResult";

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

function allowButtons() {
    buttonState = false;
    const status = document.querySelector('.status');
    status.textContent= 'Choose your Sieun..';
}

const selector = document.querySelectorAll('.selector');
selector.forEach(element => element.addEventListener('click',playerHasSelected));


