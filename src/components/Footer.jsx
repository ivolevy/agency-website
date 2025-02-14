import "../assets/styles/footer.css";
import turbo from '../assets/images/logo/turboestudio.png'
import { AiFillInstagram } from "react-icons/ai";
import { TbBrandLinkedinFilled } from "react-icons/tb";

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container px-6 py-12 mx-auto">

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            <div className="sm:col-span-2">
              <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">
                Subscribe our newsletter to get update.
              </h1>
              <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                <input
                  id="email"
                  type="text"
                  className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                  placeholder="Email Address"
                />
                <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                  Subscribe
                </button>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-6 md:flex-row md:justify-between md:items-start md:text-left md:space-y-0">
            <div className="flex flex-col items-center space-y-6 md:space-y-0">
              <div className="space-y-4 sm:space-y-6 md:space-y-0">
                <p className="font-semibold">Legales</p>
                <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">
                  Privacidad
                </a>
                <br />
                <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">
                  Who We Are
                </a>
                <br />
                <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">
                  Our Philosophy
                </a>
              </div>
            </div>


              <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                <div className="flex justify-center md:justify-start space-x-4 text-3xl md:text-xl">
                  <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Instagram">
                    <AiFillInstagram />
                  </a>
                  <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Linkedin">
                    <TbBrandLinkedinFilled />
                  </a>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-lg mail">
                  <a href="mailto:tuemail@dominio.com" className="mailLink text-gray-600 hover:text-gray-600 dark:hover:text-gray-800">
                    tuemail@dominio.com
                  </a>
                </p>
              </div>

            </div>

          </div>

          <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700" />

          <div className="flex flex-col text-sm items-center justify-between md:flex-row md:items-center">
            <p className="text-md">&copy; Turbo Estudio. Todos los derechos reservados.</p>
            <a href="#">
              <img className="w-40 h-auto md:w-32" src={turbo} alt="" />
            </a>
          </div>

        </div>
      </footer>
    </>
  )
}







  

