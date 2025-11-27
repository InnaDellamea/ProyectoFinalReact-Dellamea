import React from "react";
import ItemCount from "./ItemCount";
import { useCart } from "../../context/CartContext";
import "./ItemDetail.css";

const USD_TO_ARS = 1447;

const ItemDetail = ({ id, nombre, imagen, precio, descripcion }) => {
  const { addItem } = useCart();

  const handleOnAdd = (quantity) => {
    const product = { id, nombre, precio, imagen };
    addItem(product, quantity);
  };

  return (
    <div
      className="item-detail"
      style={{ color: "white", textAlign: "center" }}
    >
      <img
        src={imagen}
        alt={nombre}
        style={{ maxWidth: 400, width: "100%", borderRadius: 8 }}
      />

      <h2>{nombre}</h2>
      <p>{descripcion}</p>

      {/* Precio en USD */}
      <p>
        <strong>Precio USD:</strong> ${precio}
      </p>

      {/* Precio en ARS */}
      <p>
        <strong>Precio ARS:</strong>{" "}
        {(precio * USD_TO_ARS).toLocaleString("es-AR")}
      </p>

      <ItemCount stock={20} initial={1} onAdd={handleOnAdd} />
    </div>
  );
};

export default ItemDetail;
