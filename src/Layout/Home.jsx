import { useEffect, useState } from "react";
import CardProducts from "../Components/CardProducts/CardProducts";
import Header from "../Components/Header/Header";
import Banner from "../Components/Banner/Banner";
import Footer from "../Components/Footer/Footer";
import CardServices from "../Components/CardServices/CardServices";
import Redes from "../Components/Redes/Redes";
import About from "../Components/About/About";
import { FaSquareWhatsapp } from "react-icons/fa6";
import "./Home.css";

export const Home = () => {
  const [setScrollY] = useState(0);
  const [showModal, setShowModal] = useState(false); // Estado para controlar el modal

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Header />
      <Banner />
      <CardProducts />
      <CardServices />
      <About />
      <div
        className="whatsapp-icon"
        onClick={openModal} // Abrir el modal al hacer clic
      >
        <FaSquareWhatsapp />
      </div>
      {showModal && ( // Condicionalmente mostrar el modal si showModal es true
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <img
              src="/public/Images/qrAlfombrando.jpg"
          alt="alfombrando"
          className="modal-image"
        />
          </div>
        </div>
      )}
      <Redes />
      <Footer />
    </>
  );
};

export default Home;
