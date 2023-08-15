import FooterLink from "./components/FooterLink";
import Timer from "./components/Timer";

export default function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div className="mt-[8.6rem] max-[320px]:mt-16">
        <h1 className="uppercase text-white font-bold text-lg text-center tracking-[6px] px-8 mb-12 md:tracking-[10px] md:mb-24">
          We're launching soon
        </h1>
        <main>
          <h2 className="sr-only">Live in, ...</h2>
          <Timer />
        </main>
      </div>
      <footer className="py-11 md:py-16">
        <h2 className="sr-only">Visit our social accounts</h2>
        <ul className="max-w-lg mx-auto flex items-center justify-center gap-x-8">
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
    </div>
  );
}
