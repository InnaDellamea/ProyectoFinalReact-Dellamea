import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getAllProducts } from "../../firebase/firebaseProducts";
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  const { categoriaId } = useParams();
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const isHome = window.location.pathname === "/";

  // Validar que el producto tenga los datos necesarios
  const isValidProduct = (prod) => {
    return (
      prod.id &&
      prod.nombre &&
      typeof prod.precio === "number" &&
      prod.precio > 0
    );
  };

  // Función para obtener imagen segura
  const getImageUrl = (prod) => {
    if (typeof prod?.imagen === "string" && prod.imagen.startsWith("http")) {
      return prod.imagen;
    }
    return "https://via.placeholder.com/400x300.png?text=Sin+Imagen";
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getAllProducts();
        const validProducts = data.filter(isValidProduct);
        setItems(validProducts);
      } catch (error) {
        console.error("Error cargando productos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Filtrado por búsqueda
  const filteredItems = items.filter(
    (prod) =>
      prod.nombre?.toLowerCase().includes(search.toLowerCase()) ||
      prod.categoria?.toLowerCase().includes(search.toLowerCase())
  );

  // Filtrado por categoría
  const categoryItems = categoriaId
    ? items.filter(
        (prod) => prod.categoria?.toLowerCase() === categoriaId.toLowerCase()
      )
    : filteredItems;

  // Productos destacados aleatorios
  const destacados = [...items].sort(() => Math.random() - 0.5).slice(0, 3);

  if (loading) {
    return (
      <div className="item-list-container">
        <p className="loading-message">Cargando productos...</p>
      </div>
    );
  }

  return (
    <div className="item-list-container">
      {/* HERO BANNER - Solo en home */}
      {isHome && (
        <div className="hero-banner">
          <div className="hero-content">
            <h1>¡Bienvenida a IndyTech!</h1>
            <p>Las mejores ofertas en tecnología</p>
          </div>
          <Link to="/productos" className="btn-hero">
            Ver Todos los Productos
          </Link>
        </div>
      )}

      {/* PRODUCTOS DESTACADOS - Solo en home */}
      {isHome && destacados.length > 0 && (
        <div className="destacados-section">
          <h2 className="section-title">⭐ Productos Destacados</h2>
          <div className="items-grid">
            {destacados.map((prod) => (
              <div key={prod.id} className="item-card">
                <img
                  src={getImageUrl(prod)}
                  alt={prod.nombre}
                  className="item-image"
                />
                <h3>{prod.nombre}</h3>
                <p className="item-price">USD ${prod.precio}</p>
                <Link to={`/item/${prod.id}`} className="btn-detail">
                  Ver Detalle
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* LISTADO COMPLETO - Solo en /productos */}
      {!isHome && (
        <>
          <div className="products-header">
            <h2 className="section-title">
              {categoriaId
                ? `Categoría: ${categoriaId}`
                : "Todos los Productos"}
            </h2>
          </div>

          {/* Buscador */}
          <div className="search-container">
            <input
              type="text"
              placeholder="Buscar producto o categoría..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-input"
            />
          </div>

          {/* Grid de productos */}
          <div className="items-grid">
            {categoryItems.length > 0 ? (
              categoryItems.map((prod) => (
                <div key={prod.id} className="item-card">
                  <img
                    src={getImageUrl(prod)}
                    alt={prod.nombre}
                    className="item-image"
                  />
                  <h3 className="item-title">{prod.nombre}</h3>
                  <p className="item-price">USD ${prod.precio}</p>
                  <Link to={`/item/${prod.id}`} className="btn-detail">
                    Ver Detalle
                  </Link>
                </div>
              ))
            ) : (
              <p className="no-products">No hay productos disponibles.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ItemListContainer;
