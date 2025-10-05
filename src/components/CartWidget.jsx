import React from "react";
import "./CartWidget.css";

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <span role="img" aria-label="cart" className="cart-icon">
        🛒
      </span>
      <span className="cart-count">3</span>
    </div>
  );
};

export default CartWidget;
