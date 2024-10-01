import "./About.css";

function About() {
  return (
    <div className="about-container" id="about">
      <div className="about-left">
        <img
          src="/public/Images/LogoAlfombrandoSinFondo.png"
          alt="alfombrando"
          className="about-logo"
        />
        <h2 className="about-title">Vive experiencias únicas Como Tú</h2>
        <p className="about-description">
          <span className="about-bold">
            ¿Cansado de las mismas opciones aburridas?
          </span>
          <br />
          En Alfombrando, revolucionamos el mercado con productos y servicios
          innovadores que se adaptan a tus necesidades únicas. Descubre un mundo
          de posibilidades y experimenta la diferencia de ser parte de nuestra
          comunidad.
        </p>
      </div>
      <div className="about-right">
        <div className="about-video">
          <video
            src="/public/video/comoLlegar.mp4"
            autoPlay
            loop
            muted
            className="video-player"
          ></video>
        </div>
      </div>
    </div>
  );
}

export default About;
