import { useState } from "react";
import emailjs from "emailjs-com";
import { AiFillInstagram } from "react-icons/ai";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";
import "../assets/styles/contact.css";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      company: formData.company,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_7fd63b9", // Service ID
        "template_8aqoq0a", // Template ID
        templateParams,
        "H1IHW-mp6NDoe6BDv" // Public Key
      )
      .then(
        () => {
          setStatus("Mensaje enviado con éxito");
          setFormData({ name: "", company: "", email: "", message: "" });
        },
        (error) => {
          setStatus("Error al enviar el mensaje, intenta de nuevo.");
          console.error("Error al enviar:", error);
        }
      );
  };

  return (
    <>
    <h2 className="servicesTitle text-center mb-5">
        Contacto
      </h2>
    <div className="flex flex-col items-center lg:flex-row mx-auto text-center contactContainer" id="contact">
      {/* Lado Izquierdo: Información + Redes Sociales */}
      <div className="lg:w-1/2 flex flex-col items-start justify-center text-left p-6 responsiveData">
        <h3 className="text-3xl font-bold text-white contactSubtitle">Empecémos a crear juntos y dominá el mercado con nosotros</h3>
        <p className="text-gray-600 mb-4 contactText">Contanos qué necesitas y charlemos sobre eso.</p>

        {/* Redes Sociales */}
        <div className="flex items-center space-x-4 mb-4">
          <a 
            href="https://www.instagram.com/dotasolutions" 
            target="_blank" rel="noopener noreferrer" 
            className="text-pink-500 hover:text-pink-600 text-3xl" 
            aria-label="Instagram" title="Instagram"
          >
            <AiFillInstagram className="contactIcon"/>
          </a>
          <a 
            href="https://www.linkedin.com/dota-solutions" 
            target="_blank" rel="noopener noreferrer" 
            className="text-blue-700 hover:text-blue-800 text-3xl"
            aria-label="Linkedin" title="Linkedin"
          >
            <TbBrandLinkedinFilled className="contactIcon"/>
          </a>
          <a 
            href="https://wa.me/1138240929" 
            target="_blank" rel="noopener noreferrer" 
            className="text-green-500 hover:text-green-600 text-3xl"
            aria-label="Whatsapp" title="Whatsapp"
          >
            <FaWhatsapp className="contactIcon"/>
          </a>
        </div>

        {/* Email */}
        <p className="text-gray-600 ">
          <a href="mailto:solutionsdota@gmail.com" className="text-white contactEmail">solutionsdota@gmail.com</a>
        </p>

      </div>

      {/* Lado Derecho: Formulario */}
      <form onSubmit={handleSubmit} className="lg:w-1/2 bg-white p-6 roundedForm responsiveForm shadow-md flex flex-col items-center text-center">
        <div className="flex flex-col md:flex-row gap-4 mb-4 w-full">
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full md:w-1/2 p-3 border border-gray-300 roundedForm focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Nombre"
          />
          <input
            type="text"
            name="company"
            placeholder="Tu Empresa"
            value={formData.company}
            onChange={handleChange}
            required
            className="w-full md:w-1/2 p-3 border border-gray-300 roundedForm focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Empresa"
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Tu Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 mb-4 border border-gray-300 roundedForm focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Email"
        />

        <textarea
          name="message"
          placeholder="Contános tu caso"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          className="w-full p-3 border border-gray-300 roundedForm focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Mensaje"
        ></textarea>

        <button type="submit" className="contactButton mt-3">
          Enviar Mensaje
        </button>

        {status && <p className="text-green-600 text-center mt-3">{status}</p>}
      </form>
    </div>
    </>
  );
};
