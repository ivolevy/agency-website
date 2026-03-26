import "../assets/styles/footer.css";
import { AiFillInstagram } from "react-icons/ai";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom

export const Footer = () => {
  return (
    <footer className="footer p-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left Section - Google Partner */}
        <div className="w-full md:w-1/3 flex items-center justify-center md:justify-start hidden md:flex">
          <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg px-4 py-2 transition-all hover:bg-white/10 cursor-pointer group">
            <svg width="24" height="24" viewBox="0 0 24 24" className="shrink-0">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <div className="flex flex-col leading-tight">
              <span className="text-white font-semibold text-sm tracking-wide">Google</span>
              <span className="text-[#4285F4] font-bold text-xs uppercase tracking-tighter">Partner</span>
            </div>
          </div>
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
