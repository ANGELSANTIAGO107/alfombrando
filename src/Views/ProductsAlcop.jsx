import React, { useEffect } from 'react';
import './ProductsAlcop.css'; 
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { FaWhatsapp } from "react-icons/fa"; 

const ProductsAlcop = () => {

  // Hook para ejecutar la función cuando el componente se monta
  useEffect(() => {
    // Asegurarte de que la página esté en la parte superior al cargarse
    window.scrollTo(0, 0);
  }, []);  // El array vacío asegura que se ejecute solo una vez al cargar

  return (
    <>
      <Header />
      <div className="products-alcop">
        <div className="section-row">
          <div className="image-container">
            <video
              src="/video/AlfombraAlcop.mp4"
              autoPlay
              loop
              muted
              className="video-alfombrandoAseo"
            />
          </div>
          <div className="text-container">
            <h2>Alfombra</h2>
            <p>
              Ven y descubre nuestra variedad de alfombras para interiores, diseñadas para brindarte comodidad y estilo en cada paso. ¡Encuentra la tuya y renueva tu hogar hoy mismo!
            </p>
          </div>
        </div>

        <div className="section-row reverse">
          <div className="text-container">
            <h2>Alfombra</h2>
            <p>
              Transforma tus espacios con nuestras alfombras turcas, diseñadas para brindar estilo y comodidad. Con diseños únicos y colores llamativos, y una calidad que se siente a cada paso.
            </p>
          </div>
          <div className="image-container">
            <img
              src='/Images/ImagesProductsAlcop/AlfombraComedorAlcop.jpeg'
              alt="Alfombra Comedor"
            />
          </div>
        </div>

        <div className="section-row">
          <div className="image-container">
            <img
              src='/Images/ImagesProductsAlcop/SalaAlcop.jpg'
              alt="Alfombra Sala"
            />
          </div>
          <div className="text-container">
            <h2>Sala de Exterior</h2>
            <p>
              Nuestras salas de exterior, además de ser resistentes y elegantes, son perfectas para relajarte al sol o compartir una buena charla. Muebles duraderos, diseñados para cualquier espacio y hechos para resistir el clima sin perder su encanto.
            </p>
          </div>
        </div>

        <div className="sculpture-gallery">
          <div className="sculpture-info">
            <h2>Esculturas</h2>
            <p>
              Las esculturas pueden transformar tu hogar al agregar un toque único y personal. Sirven como puntos focales que generan interés visual, reflejan tu estilo y pueden evocar emociones. Ya sea en interiores o exteriores, enriquecen el ambiente y hacen que cada espacio se sienta más acogedor.
            </p>
          </div>
          
          <div className="gallery-grid">
            {[{
              id: "1",
              img: "/Images/ImagesProductsAlcop/Escultura1.jpg",
            },
            {
              id: "2",
              img: "/Images/ImagesProductsAlcop/Escultura2.jpeg",
            },
            {
              id: "3",
              img: "/Images/ImagesProductsAlcop/Escultura3.jpeg",
            }].map((sculpture) => (
              <div key={sculpture.id} className="gallery-item">
                <img
                  src={sculpture.img}
                  className="img-gallery"
                  alt={`Escultura ${sculpture.id}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <a
        href="https://wa.me/573152762255"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        <FaWhatsapp className="whatsapp-icon2" />
      </a>
    </>
  );
};

export default ProductsAlcop;
