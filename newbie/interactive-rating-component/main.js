const highlightClass = "rating-btn--selected";
let selectedRatingButton = null;

const ratingBtnsContainer = document.querySelector(".rating-btns");
const ratingForm = document.querySelector(".rating-form");
const submitBtn = document.querySelector(".submit-btn");

ratingBtnsContainer.addEventListener("click", highlightSelectedRatingButton);
ratingForm.addEventListener("submit", formHandler);
ratingForm.addEventListener("click", unselectButton);

function highlightSelectedRatingButton(e) {
  if (e.target.localName !== "button") return;

  if (selectedRatingButton) {
    selectedRatingButton.classList.toggle(highlightClass);
  }
  if (selectedRatingButton === e.target) {
    selectedRatingButton.blur();
    disableSubmit();
    return;
  }

  selectedRatingButton = e.target;
  selectedRatingButton.classList.toggle(highlightClass);
  submitBtn.disabled = false;
}

function formHandler(e) {
  e.preventDefault();
  const ratingTextEl = document.querySelector(".rating-text__rating");
  ratingTextEl.textContent = selectedRatingButton.dataset.rating;

  document
    .querySelectorAll(".card")
    .forEach((el) => el.classList.toggle("hide"));
}

function unselectButton(e) {
  if (e.target.localName === "button" || !selectedRatingButton) return;

  selectedRatingButton.classList.remove(highlightClass);
  disableSubmit();
}

function disableSubmit() {
  selectedRatingButton = null;
  submitBtn.disabled = true;
}
