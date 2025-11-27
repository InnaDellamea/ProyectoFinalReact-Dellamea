import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./context/CartContext";
import Contacto from "./components/Contacto/Contacto";
import Acerca from "./components/Acerca/acerca";
import CheckoutForm from "./components/CheckoutForm/CheckoutForm";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* HOME */}
          <Route
            path="/"
            element={<ItemListContainer greeting="Bienvenido a IndyTech" />}
          />

          {/* LISTA GENERAL DE PRODUCTOS */}
          <Route
            path="/productos"
            element={<ItemListContainer greeting="Todos los productos" />}
          />

          {/* FILTRO POR CATEGORÍA */}
          <Route
            path="/categoria/:categoriaId"
            element={<ItemListContainer />}
          />

          {/* DETALLE DE PRODUCTO */}
          <Route path="/item/:id" element={<ItemDetailContainer />} />

          {/* CARRITO */}
          <Route path="/cart" element={<Cart />} />

          {/* CONTACTO */}
          <Route path="/contacto" element={<Contacto />} />

          {/* ACERCA */}
          <Route path="/acerca" element={<acerca />} />

          {/* CHECKOUT */}
          <Route path="/checkout" element={<CheckoutForm />} />

          {/* RUTA POR DEFECTO */}
          <Route path="*" element={<h2>Página no encontrada</h2>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
