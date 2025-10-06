import "../assets/styles/footer.css";
import dota from '../assets/images/logo/dota.webp';
import { AiFillInstagram } from "react-icons/ai";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom

export const Footer = () => {
  return (
    <footer className="footer p-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Sección Izquierda */}
        <div className="w-full md:w-1/3 text-center md:text-left text-sm font-medium text-black hidden md:block">
          TRABAJA CON NOSOTROS · INICIA TU PROYECTO
        </div>

        {/* Sección de Enlaces CENTRADA */}
        <div className="w-full md:w-1/3 flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-2 text-center text-sm text-black">
        <Link to="/aviso-legal" target="_blank" className="legalLinks">Aviso legal</Link>
          <span className="hidden md:inline">·</span>
          {/* Aquí usa Link de React Router */}
          <Link to="/politica-de-privacidad" target="_blank" className="legalLinks">Política de privacidad</Link>
          <span className="hidden md:inline">·</span>
          <Link to="/cookies" target="_blank" className="legalLinks">Cookies</Link>
        </div>

        {/* Sección de Iconos y Correo (Centrada en Mobile) */}
        <div className="w-full md:w-1/3 flex flex-col items-center justify-center min-h-[150px] 
                        md:items-end md:justify-end text-black">
          <div className="flex space-x-5">
            <a href="https://www.linkedin.com/company/dota-solutions/" target="_blank" className="text-2xl hover:text-gray-700 icon"><TbBrandLinkedinFilled /></a>
            <a href="https://www.instagram.com/dotasolutions/" target="_blank" className="text-2xl hover:text-gray-700 icon"><AiFillInstagram /></a>
            <a href="https://wa.me/1138240929" className="text-2xl hover:text-gray-700 icon"><FaWhatsapp /></a>
          </div>
          {/* Correo Electrónico */}
          <div className="mt-2 text-sm text-gray-600">
            <a href="mailto:solutionsdota@gmail.com" className="hover:underline email">solutionsdota@gmail.com</a>
          </div>
        </div>
      </div>

      {/* Copyright y Logo */}
      <div className="text-center text-sm text-gray-500 mt-4">
        &copy; {new Date().getFullYear()} dota solutions. Todos los derechos reservados.
      </div>
      <div className="flex justify-center mt-4">
        <img src={dota} alt="dota solutions" className="w-24 footerImg" />
      </div>
      <div className="text-center text-sm text-gray-600 mt-6">
        Diseñado y desarrollado por <a href="https://ivanlevyportfolio.vercel.app" target="_blank" rel="noopener noreferrer" className="underline">Ivan levy</a>
      </div>
    </footer>
  );
};
