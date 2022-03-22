import { bookmarkStore } from "./config.js";

class bookmarkView {
  #parentElement = document.querySelector(".bookmark");
  #state;
  #recipe;

  addHandlerRender(state) {
    this.#state = state;
    this.#recipe = state.activeRecipe;
    this._bookmarkBtnEventlistener();
    this._navEventlistener();
    this._bookmarkListEventlistener();
  }

  _bookmarkBtnEventlistener() {
    this.#parentElement.addEventListener("click", (e) => {
      if (e.target.closest(".bookmark")) {
        console.log("event");
        this.bookmarkFill();
      }
    });
  }

  bookmarkFill() {
    const bookmarkIcon = document.querySelector(".inner-bookmark");
    if (
      bookmarkIcon.getAttribute("href").slice(-5) !== "-fill" &&
      !this.#state.bookmark.has(this.#recipe.id)
    ) {
      bookmarkIcon.setAttribute(
        "href",
        bookmarkIcon.getAttribute("href") + "-fill"
      );

      this.#state.bookmark.set(this.#recipe.id, this.#recipe);
    } else if (
      bookmarkIcon.getAttribute("href").slice(-5) === "-fill" &&
      this.#state.bookmark.has(this.#recipe.id)
    ) {
      bookmarkIcon.setAttribute(
        "href",
        bookmarkIcon.getAttribute("href").slice(0, -5)
      );
      this.#state.bookmark.delete(this.#recipe.id, this.#recipe);
    }
  }

  _navEventlistener() {
    nav.addEventListener("mouseover", (e) => {
      e.preventDefault();
      if (e.target.closest(".nav__btn--bookmarks")) {
        if (this.#state.bookmark.size === 0) {
          return;
        }
        bookmarkStore.innerHTML = "";
        this.#state.bookmark.forEach((value) => {
          this.addBookmarkedRecipe(value);
        });
      }
    });
  }

  addBookmarkedRecipe(recipe) {
    const html = `
        <li class="preview">
                        <a class="preview__link" href="${recipe.id}">
                          <figure class="preview__fig">
                            <img src="${recipe.imageUrl}" alt="Test" />
                          </figure>
                          <div class="preview__data">
                            <h4 class="preview__title">
                             ${recipe.title}
                            </h4>
                            <p class="preview__publisher">${recipe.publisher}</p>
                          </div>
                        </a>
                      </li> 
        `;

    bookmarkStore.insertAdjacentHTML("afterbegin", html);
  }

  _bookmarkListEventlistener() {
    bookmarkStore.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.closest("a")) {
        this._addRecipe(
          this.#state.bookmark.get(e.target.closest("a").getAttribute("href"))
        );
      }
    });
  }
}
export default new bookmarkView();
