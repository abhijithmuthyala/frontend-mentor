import { createContext, useReducer } from "react";

export const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, dispatchCartItems] = useReducer(cartReducer, new Map());

  return (
    <CartContext.Provider value={{ cartItems, dispatchCartItems }}>
      {children}
    </CartContext.Provider>
  );
}

function cartReducer(cartItems, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const currentQuantity = cartItems.get(action.id) ?? 0;
      const newCartItems = new Map(cartItems);
      newCartItems.set(action.id, action.orderQuantity + currentQuantity);

      return newCartItems;
    }
    case "REMOVE_ITEM": {
      const newCartItems = new Map(cartItems);
      newCartItems.delete(action.id);

      return newCartItems;
    }
    default: {
      return cartItems;
    }
  }
}
