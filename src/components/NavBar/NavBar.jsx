import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartWidget from "../Cartwidget/CartWidget";
import "./NavBar.css";
import logo from "../../assets/logo/Indytechlogo.png";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo y link a la página principal */}
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="IndyTechStore Logo" className="logo-image" />
        </Link>
        <span className="logo-text">IndyTech</span>
      </div>

      {/* Botón hamburguesa responsive */}
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {/* Enlaces de navegación */}
      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link to="/">Inicio</Link>
        </li>

        <li>
          <Link to="/productos">Productos</Link>
        </li>

        <li>
          <Link to="/acerca">Acerca de nosotros</Link>
        </li>

        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
      </ul>

      {/* Carrito */}
      <div className="cart-section">
        <Link to="/cart">
          <CartWidget />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
