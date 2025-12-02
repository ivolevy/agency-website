import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/nav.css";
import "../assets/styles/contact.css";

const menuItems = [
  { to: "/#header", label: "Inicio", title: "Volver al inicio" },
  { to: "/#services", label: "Servicios", title: "Ver nuestros servicios" },
  { to: "/#projects", label: "Proyectos", title: "Ver nuestros proyectos de sistemas y sitios personalizados" },
  // Equipo ocultado a pedido: { to: "/#team", label: "Equipo", title: "Conoce nuestro equipo" },
  { to: "/#contact", label: "Trabajemos juntos", title: "Contáctanos para comenzar tu proyecto", className: "navButton" },
];

export const NavComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleNav = () => setIsMenuOpen((prev) => !prev);

  // Función para hacer scroll suave
  const scrollToSection = (id) => {
    const section = id === 'top' || id === 'header' ? document.getElementById('header') : document.getElementById(id);
    if (section) {
      const navbarHeight = 100; // Altura aproximada del navbar + padding extra
      const sectionTop = section.offsetTop;
      
      // Usar setTimeout para asegurar que el scroll funcione correctamente
      setTimeout(() => {
        window.scrollTo({
          top: sectionTop - navbarHeight,
          behavior: 'smooth'
        });
      }, 100);
    } else if (id === 'top' || id === 'header') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav>
      <div className="logo">
        <a href="/#header" title="Dota Solutions - Soluciones Digitales Personalizadas">
          <img 
            src="/dota.png" 
            alt="Dota Solutions - Soluciones Digitales Personalizadas" 
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
