const navListElement = document.querySelector(".nav-list");
const submenuControlButtons = document.querySelectorAll(".nav-list-item__btn");

const { submenuButtonHandler, navEscapeHandler } = getNavHandlers();

navListElement.addEventListener("click", submenuButtonHandler);
navListElement.addEventListener("keydown", navEscapeHandler);

function getNavHandlers() {
  let prevActiveBtn = null;
  let prevActiveMenu = null;
  let activeBtn = null;
  let activeMenu = null;

  return {
    submenuButtonHandler,
    navEscapeHandler,
  };

  function submenuButtonHandler(e) {
    if (e.target.closest("a")) {
      toggleActiveState(activeBtn, activeMenu);
      resetActiveStates();
      return;
    }

    activeBtn = e.target.closest("button");
    if (!activeBtn) {
      activeMenu = null;
      return;
    }

    prevActiveBtn && toggleActiveState(prevActiveBtn, prevActiveMenu);
    if (activeBtn === prevActiveBtn) {
      resetActiveStates();
      return;
    }

    activeMenu = activeBtn?.nextElementSibling;
    toggleActiveState(activeBtn, activeMenu);
    prevActiveBtn = activeBtn;
    prevActiveMenu = activeMenu;
  }

  function navEscapeHandler(e) {
    if (!(e.key === "Escape") || !e.target.closest(".nav-menu-list")) return;

    toggleActiveState(activeBtn, activeMenu);
    activeBtn.focus();
    resetActiveStates();
  }

  function toggleActiveState(btn, menu) {
    btn?.classList.toggle("collapsed");
    menu?.classList.toggle("hide");
  }

  function resetActiveStates() {
    prevActiveBtn = prevActiveMenu = activeBtn = activeMenu = null;
  }
}
