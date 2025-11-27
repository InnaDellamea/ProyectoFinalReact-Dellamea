import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import NavBar from "./components/NavBar/NavBar";
import { CartProvider } from "./context/CartContext";

// Lazy loading de componentes grandes
const ItemListContainer = lazy(() =>
  import("./components/ItemListContainer/ItemListContainer")
);
const ItemDetailContainer = lazy(() =>
  import("./components/ItemDetail/ItemDetailContainer")
);
const Cart = lazy(() => import("./components/Cart/Cart"));
const Contacto = lazy(() => import("./components/Contacto/Contacto"));
const Acerca = lazy(() => import("./components/Acerca/acerca"));
const CheckoutForm = lazy(() =>
  import("./components/CheckoutForm/CheckoutForm")
);

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Suspense fallback={<div>Cargando...</div>}>
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
        </Suspense>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
