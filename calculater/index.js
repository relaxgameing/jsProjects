"using strict";

const buttons = document.querySelectorAll(".btn");
const clear = document.querySelectorAll(".clear");
const del = document.querySelectorAll(".del");
const equals = document.querySelectorAll(".equals");
const input = document.querySelector(".input");
const output = document.querySelector(".output");

buttons.forEach(function (currentBtn, i) {
  currentBtn.addEventListener("click", function () {
    const temp = document.querySelector(`.btn-${i}`).textContent;
    input.textContent += temp;
  });
});

document.querySelector(".clear").addEventListener("click", function () {
  input.textContent = "";
  output.textContent = "";
});

document.querySelector(".del").addEventListener("click", function () {
  const temp = input.textContent.substring(0, input.textContent.length - 1);
  input.textContent = temp;
});

document.querySelector(".equals").addEventListener("click", function () {
  output.textContent = eval(input.textContent);
  input.textContent = "";
});
document.addEventListener("keydown", function (btn) {
  if (Number(btn.key) >= 0 && Number(btn.key) < 9) {
    input.textContent += btn.key;
  } else if (
    btn.key === "+" ||
    btn.key === "-" ||
    btn.key === "*" ||
    btn.key === "/" ||
    btn.key === "."
  ) {
    input.textContent += btn.key;
  } else if (btn.key === "=") {
    output.textContent = eval(input.textContent);
    input.textContent = "";
  }
});
