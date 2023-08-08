import HeaderNav from "./HeaderNav";

export default function Header() {
  return (
    <>
      <header className="flex items-center flex-wrap gap-4 max-w-screen-xl mx-auto py-5 ">
        <img
          src="./images/logo.svg"
          alt="Sneakers logo"
          width={138}
          height={20}
          className="max-w-full block"
        />
        <HeaderNav />
        <button
          aria-label="Cart"
          className="ml-auto min-w-[22px] h-[20px] bg-[url('./images/icon-cart.svg')]"
        ></button>
        <button
          aria-label="Profile"
          className="w-6 h-6 bg-[url('./images/image-avatar.png')] bg-cover bg-center rounded-full"
        ></button>
      </header>
    </>
  );
}
