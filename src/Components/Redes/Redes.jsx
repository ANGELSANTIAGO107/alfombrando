import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { IoLogoTiktok } from "react-icons/io5";
import "./Redes.css";

function Redes() {
  return (
    <>
      <div className="redes-principal" id="redes">
        <div className="left-box">
          <h1 className="h1-redes">
            Únete a nuestras redes para enterarte
            <br /> de lo último en diseño de interiores{" "}
          </h1>
        </div>
        <div className="right-box">
          <div className="icons">
            <div className="card">
              <p className="text-redes">Facebook</p>
              <a
                href="https://www.facebook.com/alfombrandoarmenia?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="images-redes" />
              </a>
            </div>
            <div className="card">
              <p className="text-redes">Instagram</p>
              <a
                href="https://www.instagram.com/alfombrando_armenia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GrInstagram className="images-redes" />
              </a>
            </div>
            <div className="card">
              <p className="text-redes">TikTok</p>
              <a
                href="https://www.tiktok.com/@cesaryovanyfrankl?_t=8mydCSYWpbZ&_r=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoTiktok className="images-redes" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Redes;
