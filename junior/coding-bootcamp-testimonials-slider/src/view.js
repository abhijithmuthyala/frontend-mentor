export function subscribeToRightSlide(handler) {
  const rightButton = document.querySelector(".slider-btn--right");
  rightButton.addEventListener("click", handler);
}

export function subscribeToLeftSlide(handler) {
  const leftButton = document.querySelector(".slider-btn--left");
  leftButton.addEventListener("click", handler);
}

export const renderSlide = (function setupSlideRenderer() {
  const testimonialsContainer = document.querySelector(
    ".testimonials-container"
  );
  const testimonials = document.querySelectorAll(".article-testimonial");

  return function (index) {
    testimonialsContainer.style.setProperty("--slider-index", index);
    testimonials.forEach((testimonial, testimonialIndex) => {
      if (index === testimonialIndex) {
        testimonial.classList.remove("hide");
      } else {
        testimonial.classList.add("hide");
      }
    });
  };
})();

export function setupSliderButtonsObserver() {
  const sliderButtonsContainer = document.querySelector(".slider-buttons-box");
  const authorImageContainer = document.querySelector(".testimonial-img-box");

  const imageContainerObserver = new ResizeObserver(
    function handleImgContainerResize([entry]) {
      sliderButtonsContainer.style.setProperty(
        "--btns-top",
        `${entry.contentRect.height}px`
      );
    }
  );
  imageContainerObserver.observe(authorImageContainer);
}
