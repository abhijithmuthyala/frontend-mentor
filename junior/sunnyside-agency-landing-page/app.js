const menuBtn = document.querySelector(".btn-menu");
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  const navMainElement = document.querySelector(".nav-main");

  navMainElement.classList.toggle("hide");
  this.classList.toggle("btn-menu--opened");
}
