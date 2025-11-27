import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

// 🚨 CORRECCIÓN 1: NavBar. Asumiendo que la carpeta es 'navbar' y el archivo 'navbar'
// (Si tu archivo se llama 'NavBar.jsx', el path debe ser "./components/navbar/NavBar")
import NavBar from "./components/navbar/navbar";

// 🚨 CORRECCIÓN 2: CartProvider. Asumiendo que el archivo se llama 'cartContext.jsx'
// (Si tu archivo se llama 'CartContext.jsx', el path debe ser "./context/CartContext")
import { CartProvider } from "./context/cartContext";

// Lazy loading de componentes grandes
const ItemListContainer = lazy(() =>
  // Ruta de archivo: itemlistcontainer/itemlistcontainer.jsx
  import("./components/itemListContainer/itemListContainer")
);
const ItemDetailContainer = lazy(() =>
  // Ruta de archivo: itemDetail/itemDetailContainer.jsx
  import("./components/itemDetail/itemDetailContainer")
);
const Cart = lazy(() =>
  // Ruta de archivo: cart/cart.jsx
  import("./components/cart/cart")
);
const Contacto = lazy(() =>
  // Ruta de archivo: contacto/contacto.jsx
  import("./components/contacto/contacto")
);
const Acerca = lazy(() =>
  // Ruta de archivo: acerca/acerca.jsx
  import("./components/acerca/acerca")
);
const CheckoutForm = lazy(() =>
  // Ruta de archivo: checkoutForm/checkoutForm.jsx
  import("./components/checkoutForm/checkoutForm")
);

function App() {
  return (
    <CartProvider>
      {" "}
      <BrowserRouter>
        <NavBar />{" "}
        <Suspense fallback={<div>Cargando...</div>}>
          {" "}
          <Routes>
            {/* HOME */}{" "}
            <Route
              path="/"
              element={<ItemListContainer greeting="Bienvenido a IndyTech" />}
            />
            {/* LISTA GENERAL DE PRODUCTOS */}{" "}
            <Route
              path="/productos"
              element={<ItemListContainer greeting="Todos los productos" />}
            />
            {/* FILTRO POR CATEGORÍA */}{" "}
            <Route
              path="/categoria/:categoriaId"
              element={<ItemListContainer />}
            />
            {/* DETALLE DE PRODUCTO */}{" "}
            <Route path="/item/:id" element={<ItemDetailContainer />} />  {" "}
            {/* CARRITO */}
            <Route path="/cart" element={<Cart />} /> {/* CONTACTO */}
            <Route path="/contacto" element={<Contacto />} /> {/* ACERCA */}
            <Route path="/acerca" element={<Acerca />} /> {/* CHECKOUT */}
            <Route path="/checkout" element={<CheckoutForm />} />{" "}
            {/* RUTA POR DEFECTO */}{" "}
            <Route path="*" element={<h2>Página no encontrada</h2>} />{" "}
          </Routes>{" "}
        </Suspense>{" "}
      </BrowserRouter>{" "}
    </CartProvider>
  );
}

export default App;
