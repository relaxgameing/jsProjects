"use strict";

const learnmore = document.querySelector(".learnmore");
const section1 = document.querySelector(".section-1");
const navbar = document.querySelector(".Nav");
const legend = document.querySelector(".legends");
const header = document.querySelector(".header");

// ///////////////////////////////////////
// // Modal window

// const modal = document.querySelector(".modal");
// const overlay = document.querySelector(".overlay");
// const btnCloseModal = document.querySelector(".btn--close-modal");
// const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

// const openModal = function () {
//   modal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// };

// const closeModal = function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// };

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener("click", openModal);

// btnCloseModal.addEventListener("click", closeModal);
// overlay.addEventListener("click", closeModal);

// document.addEventListener("keydown", function (e) {
//   if (e.key === "Escape" && !modal.classList.contains("hidden")) {
//     closeModal();
//   }
// });

///////////////////////////////////////
// operator

let previous = ".btn1";
let currentPara = 1;

legend.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("operation-btn")) {
    //getting ready for the new text
    document.querySelector(previous).classList.remove("btn-active");
    document
      .querySelector(`.operation-para-${currentPara}`)
      .classList.add("hidden");
    //updating variable
    previous = "." + e.target.classList.item(1);
    currentPara = Number(previous.charAt(previous.length - 1));
    //updationg dom
    e.target.classList.add("btn-active");
    document
      .querySelector(`.operation-para-${currentPara}`)
      .classList.remove("hidden");
  }
});
///////////////////////////////////////
//smooth scrolling

learnmore.addEventListener("click", function () {
  const coords = section1.getBoundingClientRect();
  console.log(coords);
  console.log(window.pageXOffset, window.pageYOffset);
  window.scrollTo(
    window.pageXOffset + coords.left,
    window.pageYOffset + coords.top
  );
});
///////////////////////////////////////
// nav link scroll
navbar.addEventListener("click", function (el) {
  el.preventDefault;
  if (el.target.classList.contains("navBtns")) {
    const id = el.target.getAttribute("href");
    document.querySelector(id).scrollIntoView();
  }
});
///////////////////////////////////////
//hover effect in nav

function opacity(e, opacity) {
  if (e.target.classList.contains("navBtns")) {
    const links = e.target.closest(".Nav").querySelectorAll(".navBtns");
    const img = e.target.closest(".Nav").querySelector("#logo");
    links.forEach((el) => {
      if (el != e.target) {
        el.style.opacity = opacity;
      }
    });
    img.style.opacity = opacity;
  }
}
navbar.addEventListener("mouseover", function (e) {
  opacity(e, 0.5);
});
navbar.addEventListener("mouseout", function (e) {
  opacity(e, 1);
});

///////////////////////////////////////
//inplementing sticky nav

const f = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};
const observeroption = {
  root: null,
  threshold: 0,
  rootMargin: `-90px`,
};

const observer = new IntersectionObserver(f, observeroption);

observer.observe(header);
///////////////////////////////////////
// to reveal section while scrolling

const sections = document.querySelectorAll(".section");
const reveal = function (entries) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    // let id = entry.target.id
    // console.log(id);
    // document.getElementById(id).classList.remove("section-hidden")
    entry.target.classList.remove("section-hidden");
    observer.unobserve(entry.target);
  }
};

const reoption = {
  root: null,
  threshold: 0.15,
};

const sectionObserver = new IntersectionObserver(reveal, reoption);

sections.forEach(function (section) {
  sectionObserver.observe(section);
});

///////////////////////////////////////
// to reveal photos

const filterRemove = function (entries) {
  const [entry] = entries;
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazyImg");
  });
  observer.unobserve(entry.target);
};

const photobserver = new IntersectionObserver(filterRemove, {
  root: null,
  threshold: 0.5,
});

const photo = document.querySelectorAll(".lazyImg");

photo.forEach(function (photo) {
  photobserver.observe(photo);
});

///////////////////////////////////////
// to implement slider
const rightBtn = document.querySelector(".slider-right");
const leftBtn = document.querySelector(".slider-left");
const blog = document.querySelectorAll(".blog");
const align = document.querySelector(".align");

let x = 1;
rightBtn.addEventListener("click", function goright() {
  if (x < 3) {
    align.style.transform = `translateX(${-60 * x}%)`;
    x++;
  } else {
    x = 0;
    align.style.transform = `translateX(${-60 * x}%)`;
    x++;
  }
});
leftBtn.addEventListener("click", function goleft() {
  console.log("inside left");
  if (x > 1) {
    align.style.transform = `translateX(${60 * (2 - x)}%)`;
    x--;
  } else {
    x = 4;
    align.style.transform = `translateX(${60 * (2 - x)}%)`;
    x--;
  }
});
