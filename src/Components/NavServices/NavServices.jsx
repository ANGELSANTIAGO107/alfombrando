import "./NavServices.css";
import { Link } from "react-router-dom";
import { BsPersonFillGear } from "react-icons/bs";

function NavServices() {
  return (
    <>
      <div className="principal-services " id="services">
        <div className="info-services">
          <h1>
            Servicios
            <BsPersonFillGear className="Services-icon" />
          </h1>
          <p className="text-1">
            ¡En Alfombrando, tu hogar está en las mejores manos! Con nuestros
            servicios de alta calidad, ofrecemos limpieza profunda,
            mantenimiento y restauración de muebles, alfombras, pisos, vidrios
            <br />
            <strong>¡Y MÁS!</strong>
          </p>
        </div>
        <div className="nav-services">
          {[
            {
              id: "1",
              text: "Limpieza profunda de muebles, alfombras y vidrios",
            },

            {
              id: "2",
              text: "instalacion de alfombras modulares y/o en rollo",
            },
            { id: "3", text: "Mantenimiento y restauración de pisos" },
            {
              id: "4",
              text: "Instalación de pisos SPC y SPC de click y laminados",
            },
            {
              id: "5",
              text: "Instalación y restauracion de persianas para tus ventanas",
            },
            { id: "6", text: "Paredes con estilo, instalación de papel tapiz" },
            {
              id: "7",
              text: "Tu hogar fresco con películas de protección solar",
            },
            {
              id: "8",
              text: "nstalacion y restauracion de Toldos y Pérgolas",
            },
            {
              id: "9",
              text: "Dale Vanguardia y elegancia a tu hogar con la Instalacion de PanelWall",
            },
          ].map((service) => (
            <div key={service.id} className="services-card">
              <Link to={`/Services/${service.id}`}>
                <img
                  src="../../public/Images/instalacionPisos.jpeg"
                  alt={service.text}
                  className="img-services"
                />
              </Link>
              <p className="text-scroll">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default NavServices;
