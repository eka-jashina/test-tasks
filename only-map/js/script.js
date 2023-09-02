let buttons = document.querySelectorAll(".map__button");

function toggleButton(event) {
  let button = event.currentTarget;
  let buttonDesc = button.querySelector(".button__desc");
  button.classList.toggle("map__button--open");
  buttonDesc.classList.toggle("visually-hidden");
  event.stopPropagation();
}

function handleDocumentClick(event) {
  for (let button of buttons) {
    let buttonDesc = button.querySelector(".button__desc");
    if (!button.contains(event.target)) {
      button.classList.remove("map__button--open");
      buttonDesc.classList.add("visually-hidden");
    }
  }
}

for (let button of buttons) {
  button.addEventListener("click", toggleButton);
}

document.addEventListener("click", handleDocumentClick);
