import "./Footer.css";

function Footer() {
  // Datos de enlaces del footer
  const footerLinks = [
    {
      id: 1,
      links: [
        { id: 1, name: "Sobre nosotros", link: "#about-us" },
        { id: 2, name: "Servicios", link: "#services" },
        { id: 3, name: "Productos", link: "#products" },
      ],
    },
    {
      id: 2,
      links: [
        { id: 1, name: "Privacidad", link: "#privacy" },
        { id: 2, name: "Términos y condiciones", link: "#terms" },
        { id: 3, name: "Contacta con nosotros", link: "#contact" },
      ],
    },
    {
      id: 3,
      links: [
        { id: 1, name: "Derechos de Autor", link: "#derechos" },
        { id: 2, name: "Cll4 #13-44 Armenia-Quindio", link: "#address" },
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
