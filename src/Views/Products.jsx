import { useContext } from "react";
import Header from "../Components/Header/Header";
import { ProductContextValues } from "../Context/ProductsContext";
import Footer from "../Components/Footer/Footer";
import Error404 from "../Components/Error404/Error404";
import "./Products.css";

function Products() {
  const context = useContext(ProductContextValues);

  const filteredProducts = context.dataProducts.filter(
    (product) => product.category === context.selectedCategory
  );

  const handleCategoryChange = (event) => {
    context.setSelectedCategory(event.target.value);
  };

  return (
    <>
      <Header />
      <div className="category-select">
        <label htmlFor="category">Seleccionar categoría:</label>
        <select
          id="category"
          value={context.selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="Cortinas">Cortinas</option>
          <option value="Alfombras">Alfombras</option>
          <option value="Pisos">Pisos</option>
        </select>
      </div>
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <h2>{product.name}</h2>
              <div className="container-left">
                {product.id === 26 ? (
                  <video
                    src={product.videoUrl}
                    controls
                    autoPlay
                    loop
                    muted
                    className="product-video"
                  />
                ) : (
                  <img alt={product.name} src={product.image} />
                )}
                <p>{product.description}</p>
              </div>
              <img
                src="../../public/Images/qrAlfombrando.jpg"
                alt="Código QR para cotizar en WhatsApp"
                className="qr-image"
              />
              <p className="qr-text">
                Escanéame y cotiza tu {product.category.toLowerCase()}
              </p>
            </div>
          ))
        ) : (
           <div>
            <Error404/>
            </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Products;
