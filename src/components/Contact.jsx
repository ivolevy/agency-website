import '../assets/styles/cloud.css';

export const Contact = () => {
  return (
    <>
      <div className="cloud flex justify-center items-center">
        <div className="w-full max-w-4xl p-12 text-center contactCloud shadow-lg"
          style={{
            background: "linear-gradient(to bottom, #ff80bf, #3d3d3d)", // Gradiente rosa a gris oscuro
          }}
        >
          {/* Título */}
          <h2 className="text-white text-4xl md:text-5xl font-bold">
            Empezá a dominar el mercado con <span className="font-extrabold">#Turbodato</span>
          </h2>

          {/* Subtítulo */}
          <p className="text-gray-200 text-lg mt-2">No te quedes fuera.</p>

          {/* Botón */}
          <div className="mt-6">
            <button className="bg-white text-black font-medium py-3 px-6 rounded-full shadow-md hover:bg-gray-200 transition-all">
              Hablá con ventas
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
