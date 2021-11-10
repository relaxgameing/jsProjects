"use strict";
let random = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
// console.log(random);
document.querySelector(".input-button").addEventListener("click", function () {
  const intake = Number(document.querySelector(".input").value);
  if (intake === random) {
    document.querySelector(".status").textContent = "correct no.🎉";
    if (highScore < score)
      document.querySelector(".high-score").textContent = `${score}`;
    document.querySelector("body").style.backgroundColor = "#23de6b";
    document.querySelector(".input").value = "";
    document.querySelector(".result").textContent = random;
    document.querySelector(".center").style.width = "200px";
    // again();
    let x = 1;
    document
      .querySelector(".input-button")
      .addEventListener("click", function () {
        if (x === 1) again();
        x++;
      });
  } else if (intake > random) {
    document.querySelector(".status").textContent =
      "no. is larger then goal no.";
    score--;
    document.querySelector(".score").textContent = `${score}`;
  } else {
    document.querySelector(".status").textContent =
      "no. is smaller than goal no.";
    score--;
    document.querySelector(".score").textContent = `${score}`;
  }
  if (score === 0) {
    document.querySelector(".status").textContent = "you lose";
    random = Math.floor(Math.random() * 20 + 1);
    // document.querySelector(".status").textContent = "start guessing...";
    document.querySelector(".input").value = 0;
    score = 20;
    document.querySelector(".score").textContent = `${score}`;
  }
});
document.querySelector(".again").addEventListener("click", function () {
  // random = Math.floor(Math.random() * 20 + 1);
  // document.querySelector(".status").textContent = "start guessing...";
  // document.querySelector(".input").textContent = 0;
  // score = 20;
  // document.querySelector(".score").textContent = `${score}`;
  // document.querySelector("body").style.backgroundColor = "rgba(0, 0, 0, 0.884)";
  // document.querySelector(".result").textContent = "?";
  again();
});

function again() {
  random = Math.floor(Math.random() * 20 + 1);
  document.querySelector(".status").textContent = "start guessing...";
  document.querySelector(".input").textContent = 0;
  score = 20;
  document.querySelector(".score").textContent = `${score}`;
  document.querySelector("body").style.backgroundColor = "rgba(0, 0, 0, 0.884)";
  document.querySelector(".result").textContent = "?";
}
