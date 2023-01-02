const navEl = document.querySelector(".nav-main");
const navButton = document.querySelector(".menu-btn");

navEl.addEventListener("click", toggleNavigation);
navButton.addEventListener("click", toggleNavigation);

function toggleNavigation() {
  navButton.querySelectorAll("img").forEach((navIcon) => {
    navIcon.classList.toggle("remove");
  });
  navEl.classList.toggle("closed");

  document.body.classList.toggle("overlay");
}
