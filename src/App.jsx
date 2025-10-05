import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a IndyTech! Los mejores productos te esperan 🛍️" />
    </>
  );
}

export default App;
