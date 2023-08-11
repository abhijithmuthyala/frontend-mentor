import { useContext, useState } from "react";

import { CartContext } from "../../context/CartContext";
import productsData from "../../data/products.json";

export default function AddToCart({ productId }) {
  const [units, setUnits] = useState(1);
  const { cartItems, dispatchCartItems } = useContext(CartContext);

  const { maxUnits } = productsData.find((product) => product.id === productId);
  const currentUnits = cartItems.get(productId) ?? 0;

  function handleIncreaseUnits() {
    setUnits(units + 1);
  }

  function handleDecreaseUnits() {
    setUnits(units - 1);
  }

  function handleAddToCart() {
    dispatchCartItems({
      type: "ADD_ITEM",
      id: productId,
      orderQuantity: units,
    });
    setUnits(1);
  }

  return (
    <div className="flex flex-col gap-y-5 lg:flex-row lg:gap-x-4">
      <div className="flex flex-grow-[1] justify-between items-center py-2 px-6 bg-blue-100 rounded-xl font-bold">
        <UnitButton disabled={units <= 1} onClick={handleDecreaseUnits}>
          -
        </UnitButton>
        <span>{units}</span>
        <UnitButton
          disabled={units + currentUnits >= maxUnits}
          onClick={handleIncreaseUnits}
        >
          +
        </UnitButton>
      </div>
      <button
        disabled={units + currentUnits > maxUnits}
        onClick={handleAddToCart}
        className="flex flex-grow-[2] items-center justify-center gap-4 py-4 bg-orange-900 rounded-lg text-white font-bold text-center disabled:cursor-not-allowed"
      >
        <span className="bg-[url('/images/icon-cart.svg')] bg-cover bg-center inline-block w-[20px] h-[20px] brightness-0 invert"></span>
        Add to cart
      </button>
    </div>
  );
}

function UnitButton({ onClick, disabled, children }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="text-orange-900 text-3xl disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
}
