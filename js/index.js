"use strict";
////////////////////variables//////////////////////////
let playerScore1 = document.querySelector(".player1-score");
let playerScore2 = document.querySelector(".player2-score");
let playerCurrent1 = document.querySelector(".player1-current");
let playerCurrent2 = document.querySelector(".player2-current");
let playerActiveScore = document.querySelector(".active-card .card-score");
let playerActiveCurrent = document.querySelector(".active-card .current-value");
let cards = document.querySelectorAll(".card")
const newBtn = document.querySelector(".new-game");
const rollBtn = document.querySelector(".roll-dice");
const holdBtn = document.querySelector(".hold");
let diceImage = document.querySelector(".dice-image");
let randomNumber;
let gameOver = false;
/////////////functions///////////////////
function controlCheckWinner() {
    if (playerActiveScore.textContent >= 80) {
        document.querySelector(".active-card .card-heading").textContent = "Winner! 🥳";
        document.querySelector(".active-card ").classList.add("winner");
        return true;
    }
    return false;
}

function controlActivePlayerChanging() {
    for (let i = 0; i < 2; ++i) {
        cards[i].classList.toggle("active-card");
    }
    playerActiveScore = document.querySelector(".active-card .card-score");
    playerActiveCurrent = document.querySelector(".active-card .current-value");

}

function controlRollBtn() {
    if (gameOver === false) {
        randomNumber = Math.trunc(Math.random() * 6) + 1;
        diceImage.src = `images/dice-${randomNumber}.png`;
        if (randomNumber == 1) {
            playerActiveCurrent.textContent = 0;
            controlActivePlayerChanging();
        } else {
            playerActiveCurrent.textContent = Number(playerActiveCurrent.textContent) + randomNumber;
        }
    }
}

function controlHoldBtn() {
    if (gameOver === false) {
        playerActiveScore.textContent = Number(playerActiveScore.textContent) + Number(playerActiveCurrent.textContent);
        playerActiveCurrent.textContent = 0;
        if (controlCheckWinner()) {
            gameOver = true;
        } else {

            controlActivePlayerChanging();
        }
    }
}

function controlNewGame() {
    gameOver = false;
    playerCurrent1.textContent = 0;
    playerCurrent2.textContent = 0;
    playerScore1.textContent = 0;
    playerScore2.textContent = 0;
    document.querySelector(".active-card").classList.remove("winner");
    document.querySelector(".card-1 .card-heading").textContent = "Player-1"
    document.querySelector(".card-2 .card-heading").textContent = "Player-2"
    diceImage.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABODcYhAAEl463hAAAAAElFTkSuQmCC"

    controlPlayerRandomActivenss();
}

function controlPlayerRandomActivenss() {
    for (let i = 0; i < 2; ++i) {
        cards[i].style.transition = "all 0s";
    }
    if (Math.random() > 0.5) {
        if (cards[0].classList.contains("active-card") == false) {
            cards[0].classList.add("active-card");
            cards[1].classList.remove("active-card");
        }
    } else {
        if (cards[1].classList.contains("active-card") == false) {
            cards[1].classList.add("active-card");
            cards[0].classList.remove("active-card");

        }
    }
    for (let i = 0; i < 2; ++i) {
        cards[i].style.transition = "all 0.5s";
    }
    playerActiveScore = document.querySelector(".active-card .card-score");
    playerActiveCurrent = document.querySelector(".active-card .current-value");
}

/////////EventHandlers///////////////
rollBtn.addEventListener("click", controlRollBtn);
holdBtn.addEventListener("click", controlHoldBtn);
newBtn.addEventListener("click", controlNewGame);

//code
controlPlayerRandomActivenss();


