import React, { useState } from "react";
import CartWidget from "./CartWidget";
import "./NavBar.css";
import logo from "../assets/logo/Indytechlogo.png";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="IndyTechStore Logo" className="logo-image" />
        <span className="logo-text">IndyTech</span>
      </div>

      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#">Productos</a>
        </li>
        <li>
          <a href="#">Contacto</a>
        </li>
      </ul>

      <div className="cart-section">
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
