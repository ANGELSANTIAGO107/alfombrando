import { useParams } from "react-router-dom";
import { DataServices } from "../DataGlobal/DataServices";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import "./Services.css";

function Services() {
  const { id } = useParams(); // Obtener el id del servicio desde la URL
  const selectedService = DataServices.find(
    (service) => service.id === parseInt(id)
  ); // Buscar el servicio por id

  return (
    <>
      <Header />
      <h1 className="page-title">Servicio Detallado</h1>

      {selectedService ? (
        <div className="service-container">
          <h2 className="service-name">{selectedService.name}</h2>
          <div className="service-content">
            <div className="service-left">
              <video
                className="service-video"
                src={selectedService.urlImage}
                controls // Si deseas que el usuario pueda pausar o reproducir manualmente
                loop // El video se reiniciará solo al terminar
                autoPlay // El video se reproducirá automáticamente al cargarse
                muted // El video estará en silencio para evitar reproducción de sonido automática
              />
            </div>
            <div className="service-right">
              <p className="icon-clean">{selectedService.icon}</p>
              <p className="service-description">
                {selectedService.description}
              </p>
              <div className="whatsapp-redirect">
                <p>Cotiza por WhatsApp:</p>
                <a
                  href="https://wa.me/3105385315" // Reemplaza con el número de WhatsApp de tu empresa
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/Images/qrAlfombrando.jpg"
                    alt="QR WhatsApp"
                    className="qr-image"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Servicio no encontrado</p>
      )}

      <Footer />
    </>
  );
}

export default Services;
