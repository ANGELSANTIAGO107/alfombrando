import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContextValues } from "../../Context/ProductsContext";
import "./CardProducts.css";

const products = [
  {
    id: 1,
    name: "Alfombras",
    image: "/public/Images/ImagesProducts/Alfombras.jpg",
    category: "Alfombras",
    description:
      "Convierte tus pisos en obras de arte con nuestras alfombras de ensueño. ¡Suavidad, estilo y comodidad para tu hogar!",
  },
  {
    id: 2,
    name: "Tapetes",
    image: "/public/Images/ImagesProducts/TapetePrincipal.jpg",
    category: "Tapetes",
    description:
      "Un toque de calidez y personalidad para cada rincón de tu hogar. ¡Elige entre una gran variedad de diseños y colores!. ",
  },
  {
    id: 3,
    name: "Cojines",
    image: "/public/Images/ImagesProducts/Cogines.jpeg",
    category: "Cojines",
    description:
      "Agrega un toque de confort y estilo a tu hogar. ¡Cojines de todos los tamaños, colores y diseños!",
  },
  {
    id: 4,
    name: "Cortinas",
    image: "/public/Images/ImagesProducts/CortinasClaras.jpeg",
    category: "Cortinas",
    description:
      "Controla la luz y la privacidad con estilo. ¡Persianas para todos los gustos y necesidades!.",
  },
  {
    id: 5,
    name: "Panel Wall",
    image: "/public/Images/ImagesProducts/panelwall2.jpeg",
    category: "panelwall",
    description:
      "Decora tus paredes de forma moderna y original. ¡Panel Wall para crear espacios únicos! ",
  },
  {
    id: 6,
    name: "Papel De Colgadura",
    image: "/public/Images/ImagesProducts/PapelDeColgaduraPrincipal.jpg",
    category: "PapelColgadura",
    description:
      "Viste tus paredes con estilo y personalidad. ¡Papel de colgadura para todos los gustos y presupuestos!",
  },
  {
    id: 7,
    name: "Pisos",
    image: "/public/Images/ImagesProducts/Pisos.png",
    category: "Pisos",
    description:
      "Dale un nuevo look a tus espacios con nuestros pisos de alta calidad. ¡Durabilidad, belleza y diseños para todos los gustos!",
  },
  {
    id: 8,
    name: "Grama Sintetica",
    image: "/public/Images/ImagesProducts/GramaSinteticaP.jpg",
    category: "GramaSintetica",
    description:
      "Disfruta de un jardín verde todo el año sin las molestias del mantenimiento. ¡Grama sintética de alta calidad!",
  },
  {
    id: 9,
    name: "Muebles y Productos Para Exterior",
    image: "/public/Images/ImagesProducts/MueblesExteriorW.jpg",
    category: "MueblesExterior",
    description:
      "Crea tu oasis perfecto en el exterior. ¡Muebles cómodos, resistentes y con estilo!.",
  },
  {
    id: 10,
    name: "Accesorios Para tu Hogar ",
    image: "/public/Images/ImagesProducts/Accesorios.jpeg",
    category: "Accesorios",
    description:
      "Productos que agregan un toque de belleza y elegancia para tu espacio preferido.!",
  },
  {
    id: 11,
    name: "Productos De Aseo",
    image: "/public/Images/ImagesProducts/ProductosDeAseoPrincipal.png",
    category: "ProductosDeAseo",
    description:
      "¿Buscas productos de aseo de calidad? ¡En Alfombrando los tenemos todos! Desde traperos hasta quitamanchas, todo lo que necesitas para un hogar limpio y reluciente te espera.",
  },
];

function CardProducts() {
  const context = useContext(ProductContextValues);
  const navigate = useNavigate();
  const [visibleProducts, setVisibleProducts] = useState(3);

  const handleButtonClick = (category) => {
    if (category === "ProductosDeAseo") {
      context.setMenuData(category);
      navigate(`/ProductsAseo`);
    }else{
      context.setMenuData(category);
      navigate('/Products')
    }
    
  };

  const loadMoreProducts = () => {
    setVisibleProducts((prevCount) => prevCount + 3);
  };

  const loadLessProducts = () => {
    setVisibleProducts((prevCount) => Math.max(3, prevCount - 3));
  };

  return (
    <div>
    <div className="nav-container">
    <div className="nav-container" id="products">
      <div className="grid-container">
        {products.slice(0, visibleProducts).map((product, index) => (
          <div key={index} className="catalogo-card">
            <p className="navText">{product.name}</p>
            <img
              src={product.image}
              alt={product.name}
              className="img-catalogo"
            />
            <p className="product-description">{product.description}</p>
            <button
              className="button-catalog"
              onClick={() => {
                handleButtonClick(product.category);
                console.log(context.selectedCategory);
                context.setSelectedCategory(product.category);
              }}
              >
              Ver catálogo
            </button>
          </div>
        ))}
      </div>

      <div className="buttons-container">
        {visibleProducts > 3 && (
          <button className="load-button" onClick={loadLessProducts}>
            Ver menos productos
          </button>
        )}
        {visibleProducts < products.length && (
          <button className="load-button" onClick={loadMoreProducts}>
            Ver más productos
          </button>
        )}
      </div>
    </div>
  </div>
  </div>
  );
}

export default CardProducts;
