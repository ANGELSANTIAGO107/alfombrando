import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import "./ProductsAseo.css";
import { FaWhatsapp } from "react-icons/fa"; // Importar el icono de WhatsApp

function ProductsAseo() {
  
const ProductsAseo = [
  {
    id: 1,
    name: "Stripper",
    image: "/Images/ImagesProductsAseo/Stripper.png",
    description:
      "Stripper es un removedor para acabados de pisos, selladores y ceras. Su fórmula es de alta concentración que además de remover, desengrasa, limpia y desmancha.",
  },
  {
    id: 2,
    name: "Pretreat",
    image: "/Images/ImagesProductsAseo/Pretreat.png",
    description:
      "Remueve manchas a base de grasas y aceites de alfombras, tapices, telas y otras superficies porosas. También para aplicar a alfombras muy sucias o en áreas.",
  },
  {
    id: 3,
    name: "Floor Care",
    image: "/Images/ImagesProductsAseo/Floor_Care.png",
    description:
      "Floor Care es un limpiador y mantenedor con pH neutral para el cuidado de pisos cristalizados o duros como mármol, porcelanato.",
  },
  {
    id: 4,
    name: "Fastind 800",
    image: "/Images/ImagesProductsAseo/Fastind_800.png",
    description:
      "Es un potente desengrasante industrial, especialmente indicado para la limpieza de superficies metálicas y de plástico y la eliminación de todo tipo de suciedad.",
  },
  {
    id: 5,
    name: "Enzyme 2000",
    image: "/Images/ImagesProductsAseo/Enzyme.png",
    description:
      "Limpiador desinfectante Enzyme.",
  },
  {
    id: 6,
    name: "Captivate",
    image: "/Images/ImagesProductsAseo/Captivate.png",
    description:
      "Limpiador neutral para todo propósito. Este producto limpia todo tipo de superficies desodorizándolas a la vez.",
  },
  {
    id: 7,
    name: "Cera Escarlata",
    image: "/Images/ImagesProductsAseo/CeraEscarlata.png",
    description:
      "Protege y da brillo a los pisos de madera, parket, baldosín, ladrillo, tableta, se caracteriza por ser de alta resistencia, antideslizante y duradera.",
  },
  {
    id: 8,
    name: "Cera Natural Roja ",
    image: "/Images/ImagesProductsAseo/CeraNaturalRoja.jpg",
    description:
      "Producto formulado con una mezcla de ceras sintéticas y naturales dentro de un solvente orgánico volátil, especialmente diseñado para encerar pisos.",
  },
  {
    id: 9,
    name: "Blanqueador",
    image: "/Images/ImagesProductsAseo/Blanqueador.jpg",
    description:
      "Es un blanqueador preparado a base de Hipoclorito de Sodio, cuya función principal es blanquear, desmanchar y desodorizar así como eliminar gérmenes.",
  },
  {
    id: 10,
    name: "Desmanchador",
    image: "/Images/ImagesProductsAseo/DesmanchadorTakTax.jpg",
    description:
      "Desmancha y limpia pisos en porcelanato y cerámica, ideal para remover la capa de seguridad del porcelanato en su proceso de instalación, también despercude.",
  },
  {
    id: 11,
    name: "Detergente Líquido Industrial",
    image: "/Images/ImagesProductsAseo/DetergenteLiquidoIndustrial.jpg",
    description:
      "Se caracterizan por su alta concentración y poder de limpieza.",
  },
  {
    id: 12,
    name: "Limpiador con Bicarnato",
    image: "/Images/ImagesProductsAseo/LimpiadorConBicarbonato.png",
    description:
      "El limpiador multiusos con bicarbonato limpia, desinfecta y desodoriza en un solo paso, es efectivo contra manchas y malos olores.",
  },
  {
    id: 13,
    name: "Limpiador de piso",
    image: "../../public/Images/ImagesProductsAseo/LimpiadorDePiso.jpg",
    description:
      "El Limpiador Multiusos D`YILOP es un limpiador con fragancia y pH nivelado, diseñado especialmente para la limpieza de pisos, baños, mesones",
  },
  {
    id: 14,
    name: "Limpiador Fuller",
    image: "/Images/ImagesProductsAseo/LimpiadorFuller.jpg",
    description:
      "Fuller Pinto te ofrece una línea completa para la limpieza y desinfección de tu hogar.",
  },
  {
    id: 15,
    name: "Varsol Multiusos",
    image: "/Images/ImagesProductsAseo/VarsolMultiusos.png",
    description:
      "Limpiador multiusos; remueve manchas, desinfectan, desengrasa y despercude cualquier tipo de superficie.",
  },
  {
    id: 16,
    name: "Alcohol",
    image: "/Images/ImagesProductsAseo/Alcohol.jpg",
    description:
      "La acción desinfectante y germicida del alcohol etílico al 70% permite inactivar de forma eficaz.",
  },
  {
    id: 17,
    name: "Jabón de manos",
    image: "/Images/ImagesProductsAseo/JabonDeManos.jpg",
    description:
      "Contiene sustancias humectantes, tensoactivos aniónicos y una agradable fragancia para la limpieza profunda de las manos.",
  },
  {
    id: 18,
    name: "Glade Aceite",
    image: "/Images/ImagesProductsAseo/GladeAceite.jpg",
    description:
      "Aceites Naturales evapora delicadas fragancias con aceites esenciales que aromatizarán tu ambiente. ",
  },
  {
    id: 19,
    name: "Glade Automático",
    image: "/Images/ImagesProductsAseo/GladeAutomatico.jpg",
    description:
      "La fragancia de liberación temporizada automática crea un ambiente con más frescura y menos preocupaciones. ",
  },
  {
    id: 20,
    name: "Wypall x80 azul",
    image: "/Images/ImagesProductsAseo/WypallX80Azul.jpg",
    description:
      "Los paños de limpieza WYPALL* X80, hechos de polipropileno y celulosa, poseen una excelente resistencia garantizando una alta reutilización.",
  },
  {
    id: 21,
    name: "Wypall L20",
    image: "/Images/ImagesProductsAseo/Wypalll20.jpg",
    description:
      "Limpión descartable WypAll L20 Rollo Jumbo x 2.200 hojas. Hoja Sencilla. 1 rollo x caja. 2.200 paños x rollo. Rollo x 550 metros con 2200 hojas pre cortadas.",
  },
  {
    id: 22,
    name: "Paño Wypall x80 rollo",
    image: "/Images/ImagesProductsAseo/PañoWypall-X-80-ROLLO.jpg",
    description:
      "Paños De Limpieza Wypall X80 Rollo Regular Reutilizable.",
  },
  {
    id: 23,
    name: "Toalla en Z",
    image: "/Images/ImagesProductsAseo/ToallaEnZ.jpg",
    description:
      "Toallas De Papel En Z Doble Hoja Natural De 150 Unidades.",
  },
  {
    id: 24,
    name: "Trapero Microfibra",
    image: "/Images/ImagesProductsAseo/TraperoMicrofibra.jpg",
    description:
      "Retiene el polvo gracias a sus filamentos que atrapan bacterias, mugre y alergenicos.",
  },
  {
    id: 25,
    name: "Punto Ecológico",
    image: "/Images/ImagesProductsAseo/PuntoEcologico.jpg",
    description:
      "Están diseñadas en plástico con una estructura metálica duradera y resistente. Puedes escoger entre canecas para punto ecológico con tapa tipo vaivén.",
  },
  {
    id: 26,
    name: "Contenedor 121L",
    image: "/Images/ImagesProductsAseo/Contenedor121lts.jpg",
    description:
      "Diseño versátil para ambientes tanto interiores como exteriores gracias al aditivo UV. Mecanismo de vaivén para mantener el contenedor cerrado.",
  },
  {
    id: 27,
    name: "Contenedor vaivén 10L",
    image: "../../public/Images/ImagesProductsAseo/Vaiven10lts.jpg",
    description:
      "Sistema de vaivén que ofrece mayor comodidad e higiene. Tamaño que se adecúa a espacios reducidos.",
  },
  {
    id: 28,
    name: "Papelera 20L",
    image: "../../public/Images/ImagesProductsAseo/Papelera20ltsPedal.jpg",
    description:
      "Pedal incorporado ideal para uso en espacios cerrados y altamente resistente a impactos y solventes comunes.",
  },
];

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
                src="/video/PedidosAseo.mp4"
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
        <div className="productsAseo-container">
      <h2 className="title">¡Descubre los Mejores Productos de Aseo !</h2>
      <p className="subtitle">
      Visítanos en
      <a
              href="https://www.google.com/maps/@4.538435,-75.6708946,3a,75y,336.3h,85.75t/data=!3m7!1e1!3m5!1sOjYXsvckFSyahcVgOF7G4A!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D4.2458560745537%26panoid%3DOjYXsvckFSyahcVgOF7G4A%26yaw%3D336.2953816033161!7i13312!8i6656?hl=es&coh=205410&entry=ttu&g_ep=EgoyMDI0MTAwOC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            > {" "}
              Cra. 18 #12-06
            </a> , Armenia, Quindío, donde encontrarás una amplia selección de los mejores productos de aseo. Nuestro compromiso es ofrecerte calidad y variedad para que mantengas tu hogar siempre limpio y fresco. ¡Te esperamos!
      </p>
      <div className="productsAseo-list">
        {ProductsAseo.map((product) => (
          <div key={product.id} className="productAseo-item">
            <div className="productAseo-image-container">
              <img src={product.image} alt={product.name} className="productAseo-image" />
            </div>
            <div className="productAseo-info">
              <h3 className="productAseo-name">{product.name}</h3>
              <p className="productAseo-description">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
      </div>
      <Footer />
      <a
        href="https://wa.me/573216475863"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        <FaWhatsapp className="whatsapp-icon2" />
      </a>
    </>
  );
}

export default ProductsAseo;
