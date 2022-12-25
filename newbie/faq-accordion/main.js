const faqListElement = document.querySelector(".faqs-list");
const timeoutThreshold = 300;
let timerID = null;

faqListElement.addEventListener("click", toggleAnswer);

function toggleAnswer(e) {
  timerID && clearTimeout(timerID);

  const toggleClass = "faqs-list-item--open";
  const openedFAQElement = document.querySelector("." + toggleClass);
  const clickedFAQElement = e.target.closest(".faqs-list-item");

  openedFAQElement?.classList.toggle(toggleClass);

  if (openedFAQElement === clickedFAQElement) return;

  // allows for the nice effect where the currently opened item first closes and then the clicked item expands.
  timerID = setTimeout(
    () => clickedFAQElement.classList.toggle(toggleClass),
    openedFAQElement ? timeoutThreshold : 0
  );
}
