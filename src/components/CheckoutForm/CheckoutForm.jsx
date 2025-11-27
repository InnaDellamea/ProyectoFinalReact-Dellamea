import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./CheckoutForm.css";

const USD_TO_ARS = 1447;

const CheckoutForm = () => {
  const { cart, clearCart } = useCart();
  const [ordenId, setOrdenId] = useState(null);

  const totalUSD = cart.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );
  const totalARS = totalUSD * USD_TO_ARS;

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevaOrden = {
      buyer: { nombre, email, telefono },
      items: cart,
      totalUSD,
      totalARS,
      fecha: new Date(),
    };

    setOrdenId(Math.floor(Math.random() * 1000000));
    clearCart();
  };

  if (ordenId) {
    return (
      <div className="checkout-success">
        <h2>¡Compra realizada con éxito!</h2>
        <p>
          ID de orden: <strong>{ordenId}</strong>
        </p>
        <Link to="/productos" className="btn-back-to-products">
          Volver a productos
        </Link>
      </div>
    );
  }

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <h2>Finalizar Compra</h2>

      <p>Total USD: ${totalUSD}</p>
      <p>Total ARS: ${totalARS.toLocaleString()}</p>

      <input
        placeholder="Nombre"
        value={nombre}
        required
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        placeholder="Email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Teléfono"
        value={telefono}
        required
        onChange={(e) => setTelefono(e.target.value)}
      />

      <button type="submit" className="btn-confirm">
        Confirmar Compra
      </button>
    </form>
  );
};

export default CheckoutForm;
