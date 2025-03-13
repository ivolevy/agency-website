import "../styles/notfound.css";
import dota from "../../assets/images/logo/dota.webp/";

export const NotFound = () => {
    return (
      <div className="flex flex-col justify-center items-center h-screen w-screen text-center notfound">
        {/* <img src={dota} alt="" /> */}
        <h1 className="text-base font-bold">404 - Not Found</h1>
        <h2 className="ups font-bold">UPS!</h2>
        <p className="mb-4">La página a la que intentas acceder no existe</p>
        <a href="/" className="border border-black text-black font-light py-3 px-6 hover:bg-gray-100 transition-all navButton2">Volver al inicio</a>
      </div>
    );
  }
  