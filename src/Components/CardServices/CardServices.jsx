import "./CardServices.css";
import { Link } from "react-router-dom";
import { BsPersonFillGear } from "react-icons/bs";
import { useRef, useEffect } from "react"; 

function CardServices() {
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
    <div>
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
              img: "/Images/ImagesServices/LavadoDeAlfombras.jpg",
            },
            {
              id: "2",
              text: "instalacion de alfombras modulares y/o en rollo",
              img: "/Images/ImagesServices/instalaciondealfombrasM.jpg",
            },
            {
              id: "3",
              text: "Mantenimiento y restauración de pisos",
              img: "/Images/ImagesServices/instalacionPisos.jpeg",
            },
            {
              id: "4",
              text: "Instalación de pisos SPC y SPC de clic y laminados",
              img: "/Images/ImagesServices/InstalacionDePisosSPC.jpg",
            },
            {
              id: "5",
              text: "Instalación y restauracion de persianas para tus ventanas",
              img: "/Images/ImagesServices/InstalacionDePersianas.jpg",
            },
            {
              id: "6",
              text: "Paredes con estilo, instalación de papel tapiz",
              img: "/Images/ImagesServices/InstalacionPapelColgadura1.jpg",
            },
            {
              id: "7",
              text: "Tu hogar fresco con películas de protección solar",
              img: "/Images/ImagesServices/InstalacionPeliculasSolares.jpg",
            },
            {
              id: "8",
              text: "Toldos y pérgolas a tu medida. Diseñamos y adaptamos a tus necesidades.",
              img: "/Images/ImagesServices/InstalacionPergolasYToldos.jpg",
            },
            {
              id: "9",
              text: "Dale Vanguardia y elegancia a tu hogar con la Instalacion de PanelWall",
              img: "/Images/ImagesServices/InstalacionPanelWall.jpg",
            },
            {
              id: "10",
              text: "Grama sintética de alta calidad. Transforma tu espacio exterior.",
              img: "/Images/ImagesServices/InstalacionGramaSintetica.jpg",
            },
            {
              id: "11",
              text: "Disfruta de la belleza natural de la madera. Instalación y restauración de pisos de madera maciza",
              img: "/Images/ImagesServices/EscalerasMadera.jpeg",
            },
          ].map((service) => (
            <div key={service.id} className="services-card">
              <Link to={`/Services/${service.id}`}>
                <img
                  src={service.img} 
                  alt={service.text}
                  className="img-services"
                />
              </Link>
              <p className="text-scroll">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardServices;
