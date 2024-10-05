import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types"; // Importa PropTypes
import { dataProduct } from "../DataGlobal/DataProducts";

export const ProductContextValues = createContext();

export const ProductProvider = ({ children }) => {
  const [dataProducts, setDataProducts] = useState(dataProduct);
  const [menuData, setMenuData] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(() => {
    return localStorage.getItem("selectedCategory") || "Cortinas"; // Usar localStorage para el valor inicial
  });

  // Actualizar localStorage cada vez que selectedCategory cambie
  useEffect(() => {
    localStorage.setItem("selectedCategory", selectedCategory);
  }, [selectedCategory]);

  return (
    <ProductContextValues.Provider
      value={{
        dataProducts,
        setDataProducts,
        menuData,
        setMenuData,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </ProductContextValues.Provider>
  );
};

// Agrega validación de PropTypes
ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
