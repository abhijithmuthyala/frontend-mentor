import { getCurrentSlideIndex, addToSlideIndex } from "./model";

import {
  subscribeToLeftSlide,
  subscribeToRightSlide,
  renderSlide,
  setupSliderButtonsObserver,
} from "./view";

subscribeToLeftSlide(getSlideHandler(-1));
subscribeToRightSlide(getSlideHandler(1));

setupSliderButtonsObserver();
renderSlide(getCurrentSlideIndex());

function getSlideHandler(slideAdder) {
  return function handleSlide() {
    addToSlideIndex(slideAdder);
    renderSlide(getCurrentSlideIndex());
  };
}
