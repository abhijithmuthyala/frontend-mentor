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

  // a11y stuff
  const isNavExpanded = navButton.getAttribute("aria-expanded") === "true";
  navButton.setAttribute("aria-expanded", isNavExpanded ? "false" : "true");
}
