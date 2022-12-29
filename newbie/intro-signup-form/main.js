const form = document.querySelector(".form");
const formButton = form.querySelector("button");

const firstNameInputEl = document.querySelector("#first-name");
const lastNameInputEl = document.querySelector("#last-name");
const emailInputEl = document.querySelector("#email");
const passwordInputEl = document.querySelector("#password");

const formControls = document.querySelectorAll(".form-control");

form.addEventListener("submit", handleForm);
form.addEventListener("input", clearErrorState);

// remove the focus state
formButton.addEventListener("mouseleave", function () {
  this.blur();
});

function clearErrorState(e) {
  const targetControl = e.target.closest(".form-control");
  targetControl.classList.remove("error");
}

function handleForm(e) {
  e.preventDefault();

  // remove previous errors
  formControls.forEach((formControl) => formControl.classList.remove("error"));

  let dataIsValid = true;

  if (firstNameInputEl.value === "") {
    dataIsValid = false;
    showError(firstNameInputEl);
  }

  if (lastNameInputEl.value === "") {
    dataIsValid = false;
    showError(lastNameInputEl);
  }

  if (passwordInputEl.value === "") {
    dataIsValid = false;
    showError(passwordInputEl);
  }

  if (!emailIsValid(emailInputEl.value)) {
    dataIsValid = false;
    showError(emailInputEl);
  }

  if (!dataIsValid) return;
  resetFormFields();
}

function showError(inputEl) {
  const formControl = inputEl.closest(".form-control");
  formControl.classList.toggle("error");
  inputEl.focus();
  inputEl.setAttribute("aria-invalid", true);
}

function emailIsValid(enteredEmail) {
  // Learn REGEX!
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(enteredEmail);
}

function resetFormFields() {
  formControls.forEach((formControl) => {
    const inputEl = formControl.querySelector("input");
    inputEl.value = "";
    inputEl.blur();
    inputEl.setAttribute("aria-invalid", false);
  });
}
