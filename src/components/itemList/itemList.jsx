import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const USD_TO_ARS = 1447;

const Item = ({ item }) => {
  // Función para obtener imagen segura
  const getImageUrl = () => {
    if (typeof item.imagen === "string") {
      return item.imagen;
    }
    if (item.categoria === "laptops") {
      return "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400";
    }
    return "https://via.placeholder.com/400x300?text=Producto";
  };

  return (
    <div className="item-card">
      <img
        src={getImageUrl()}
        alt={item.nombre}
        className="item-image"
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/400x300?text=Sin+Imagen";
        }}
      />

      <h3>{item.nombre}</h3>

      {/* Precio USD */}
      <p className="price-usd">USD ${item.precio || 0}</p>

      {/* Precio ARS */}
      <p className="price-ars">
        ARS {((item.precio || 0) * USD_TO_ARS).toLocaleString("es-AR")}
      </p>

      <Link to={`/item/${item.id}`} className="btn">
        {" "}
        {/* 👈 CORREGIDO: era /producto/ */}
        Ver Detalle
      </Link>
    </div>
  );
};

export default Item;
