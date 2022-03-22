export async function getJSON(url) {
  const res = await fetch(url);
  const Data = await res.json();
  if (!res.ok) {
    throw new Error("something went wrong");
  }
  return Data;
}

export function addErrorMsg() {
  const html = `
      <div class="error ">
      <div>
        <svg>
          <use href="${icons}#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>No recipes found for your query. Please try again!</p>
    </div>
  `;
  document.querySelector(".recipe").innerHTML = "";
  document.querySelector(".recipe").insertAdjacentHTML("afterbegin", html);
}
