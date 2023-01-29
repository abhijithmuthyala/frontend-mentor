const menuBtn = document.querySelector(".btn-menu");
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  const navMainElement = document.querySelector(".nav-main");

  navMainElement.classList.toggle("hide");
  this.classList.toggle("btn-menu--opened");
  toggleMenuBtnAria();
  navMainElement.focus();
}

function toggleMenuBtnAria() {
  const expanded = menuBtn.getAttribute("aria-expanded");
  menuBtn.setAttribute(
    "aria-expanded",
    expanded === "false" ? "true" : "false"
  );
}
