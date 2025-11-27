import React from "react";
import { useCart } from "../../context/cartContext";
import "./CartWidget.css";

const CartWidget = () => {
  const { cartQuantity } = useCart();

  return (
    <div className="cart-widget">
      <span className="cart-icon">🛒</span>
      <span className="cart-count">{cartQuantity}</span>
    </div>
  );
};

export default CartWidget;
