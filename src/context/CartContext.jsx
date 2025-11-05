import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const cartQuantity = cart.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, cartQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
