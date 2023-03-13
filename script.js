'use strict';

const overAllHome = document.getElementById('home-score');
const overAllGuess = document.getElementById('guest-score');


let homeScore = 0;
let guessScore = 0;

function hOne() {
    homeScore = homeScore + 1;
    overAllHome.textContent = homeScore;
}

function hTwo() {
    homeScore = homeScore + 2;
    overAllHome.textContent = homeScore;
}

function hThree() {
    homeScore = homeScore + 3;
    overAllHome.textContent = homeScore;
}



function gOne() {
    guessScore = guessScore + 1;
    overAllGuess.textContent = guessScore;
}

function gTwo() {
    guessScore = guessScore + 2;
    overAllGuess.textContent = guessScore;
}

function gThree() {
    guessScore = guessScore + 3;
    overAllGuess.textContent = guessScore;
}


