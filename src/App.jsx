import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./context/CartContext";
import Contacto from "./components/Contacto/Contacto";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="Bienvenido a IndyTech" />}
          />
          <Route
            path="/categoria/:categoriaId"
            element={<ItemListContainer />}
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<h2>Página no encontrada</h2>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
