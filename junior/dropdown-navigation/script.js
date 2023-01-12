const navListElement = document.querySelector(".nav-list");
const submenuControlButtons = document.querySelectorAll(".nav-list-item__btn");
const navMenuBtn = document.querySelector(".nav-menu-btn");
const navActionsContainer = document.querySelector(".actions");

const { submenuButtonHandler, navEscapeHandler } = getNavHandlers();

navListElement.addEventListener("click", submenuButtonHandler);
navListElement.addEventListener("keydown", navEscapeHandler);

navMenuBtn.addEventListener("click", toggleNavContainer);
navActionsContainer.addEventListener("click", toggleNavContainer);

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
    {
      const activeLink = e.target.closest("a");
      if (activeLink) {
        toggleActiveState(activeBtn, activeMenu);
        resetActiveStates();
        toggleNavContainer(e);
        activeLink.blur();
        return;
      }
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
    if (!btn || !menu) return;

    btn.classList.toggle("collapsed");
    menu.classList.toggle("hide");
    updateAriaAttrs(btn);
  }

  function resetActiveStates() {
    prevActiveBtn = prevActiveMenu = activeBtn = activeMenu = null;
  }
}

function toggleNavContainer(e) {
  e.stopPropagation();
  if (getComputedStyle(navMenuBtn).display === "none") return;

  const navContainer = document.querySelector(".nav-container");
  navContainer.classList.toggle("reveal");
  navMenuBtn.classList.toggle("collapsed");
  document.body.classList.toggle("overlay");

  updateAriaAttrs(navMenuBtn);
}

function updateAriaAttrs(btn) {
  const menuExpanded = btn.getAttribute("aria-expanded");
  btn.setAttribute(
    "aria-expanded",
    menuExpanded === "false" ? "true" : "false"
  );
}
