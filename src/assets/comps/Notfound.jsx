import "../styles/notfound.css";
import { Link } from "react-router-dom";
import dota from "../../assets/images/logo/dota.webp";

export const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen text-center notfound">
      <img src={dota} alt="Dota Solutions - Desarrollo de Sistemas ERP-CRM & sitios web Personalizados" className="logoNotFound mb-4" />
      <h1 className="text-lg font-bold">Error 404 - Página no encontrada</h1>
      <h2 className="ups font-bold text-xl mt-2">¡UPS!</h2>
      <p className="mb-4 text-gray-700">Lo sentimos, pero la página que buscas no existe.</p>
      <Link to="/" className="border border-black text-black font-light py-3 px-6 hover:bg-gray-100 transition-all navButton2">
        Volver al inicio
      </Link>
    </div>
  );
};
