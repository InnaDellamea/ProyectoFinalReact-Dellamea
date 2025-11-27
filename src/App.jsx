import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import NavBar from "./components/navbar/navbar";

// CORREGIDO: Manteniendo CartContext en PascalCase para que coincida con el nombre del archivo.
import { CartProvider } from "./context/cartContextartContext";

const ItemListContainer = lazy(() =>
  import("./components/itemListContainer/itemListContainer")
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
           {" "}
      <BrowserRouter>
                <NavBar />       {" "}
        <Suspense fallback={<div>Cargando...</div>}>
                   {" "}
          <Routes>
                       {" "}
            <Route
              path="/"
              element={<ItemListContainer greeting="Bienvenido a IndyTech" />}
            />
                       {" "}
            <Route
              path="/productos"
              element={<ItemListContainer greeting="Todos los productos" />}
            />
                       {" "}
            <Route
              path="/categoria/:categoriaId"
              element={<ItemListContainer />}
            />
                       {" "}
            <Route path="/item/:id" element={<ItemDetailContainer />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/contacto" element={<Contacto />} />
                        <Route path="/acerca" element={<Acerca />} />
                        <Route path="/checkout" element={<CheckoutForm />} />   
                    <Route path="*" element={<h2>Página no encontrada</h2>} /> 
                   {" "}
          </Routes>
                 {" "}
        </Suspense>
             {" "}
      </BrowserRouter>
         {" "}
    </CartProvider>
  );
}

export default App;
