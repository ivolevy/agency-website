import { useState } from "react";
import emailjs from "emailjs-com";
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
    <div className="flex flex-col lg:flex-row mx-auto" id="contact">
      {/* Lado Izquierdo: Información */}
      <div className="lg:w-1/2 pr-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Contáctanos</h2>
        <p className="text-gray-600 mb-2">
          Cuéntanos qué necesitas y te responderemos lo antes posible.
        </p>
        <p className="text-gray-600">También puedes agendar una reunión con nosotros.</p>
      </div>

      {/* Lado Derecho: Formulario */}
      <form onSubmit={handleSubmit} className="lg:w-1/2 bg-white p-6 roundedForm shadow-md">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <input
            type="text"
            name="name"
            placeholder="Tu Negocio"
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
          placeholder="Cuéntanos qué necesitas"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          className="w-full p-3 border border-gray-300 roundedForm focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>

        <button
          type="submit"
          className="contactButton mt-3"
        >
          Enviar Mensaje
        </button>

        {status && <p className="text-green-600 text-center mt-3">{status}</p>}
      </form>
    </div>
  );
};
