import { useState } from "react";
import "./Header.css";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("inicio"); // Estado para el enlace activo

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link); // Actualiza el enlace activo
    setMenuOpen(false); // Cierra el menú en pantallas pequeñas
  };

  return (
    <div className="headerbox" id="header">
      <div className="headerContent">
      <button className="hamburger" onClick={toggleMenu}>
          &#9776;
        </button>
        <img
          src="../../public/Images/LogoAlfombrandoSinFondo.png"
          alt="logo"
          className="logo"
        />
      </div>
      <div className={`navHome ${isMenuOpen ? "open" : ""}`}>
        <a href="/" className={activeLink === "inicio" ? "selected" : ""} onClick={() => handleLinkClick("inicio")}>
          <p>Inicio</p>
        </a>
        <a href="/#products" className={activeLink === "products" ? "selected" : ""} onClick={() => handleLinkClick("products")}>
          <p>Productos</p>
        </a>
        <a href="/#services" className={activeLink === "services" ? "selected" : ""} onClick={() => handleLinkClick("services")}>
          <p>Servicios</p>
        </a>
        <a href="/#about" className={activeLink === "about" ? "selected" : ""} onClick={() => handleLinkClick("about")}>
          <p>Sobre nosotros</p>
        </a>
        <a href="/#redes" className={activeLink === "redes" ? "selected" : ""} onClick={() => handleLinkClick("redes")}>
          <p>Nuestras redes</p>
        </a>
      </div>
    </div>
  );
}

export default Header;
