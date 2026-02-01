import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/nav.css";
import "../assets/styles/contact.css";

const menuItems = [
  { to: "/#header", label: "Inicio", title: "Volver al inicio" },
  { to: "/#services", label: "Servicios", title: "Ver nuestros servicios" },
  { to: "/#projects", label: "Proyectos", title: "Ver nuestros proyectos de sistemas y webs" },
  // Team hidden by request: { to: "/#team", label: "Equipo", title: "Conoce al equipo" },
  { to: "/#contact", label: "EMPEZAR AHORA", title: "Contáctanos para empezar tu proyecto", className: "navButtonPrimary" },
];

export const NavComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleNav = () => setIsMenuOpen((prev) => !prev);

  // Smooth scroll function
  const scrollToSection = (id) => {
    const section = id === 'top' || id === 'header' ? document.getElementById('header') : document.getElementById(id);
    if (section) {
      const navbarHeight = 100; // Approximate navbar height + extra padding
      const sectionTop = section.offsetTop;

      // Use setTimeout to ensure scroll works correctly
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
    <>
      <nav>
        <div className="logo">
          <a href="/#header" title="Dota Solutions - Custom Digital Solutions">
            <img
              src="/dota.png"
              alt="Dota Solutions - Custom Digital Solutions"
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
                <a href={to} className={(className || '') + ' anchor-link'} title={title} onClick={e => { e.preventDefault(); scrollToSection(to.replace('#', '')); }}>{label}</a>
              ) : (
                <a href={to} className={className} title={title}>{label}</a>
              )}
            </li>
          ))}
        </ul>

        <button
          className={`hamburger ${isMenuOpen ? "hamburger-active" : ""}`}
          onClick={toggleNav}
          aria-label="Open navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
      </nav>

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
    </>
  );
};
