import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ item }) => {
  return (
    <div className="item-card">
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <p>${item.price}</p>
      <Link to={`/producto/${item.id}`} className="btn">
        Ver Detalle
      </Link>
    </div>
  );
};

export default Item;
