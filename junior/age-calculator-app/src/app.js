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
  const [currentYear, currentMonth, currentDay] = new Date()
    .toISOString()
    .split("-")
    .map((str) => parseInt(str, 10));

  let errorDayType = null;
  let errorMonthType = null;
  let errorYearType = null;

  clearErrors();

  if (year === null) {
    errorYearType = "empty";
  } else if (!Number.isInteger(year) || year < 1) {
    errorYearType = "invalid";
  } else if (year > currentYear) {
    errorYearType = "future";
  }

  if (month === null) {
    errorMonthType = "empty";
  } else if (!integerWithinBounds(month, 1, 12)) {
    errorMonthType = "invalid";
  } else if (year === currentYear && month > currentMonth) {
    errorMonthType = "future";
  }

  if (day === null) {
    errorDayType = "empty";
  } else if (!integerWithinBounds(day, 1, 31)) {
    errorDayType = "invalid";
  } else if (!errorMonthType && !errorYearType) {
    // month & year are defined in this branch
    if (day > maxDays(month, year)) {
      errorDayType = "invalid";
    } else if (
      year === currentYear &&
      month === currentMonth &&
      day > currentDay
    ) {
      errorDayType = "future";
    }
  }

  // reverse order so that the first element that has an
  // error gets the focus
  errorYearType && errorYear.render(errorYearType);
  errorMonthType && errorMonth.render(errorMonthType);
  errorDayType && errorDay.render(errorDayType);

  const formIsValid = !(errorDayType || errorMonthType || errorYearType);
  if (formIsValid) {
    const { days, months, years } = getAge(day, month, year);
    renderResult(days, months, years);
  } else {
    clearResult();
  }
}

function handleInputDay(event) {
  dispatch({ type: "input/day", payload: event.target.value });
}

function handleInputMonth(event) {
  dispatch({ type: "input/month", payload: event.target.value });
}

function handleInputYear(event) {
  dispatch({ type: "input/year", payload: event.target.value });
}

function clearErrors() {
  errorDay.clear();
  errorMonth.clear();
  errorYear.clear();
}
