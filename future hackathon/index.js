console.log("working");
//slider functionality
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".wrapper");
const pageDisplay = document.querySelector(".pageNotation");
let current = 0,
  noOfPages = 15;

left.addEventListener("click", function (e) {
  if (e.target.closest("button").classList.contains("slider-btn")) {
    current--;
    goTo(current);
    check(current);
  }
});

right.addEventListener("click", function (e) {
  if (e.target.closest("button").classList.contains("slider-btn")) {
    current++;
    goTo(current);
    check(current);
  }
});

function goTo(current) {
  container.style.transform = `translateX(${-current * 100}vw)`;
}

function check(cur) {
  if (cur === -1) {
    current = 14;
    goTo(current);
  }
  if (cur + 1 > noOfPages) {
    current = 0;
    goTo(current);
  }
  pageDisplay.textContent = `${current + 1}/15`;
}
//homeLink functionality
const homeLink = document.querySelector(".homeLink");

homeLink.addEventListener("click", function () {
  goTo(0);
  current = 0;
  check(current);
});

//factLink functionality
const factLink = document.querySelector(".factsLink");

factLink.addEventListener("click", function () {
  goTo(1);
  current = 1;
  check(current);
});

//contactMe and aboutMe functionality
const contactMe = document.querySelector(".contactMe");
const aboutMe = document.querySelector(".aboutMe");
const overlay = document.querySelector(".overlay");
const contactMeModal = document.querySelector(".contactMeModal");
const aboutMeModal = document.querySelector(".aboutMeModal");

contactMe.addEventListener("click", function () {
  contactMeModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

aboutMe.addEventListener("click", function () {
  aboutMeModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

overlay.addEventListener("click", function () {
  contactMeModal.classList.add("hidden");
  aboutMeModal.classList.add("hidden");
  overlay.classList.add("hidden");
});
