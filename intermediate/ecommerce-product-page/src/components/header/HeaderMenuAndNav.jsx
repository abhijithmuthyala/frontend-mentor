import { useState } from "react";

import { viewTransitionWrapper } from "../../utils";
import NavLinks from "./NavLinks";

export default function HeaderMenuAndNav() {
  const [collapsed, setCollapsed] = useState(true);
  const icons = {
    menu: "bg-[url('/images/icon-menu.svg')]",
    close: "bg-[url('/images/icon-close.svg')]",
  };

  function toggleMenu() {
    viewTransitionWrapper(function viewTransition() {
      setCollapsed(!collapsed);
    });
  }

  return (
    <>
      <div
        className={`absolute h-screen w-screen left-0 top-0 bg-black bg-opacity-75 ${
          collapsed ? "opacity-0 -z-10" : "opacity-100 z-10"
        } lg:hidden`}
      ></div>
      <button
        aria-label={collapsed ? "Open Menu" : "Close Menu"}
        onClick={toggleMenu}
        className={`z-30 order-first w-[16px] h-[15px] ${
          icons[collapsed ? "menu" : "close"]
        }  bg-cover static lg:hidden`}
      ></button>
      <NavLinks collapsed={collapsed} />
    </>
  );
}
