import { useState } from "react";
import "../assets/styles/nav.css";
import "../assets/styles/contact.css";
import dota from '../assets/images/logo/dota.webp';

export const NavComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleNav = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="logo">
        <img src={dota} alt="dota solutions" />
      </div>
      <ul className="desktop-menu">
        <li><a href="#services">Servicios</a></li>
        <li><a href="#projects">Proyectos</a></li>
        <li><a href="#contact" className="navButton">Trabajemos juntos</a></li>
      </ul>
      <div className={`hamburger ${isMenuOpen ? "hamburger-active" : ""}`} onClick={toggleNav}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
      <div className={`menubar ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li><a href="#services">Servicios</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#contact" className="navButton">Trabajemos juntos</a></li>
        </ul>
      </div>
    </nav>
  );
};
