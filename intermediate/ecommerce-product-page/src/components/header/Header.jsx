export default function Header() {
  return (
    <>
      <header>
        <img
          src="./images/logo.svg"
          alt="Sneakers logo"
          width={138}
          height={20}
        />
        <ul>
          <li>
            <a href="/collections">Collections</a>
          </li>
          <li>
            <a href="/men">Men</a>
          </li>
          <li>
            <a href="/women">Women</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <button>Cart</button>
        <button>Avatar</button>
        <button>Menu</button>
      </header>
    </>
  );
}
