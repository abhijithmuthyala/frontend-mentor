import ProductCarousel from "./components/carousel/ProductCarousel";
import Header from "./components/header/Header";
import AddToCart from "./components/product/AddToCart";
import Description from "./components/product/Description";
import { CartProvider } from "./context/CartContext";

import "./index.css";

export default function App() {
  const productId = "fall";

  return (
    <CartProvider>
      <div className="relative px-6">
        <Header />
      </div>
      <main>
        <h1 className="sr-only">Sneakers that vibe with you!</h1>
        <div className="pb-24 md:px-6 md:py-20">
          <section className="max-w-[1104px] mx-auto grid gap-y-5 justify-center md:grid-cols-2">
            <ProductCarousel imagesFolderName={productId} numItems={4} />
            <Description cta={<AddToCart productId={productId} />} />
          </section>
        </div>
      </main>
    </CartProvider>
  );
}
