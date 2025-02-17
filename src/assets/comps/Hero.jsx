import '../styles/header.css'

export const Hero = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center text-center bg-[#FAFAFA]">
      <div className="relative">
        {/* Título principal */}
        <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight">
          Domina tu mercado <br /> con <span className="text-black">DATOS</span>
        </h1>

        {/* Subtítulo */}
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Tableros listos para usar, visualizaciones dinámicas y diseño inteligente:
          todo para transformar tu conocimiento del mercado.
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





