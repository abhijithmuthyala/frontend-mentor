import {
  subscribeToMenuButton,
  subscribeToNavButtons,
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
