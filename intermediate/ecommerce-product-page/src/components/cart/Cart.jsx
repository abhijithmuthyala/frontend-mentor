import { useState } from "react";

import CartItem from "./CartItem";

export default function Cart() {
  const [productIds, setProductIds] = useState([
    "fall",
    "fall",
    "fall",
    "fall",
  ]);

  const emptyItemsElement = (
    <p className="grid place-content-center min-h-240px">Your cart is empty.</p>
  );
  const items = (
    <ul className="flex flex-col gap-y-8 mb-12">
      {productIds?.map((id) => (
        <CartItem id={id} />
      ))}
    </ul>
  );
  const checkoutButton = (
    <button className="w-full py-4 text-white font-bold bg-orange-900 rounded-lg">
      Checkout
    </button>
  );

  return (
    <div className="absolute z-40 right-0 top-[calc(100%+8px)] w-full  max-w-[492px] px-2 md:px-6">
      <div className="h-full rounded-md bg-blue-100 shadow-xl shadow-blue-200">
        <h3 className="px-4 py-6 border-b-2 border-b-blue-200 font-bold">
          Cart
        </h3>
        <div className="max-h-[272px] px-4 py-8 text-blue-400 overflow-y-scroll">
          {productIds.length === 0 && emptyItemsElement}
          {productIds.length > 0 && (
            <>
              {items}
              {checkoutButton}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
