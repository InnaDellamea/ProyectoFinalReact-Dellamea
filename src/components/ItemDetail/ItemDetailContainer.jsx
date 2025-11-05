import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../../data/products";
import { useCart } from "../../context/CartContext";
// Importa el archivo CSS si lo tienes (ej: './ItemDetailContainer.css')

const ItemDetailContainer = () => {
  const { id } = useParams(); // Captura el :id de la URL
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [cantidad, setCantidad] = useState(1);

  useEffect(() => {
    // 1. Inicia la carga
    setProduct(null);

    const fetchProduct = new Promise((resolve) => {
      setTimeout(() => {
        // 2. Busca el producto, asegurando que el ID de la URL (string) se convierta a número
        const found = products.find((p) => p.id === parseInt(id));
        resolve(found);
      }, 500);
    });

    fetchProduct.then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return (
      <div className="item-detail-loading">
        <p>Cargando producto...</p>
      </div>
    );
  }

  return (
    <div className="item-detail-container">
      <Link to="/" className="back-link">
        ← Volver a la lista
      </Link>

      <div className="detail-content">
        <img
          src={product.imagen}
          alt={product.nombre}
          className="detail-image"
        />
        <div className="detail-info">
          <h2>{product.nombre}</h2>
          <p className="detail-description">{product.descripcion}</p>
          <p className="detail-price">Precio: **${product.precio}**</p>

          {/* Contador de unidades */}
          <div className="item-count">
            <button onClick={() => setCantidad(Math.max(1, cantidad - 1))}>
              -
            </button>
            <span>{cantidad}</span>
            <button onClick={() => setCantidad(cantidad + 1)}>+</button>
          </div>

          <button
            className="btn-add-to-cart"
            onClick={() => addToCart({ ...product, cantidad })}
          >
            Agregar {cantidad} al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
