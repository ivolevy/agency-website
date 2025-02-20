import '../styles/header.css'

export const Hero = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center text-center bg-[#FAFAFA]">
      <div className="relative">
        {/* Título principal */}
        <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight">
          Impulsamos tu Negocio con <br /> Soluciones <span className="text-black">Digitales</span>
        </h1>

        {/* Subtítulo */}
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
        Desde tu sitio web hasta campañas avanzadas, 
        diseñamos servicios que potencian tu marca y multiplican resultados
        </p>

        {/* Botones */}
        <div className="mt-6 flex gap-4 justify-center">
          <button className="border border-transparent text-black font-light py-3 px-6 rounded-full hover:bg-gray-100 transition-all navButton">
            Contactános
          </button>
          <button className="navButton2 border border-black text-black font-light py-3 px-6 rounded-full hover:bg-gray-100 transition-all">
            Conocé la solución
          </button>
        </div>
      </div>

      {/* Texto adicional */}
      <p className="mt-12 text-gray-500 text-sm">Algunos de los sitios que monitoreamos:</p>
    </div>
  )
}





