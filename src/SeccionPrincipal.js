import React, { useState } from "react";
import "./App.css";

function SeccionPrincipal() {
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  return (
    <div className="landing-container">
      {/* 1. SECCIÓN INICIO */}
      <section id="inicio" className="seccion-inicio">
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
      </section>

      {/* 2. SECCIÓN MODELOS */}
      <section id="modelos" className="seccion-modelos">
        <h2>Modelos Destacados</h2>
        <p>Diseñados para brindar potencia, rendimiento y estilo urbano.</p>
        <div className="catalogo-grid">
          <div className="tarjeta-moto">
            <img src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=400&q=80" alt="SuperSport 1000" />
            <h3>SuperSport 1000 R</h3>
            <p>1000cc - Potencia pura para pista y carretera.</p>
          </div>
          <div className="tarjeta-moto">
            <img src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=400&q=80" alt="Urban Naked 600" />
            <h3>Urban Naked 600</h3>
            <p>Agilidad y agresión para conquistar la ciudad.</p>
          </div>
        </div>
      </section>

      {/* 3. SECCIÓN ACCESORIOS */}
      <section id="accesorios" className="seccion-accesorios">
        <h2>Equipamiento y Accesorios</h2>
        <p>Tu seguridad es primero. Descubre nuestra línea de protección homologada.</p>
        <ul className="lista-beneficios">
          <li>🏍️ Cascos integrales de fibra de carbono.</li>
          <li>🧥 Chaquetas de cuero con protecciones certificadas.</li>
          <li>🧤 Guantes térmicos y antideslizantes.</li>
        </ul>
      </section>

      {/* 4. SECCIÓN CONTACTO */}
      <section id="contacto" className="seccion-contacto">
        <h2>Agenda tu Test Drive</h2>
        <p>Escríbenos para probar la motocicleta de tus sueños hoy mismo.</p>
        <form className="formulario-contacto" onSubmit={(e) => { e.preventDefault(); alert("¡Solicitud enviada! Nos pondremos en contacto contigo pronto."); }}>
          <input type="text" placeholder="Tu Nombre Completo" required />
          <input type="email" placeholder="Tu Correo Electrónico" required />
          <textarea placeholder="¿Qué modelo deseas probar?" rows="4" required></textarea>
          <button type="submit" className="boton-enviar">Solicitar Prueba</button>
        </form>
      </section>
    </div>
  );
}

export default SeccionPrincipal;