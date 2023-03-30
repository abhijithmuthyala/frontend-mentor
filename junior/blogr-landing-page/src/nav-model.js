let navMenuExpanded = false;
let expandedSubmenuIndex = null;

export function toggleNavMenu() {
  navMenuExpanded = !navMenuExpanded;
}

export function setExpandedSubmenuIndex(index) {
  expandedSubmenuIndex = index;
}

export function isNavExpanded() {
  return navMenuExpanded;
}

export function getExpandedSubmenuIndex() {
  return expandedSubmenuIndex;
}
