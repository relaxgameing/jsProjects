import icons from "url:../img/icons.svg";

class ResultView {
  #searchContainer = document.querySelector(".results");
  #page = 1;
  #NoOfRecipes = 0;
  #nextPage = document.querySelector(".pagination__btn--next");
  #prevPage = document.querySelector(".pagination__btn--prev");
  #pageNOleft = document.querySelector(".pageNo-left");
  #pageNORight = document.querySelector(".pageNo-right");
  #responseValue;
  configResult(response) {
    this.#responseValue = response;
    this.#searchContainer.innerHTML = "";
    this.#NoOfRecipes = response.length;
    this.showPagination();

    response.map((el, i) => {
      if (i < this.#page * 10 && i >= (this.#page - 1) * 10) {
        this.addResults(el);
      }
    });
  }

  addResults(result) {
    const html = `
    <li class="preview">
              <a class="preview__link " href="${result.id}">
                <figure class="preview__fig">
                  <img src="${result.image_url}" alt="Test" />
                </figure>
                <div class="preview__data">
                  <h4 class="preview__title">${result.title}</h4>
                  <p class="preview__publisher">${result.publisher}</p>
                  <div class="preview__user-generated">
                    <svg>
                      <use href="${icons}#icon-user"></use>
                    </svg>
                  </div>
                </div>
              </a>
            </li>
    `;
    this.#searchContainer.insertAdjacentHTML("beforeend", html);
  }

  pagination() {
    this.#nextPage.addEventListener("click", () => {
      console.log("inside next");
      if (this.#NoOfRecipes % 10 === 0 && this.#page * 10 < this.#NoOfRecipes) {
        this.#page++;

        this.#searchContainer.innerHTML = "";
        this.configResult(this.#responseValue);
        this.showPagination();
      } else if (
        this.#page * 10 <
        this.#NoOfRecipes + 10 - (this.#NoOfRecipes % 10)
      ) {
        this.#page++;

        this.#searchContainer.innerHTML = "";
        this.configResult(this.#responseValue);
        this.showPagination();
      }
    });

    this.#prevPage.addEventListener("click", () => {
      if (this.#page > 1) {
        this.#page--;
        console.log("current page ", this.#page);
        this.#searchContainer.innerHTML = "";
        this.configResult(this.#responseValue);
        this.showPagination();
      }
    });
  }

  showPagination() {
    console.log(this.#NoOfRecipes);
    if (this.#NoOfRecipes > 10) {
      this.#nextPage.classList.remove("hidden");
    }

    if (this.#page > 1) {
      this.#prevPage.classList.remove("hidden");
      this.#pageNOleft.textContent = `page ${this.#page - 1}`;
    } else {
      this.#prevPage.classList.add("hidden");
    }

    if (this.#page * 10 < this.#NoOfRecipes) {
      this.#pageNORight.textContent = `page ${this.#page + 1}`;
    } else {
      this.#nextPage.classList.add("hidden");
    }
  }
}

export default new ResultView();
