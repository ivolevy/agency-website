import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/nav.css";
import "../assets/styles/contact.css";
import dota from "../assets/images/logo/dota.webp";

const menuItems = [
  { to: "#top", label: "Inicio", title: "Volver al inicio", scroll: true },
  { to: "#services", label: "Servicios", title: "Ver nuestros servicios", scroll: true },
  { to: "/#projects", label: "Proyectos", title: "Ver nuestros proyectos de sistemas y sitios personalizados" },
  { to: "/#contact", label: "Trabajemos juntos", title: "Contáctanos para comenzar tu proyecto", className: "navButton" },
];

export const NavComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleNav = () => setIsMenuOpen((prev) => !prev);

  // Función para hacer scroll suave
  const scrollToSection = (id) => {
    const section = id === 'top' ? document.body : document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav>
      <div className="logo">
        <a href="#top" title="Dota Solutions - Desarrollo de Sistemas de Gestión & Sitios Web 100% Personalizados" onClick={e => { e.preventDefault(); scrollToSection('top'); }}>
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
        {menuItems.map(({ to, label, className, title, scroll }) => (
          <li key={to}>
            {to.startsWith("#") || scroll ? (
              <a href={to} className={className + ' anchor-link'} title={title} onClick={e => { e.preventDefault(); scrollToSection(to.replace('#', '')); }}>{label}</a>
            ) : (
              <a href={to} className={className} title={title}>{label}</a>
            )}
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
          {menuItems.map(({ to, label, className, title, scroll }) => (
            <li key={to}>
              {to.startsWith("#") || scroll ? (
                <a href={to} className={className + ' anchor-link'} title={title} onClick={e => { e.preventDefault(); scrollToSection(to.replace('#', '')); }}>{label}</a>
              ) : (
                <a href={to} className={className} title={title} onClick={() => setIsMenuOpen(false)}>{label}</a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
