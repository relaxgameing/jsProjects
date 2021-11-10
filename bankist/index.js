"use strict";
const user = document.querySelector(".nav-input");
const pin = document.querySelector(".pin");
const navbtn = document.querySelector(".navbtn");
const display = document.querySelector(".display");
const currentBalance = document.querySelector(".balance");
const accountname = document.querySelector(".accountname");
const transferTo = document.querySelector(".transfer-to");
const transferAmount = document.querySelector(".transfer-amount");
const transbtn = document.querySelector(".transbtn");
const loan = document.querySelector(".loan");
const loanbtn = document.querySelector(".loanbtn");
const delacc = document.querySelector(".del-account");
const delpin = document.querySelector(".del-pin");
const delbtn = document.querySelector(".delbtn");
const In = document.querySelector(".in");
const out = document.querySelector(".out");
const intreset = document.querySelector(".intrest");
const sort = document.querySelector(".sort");
const date = document.querySelector(".date");
const logout = document.querySelector(".time");

let balance = 0;
let sorted = false;
let active, timer;

const currentdate = new Date();
const day = currentdate.getDate();
const mon = currentdate.getMonth() + 1;
const year = currentdate.getFullYear();
date.textContent = `as of ${String(day).padStart(2, 0)}/${String(mon).padStart(
  2,
  0
)}/${year}`;

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};
const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};
let accounts = [account1, account2, account3, account4];

accounts.forEach(function (acc) {
  const user = acc.owner;
  acc.username = user
    .toLowerCase()
    .split(" ")
    .map((current) => current[0].charAt(0))
    .join("");
  console.log(acc.username);
});

function displayStats(active) {
  In.textContent = active.movements
    .filter((mov) => mov > 0)
    .reduce(function (acc, temp) {
      return acc + temp;
    }, 0);

  out.textContent = active.movements
    .filter((mov) => mov < 0)
    .reduce(function (acc, temp) {
      return acc + temp;
    }, 0);

  intreset.textContent = active.movements
    .filter((mov) => mov > 0)
    .map((mov) => Math.round((mov * active.interestRate) / 100))
    .reduce(function (acc, temp) {
      return acc + temp;
    }, 0);
}

function displayMovement(movement, sorted = false) {
  balance = 0;
  document.querySelector(".display").textContent = "";
  let newmov = sorted ? movement.slice().sort((a, b) => a - b) : movement;
  newmov.forEach(function (mov, i) {
    const html = `<div class="row">
      <div class="nature">
        <h5 class=${mov > 0 ? "deposite" : "withdrawal"}>${i + 1} ${
      mov > 0 ? "deposite" : "withdrawal"
    }</h5>
        <h5>3 days ago</h5>
      </div>
      <h3>${Math.abs(mov)}</h3>
    </div>`;

    display.insertAdjacentHTML("afterbegin", html);
    balance += mov;
  });
  currentBalance.textContent = `${balance}$`;
}

function displayName(name) {
  accountname.textContent = `Welcome ${name.substring(0, name.indexOf(" "))}!`;
}

function resetinput(...a) {
  a.forEach((mov) => (mov.value = ""));
}

function starttimer() {
  let time = 600;
  const tick = setInterval(() => {
    let min = String(Math.trunc(time / 60)).padStart(2, 0);
    let sec = String(Math.trunc(time % 60)).padStart(2, 0);
    logout.textContent = `${min}:${sec}`;
    if (!time) {
      document.getElementById("main").style.opacity = 0;
      accountname.textContent = "Log in to get started";
    }
    time--;
  }, 1000);

  return tick;
}
navbtn.addEventListener("click", function () {
  accounts.forEach(function (current) {
    if (user.value === current.username && Number(pin.value) === current.pin) {
      document.getElementById("main").style.opacity = 1;
      active = current;
      displayMovement(active.movements);
      displayName(active.owner);
      resetinput(user, pin);
      displayStats(active);

      if (timer) {
        clearInterval(timer);
      }
      timer = starttimer();
    }
  });
});

transbtn.addEventListener("click", function () {
  accounts.forEach(function (current) {
    if (
      transferTo.value === current.username &&
      transferTo.value !== active.username &&
      transferAmount.value <= balance
    ) {
      console.log("true");
      console.log("inside for");
      current.movements.push(Number(transferAmount.value));
      active.movements.push(Number(-transferAmount.value));
      currentBalance.textContent = `${balance - transferAmount.value}$`;
      displayMovement(active.movements);
    }
  });
  resetinput(transferAmount, transferTo);
});

loanbtn.addEventListener("click", function () {
  if (loan.value >= active.movements.some((mov) => mov >= loan.value * 0.1)) {
    active.movements.push(Number(loan.value));
    displayMovement(active.movements, sorted);
    currentBalance.textContent = `${balance}$`;
  }

  resetinput(loan);
});

delbtn.addEventListener("click", function () {
  accounts.forEach(function (current, i) {
    if (
      current.username === delacc.value &&
      current.pin === Number(delpin.value)
    ) {
      accounts = accounts.filter((mov) => mov.owner != current.owner);
      document.getElementById("main").style.opacity = 0;
      console.log(accounts);
    }
  });

  resetinput(delacc, delpin);
});

sort.addEventListener("click", function () {
  displayMovement(active.movements, !sorted);
  sorted = !sorted;
});
