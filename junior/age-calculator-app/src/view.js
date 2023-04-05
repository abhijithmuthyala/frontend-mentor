const inputDayElement = document.getElementById("day");
const inputMonthElement = document.getElementById("month");
const inputYearElement = document.getElementById("year");

const formElement = document.querySelector(".form-dob");

const yearsTextElement = document.getElementById("result-years");
const monthsTextElement = document.getElementById("result-months");
const daysTextElement = document.getElementById("result-days");
const resultElements = [daysTextElement, monthsTextElement, yearsTextElement];

export function subscribeToInputDay(handler) {
  inputDayElement.addEventListener("input", handler);
}
export function subscribeToInputMonth(handler) {
  inputMonthElement.addEventListener("input", handler);
}
export function subscribeToInputYear(handler) {
  inputYearElement.addEventListener("input", handler);
}
export function subscribeToForm(handler) {
  formElement.addEventListener("submit", handler);
}

export const errorYear = setupError(inputYearElement, "year");
export const errorMonth = setupError(inputMonthElement, "month");
export const errorDay = setupError(inputDayElement, "day");

function setupError(inputElement, controlName) {
  const container = inputElement.closest(".input-box");
  const errorElement = container.querySelector(".error-msg");

  const EMPTY_INPUT_ERROR = "This field is required";
  const FUTURE_ERROR = "Must be in the past";
  const INVALID_ERROR = "Must be a valid " + controlName;

  const errorMap = new Map([
    ["empty", EMPTY_INPUT_ERROR],
    ["invalid", INVALID_ERROR],
    ["future", FUTURE_ERROR],
  ]);

  return { render, clear };

  function render(type = "empty") {
    errorElement.textContent = errorMap.get(type);
    container.classList.add("error");
    errorElement.classList.remove("hide");
  }

  function clear() {
    container.classList.remove("error");
    errorElement.classList.add("hide");
  }
}

export function clearResult() {
  resultElements.forEach((resultElement) => {
    resultElement.classList.add("clear");
  });
  daysTextElement.textContent = "";
  monthsTextElement.textContent = "";
  yearsTextElement.textContent = "";
}

export function renderResult(days, months, years) {
  resultElements.forEach((resultElement) => {
    resultElement.classList.remove("clear");
  });
  daysTextElement.textContent = days;
  monthsTextElement.textContent = months;
  yearsTextElement.textContent = years;
}
