function integerWithinBounds(num, min, max) {
  return Number.isInteger(num) && num >= min && num <= max;
}

function getAge(day, month, year) {
  const epotch = new Date(0);
  const curentDate = new Date();
  const bornDate = new Date();

  bornDate.setFullYear(year, month - 1, day);

  const ageDate = new Date(curentDate - bornDate);
  const days = ageDate.getDate() - epotch.getDate();
  const months = ageDate.getMonth() - epotch.getMonth();
  const years = ageDate.getFullYear() - epotch.getFullYear();

  return { days, months, years };
}

function maxDays(month, year) {
  return new Date(year, month, 0).getDate();
}

function debounce(fn, threshold = 200) {
  let timerID = null;

  return function debouncedFn(event) {
    event.preventDefault();

    if (timerID !== null) clearTimeout(timerID);
    timerID = setTimeout(function timerCallback() {
      fn(event);
    }, threshold);
  };
}

export { debounce, maxDays, getAge, integerWithinBounds };
