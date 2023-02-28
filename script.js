'use strict';

// const btnHome1 = document.querySelector('.btn-1');
// const btnHome2 = document.querySelector('.btn-2');
// const btnHome3 = document.querySelector('.btn-3');
// const homeScore = document.getElementById('home-score');


// let btns = 0;


// btnHold1.addEventListener('click', function() {
//     btns += 1;
//     document.getElementById('home-score').textContent = btns;
// });

// const homeScore = document.getElementById("home-score");
// const guestScore = document.getElementById("guest-score");

// let initialHomeScore = 0;
// let initialGuestScore = 0;

// function haddone() {
//     initialHomeScore += 1;
//     homeScore.textContent = initialHomeScore;
// }

// function gaddone() {
//     initialGuestScore +=1
//     guestScore.textContent = initialGuestScore;
// }

// function haddtwo() {
//     initialHomeScore += 2
//     homeScore.textContent = initialHomeScore;
// }

// function gaddtwo() {
//     initialGuestScore +=2
//     guestScore.textContent = initialGuestScore;
// }

// function haddthree() {
//     initialHomeScore += 3
//     homeScore.textContent = initialHomeScore;
// }

// function gaddthree() {
//     initialGuestScore +=3
//     guestScore.textContent = initialGuestScore;
// }



const homeScore = document.getElementById('home-score');
const guestScore = document.getElementById('guest-score');


let hScore = 0;
let gScore = 0;

function gaddOne() {
    hScore += 1;
    document.getElementById('home-score').textContent = hScore;
}

function gaddTwo() {
    hScore += 2;
    document.getElementById('home-score').textContent = hScore;
}

function gaddThree() {
    hScore += 3;
    document.getElementById('home-score').textContent = hScore;
}

function haddOne() {
    gScore += 1;
    document.getElementById('guest-score').textContent = gScore;
}

function haddTwo() {
    gScore += 2;
    document.getElementById('guest-score').textContent = gScore;
}

function haddThree() {
    gScore += 3;
    document.getElementById('guest-score').textContent = gScore;
}