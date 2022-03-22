"use strict";
import { getData, state } from "./module.js";
import recipeView from "./recipeView.js";
import resultView from "./resultView.js";
import bookmarkView from "./bookmarkView.js";
import icons from "url:../img/icons.svg";

if (module.hot) {
  module.hot.accept();
}

// https://forkify-api.herokuapp.com/v2
// API key ==> d82df151-553f-4cb9-b2fc-78805bac7fc5
// https://forkify-api.herokuapp.com/api/v2/recipes ==> for search for whole recipe

///////////////////////////////////////
console.log("NODE JS");

const searchBtn = document.querySelector(".search__btn");
const recipeContainer = document.querySelector(".recipe");
const spinner = document.querySelector(".spinner");
const message = document.querySelector(".introMessage");
const error = document.querySelector(".error");
const searchInput = document.querySelector(".search__field");

const bookmarkedRecipe = new Map();

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};
function removeSpinner() {
  spinner.classList.add("hidden");
}
function addSpinner() {
  spinner.classList.remove("hidden");
}
function addSpinner2() {
  const html = `
      <div class="spinner-2 spinner ">
      <svg>
        <use href="${icons}#icon-loader"></use>
      </svg>
    </div>
  `;
  recipeContainer.innerHTML = "";
  recipeContainer.insertAdjacentHTML("afterbegin", html);
}
function removeMessage() {
  message.classList.add("hidden");
}

async function loadRecipe(search) {
  try {
    addSpinner();
    removeMessage();

    state.recipes = await Promise.race([getData(search), timeout(10)]);
    state.search = search;
    console.log(state);

    resultView.configResult(state.recipes);
    resultView.pagination();

    removeSpinner();
  } catch (error) {
    console.log(error);
  }
}

function init() {
  recipeView.addHandlerRender(state);

  searchBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const searchFor = searchInput.value;
    console.log(searchFor);
    loadRecipe(searchFor);
  });
}
init();
