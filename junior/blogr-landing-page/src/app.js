import {
  subscribeToMenuButton,
  subscribeToNavButtons,
  subscribeToEscapeEvent,
  renderNavMenu,
  renderNavSubmenu,
} from "./nav-view";

import {
  toggleNavMenu,
  isNavExpanded,
  getExpandedSubmenuIndex,
  setExpandedSubmenuIndex,
} from "./nav-model";

subscribeToMenuButton(handleMenuClick);
subscribeToNavButtons(handleNavLinkClick);
subscribeToEscapeEvent(handleNavEscape);

function handleNavEscape(e) {
  e.stopPropagation();

  const focusIsWithinNavigation = !!document.activeElement.closest(".nav-main");
  if (!(e.key === "Escape" && focusIsWithinNavigation)) return;

  const currentMenuIndex = getExpandedSubmenuIndex();
  renderNavSubmenu(currentMenuIndex, currentMenuIndex);
  setExpandedSubmenuIndex(null);
}

function handleMenuClick(e) {
  e.stopPropagation();

  toggleNavMenu();
  renderNavMenu(isNavExpanded());
}

function handleNavLinkClick(e) {
  e.stopPropagation();

  if (!(e.target.localName === "button")) return;

  const currentSubmenuIndex = getExpandedSubmenuIndex();
  const targetSubmenuIndex = Number(e.target.dataset.submenuIndex);

  renderNavSubmenu(currentSubmenuIndex, targetSubmenuIndex);

  if (currentSubmenuIndex === targetSubmenuIndex) {
    setExpandedSubmenuIndex(null);
  } else {
    setExpandedSubmenuIndex(targetSubmenuIndex);
  }
}
