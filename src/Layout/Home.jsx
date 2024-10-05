import { useEffect, useState } from "react";
import CardProducts from "../Components/CardProducts/CardProducts";
import Header from "../Components/Header/Header";
import Banner from "../Components/Banner/Banner";
import Footer from "../Components/Footer/Footer";
import CardServices from "../Components/CardServices/CardServices";
import Redes from "../Components/Redes/Redes";
import About from "../Components/About/About";
import SectionAlcop from "../Components/SectionAlcop/SectionAlcop";
import { FaSquareWhatsapp } from "react-icons/fa6";
import "./Home.css";


export const Home = () => {
  const [setScrollY] = useState(0); // Keep this declaration
  

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
      <CardServices />
      <About />
      <SectionAlcop />
      <a
       href="https://wa.me/573105385315" // Replace with your WhatsApp number
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
