const bodyOverlay = document.querySelector(".overlay");

const menuButton = document.querySelector(".mobile-menu-btn");
const navElement = document.querySelector(".nav-main");

const navLinksListElement = document.querySelector(".nav-main-links-list");
const navSubmenus = document.querySelectorAll(".nav-main-menu-list");
const navButtons = document.querySelectorAll(".nav-main-links-btn");

export function subscribeToMenuButton(handler) {
  menuButton.addEventListener("click", handler);
}

export function subscribeToNavButtons(handler) {
  navLinksListElement.addEventListener("click", handler);
}

export function subscribeToEscapeEvent(handler) {
  navElement.addEventListener("keydown", handler);
}

export function renderNavSubmenu(currentSubmenuIndex, targetSubmenuIndex) {
  const targetSubmenu = navSubmenus[targetSubmenuIndex];
  const targetButton = navButtons[targetSubmenuIndex];

  if (currentSubmenuIndex === null) {
    targetSubmenu.classList.remove("closed");

    targetButton.setAttribute("aria-expanded", true);
    return;
  }

  const currentSubmenu = navSubmenus[currentSubmenuIndex];
  const currentButton = navButtons[currentSubmenuIndex];

  if (currentSubmenuIndex === targetSubmenuIndex) {
    targetSubmenu.classList.toggle("closed");

    const isExpanded = targetButton.getAttribute("aria-expanded");
    targetButton.setAttribute(
      "aria-expanded",
      isExpanded === "true" ? "false" : "true"
    );
  } else {
    currentSubmenu.classList.add("closed");
    targetSubmenu.classList.remove("closed");

    currentButton.setAttribute("aria-expanded", false);
    targetButton.setAttribute("aria-expanded", true);
  }
}

export function renderNavMenu(menuExpanded) {
  if (menuExpanded) {
    menuButton.classList.remove("closed");
    navElement.classList.remove("hide");
    bodyOverlay.classList.remove("closed");
    document.body.classList.add("lock-height");
  } else {
    menuButton.classList.add("closed");
    navElement.classList.add("hide");
    bodyOverlay.classList.add("closed");
    document.body.classList.remove("lock-height");
  }

  handleMenuButtonARIA(menuExpanded);
}

function handleMenuButtonARIA(menuExpanded) {
  menuButton.setAttribute("aria-expanded", menuExpanded);
  menuButton.setAttribute(
    "aria-label",
    `${menuExpanded ? "Hide" : "Show"} navigation links`
  );
}
