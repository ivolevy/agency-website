import "../assets/styles/footer.css";
import { AiFillInstagram } from "react-icons/ai";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom

export const Footer = () => {
  return (
    <footer className="footer p-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left Section */}
        <div className="w-full md:w-1/3 text-center md:text-left text-sm font-medium text-white hidden md:block">
          ÚLTIMO <a href="https://b2b-client-acquisition-system.vercel.app/landing" target="_blank" rel="noopener noreferrer" className="underline ivanLevyLink">PROYECTO</a>
        </div>

        {/* Center Links Section */}
        <div className="w-full md:w-1/3 flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-2 text-center text-sm text-white">
          <Link to="/aviso-legal" target="_blank" className="legalLinks">Aviso Legal</Link>
          <span className="hidden md:inline">·</span>
          <Link to="/politica-de-privacidad" target="_blank" className="legalLinks">Política de Privacidad</Link>
          <span className="hidden md:inline">·</span>
          <Link to="/cookies" target="_blank" className="legalLinks">Cookies</Link>
        </div>

        {/* Icons and Email Section (Centered on Mobile) */}
        <div className="w-full md:w-1/3 flex flex-col items-center justify-center min-h-[150px] 
                        md:items-end md:justify-end text-white">
          <div className="flex space-x-5">
            <a href="https://www.linkedin.com/company/dota-solutions/" target="_blank" className="text-2xl icon"><TbBrandLinkedinFilled /></a>
            <a href="https://www.instagram.com/dotasolutions/" target="_blank" className="text-2xl icon"><AiFillInstagram /></a>
            <a href="https://wa.me/1138240929" className="text-2xl icon"><FaWhatsapp /></a>
          </div>
          {/* Email */}
          <div className="mt-2 text-sm text-gray-300">
            <a href="mailto:solutionsdota@gmail.com" className="hover:underline email">solutionsdota@gmail.com</a>
          </div>
        </div>
      </div>

      {/* Copyright and Logo */}
      <div className="text-center text-sm text-gray-400 mt-4">
        &copy; {new Date().getFullYear()} dota solutions. Todos los derechos reservados.
      </div>
      {/* Logo removed per user request */}
    </footer>
  );
};
