import { useState } from "react";
import "../assets/styles/nav.css";
import "../assets/styles/contact.css";
import dota from "../assets/images/logo/dota.webp";

const menuItems = [
  { id: "services", label: "Servicios", title: "Descubre nuestros servicios de sistemas ERP y CRM & sitios web personalizados" },
  { id: "projects", label: "Proyectos", title: "Ver nuestros proyectos de sistemas y sitios personalizados" },
  { id: "contact", label: "Trabajemos juntos", title: "Contáctanos para comenzar tu proyecto", className: "navButton" },
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
        <a href="/" title="Dota Solutions - Desarrollo de Sistemas de Gestión & Sitios Web 100% Personalizados">
          <img 
            src={dota} 
            alt="Dota Solutions - Desarrollo de Sistemas de Gestión & Sitios Web 100% Personalizados" 
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
