import "../assets/styles/footer.css";
import dota from '../assets/images/logo/dota.webp';
import { AiFillInstagram } from "react-icons/ai";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer p-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Sección Izquierda */}
        <div className="w-1/3 text-left text-sm font-medium text-black hidden md:block">
          TRABAJA CON NOSOTROS · ACCESO USUARIOS
        </div>

        {/* Sección de Enlaces CENTRADA (columna en mobile, fila en desktop) */}
        <div className="w-1/3 flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-2 text-center text-sm text-black">
          <a href="#" className="legalLinks">Aviso legal</a>
          <span className="hidden md:inline">·</span>
          <a href="#" className="legalLinks">Política de privacidad</a>
          <span className="hidden md:inline">·</span>
          <a href="#" className="legalLinks">Cookies</a>
        </div>

        {/* Sección de Iconos y Correo */}
        <div className="w-1/3 flex flex-col items-end text-black">
          <div className="flex space-x-5">
            <a href="#" className="text-5xl hover:text-gray-700 icon"><AiFillInstagram /></a>
            <a href="#" className="text-5xl hover:text-gray-700 icon"><FaWhatsapp /></a>
            <a href="#" className="text-5xl hover:text-gray-700 icon"><TbBrandLinkedinFilled /></a>
          </div>
          {/* Correo Electrónico */}
          <div className="mt-2 text-sm text-gray-600">
            <a href="mailto:contacto@turboestudio.com" className="hover:underline email">contacto@turboestudio.com</a>
          </div>
        </div>
      </div>

      {/* Copyright y Logo */}
      <div className="text-center text-sm text-gray-500 mt-4">
        &copy; {new Date().getFullYear()} Turbo Estudio. Todos los derechos reservados.
      </div>
      <div className="flex justify-center mt-4">
        <img src={dota} alt="Dota solutions" className="w-24" />
      </div>
    </footer>
  );
};
