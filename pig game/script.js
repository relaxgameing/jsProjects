"use strict";
const score1 = document.getElementById("score--0");
const score2 = document.getElementById("score--1");
const current1 = document.getElementById("current--0");
const current2 = document.getElementById("current--1");
const dice = document.querySelector(".dice");

score1.textContent = 0;
score2.textContent = 0;
let currentscore = 0;
let flag = 1;
let reseter = 0;

function scoreAdder(random, flag) {
  currentscore += random;
  if (flag === 1) {
    current1.textContent = currentscore;
  } else {
    current2.textContent = currentscore;
  }
  if (Number(score1.textContent) >= 100) {
    document.querySelector(".player--0").classList.add("player--winner");
    reseter++;
  } else if (Number(score2.textContent) >= 100) {
    document.querySelector(".player--1").classList.add("player--winner");
    reseter++;
  }
}

function condition() {
  if (flag === 1) {
    current1.textContent = 0;
    currentscore = 0;
    flag++;
    document.querySelector(".player--0").classList.remove("player--active");
    document.querySelector(".player--1").classList.add("player--active");
  } else {
    current2.textContent = 0;
    currentscore = 0;
    flag--;
    document.querySelector(".player--1").classList.remove("player--active");
    document.querySelector(".player--0").classList.add("player--active");
  }
}

function hold() {
  if (flag === 1) {
    score1.textContent =
      Number(score1.textContent) +
      (Number(current1.textContent) + currentscore) / 2;
    current1.textContent = 0;
    currentscore = 0;
    flag++;
    document.querySelector(".player--0").classList.remove("player--active");
    document.querySelector(".player--1").classList.add("player--active");
  } else {
    score2.textContent =
      Number(score2.textContent) +
      (Number(current2.textContent) + currentscore) / 2;
    current2.textContent = 0;
    currentscore = 0;
    flag--;
    document.querySelector(".player--1").classList.remove("player--active");
    document.querySelector(".player--0").classList.add("player--active");
  }
  if (Number(score1.textContent) >= 100) {
    document.querySelector(".player--0").classList.add("player--winner");
    reseter++;
  } else if (Number(score2.textContent) >= 100) {
    document.querySelector(".player--1").classList.add("player--winner");
    reseter++;
  }
}

function newgame() {
  score1.textContent = 0;
  score2.textContent = 0;
  reseter--;
  current1.textContent = 0;
  current2.textContent = 0;
  currentscore = 0;
  flag = 1;
  document.querySelector(".player--1").classList.remove("player--active");
  document.querySelector(".player--0").classList.add("player--active");
  document.querySelector(".dice").classList.add("hidden");
  document.querySelector(".player--0").classList.remove("player--winner");
  document.querySelector(".player--1").classList.remove("player--winner");
}

document.querySelector(".btn--roll").addEventListener("click", function () {
  if (reseter === 1) {
    newgame();
  }
  let random = Math.trunc(Math.random() * 6) + 1;
  document.querySelector(".dice").classList.remove("hidden");
  dice.src = `dice-${random}.png`;
  if (random !== 1) {
    scoreAdder(random, flag);
  } else {
    condition();
  }
});

document.querySelector(".btn--hold").addEventListener("click", function () {
  hold();
});

document.querySelector(".btn--new").addEventListener("click", function () {
  newgame();
});
