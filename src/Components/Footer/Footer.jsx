import React, { useState } from "react";
import "./Footer.css";

function Footer() {
  const [activeModal, setActiveModal] = useState(null);

  // Función para abrir un modal
  const openModal = (id) => {
    setActiveModal(id);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setActiveModal(null);
  };

  const footerLinks = [
    {
      id: 1,
      links: [
        { id: 1, name: "Sobre nosotros", link: "/#about" },
        { id: 2, name: "Servicios", link: "/#services" },
        { id: 3, name: "Productos", link: "/#nav" },
      ],
    },
    {
      id: 2,
      links: [
        { id: 1, name: "Privacidad", link: "#privacy", modalId: "privacy" },
        { id: 2, name: "Términos y condiciones", link: "#terms", modalId: "terms" },
        { id: 3, name: "Derechos de Autor", link: "#derechos", modalId: "copyright" },
      ],
    },
    {
      id: 3,
      links: [
        {
          id: 1,
          name: "Cll4 #13-44 Armenia-Quindio",
          link: "https://www.google.com/maps",
        },
      ],
    },
  ];

  return (
    <div className="footer-div">
      <div className="footer-grid">
        {footerLinks.map((section) => (
          <div key={section.id}>
            {section.links.map((link) => (
              <a
                href={link.modalId ? "#" : link.link}
                key={link.id}
                className="footer-link"
                onClick={() => link.modalId && openModal(link.modalId)}
              >
                {link.name}
              </a>
            ))}
          </div>
        ))}
      </div>

    
      {activeModal && <div className="modal-overlay" onClick={closeModal} />}

      {/* Modal de Privacidad */}
      {activeModal === "privacy" && (
        <div className="modal2">
          <div className="modal-content">
            <h2>Política de Privacidad</h2>
            <ul className="privacy-list">
              <li className="privacy-item">
                Recopilamos información personal a través de cotizaciones y pedidos de muebles de exterior, cojines, alfombras, y tapetes.
              </li>
              <li className="privacy-item">
                La información se utiliza únicamente para gestionar pedidos y proporcionar servicios.
              </li>
              <li className="privacy-item">
                No compartimos datos personales con terceros sin el consentimiento del usuario.
              </li>
            </ul>
            <button onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}

      {/* Modal de Términos y condiciones */}
      {activeModal === "terms" && (
        <div className="modal2">
          <div className="modal-content">
            <h2>Términos y condiciones</h2>
            <ul className="privacy-list">
              <li className="privacy-item">
                Los productos como tapetes, alfombras, cojines, y accesorios se venden directamente, mientras que otros servicios requieren cotización previa.
              </li>
              <li className="privacy-item">
                El usuario es responsable de proporcionar información precisa para las cotizaciones.
              </li>
            </ul>
            <button onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}

      {/* Modal de Derechos de Autor */}
      {activeModal === "copyright" && (
        <div className="modal2">
          <div className="modal-content">
            <h2>Derechos de Autor</h2>
            <ul className="privacy-list">
              <li className="privacy-item">
                Todo el contenido, incluidos los videos de nuestros servicios son propiedad exclusiva de Alfombrando. Queda prohibido el uso, reproducción o distribución de este contenido sin autorización expresa. Para consultas sobre derechos de uso, por favor contáctanos directamente.
              </li>
            </ul>
            <button onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Footer;
