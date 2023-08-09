import ProductCarousel from "./components/carousel/ProductCarousel";
import Header from "./components/header/Header";

import "./index.css";

export default function App() {
  return (
    <>
      <div className="px-6">
        <Header />
      </div>
      <main>
        <h1 className="sr-only">Sneakers that vibe with you!</h1>
        <div className="pb-24 md:px-6 md:py-20">
          <section className="max-w-[1104px] mx-auto grid gap-y-5 justify-center md:grid-cols-2">
            <ProductCarousel imagesFolderName="product" numItems={4} />
            <article className="px-6 md:px-8 md:self-center lg:px-14">
              <h2 className="font-bold mb-3 md:mb-10">
                <p className="text-3xl md:text-[44px] md:leading-[1]">
                  <span className="mb-2 block uppercase text-orange-900 text-sm md:text-base md:mb-6">
                    Sneaker company
                  </span>
                  Fall Limited Edition Sneakers
                </p>
              </h2>
              <p className="mb-7 text-blue-400 font-normal md:text-lg">
                These low-profile sneakers are your perfect casual wear
                companion. Featuring a durable rubber outer sole, they'll
                withstand everything the weather can offer.
              </p>
              <p className="flex flex-wrap justify-between items-center mb-6 font-bold lg:flex-col lg:items-start lg:gap-y-1">
                <span className="flex items-center md:items-start">
                  <span className="text-3xl font-bold mr-4">$125.00</span>
                  <span className="text-orange-900 py-1 px-2 bg-orange-200 rounded-md">
                    50%
                  </span>
                </span>
                <s className="text-blue-200">$250.00</s>
              </p>
              <div className="flex flex-col gap-y-5 lg:flex-row lg:gap-x-4">
                <div className="flex flex-grow-[1] justify-between items-center py-2 px-6 bg-blue-100 rounded-xl font-bold">
                  <button className="text-orange-900 text-3xl">-</button>
                  <span>0</span>
                  <button className="text-orange-900 text-3xl">+</button>
                </div>
                <button className="flex flex-grow-[2] items-center justify-center gap-4 py-4 bg-orange-900 rounded-lg text-white font-bold text-center">
                  <span className="bg-[url('./images/icon-cart.svg')] bg-cover bg-center inline-block w-[20px] h-[20px] brightness-0 invert"></span>
                  Add to cart
                </button>
              </div>
            </article>
          </section>
        </div>
      </main>
    </>
  );
}
