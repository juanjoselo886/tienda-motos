import React from "react";
import "./App.css";

function Menu() {
  return (
    <nav className="menu-navegacion">
      <h2 className="logo">🏍️ MotoSpeed</h2>
      <ul>
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#modelos">Modelos</a></li>
        <li><a href="#accesorios">Accesorios</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Menu;