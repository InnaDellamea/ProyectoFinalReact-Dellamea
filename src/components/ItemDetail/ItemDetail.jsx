import React from "react";
import ItemCount from "./ItemCount";
import { useCart } from "../../context/CartContext";
import "./ItemDetail.css";

const ItemDetail = ({ id, name, img, price, description }) => {
  const { addItem } = useCart();

  const handleOnAdd = (quantity) => {
    // construimos un objeto de producto para guardar en el carrito
    const product = { id, name, price, img };
    addItem(product, quantity);
    // puedes mostrar un toast o redirect si querés
    console.log(`Agregaste ${quantity} unidades de ${name}`);
  };

  return (
    <div
      className="item-detail"
      style={{ color: "white", textAlign: "center" }}
    >
      <img
        src={img}
        alt={name}
        style={{ maxWidth: 400, width: "100%", borderRadius: 8 }}
      />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        <strong>Precio:</strong> ${price}
      </p>

      <ItemCount stock={20} initial={1} onAdd={handleOnAdd} />
    </div>
  );
};

export default ItemDetail;
