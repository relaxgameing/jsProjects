"use strict";
const showModal = document.querySelectorAll(".show-modal");

function remove() {
  document.querySelector(".modal").classList.remove("hidden");
  document.querySelector(".overlay").classList.remove("hidden");
}
function add() {
  document.querySelector(".modal").classList.add("hidden");
  document.querySelector(".overlay").classList.add("hidden");
}

for (let i = 0; i < showModal.length; i++) {
  const element = showModal[i].addEventListener("click", function () {
    remove();
  });
}

document.querySelector(".close-modal").addEventListener("click", function () {
  add();
});

document.querySelector(".overlay").addEventListener("click", function () {
  add();
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if (!document.querySelector(".close-modal").classList.contains("hidden")) {
      add();
    }
  }
});
