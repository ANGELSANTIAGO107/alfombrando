import React, { useEffect, useState } from "react";
import CardProducts from "../Components/CardProducts/CardProducts";
import Header from "../Components/Header/Header";
import Banner from "../Components/Banner/Banner";
import Footer from "../Components/Footer/Footer";
import NavServices from "../Components/NavServices/NavServices";
import Redes from "../Components/Redes/Redes";
import About from "../Components/About/About";
import { FaSquareWhatsapp } from "react-icons/fa6";
import "./Home.css";

export const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <Banner />
      <CardProducts />
      <NavServices />
      <About />
      <a
        href="https://wa.me/3105385315" // Reemplaza con tu número de WhatsApp
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-icon"
      >
        <FaSquareWhatsapp />
      </a>
      <Redes />
      <Footer />
    </>
  );
};

export default Home;
