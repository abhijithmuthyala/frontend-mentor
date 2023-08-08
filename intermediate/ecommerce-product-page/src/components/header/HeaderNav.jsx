import { useState } from "react";

export default function HeaderNav() {
  const [collapsed, setCollapsed] = useState(true);

  const icons = {
    menu: "bg-[url('./images/icon-menu.svg')]",
    close: "bg-[url('./images/icon-close.svg')]",
  };

  function toggleNavbar() {
    setCollapsed(!collapsed);
  }

  return (
    <>
      <div
        className={`absolute h-screen w-screen left-0 top-0 bg-black bg-opacity-75 ${
          collapsed ? "opacity-0" : "opacity-100"
        }`}
      ></div>
      <button
        aria-label={collapsed ? "Open Menu" : "Close Menu"}
        onClick={toggleNavbar}
        className={`order-first min-w-[16px] h-[15px] ${
          icons[collapsed ? "menu" : "close"]
        }  bg-cover relative z-20`}
      ></button>
      <nav
        className={`${
          collapsed ? "hidden" : "block"
        } absolute left-0 top-0 h-screen w-2/3 bg-white pt-24 px-6 flex-col gap-4`}
      >
        <ul className="flex flex-col gap-5">
          <li>
            <NavLink href="collections" text="Collections" />
          </li>
          <li>
            <NavLink href="men" text="Men" />
          </li>
          <li>
            <NavLink href="women" text="Women" />
          </li>
          <li>
            <NavLink href="about" text="About" />
          </li>
          <li>
            <NavLink href="contact" text="Contact" />
          </li>
        </ul>
      </nav>
    </>
  );
}

function NavLink({ href, text }) {
  return (
    <a href={"/" + href} className="text-black font-bold text-lg">
      {text}
    </a>
  );
}
