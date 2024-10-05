import "./SectionAlcop.css";

function SectionAlcop() {
  return (
    <div className="location-container">
      <div className="map-section">
        <img
          src="/public/Images/map.png"
          alt="Mapa de la ubicación"
          className="small-image"
        ></img>
        <p>
          Nos encontramos también en <strong>Pereira, Risaralda.</strong>{" "}
          Nuestra dirección es
          <a
            href="https://www.google.com/maps/place/Alcop/@4.8092241,-75.6920971,3a,75y,26.34h,98.43t/data=!3m7!1e1!3m5!1sfGerufnTDijCbq7sCxwJVw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-8.426526603438404%26panoid%3DfGerufnTDijCbq7sCxwJVw%26yaw%3D26.34244199681668!7i16384!8i8192!4m20!1m13!4m12!1m4!2m2!1d-75.6678656!2d4.5416448!4e1!1m6!1m2!1s0x8e3887474274ffbb:0xd2e2adeb7d8ed13d!2salcop!2m2!1d-75.692055!2d4.8093246!3m5!1s0x8e3887474274ffbb:0xd2e2adeb7d8ed13d!8m2!3d4.8093246!4d-75.692055!16s%2Fg%2F11hzqgrvts?coh=205410&entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D"
            target="_blank"
          >
            Cra. 13 #15-60
          </a>
          , en una zona céntrica y accesible, listos para ofrecerte una atención
          cercana y eficiente tanto en nuestras instalaciones como a través de
          nuestros canales digitales.
        </p>
      </div>
      <div className="logo-section">
        <a
          href="https://www.instagram.com/alcop_pereira/?hl=es-la"
          target="_blank"
        >
          <img
            src="/Images/logoAlcop.png"
            alt="Logo Alcop"
            className="logoAlcop"
          ></img>
        </a>
      </div>
    </div>
  );
}

export default SectionAlcop;
