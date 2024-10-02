import "./NavServices.css";
import { Link } from "react-router-dom";
import { BsPersonFillGear } from "react-icons/bs";
import { useRef, useEffect } from "react"; 

function NavServices() {
  const sliderRef = useRef(null); // Referencia para el contenedor del slider

  useEffect(() => {
    const slider = sliderRef.current;

    // Función para mover el slider automáticamente
    const autoScroll = () => {
      if (slider) {
        const maxScrollLeft = slider.scrollWidth - slider.clientWidth; // Determina el máximo desplazamiento posible

        // Mueve el slider hacia la derecha
        slider.scrollBy({ left: 200, behavior: "smooth" }); // Ajusta el desplazamiento

        // Si ha llegado al final, vuelve al inicio
        if (slider.scrollLeft + 200 >= maxScrollLeft) {
          // Con un pequeño retraso para ver el efecto
          setTimeout(() => {
            slider.scrollTo({ left: 0, behavior: "smooth" });
          }, 500); // Retraso de 500 ms
        }
      }
    };

    // Establece el intervalo para desplazar el slider cada 2 segundos (2000 ms)
    const interval = setInterval(autoScroll, 2000); // Cambia el intervalo a 2000 ms

    // Limpia el intervalo al desmontar el componente
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="principal-services" id="services">
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

        {/* Contenedor del slider */}
        <div className="nav-services" ref={sliderRef}>
          {[ 
            {
              id: "1",
              text: "Limpieza profunda de muebles, alfombras y vidrios",
            },
            { id: "2", text: "Mantenimiento y restauración de pisos" },
            {
              id: "3",
              text: "Instalación de pisos SPC y SPC de click y laminados",
            },
            { id: "4", text: "Instalación de persianas para tus ventanas" },
            { id: "5", text: "Paredes con estilo, instalación de papel tapiz" },
            {
              id: "6",
              text: "Tu hogar fresco con películas de protección solar",
            },
          ].map((service) => (
            <div key={service.id} className="services-card">
              <Link to={`/Services/${service.id}`}>
                <img
                  src="/Images/instalacionPisos.jpeg"
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
