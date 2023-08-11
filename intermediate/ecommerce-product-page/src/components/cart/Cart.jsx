import { useState } from "react";

import CartItem from "./CartItem";

export default function Cart({ cartIds, onDelete, orderQuantities }) {
  const [collapsed, setCollapsed] = useState(true);
  const cartIsEmpty = cartIds.size === 0;

  const emptyItemsElement = <p className="min-h-240px">Your cart is empty.</p>;
  const items = (
    <ul className=" w-full flex flex-col gap-y-8 mb-12">
      {[...cartIds].map((id, i) => (
        <CartItem
          id={id}
          key={i}
          onDelete={onDelete}
          orderQuantities={orderQuantities}
        />
      ))}
    </ul>
  );
  const checkoutButton = (
    <button
      onClick={toggleCart}
      className="w-full py-4 text-white font-bold bg-orange-900 rounded-lg"
    >
      Checkout
    </button>
  );

  function toggleCart() {
    setCollapsed(!collapsed);
  }

  return (
    <>
      <button
        aria-label="Cart"
        onClick={toggleCart}
        className="ml-auto min-w-[22px] h-[20px] bg-[url('/images/icon-cart.svg')]"
      ></button>
      <div
        className={`absolute z-[5] right-0 top-[calc(100%+8px)] w-full  max-w-[492px] px-2 md:px-6 ${
          collapsed ? "hidden" : "block"
        }`}
      >
        <div className="rounded-md bg-blue-100 shadow-xl shadow-blue-200">
          <h3 className="px-4 py-6 border-b-2 border-b-blue-200 font-bold">
            Cart
          </h3>
          <div
            className={`grid place-items-center min-h-[224px] max-h-[272px] px-4 py-8 text-blue-400 ${
              !cartIsEmpty && "overflow-y-scroll"
            }`}
          >
            {cartIsEmpty && emptyItemsElement}
            {!cartIsEmpty && (
              <>
                {items}
                {checkoutButton}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
