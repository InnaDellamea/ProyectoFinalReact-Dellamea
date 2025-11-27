import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import NavBar from "./components/navBar/navBar";
import { CartProvider } from "./context/cartContext";

// Lazy loading de componentes grandes
const ItemListContainer = lazy(() =>
  import("./components/itemListContainer/ItemListContainer")
);
const ItemDetailContainer = lazy(() =>
  import("./components/itemDetail/itemDetailContainer")
);
const Cart = lazy(() => import("./components/cart/cart"));
const Contacto = lazy(() => import("./components/contacto/contacto"));
const Acerca = lazy(() => import("./components/acerca/acerca"));
const CheckoutForm = lazy(() =>
  import("./components/checkoutForm/checkoutForm")
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
            <Route path="/acerca" element={<Acerca />} />

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
