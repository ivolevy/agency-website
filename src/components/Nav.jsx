import React, { useState } from "react";
import "../assets/styles/nav.css";
import "../assets/styles/contact.css";
import turbo from '../assets/images/logo/turboestudio.png';
import { FaTimes } from 'react-icons/fa';
import { AiFillInstagram } from "react-icons/ai";
import { TbBrandLinkedinFilled } from "react-icons/tb";

const ContactForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    motivoConsulta: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado", formData);
    onClose();
  };

  return (
    <div className="modal show">
      <div className="modal-content">
        <button className="close formButton" onClick={onClose}>
          <FaTimes size={24} />
        </button>
        <div className="contact-container w-full md:w-full flex flex-col items-center space-y-6">
          <div className="shadow-lg p-6 contact w-full">
            <form onSubmit={handleSubmit}>
              <div className="mb-4 flex flex-col md:flex-row md:space-x-4">
                <div className="w-full md:w-1/2 mb-4 md:mb-0">
                  <label htmlFor="nombre" className="block text-gray-700 font-medium mb-2">Nombre</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-gray transition-all"
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label htmlFor="empresa" className="block text-gray-700 font-medium mb-2">Empresa</label>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-gray transition-all"
                    placeholder="Nombre de tu empresa"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="motivoConsulta" className="block text-gray-700 font-medium mb-2">Motivo de la consulta</label>
                <textarea
                  id="motivoConsulta"
                  name="motivoConsulta"
                  value={formData.motivoConsulta}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-gray transition-all"
                  placeholder="Escribe el motivo de tu consulta"
                  required
                ></textarea>
              </div>
              <div className="mb-4 text-center">
                <button type="submit" className="w-1/4 py-3 md navButton">
                  Enviar
                </button>
              </div>
            </form>
          </div>
          <div className="socialMedia w-full flex justify-center space-x-6 p-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <AiFillInstagram size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
              <TbBrandLinkedinFilled size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const NavComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleNav = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <nav>
      <div className="logo">
        <img src={turbo} alt="logo" />
      </div>
      <ul className="desktop-menu">
        <li><a href="#services">Servicios</a></li>
        <li><a href="#">Proyectos</a></li>
        <li><a href="#" className="navButton" onClick={openModal}>Trabajemos juntos</a></li>
      </ul>
      <div className={`hamburger ${isMenuOpen ? "hamburger-active" : ""}`} onClick={toggleNav}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
      <div className={`menubar ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li><a href="#services">Servicios</a></li>
          <li><a href="#">Proyectos</a></li>
          <li><a href="#" className="navButton" onClick={openModal}>Trabajemos juntos</a></li>
        </ul>
      </div>
      {isModalOpen && <ContactForm onClose={closeModal} />}
    </nav>
  );
};
