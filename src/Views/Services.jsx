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
      <h1>Servicio Detallado</h1>

      {selectedService ? (
        <div className="service-details">
          <h2 className="service-name">{selectedService.name}</h2>
          <video
            className="service-video"
            src={selectedService.urlImage}
            controls
            loop
            autoPlay
            muted
          />
          <p className="service-description">{selectedService.description}</p>

          <div className="whatsapp-redirect">
            <p>Cotiza por WhatsApp:</p>
            <a
              href="https://wa.me/1234567890" // Reemplaza con el número de WhatsApp de tu empresa
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/Images/QRwhatsapp.png"
                alt="QR WhatsApp"
                className="qr-image"
              />
            </a>
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
