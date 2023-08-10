export default function NavLinks({ collapsed }) {
  return (
    <nav
      className={`${
        collapsed ? "hidden" : "flex"
      } absolute z-20 left-0 top-0 h-screen w-2/3 bg-white pt-24 px-6 flex-col gap-4`}
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
  );
}

function NavLink({ href, text }) {
  return (
    <a href={"/" + href} className="text-black font-bold text-lg">
      {text}
    </a>
  );
}
