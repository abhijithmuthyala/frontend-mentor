import { getState, dispatch } from "./model";
import {
  subscribeToInputDay,
  subscribeToInputMonth,
  subscribeToInputYear,
  subscribeToForm,
  errorDay,
  errorMonth,
  errorYear,
  renderResult,
  clearResult,
} from "./view";

import { maxDays, integerWithinBounds, debounce, getAge } from "./utils";

subscribeToInputDay(debounce(handleInputDay));
subscribeToInputMonth(debounce(handleInputMonth));
subscribeToInputYear(debounce(handleInputYear));
subscribeToForm(debounce(handleFormSubmit));

function handleFormSubmit() {
  const { day, month, year } = getState();
  const formIsValid = handleFormErrors(day, month, year);

  if (!formIsValid) {
    return clearResult();
  }

  const { days, months, years } = getAge(day, month, year);
  renderResult(days, months, years);
}

function handleInputDay(event) {
  dispatch({ type: "input/day", payload: event.target.value });

  const { day, month, year } = getState();

  if (day === null) {
    return errorDay.clear();
  }

  if (!integerWithinBounds(day, 1, 31)) {
    return errorDay.render("invalid");
  }

  if (month === null || year === null) {
    return errorDay.clear();
  }

  const currentDay = new Date().getDate();
  if (day > currentDay) {
    return errorDay.render("future");
  }

  if (maxDays(month, year) > day) {
    errorDay.clear();
  } else {
    errorDay.render("invalid");
  }
}

function handleInputMonth(event) {
  dispatch({ type: "input/month", payload: event.target.value });

  const { day, month, year } = getState();

  if (month === null) {
    errorDay.clear();
    errorMonth.clear();
    return;
  }

  if (!integerWithinBounds(month, 1, 12)) {
    return errorMonth.render("invalid");
  }

  if (year === null) {
    errorDay.clear();
    errorMonth.clear();
    return;
  }

  const currentMonth = new Date().getMonth() + 1;
  if (month > currentMonth) {
    errorMonth.render("future");
    errorDay.clear();
    return;
  }

  if (maxDays(month, year) > day) {
    errorDay.clear();
  } else {
    errorDay.render("invalid");
  }
}

function handleInputYear(event) {
  dispatch({ type: "input/year", payload: event.target.value });

  const { day, month, year } = getState();
  const currentYear = new Date().getFullYear();

  if (year === null) {
    errorYear.clear();
    errorDay.clear();
    return;
  }

  if (!Number.isInteger(year) || year < 1) {
    return errorYear.render("invalid");
  }

  if (year > currentYear) {
    return errorYear.render("future");
  }

  errorYear.clear();

  if (month === null || day === null) {
    return errorDay.clear();
  }

  const dayIsValid = integerWithinBounds(day, 1, maxDays(month, year));
  if (!dayIsValid) {
    errorDay.render("invalid");
  } else {
    errorDay.clear();
  }
}

function handleFormErrors(day, month, year) {
  let formIsValid = true;
  const currentYear = new Date().getFullYear();

  const dayIsValid = integerWithinBounds(day, 1, maxDays(month, year));
  const monthIsValid = integerWithinBounds(month, 1, 12);
  const yearIsValid = integerWithinBounds(year, 1, currentYear);

  if (!dayIsValid) {
    errorDay.render(day === null ? "empty" : "invalid");
    formIsValid = false;
  }
  if (!monthIsValid) {
    errorMonth.render(month === null ? "empty" : "invalid");
    formIsValid = false;
  }
  if (!yearIsValid) {
    errorYear.render(year === null ? "empty" : "invalid");
    formIsValid = false;
  }

  return formIsValid;
}
