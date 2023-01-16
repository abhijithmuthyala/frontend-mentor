export {
  resetInputs,
  clearErrors,
  getValidityChecker,
  debounce,
  toggleBtnAriaState,
};

function resetInputs(inputEls) {
  inputEls.forEach((inputEl) => {
    inputEl.value = "";
    inputEl.blur();
  });
}

function clearErrors(inputEls, targetClass) {
  inputEls.forEach((inputEl) => inputEl.classList.remove(targetClass));
}

function getValidityChecker(min, max) {
  return function isInputValid(inputValue) {
    return (
      Number.isInteger(inputValue) && inputValue >= min && inputValue <= max
    );
  };
}

function toggleBtnAriaState(btn) {
  const currentState = btn.getAttribute("aria-pressed");
  btn.setAttribute("aria-pressed", currentState === "false" ? "true" : "false");
}

function debounce(fn, delay = 200) {
  let timerID;
  return debouncedFn;

  function debouncedFn(e) {
    if (timerID) clearTimeout(timerID);
    timerID = setTimeout(() => fn(e), delay);
  }
}
