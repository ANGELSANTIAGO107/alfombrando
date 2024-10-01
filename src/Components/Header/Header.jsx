import "./Header.css";
//import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
//import { useRef } from "react";

function Header() {
  //const elementRef = useRef();
  //const isVisible = useIntersectionObserver()
  return (
    <div className="headerbox" id="header">
      <img
        src="../../public/Images/LogoAlfombrandoSinFondo.png"
        alt="logo"
        className="logo"
      />
      <div className="navHome">
        <a href="/">
          <p>Inicio</p>
        </a>
        <a href="/#nav">
          <p>Productos</p>
        </a>
        <a href="/#services">
          <p>Servicios</p>
        </a>
        <a href="/#about">
          <p>Sobre Nosotros</p>
        </a>
        <a href="/#redes">
          <p>Nuestras Redes</p>
        </a>
      </div>
    </div>
  );
}

export default Header;
