import "./Acerca.css";
const acerca = () => {
  return (
    <section className="acerca-container">
      <div className="acerca-content">
        <h1 className="acerca-title">Acerca de Nosotros</h1>

        <p>
          En <strong>IndyTech</strong> creemos que la tecnología es mucho más
          que dispositivos y cables: es la herramienta que impulsa el futuro, la
          productividad y la seguridad de cada persona. Nuestro compromiso es
          ofrecer soluciones confiables, eficaces y a la medida de cada cliente.
        </p>

        <p>
          Somos un equipo apasionado por el hardware, el soporte técnico y la
          innovación. Nos especializamos en la venta de productos tecnológicos,
          armado de PCs, instalación de cámaras de seguridad, mantenimiento de
          equipos y asesoría personalizada para ayudarte a elegir lo mejor según
          tus necesidades.
        </p>

        <p>
          Cada proyecto para nosotros es único. Ya sea optimizar una
          computadora, realizar una instalación técnica en tu hogar o ayudarte a
          elegir tu próximo equipo, trabajamos con profesionalismo, claridad y
          dedicación. Queremos que cada cliente se sienta acompañado y seguro en
          cada paso.
        </p>

        <p>
          En IndyTech seguimos creciendo, incorporando nuevas tecnologías,
          procesos modernos y herramientas que nos permitan brindar un servicio
          cada vez más completo. Nuestro objetivo es simple: ser tu aliado
          tecnológico de confianza.
        </p>
      </div>

      <div className="acerca-image">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475"
          alt="Tecnología en IndyTech"
        />
      </div>
    </section>
  );
};

export default acerca;
