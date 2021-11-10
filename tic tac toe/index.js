"use strict";
const button = document.querySelectorAll(".btn");
const reset = document.querySelector(".reset");
const player1 = document.querySelectorAll(".player-1");
const player2 = document.querySelectorAll(".player-2");
const data = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

let symbol = ["X", "O"];
let currentplayer = 1;
let scorel = 0;
let scoreh = 0;
let playing = true;
let draw = false;
let flag = 1;

console.log(data);

function switcher(x, y) {
  document.querySelector(`.player-${x}`).classList.toggle("current");

  y === 1
    ? document.querySelector(`.player-${x + 1}`).classList.toggle("current")
    : document.querySelector(`.player-${x - 1}`).classList.toggle("current");
}

function winner(a, b, c) {
  document
    .querySelector(`.player-${currentplayer}`)
    .classList.add("winnerplayer");
  document.querySelector(".player-1").classList.remove("current");
  document.querySelector(".player-2").classList.remove("current");
  document.querySelector(`.btn-${a}`).classList.add("winner");
  document.querySelector(`.btn-${b}`).classList.add("winner");
  document.querySelector(`.btn-${c}`).classList.add("winner");
}

function playerswitch(current) {
  if (current === 1) {
    currentplayer++;
    switcher(current, 1);
  } else {
    currentplayer--;
    switcher(current, 2);
  }
  flag++;
}

function check() {
  //for horizontal
  for (let i = 0; i < 9; i += 3) {
    if (
      data[i] === data[i + 1] &&
      data[i] === data[i + 2] &&
      data[i + 1] === data[i + 2]
    ) {
      winner(i, i + 1, i + 2);
      playing = false;
    }
  }
  //for vertical
  for (let i = 0; i < 3; i++) {
    if (
      data[i] === data[i + 3] &&
      data[i] === data[i + 6] &&
      data[i + 3] === data[i + 6]
    ) {
      playing = false;
      winner(i, i + 3, i + 6);
    }
  }

  //for diagonal
  if (data[2] === data[4] && data[2] === data[6] && data[4] === data[6]) {
    playing = false;
    winner(2, 4, 6);
  } else if (
    data[0] === data[4] &&
    data[0] === data[8] &&
    data[4] === data[8]
  ) {
    playing = false;
    winner(0, 4, 8);
  }
}

button.forEach(function (currentbtn, i) {
  currentbtn.addEventListener("click", function () {
    if (playing) {
      if (flag === 9) {
        playing = false;
      }
      currentbtn.textContent = symbol[currentplayer - 1];
      data[i] = symbol[currentplayer - 1];
      console.log(data);
      check();
      playerswitch(currentplayer);
    }
  });
});
