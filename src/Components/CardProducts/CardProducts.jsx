import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContextValues } from "../../Context/ProductsContext";
import "./CardProducts.css";

const products = [
  {
    id: 1,
    name: "Tapetes",
    image: "/public/Images/TapeteSilverHouse.jpeg",
    category: "Tapetes",
    description:
      "Un toque de calidez y personalidad para cada rincón de tu hogar. ¡Elige entre una gran variedad de diseños y colores!. ",
  },
  {
    id: 2,
    name: "Alfombras",
    image: "/public/Images/AlfombraVidrio.jpeg",
    category: "Alfombras",
    description:
      "Convierte tus pisos en obras de arte con nuestras alfombras de ensueño. ¡Suavidad, estilo y comodidad para tu hogar!",
  },
  {
    id: 3,
    name: "Cortinas",
    image: "/public/Images/CortinasClaras.jpeg",
    category: "Cortinas",
    description:
      "Controla la luz y la privacidad con estilo. ¡Persianas para todos los gustos y necesidades!.",
  },
  {
    id: 4,
    name: "Muebles y Productos Para Exterior",
    image: "/public/Images/MueblesExteriorW.jpg",
    category: "MueblesExterior",
    description:
      "Crea tu oasis perfecto en el exterior. ¡Muebles cómodos, resistentes y con estilo!.",
  },
  {
    id: 5,
    name: "Pisos",
    image: "/public/Images/Accesorios.jpeg",
    category: "Pisos",
    description:
      "Dale un nuevo look a tus espacios con nuestros pisos de alta calidad. ¡Durabilidad, belleza y diseños para todos los gustos!",
  },
  {
    id: 6,
    name: "Papel De Colgadura",
    image: "/public/Images/TapisadoAlfombrando.jpeg",
    category: "PapelColgadura",
    description:
      "Viste tus paredes con estilo y personalidad. ¡Papel de colgadura para todos los gustos y presupuestos!",
  },
  {
    id: 7,
    name: "Panel Wall",
    image: "/public/Images/Cogines.jpeg",
    category: "panelwall",
    description:
      "Decora tus paredes de forma moderna y original. ¡Panel Wall para crear espacios únicos! ",
  },
  {
    id: 8,
    name: "Cojines",
    image: "/public/Images/Cogines.jpeg",
    category: "Cojines",
    description:
      "Agrega un toque de confort y estilo a tu hogar. ¡Cojines de todos los tamaños, colores y diseños!",
  },
  {
    id: 9,
    name: "Grama Sintetica",
    image: "/public/Images/CortinasClaras.jpeg",
    category: "GramaSintetica",
    description:
      "Disfruta de un jardín verde todo el año sin las molestias del mantenimiento. ¡Grama sintética de alta calidad!",
  },
  {
    id: 10,
    name: "Accesorios Para tu Hogar ",
    image: "/public/Images/Accesorios.jpeg",
    category: "Accesorios",
    description:
      "Productos que agregan un toque de belleza y elegancia para tu espacio preferido.!",
  },
];

function CardProducts() {
  const context = useContext(ProductContextValues);
  const navigate = useNavigate();
  const [visibleProducts, setVisibleProducts] = useState(4);

  const handleButtonClick = (category) => {
    context.setMenuData(category);
    navigate(`/Products`);
  };

  const loadMoreProducts = () => {
    setVisibleProducts((prevCount) => prevCount + 4);
  };

  const loadLessProducts = () => {
    setVisibleProducts((prevCount) => Math.max(4, prevCount - 4));
  };

  return (
    <div className="nav-container" id="nav">
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
              Ver Catalogo
            </button>
          </div>
        ))}
      </div>

      <div className="buttons-container">
        {visibleProducts > 4 && (
          <button className="load-button" onClick={loadLessProducts}>
            Ver Menos Productos
          </button>
        )}
        {visibleProducts < products.length && (
          <button className="load-button" onClick={loadMoreProducts}>
            Ver Más Productos
          </button>
        )}
      </div>
    </div>
  );
}

export default CardProducts;
