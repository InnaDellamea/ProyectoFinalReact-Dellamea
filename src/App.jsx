import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import NavBar from "./components/navbar/navbar";

import { CartProvider } from "./context/cartContext";

const ItemListContainer = lazy(() =>
  import("./components/ItemListContainer/ItemListContainer")
);
const ItemDetailContainer = lazy(() =>
  import("./components/ItemDetailContainer/ItemDetailContainer")
);
const Cart = lazy(() => import("./components/Cart/Cart"));
const Contacto = lazy(() => import("./components/Contacto/Contacto"));
const Acerca = lazy(() => import("./components/Acerca/Acerca"));
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
            <Route
              path="/"
              element={<ItemListContainer greeting="Bienvenido a IndyTech" />}
            />
            <Route
              path="/productos"
              element={<ItemListContainer greeting="Todos los productos" />}
            />
            <Route
              path="/categoria/:categoriaId"
              element={<ItemListContainer />}
            />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/acerca" element={<Acerca />} />
            <Route path="/checkout" element={<CheckoutForm />} />
            <Route path="*" element={<h2>Página no encontrada</h2>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
