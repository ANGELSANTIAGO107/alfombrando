import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { ProductProvider } from "./Context/ProductsContext";

createRoot(document.getElementById("root")).render(
  <ProductProvider>
    <App />
  </ProductProvider>
);
