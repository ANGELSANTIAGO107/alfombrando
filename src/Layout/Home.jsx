import CardProducts from "../Components/CardProducts/CardProducts";
import Header from "../Components/Header/Header";
import Banner from "../Components/Banner/Banner";
import Footer from "../Components/Footer/Footer";
import NavServices from "../Components/NavServices/NavServices";
import Redes from "../Components/Redes/Redes";
import About from "../Components/About/About";

export const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <CardProducts />
      <NavServices />
      <About />
      <Redes />
      <Footer />
    </>
  );
};
