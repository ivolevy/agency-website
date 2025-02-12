import React, { useState } from "react";
import "../assets/styles/nav.css";
import NavImage from '../assets/images/logo/dota.png'

export const NavComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleNav = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="">
      {/* Logo Section */}
      <div className="logo">
        <img src={NavImage} alt="logo" />
      </div>

      {/* Desktop Menu */}
      <ul className="desktop-menu">
       
        <li>
          <a href="#">Soluciones</a>
        </li>
        <li>
          <a href="#">Creaciones</a>
        </li>
        <li>
          <a href="#" className="navButton">Conversemos</a>
        </li>
      </ul>

      {/* Hamburger Menu */}
      <div
        className={`hamburger ${isMenuOpen ? "hamburger-active" : ""}`}
        onClick={toggleNav}
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>

      {/* Mobile Menu */}
      <div className={`menubar ${isMenuOpen ? "active" : ""}`}>
        <ul>
         
          <li>
            <a href="#">Soluciones</a>
          </li>
          <li>
            <a href="#">Creaciones</a>
          </li>
          <li>
            <a href="#" className="navButton">Conversemos</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
