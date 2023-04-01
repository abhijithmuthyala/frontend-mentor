const NUM_SLIDES = 2;

let currentSlideIndex = 1;

export function addToSlideIndex(adder) {
  currentSlideIndex += adder;

  if (currentSlideIndex >= NUM_SLIDES) currentSlideIndex = 0;
  if (currentSlideIndex < 0) currentSlideIndex = NUM_SLIDES - 1;
}

export function getCurrentSlideIndex() {
  return currentSlideIndex;
}
