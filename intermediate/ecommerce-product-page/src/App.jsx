import { useState } from "react";
import ProductCarousel from "./components/carousel/ProductCarousel";
import Cart from "./components/cart/Cart";
import Header from "./components/header/Header";
import AddToCart from "./components/product/AddToCart";
import Description from "./components/product/Description";

import "./index.css";

export default function App() {
  const [cartIds, setCartIds] = useState(new Set([]));
  const [orderQuantities, setOrderQuantities] = useState(
    new Map([["fall", 0]])
  );

  const productId = "fall";

  function handleAddToCart(productId, orderQuantity) {
    const currentOrderQuantity = orderQuantities.get(productId);

    cartIds.add(productId);
    orderQuantities.set(productId, currentOrderQuantity + orderQuantity);

    setCartIds(new Set(cartIds));
    setOrderQuantities(new Map(orderQuantities));
  }

  function handleRemoveFromCart(productId) {
    cartIds.delete(productId);
    orderQuantities.set(productId, 0);

    setCartIds(new Set(cartIds));
    setOrderQuantities(new Map(orderQuantities));
  }

  return (
    <>
      <div className="relative px-6">
        <Header
          cart={
            <Cart
              cartIds={cartIds}
              productId={productId}
              onDelete={handleRemoveFromCart}
              orderQuantities={orderQuantities}
            />
          }
        />
      </div>
      <main>
        <h1 className="sr-only">Sneakers that vibe with you!</h1>
        <div className="pb-24 md:px-6 md:py-20">
          <section className="max-w-[1104px] mx-auto grid gap-y-5 justify-center md:grid-cols-2">
            <ProductCarousel imagesFolderName={productId} numItems={4} />
            <Description
              cta={
                <AddToCart
                  productId={productId}
                  onAdd={handleAddToCart}
                  orderQuantities={orderQuantities}
                />
              }
            />
          </section>
        </div>
      </main>
    </>
  );
}
