import FooterLink from "./components/FooterLink";
import Timer from "./components/Timer";

export default function App() {
  return (
    <>
      <h1 className="uppercase text-white font-bold text-2xl">
        We're launching soon
      </h1>
      <main>
        <h2 className="sr-only">Live in, ...</h2>
        <Timer />
      </main>
      <footer>
        <h2 className="sr-only">Visit our social accounts</h2>
        <ul className="max-w-lg mx-auto flex items-center justify-center gap-x-4">
          <li>
            <FooterLink siteName="Facebook" url="/" iconName="facebook" />
          </li>
          <li>
            <FooterLink siteName="Pinterest" url="/" iconName="pinterest" />
          </li>
          <li>
            <FooterLink siteName="Instagram" url="/" iconName="instagram" />
          </li>
        </ul>
      </footer>
    </>
  );
}
