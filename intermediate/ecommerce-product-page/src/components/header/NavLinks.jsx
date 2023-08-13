export default function NavLinks({ collapsed }) {
  return (
    <nav
      className={`${
        collapsed ? "hidden" : "block"
      } absolute z-20 left-0 top-0 self-stretch h-screen w-2/3 bg-white pt-24 px-6 lg:block lg:relative lg:h-auto lg:w-auto lg:py-0`}
    >
      <ul className="flex flex-col gap-y-5 items-start h-full lg:flex-row lg:gap-x-6 lg:items-stretch">
        <NavLink href="collections" text="Collections" />
        <NavLink href="men" text="Men" />
        <NavLink href="women" text="Women" />
        <NavLink href="about" text="About" />
        <NavLink href="contact" text="Contact" />
      </ul>
    </nav>
  );
}

function NavLink({ href, text }) {
  return (
    <li className="">
      <a
        href={"/" + href}
        className="grid  h-full text-blue-400 font-bold text-lg lg:text-base hover:text-black lg:place-items-center hover:border-b-4 lg:box-content border-orange-900 transition-all"
      >
        {text}
      </a>
    </li>
  );
}
