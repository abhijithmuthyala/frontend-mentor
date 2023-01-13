const newAdviceBtn = document.querySelector(".btn-new-advice");
const newAdviceHandler = debounce(renderNewAdvice, 300);

window.addEventListener("load", newAdviceHandler);
newAdviceBtn.addEventListener("click", newAdviceHandler);

function debounce(cb, threshold = 0) {
  let timerID;
  return debouncedCallback;

  function debouncedCallback() {
    if (timerID) clearTimeout(timerID);
    timerID = setTimeout(cb, threshold);
  }
}

async function renderNewAdvice() {
  let id, advice;
  try {
    ({ id, advice } = await requestNewAdvice());
  } catch (err) {
    id = "";
    advice = `⚠️ Failed to fetch new advice, please try again.`;
  } finally {
    const adviceIDElement = document.querySelector(".advice-title__id");
    const adviceElement = document.querySelector(".advice");

    adviceIDElement.textContent = `#${id}`;
    adviceElement.textContent = advice;
  }
}

async function requestNewAdvice() {
  const API_URL = "https://api.adviceslip.com/advice";

  try {
    const res = await fetch(API_URL);
    const { slip: data } = await res.json();
    return data;
  } catch (err) {
    throw new Error(err);
  }
}
