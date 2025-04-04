import { useState } from "react";
import "../assets/styles/nav.css";
import "../assets/styles/contact.css";
import dota from "../assets/images/logo/dota.webp";

const menuItems = [
  { id: "services", label: "Servicios", title: "Descubre nuestros servicios digitales" },
  { id: "projects", label: "Proyectos", title: "Ver nuestros proyectos anteriores" },
  { id: "contact", label: "Trabajemos juntos", title: "Contáctanos para comenzar a trabajar juntos", className: "navButton" },
];

export const NavComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleNav = () => setIsMenuOpen((prev) => !prev);

  // Función para hacer scroll suave
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav>
      <div className="logo">
        <a href="/" title="Dota Solutions - Desarrollo de Sistemas ERP y CRM">
          <img 
            src={dota} 
            alt="Dota Solutions - Logo de la empresa especializada en desarrollo de sistemas ERP, CRM y sitios web personalizados" 
            width="120"
            height="40"
            loading="lazy"
          />
        </a>
      </div>

      <ul className="desktop-menu">
        {menuItems.map(({ id, label, className, title }) => (
          <li key={id}>
            <a href={`#${id}`} className={className} title={title} onClick={(e) => { e.preventDefault(); scrollToSection(id); }}>
              {label}
            </a>
          </li>
        ))}
      </ul>

      <button
        className={`hamburger ${isMenuOpen ? "hamburger-active" : ""}`}
        onClick={toggleNav}
        aria-label="Abrir menú de navegación"
        aria-expanded={isMenuOpen}
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>

      <div className={`menubar ${isMenuOpen ? "active" : ""}`}>
        <ul>
          {menuItems.map(({ id, label, className, title }) => (
            <li key={id}>
              <a href={`#${id}`} className={className} title={title} onClick={(e) => { e.preventDefault(); scrollToSection(id); }}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
