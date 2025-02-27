import { useState } from "react";
import "../assets/styles/nav.css";
import "../assets/styles/contact.css";
import dota from "../assets/images/logo/dota.webp";

const menuItems = [
  { id: "services", label: "Servicios" },
  { id: "projects", label: "Proyectos" },
  { id: "contact", label: "Trabajemos juntos", className: "navButton" },
];

export const NavComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleNav = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav>
      <div className="logo">
        <img src={dota} alt="Dota Solutions" />
      </div>

      <ul className="desktop-menu">
        {menuItems.map(({ id, label, className }) => (
          <li key={id}>
            <a href={`#${id}`} className={className}>
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
          {menuItems.map(({ id, label, className }) => (
            <li key={id}>
              <a href={`#${id}`} className={className} onClick={toggleNav}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
