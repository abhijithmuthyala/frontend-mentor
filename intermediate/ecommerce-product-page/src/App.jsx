import ProductCarousel from "./components/carousel/ProductCarousel";
import Header from "./components/header/Header";

import "./index.css";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <h1 className="sr-only">Sneakers that vibe with you!</h1>
        <div>
          <section className="">
            <ProductCarousel imagesFolderName="product" numItems={4} />
            <article className="px-6">
              <h2 className="font-bold mb-3">
                <p className="text-3xl">
                  <span className="mb-2 block uppercase text-orange-900 text-sm ">
                    Sneaker company
                  </span>
                  Fall Limited Edition Sneakers
                </p>
              </h2>
              <p className="mb-7 text-blue-400 font-normal">
                These low-profile sneakers are your perfect casual wear
                companion. Featuring a durable rubber outer sole, they'll
                withstand everything the weather can offer.
              </p>
              <p className="flex flex-wrap justify-between items-center mb-6 font-bold ">
                <span>
                  <span className="text-3xl font-bold mr-4">$125.00</span>
                  <span className="text-orange-900 py-1 px-2 bg-orange-200 rounded-md">
                    50%
                  </span>
                </span>
                <s className="ml-auto text-blue-200">$250.00</s>
              </p>
              <div className="flex flex-col gap-y-5">
                <div className="flex justify-between items-center py-2 px-6 bg-blue-100 rounded-xl font-bold">
                  <button className="text-orange-900 text-3xl">-</button>
                  <span>0</span>
                  <button className="text-orange-900 text-3xl">+</button>
                </div>
                <button className="flex items-center justify-center gap-4 py-4 bg-orange-900 rounded-lg text-white font-bold text-center">
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
