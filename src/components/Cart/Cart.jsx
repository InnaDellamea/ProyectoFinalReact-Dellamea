import { useCart } from "../../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart, clearCart, getTotalPrice } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout"); // Redirige al formulario de checkout
  };

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <div className="empty-icon">🛒</div>
        <h2>Tu carrito está vacío</h2>
        <p>¡Agrega productos para comenzar tu compra!</p>
        <Link to="/productos" className="btn-continue-shopping">
          Ver productos
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Tu Carrito</h2>
        <button onClick={clearCart} className="btn-clear-cart">
          Vaciar carrito
        </button>
      </div>

      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="item-info">
              <h3>{item.nombre}</h3>
              <p className="item-price">Precio: ${item.precio}</p>
              <p className="item-quantity">Cantidad: {item.cantidad}</p>
              <p className="item-subtotal">
                Subtotal: ${(item.precio * item.cantidad).toFixed(2)}
              </p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="btn-remove"
              aria-label="Eliminar producto"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <div className="summary-row">
          <span>Total:</span>
          <span className="total-price">${getTotalPrice()}</span>
        </div>

        <div className="cart-buttons">
          <button className="btn-checkout" onClick={handleCheckout}>
            Finalizar Compra
          </button>
          <Link to="/productos" className="btn-continue">
            Seguir comprando
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
