import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById } from "../../firebase/firebaseProducts";
import { useCart } from "../../context/CartContext";
import "./ItemDetailContainer.css";

const USD_TO_ARS = 1447;

const ItemDetailContainer = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const [message, setMessage] = useState("");
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setProduct(null);
    setImageError(false);

    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (error) {
        console.error("Error cargando el producto:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const getImageUrl = () => {
    if (imageError) {
      return "https://via.placeholder.com/400x300.png?text=Sin+Imagen";
    }

    const imagen = product?.imagen;

    if (typeof imagen === "string" && imagen.startsWith("http")) {
      return imagen;
    }

    return "https://via.placeholder.com/400x300.png?text=Sin+Imagen";
  };

  const handleImageError = () => {
    setImageError(true);
  };

  if (!product) {
    return (
      <div className="item-detail-loading">
        <p>Cargando producto...</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({ ...product, cantidad });
    setMessage(`${cantidad} ${product.nombre} agregado(s) al carrito!`);
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="item-detail-container">
      <Link to="/productos" className="btn-back">
        ← Volver a la lista
      </Link>

      <div className="detail-content">
        <img
          src={getImageUrl()}
          alt={product.nombre}
          className="detail-image"
          onError={handleImageError}
        />

        <div className="detail-info">
          <h2>{product.nombre}</h2>
          <p className="detail-description">{product.descripcion}</p>

          <p className="detail-price">Precio USD: ${product.precio || 0}</p>
          <p className="detail-price">
            Precio ARS: $
            {((product.precio || 0) * USD_TO_ARS).toLocaleString("es-AR")}
          </p>

          <div className="item-count">
            <button onClick={() => setCantidad(Math.max(1, cantidad - 1))}>
              -
            </button>
            <span>{cantidad}</span>
            <button onClick={() => setCantidad(cantidad + 1)}>+</button>
          </div>

          <button className="btn-add-to-cart" onClick={handleAddToCart}>
            Agregar {cantidad} al carrito
          </button>

          {message && <div className="cart-message">{message}</div>}
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
