import { useState } from "react";
import "./contacto.css";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("¡Gracias por tu mensaje! Te responderemos pronto.");
    setFormData({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <div className="contacto-container">
      <div className="contacto-header">
        <h2>Contactanos</h2>
        <p>¿Tenés alguna consulta? ¡Estamos para ayudarte!</p>
      </div>

      <div className="contacto-content">
        {/* Información de contacto */}
        <div className="contacto-info">
          <h3>Información de Contacto</h3>

          <div className="info-item">
            <span className="icon">📧</span>
            <div>
              <h4>Email</h4>
              <p>info@indytech.com</p>
              <p>ventas@indytech.com</p>
            </div>
          </div>

          <div className="info-item">
            <span className="icon">📱</span>
            <div>
              <h4>WhatsApp</h4>
              <p>+54 9 362 123-4567</p>
            </div>
          </div>

          <div className="info-item">
            <span className="icon">📍</span>
            <div>
              <h4>Ubicación</h4>
              <p>Resistencia, Chaco</p>
              <p>Argentina</p>
            </div>
          </div>

          <div className="info-item">
            <span className="icon">🕐</span>
            <div>
              <h4>Horarios de Atención</h4>
              <p>Lunes a Viernes: 9:00 - 18:00</p>
              <p>Sábados: 9:00 - 13:00</p>
            </div>
          </div>
        </div>

        {/* Formulario de contacto */}
        <div className="contacto-form-container">
          <h3>Envianos tu Consulta</h3>
          <form onSubmit={handleSubmit} className="contacto-form">
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                placeholder="Tu nombre"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="tu@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Contanos en qué podemos ayudarte..."
              ></textarea>
            </div>

            <button type="submit" className="btn-submit">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
