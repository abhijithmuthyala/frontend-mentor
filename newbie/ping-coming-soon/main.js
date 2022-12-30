const formEl = document.querySelector(".form-signup");

formEl.addEventListener("submit", handleForm);
formEl.addEventListener("input", clearErrorState);

function handleForm(e) {
  e.preventDefault();

  const emailInputEl = document.querySelector("#email");
  const enteredEmail = emailInputEl.value;
  const emailControlEl = emailInputEl.closest(".form-control");

  debugger;

  emailControlEl?.classList.remove("error");

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(enteredEmail)) {
    resetFormField(emailInputEl);
    return;
  }

  // error
  emailInputEl.focus();
  emailInputEl.setAttribute("aria-invalid", true);
  emailControlEl?.classList.add("error");
}

function resetFormField(inputEl) {
  inputEl.value = "";
  inputEl.blur();
  inputEl.setAttribute("aria-invalid", false);
}

function clearErrorState(e) {
  const targetControl = e.target.closest(".form-control");
  targetControl.classList.remove("error");
}
