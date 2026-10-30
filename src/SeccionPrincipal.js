import React, { useState } from "react";
import "./App.css";

function SeccionPrincipal() {
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  return (
    <main className="seccion-principal">
      <h1>Siente la velocidad en cada curva</h1>
      <p>Descubre nuestra nueva línea de motocicletas de alta cilindrada.</p>

      <img 
        src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=600&q=80" 
        alt="Moto deportiva moderna" 
        className="imagen-destacada"
      />

      <br />
      <button className="boton-accion" onClick={() => setMostrarMensaje(!mostrarMensaje)}>
        {mostrarMensaje ? "Ocultar sorpresa" : "Descubrir sorpresa"}
      </button>

      {mostrarMensaje && (
        <p className="mensaje-sorpresa">¡Felicidades! Tienes un casco de regalo en la compra de tu primera moto.</p>
      )}
    </main>
  );
}

export default SeccionPrincipal;