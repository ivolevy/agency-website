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

  return (
    <nav>
      <div className="logo">
        <a href="#header" title="Dota Solutions - Agencia Digital">
          <img src={dota} alt="Dota Solutions - Agencia Digital que ofrece desarrollo web, SEO y publicidad" />
        </a>
      </div>

      <ul className="desktop-menu">
        {menuItems.map(({ id, label, className, title }) => (
          <li key={id}>
            <a href={`#${id}`} className={className} title={title}>
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
              <a href={`#${id}`} className={className} title={title} onClick={toggleNav}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
