import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../../data/products";
import "./ItemListContainer.css"; // Asegúrate que tu CSS esté importado

const ItemListContainer = ({ greeting }) => {
  const { categoriaId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Simulamos fetch de productos
    const fetchProducts = new Promise((resolve) => {
      setTimeout(() => {
        if (categoriaId) {
          resolve(products.filter((prod) => prod.categoria === categoriaId));
        } else {
          resolve(products);
        }
      }, 500);
    });

    fetchProducts.then((data) => setItems(data));
  }, [categoriaId]);

  // Saber si estamos en home
  const isHome = !categoriaId;

  return (
    <div className="item-list-container">
      {/* Banner principal - solo en home */}
      {isHome && (
        <div className="hero-banner">
          <div className="hero-content">
            <h1>¡Bienvenido a IndyTech!</h1>
            <p>Las mejores ofertas en tecnología</p>
          </div>
          <Link to="/produtos" className="btn-hero">
            Ver Productos
          </Link>
        </div>
      )}

      {/* Categorías destacadas - solo en home */}
      {isHome && (
        <div className="categories-section">
          <h2 className="section-title">Categorías</h2>
          <div className="categories-grid">
            <Link to="/categoria/laptops" className="category-card">
              <div className="category-icon">💻</div>
              <h3>Laptops</h3>
              <p>Notebooks y ultrabooks</p>
            </Link>
            <Link to="/categoria/componentes" className="category-card">
              <div className="category-icon">🔧</div>
              <h3>Componentes</h3>
              <p>Hardware para tu PC</p>
            </Link>
            <Link to="/categoria/monitores" className="category-card">
              <div className="category-icon">🖥️</div>
              <h3>Monitores</h3>
              <p>Pantallas de alta calidad</p>
            </Link>
            <Link to="/categoria/perifericos" className="category-card">
              <div className="category-icon">⌨️</div>
              <h3>Periféricos</h3>
              <p>Mouse, teclados y más</p>
            </Link>
          </div>
        </div>
      )}

      {/* Título de sección */}
      <div className="products-header">
        <h2 className="section-title">
          {categoriaId
            ? `Categoría: ${
                categoriaId.charAt(0).toUpperCase() + categoriaId.slice(1)
              }` // Capitalizamos el título de categoría
            : greeting || "Productos Destacados"}
        </h2>
        {categoriaId && (
          <Link to="/" className="btn-back-home">
            ← Volver al inicio
          </Link>
        )}
      </div>

      {/* ✨ GRID DE PRODUCTOS: AHORA ESTÁN DENTRO DE .items-grid */}
      <div className="items-grid">
        {items.map((prod) => (
          <div key={prod.id} className="item-card">
            <div className="item-image-wrapper">
              <img src={prod.imagen} alt={prod.nombre} className="item-image" />
            </div>
            <div className="item-info">
              <h3 className="item-title">{prod.nombre}</h3>
              <div className="item-price-section">
                <p className="item-price">${prod.precio}</p>
                <span className="shipping-badge">Envío gratis</span>
              </div>
              <Link to={`/item/${prod.id}`} className="btn-detail">
                Ver Detalle
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Banner inferior - solo en home */}
      {isHome && (
        <div className="promo-banner">
          <h3>🎉 Ofertas de la semana</h3>
          <p>Hasta 30% de descuento en productos seleccionados</p>
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
