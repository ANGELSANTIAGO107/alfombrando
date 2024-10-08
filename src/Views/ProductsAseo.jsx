import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import "./ProductsAseo.css";

function ProductsAseo() {
  return (
    <>
      <Header />
      <div className="ProductsAseo-container">
        <div className="testimonials-section">
          <div className="testimonial">
            <img
              src="/Images/ImagesProductsAseo/IconsProductosAseo1.png"
              alt="1"
              className="testimonial-icon"
            />
            <p>
              "Nuestra tienda se especializa en ofrecer productos de limpieza de
              la más alta calidad."
            </p>
          </div>
          <div className="testimonial">
            <img
              src="/Images/ImagesProductsAseo/IconsProductosAseo2.png"
              alt="2"
              className="testimonial-icon"
            />
            <p>
              "Somos reconocidos por garantizar a nuestros clientes los mejores
              artículos para el cuidado del hogar."
            </p>
          </div>
          <div className="testimonial">
            <img
              src="/Images/ImagesProductsAseo/IconsProductosAseo3.png"
              alt="3"
              className="testimonial-icon"
            />
            <p>
              "Comprometidos con la excelencia, ofrecemos una selección confiable
              de productos para cualquier necesidad de limpieza."
            </p>
          </div>
        </div>

        <div className="content-section">
          <div className="content-row">
            <div className="video-container">
              <video
                src="/video/AlfombrandoAseo.mp4"
                autoPlay
                loop
                muted
                className="video-alfombrandoAseo"
              ></video>
            </div>
            <div className="text-container">
              <p>
                En Alfombrando tenemos todo lo que necesitas para una limpieza de alta calidad. Nuestros productos no solo son efectivos, sino también asequibles, perfectos para cualquier necesidad.
              </p>
            </div>
          </div>

          <div className="content-row reverse-row">
            <div className="text-container">
              <p>
              Cada superficie merece el cuidado perfecto. Descubre cómo lograr una limpieza impecable con los productos esenciales de Alfombrandoaseo. ¡Productos que hacen la diferencia!
              </p>
            </div>
            <div className="video-container">
              <video
                src="/video/ProductosInfaltables.mp4"
                autoPlay
                loop
                muted
                className="video-alfombrandoAseo"
              ></video>
            </div>
          </div>

          <div className="content-row">
            <div className="video-container">
              <video
                src="/public/video/PedidosAseo.mp4"
                autoPlay
                loop
                muted
                className="video-alfombrandoAseo"
              ></video>
            </div>
            <div className="text-container">
              <p>
              En Alfombrando tenemos todo lo que necesitas para una limpieza de alta calidad. Nuestros productos no solo son efectivos, sino también asequibles, perfectos para cualquier necesidad. Así es como empacamos tus pedidos en Alfombrando. ¿Qué esperas para hacer tu pedido?
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductsAseo;
