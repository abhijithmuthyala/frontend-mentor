export default function NavLinks({ collapsed }) {
  return (
    <nav
      className={`${
        collapsed ? "hidden" : "block"
      } absolute z-20 left-0 top-0 h-screen w-2/3 bg-white pt-24 px-6 lg:block lg:relative lg:h-auto lg:w-auto lg:py-0`}
    >
      <ul className="flex flex-col gap-y-5 lg:flex-row lg:gap-x-6">
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
    <a href={"/" + href} className="text-black font-bold text-lg lg:text-base">
      {text}
    </a>
  );
}
