import { useState } from "react";
import emailjs from "emailjs-com";
import { AiFillInstagram } from "react-icons/ai";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";
import { SiCalendly } from "react-icons/si";
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
    <div className="flex flex-col items-center lg:flex-row mx-auto text-center" id="contact">
      {/* Lado Izquierdo: Información + Redes Sociales */}
      <div className="lg:w-1/2 flex flex-col items-center justify-center text-center p-6">
        <h2 className="text-2xl font-bold text-white mb-4">Empezá a dominar el mercado con Nosotros</h2>
        <p className="text-gray-600 mb-2">Cuéntanos qué necesitas y te responderemos lo antes posible.</p>
        <p className="text-gray-600 mb-4">También puedes agendar una reunión con nosotros.</p>

        {/* Redes Sociales */}
        <div className="flex items-center justify-center space-x-4 mb-4">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600 text-3xl">
            <AiFillInstagram />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-800 text-3xl">
            <TbBrandLinkedinFilled />
          </a>
          <a href="https://wa.me/tuNumero" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-600 text-3xl">
            <FaWhatsapp />
          </a>
        </div>

        {/* Email */}
        <p className="text-gray-600 mb-4">
          📧 <a href="mailto:contacto@tuempresa.com" className="text-blue-500 hover:underline">contacto@tuempresa.com</a>
        </p>

        {/* Agendar Llamada */}
        <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          <SiCalendly className="mr-2" /> Agendar llamada gratuita
        </a>
      </div>

      {/* Lado Derecho: Formulario */}
      <form onSubmit={handleSubmit} className="lg:w-1/2 bg-white p-6 roundedForm shadow-md flex flex-col items-center text-center">
        <div className="flex flex-col md:flex-row gap-4 mb-4 w-full">
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full md:w-1/2 p-3 border border-gray-300 roundedForm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="company"
            placeholder="Tu Empresa"
            value={formData.company}
            onChange={handleChange}
            required
            className="w-full md:w-1/2 p-3 border border-gray-300 roundedForm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
        />

        <textarea
          name="message"
          placeholder="Contanos, qué necesitas?"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          className="w-full p-3 border border-gray-300 roundedForm focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>

        <button type="submit" className="contactButton mt-3">
          Enviar Mensaje
        </button>

        {status && <p className="text-green-600 text-center mt-3">{status}</p>}
      </form>
    </div>
  );
};
