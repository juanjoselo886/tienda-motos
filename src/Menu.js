import React from "react";
import "./App.css";

function Menu() {
  return (
    <nav className="menu-navegacion">
      <h2 className="logo">🏍️ MotoSpeed</h2>
      <ul>
        <li>Inicio</li>
        <li>Modelos</li>
        <li>Accesorios</li>
        <li>Contacto</li>
      </ul>
    </nav>
  );
}

export default Menu;