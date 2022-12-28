const formEl = document.querySelector(".form-signup");

formEl.addEventListener("submit", formHandler);

function formHandler(e) {
  e.preventDefault();

  const errorEl = this.querySelector(".error-msg");
  const emailInputEl = this.querySelector("input");
  const enteredEmail = emailInputEl.value;

  const mailIsValid = checkMailValidity(enteredEmail);
  console.log(mailIsValid);

  if (mailIsValid) {
    this.classList.remove("invalid");
    errorEl.classList.add("hidden");

    emailInputEl.value = "";
    emailInputEl.blur();
  } else {
    this.classList.add("invalid");
    errorEl.classList.remove("hidden");
  }
}

function checkMailValidity(mail) {
  // TODO: Learn REGEX
  const mailLowerCase = mail.toLowerCase();
  const firstLetterCharCode = mailLowerCase.charCodeAt(0);

  if (
    firstLetterCharCode < 97 ||
    firstLetterCharCode > 122 ||
    !mailLowerCase.includes("@") ||
    mailLowerCase.endsWith("@")
  ) {
    return false;
  } else {
    return true;
  }
}
