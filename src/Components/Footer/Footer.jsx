import "./Footer.css";

function Footer() {
  // Datos de enlaces del footer
  const footerLinks = [
    { 
      id: 1,
      links: [
        { id: 1, name: "Sobre nosotros", link: "/#about" },
        { id: 2, name: "Servicios", link: "/#services" },
        { id: 3, name: "Productos", link: "/#nav" },
      ],
    },
    {
      id: 2,
      links: [
        { id: 1, name: "Privacidad", link: "#privacy" },
        { id: 2, name: "Términos y condiciones", link: "#terms" },
        { id: 3, name: "Derechos de Autor", link: "#derechos" },
      ],
    },
    {
      id: 3,
      links: [
        { id: 1, name: "Cll4 #13-44 Armenia-Quindio", link: "https://www.google.com/maps/@4.5412766,-75.6640619,3a,75y,90h,74.63t/data=!3m7!1e1!3m5!1sJ6twcomn7T9oSfx8Ypu9gw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D15.373520248290362%26panoid%3DJ6twcomn7T9oSfx8Ypu9gw%26yaw%3D90!7i13312!8i6656?coh=205410&entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D" },
      ],
    },
  ];

  return (
    <div className="footer-div">
      <div className="footer-grid">
        {footerLinks.map((section) => (
          <div key={section.id}>
            {section.links.map((link) => (
              <a href={link.link} key={link.id} className="footer-link">
                {link.name}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footer;
