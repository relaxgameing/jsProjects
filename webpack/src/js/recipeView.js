import icons from "url:../img/icons.svg";
import { resultContainer } from "./config.js";
import { getJSON, addErrorMsg } from "./helper";
import { API_URL } from "./config";
import { Fraction } from "fractional";

class RecipeView {
  #parentElement = document.querySelector(".recipe");
  #state;
  #recipe;
  #amount = 0;

  async showRecipe(id) {
    try {
      const res = await getJSON(`${API_URL.slice(0, -8)}/${id}`);
      const response = res.data.recipe;

      console.log(response);
      if (!response) {
        throw new Error();
      }

      this.#recipe = {
        cookingTime: response.cooking_time,
        id: response.id,
        imageUrl: response.image_url,
        ingredients: response.ingredients,
        publisher: response.publisher,
        servings: response.servings,
        sourceURl: response.source_url,
        title: response.title,
      };

      this._addRecipe(this.#recipe);
    } catch (error) {
      addErrorMsg();
    }
  }

  _addRecipe(recipe) {
    const html = `
            <figure class="recipe__fig">
              <img src="${recipe.imageUrl}" alt="Tomato" class="recipe__img" />
              <h1 class="recipe__title">
                <span>${recipe.title}</span>
              </h1>
            </figure>
  
          <div class="recipe__details">
            <div class="recipe__info">
              <svg class="recipe__info-icon">
                <use href="${icons}#icon-clock"></use>
              </svg>
              <span class="recipe__info-data recipe__info-data--minutes">${
                recipe.cookingTime
              }</span>
              <span class="recipe__info-text">minutes</span>
            </div>
            <div class="recipe__info">
              <svg class="recipe__info-icon">
                <use href="${icons}#icon-users"></use>
              </svg>
              <span class="recipe__info-data recipe__info-data--people">${
                recipe.servings
              }</span>
              <span class="recipe__info-text">servings</span>
  
              <div class="recipe__info-buttons">
                <button class="btn--tiny btn--decrease-servings  lessPeople">
                  <svg>
                    <use href="${icons}#icon-minus-circle"></use>
                  </svg>
                </button>
                <button class="btn--tiny btn--increase-servings morePeople">
                  <svg>
                    <use href="${icons}#icon-plus-circle"></use>
                  </svg>
                </button>
              </div>
            </div>
  
            <div class="recipe__user-generated">
              <svg>
                <use href="${icons}#icon-user"></use>
              </svg>
            </div>
            <button class="btn--round bookmark">
              <svg class="">
                <use class="inner-bookmark" href="${icons}#icon-bookmark${
      this.#state.bookmark.has(this.#recipe.id) ? "-fill" : ""
    }"></use>
              </svg>
            </button>
          </div>
  
          <div class="recipe__ingredients">
            <h2 class="heading--2">Recipe ingredients</h2>
            <ul class="recipe__ingredient-list">
             ${recipe.ingredients
               .map(function (el) {
                 return ` <li class="recipe__ingredient">
               <svg class="recipe__icon">
                 <use href="${icons}#icon-check"></use>
               </svg>
               <div class="recipe__quantity">${
                 el.quantity !== null ? new Fraction(el.quantity) : ""
               }</div>
               <div class="recipe__description">
                 <span class="recipe__unit">${el.unit}</span>
                 ${el.description}
               </div>
              </li>`;
               })
               .join("")}
            </ul>
          </div>
  
          <div class="recipe__directions">
            <h2 class="heading--2">How to cook it</h2>
            <p class="recipe__directions-text">
              This recipe was carefully designed and tested by
              <span class="recipe__publisher">${
                recipe.publisher
              }</span>. Please check out
              directions at their website.
            </p>
            <a
              class="btn--small recipe__btn"
              href="${recipe.sourceURl}"
              target="_blank"
            >
              <span>Directions</span>
              <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
              </svg>
            </a>
          </div>
          
    `;

    this.#parentElement.innerHTML = "";
    this.#parentElement.insertAdjacentHTML("afterbegin", html);
  }

  addHandlerRender(state) {
    console.log("inside handler");
    this.#state = state;
    this._searchContainerEventHandler();
    this._servingBtnEventlistener();
  }

  _searchContainerEventHandler() {
    resultContainer.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("inside handler");
      if (e.target.closest("a")) {
        this.showRecipe(e.target.closest("a").getAttribute("href"));
      }
    });
  }

  _servingBtnEventlistener() {
    this.#parentElement.addEventListener("click", (e) => {
      if (e.target.closest(".btn--tiny")) {
        if (e.target.closest(".btn--tiny").classList.contains("morePeople")) {
          this._changeServing(true);
        } else {
          this._changeServing(false);
        }
      }
    });
  }

  _changeServing(flag) {
    if (flag) {
      this.#amount++;
      this._showServing();
    } else {
      this.#amount--;
      this._showServing();
    }
  }

  _showServing() {
    const ul = document.querySelector(".recipe__ingredient-list");
    ul.innerHTML = "";

    const html = this.#recipe.ingredients
      .map((el) => {
        return ` <li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${icons}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${
        el.quantity !== null
          ? new Fraction(
              el.quantity + this.#amount * 0.25 > 0
                ? el.quantity + this.#amount * 0.25
                : el.quantity
            )
          : ""
      }</div>
      <div class="recipe__description">
        <span class="recipe__unit">${el.unit}</span>
        ${el.description}
      </div>
     </li>`;
      })
      .join("");
    ul.insertAdjacentHTML("afterbegin", html);
  }
}
export default new RecipeView();
