const cards = document.querySelectorAll(".card");
const form = document.querySelector(".rating-form");
const submitButton = document.querySelector(".rating-form__submit");
const selectedRatingLabel = document.querySelector(
  ".card__selected-rating-text"
);

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const data = Object.fromEntries([...new FormData(form)]);

  if ("rating" in data) {
    selectedRatingLabel.textContent = `You selected ${data.rating} out of 5`;
    cards.forEach((card) => card.classList.toggle("hidden"));
  }
});
