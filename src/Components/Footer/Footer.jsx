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
          link: "https://www.google.com/maps/@4.5412766,-75.6640619,3a,75y,90h,74.63t/data=!3m7!1e1!3m5!1sJ6twcomn7T9oSfx8Ypu9gw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D15.373520248290362%26panoid%3DJ6twcomn7T9oSfx8Ypu9gw%26yaw%3D90!7i13312!8i6656?coh=205410&entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D",
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
