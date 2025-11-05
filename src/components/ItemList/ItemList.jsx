import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ items }) => {
  return (
    <div className="item-list">
      {items.map((producto) => (
        <Item key={producto.id} item={producto} />
      ))}
    </div>
  );
};

export default ItemList;
