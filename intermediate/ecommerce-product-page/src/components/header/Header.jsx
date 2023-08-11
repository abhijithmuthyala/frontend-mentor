import HeaderMenuAndNav from "./HeaderMenuAndNav";

export default function Header({ cart }) {
  return (
    <header
      className="flex items-center flex-wrap gap-4 max-w-[1104px] mx-auto py-[22px]
      md:py-8 md:border-b-2 md:border-b-blue-100 lg:gap-x-8"
    >
      <img
        src="./images/logo.svg"
        alt="Sneakers logo"
        width={138}
        height={20}
        className="max-w-full block"
      />
      <HeaderMenuAndNav />
      {cart}
      <button
        aria-label="Profile"
        className="w-6 h-6 bg-[url('/images/image-avatar.png')] bg-cover bg-center rounded-full md:w-12 md:h-12"
      ></button>
    </header>
  );
}
