import { useState } from "react";
import emailjs from "emailjs-com";
import { AiFillInstagram } from "react-icons/ai";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";
import "../assets/styles/contact.css";
import "../assets/styles/contact-animations.css";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    const templateParams = {
      name: formData.name,
      company: formData.company || null,
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
          setIsSubmitting(false);
          setShowSuccess(true);
          setFormData({ name: "", company: "", email: "", message: "" });
          setTimeout(() => {
            setShowSuccess(false);
          }, 3000);
        },
        (error) => {
          setIsSubmitting(false);
          setStatus("Error enviando mensaje, intenta de nuevo.");
          console.error("Error sending:", error);
        }
      );
  };

  return (
    <section className="contact-section" id="contact" style={{ scrollMarginTop: '200px' }}>
      <h1 className="text-center mb-5 sectionTitle">
        Contacto
      </h1>
      <div className="flex flex-col items-center lg:flex-row mx-auto text-center contactContainer contact-card">
        {/* Left Side: Information + Social Media */}
        <div className="lg:w-1/2 flex flex-col items-start justify-center text-left p-6 responsiveData">
          <h3 className="contactSubtitle">Te quedaste con dudas?</h3>
          <p className="contactText">Hablemos de cómo vamos a llenar tus bolsillos.</p>

          <div className="contact-info-list">
            {/* Email Card */}
            <a href="mailto:solutionsdota@gmail.com" className="contact-info-item">
              <span style={{ color: '#ea9c9c', fontSize: '1.2rem' }}>@</span>
              <span>solutionsdota@gmail.com</span>
            </a>

            {/* WhatsApp Card */}
            <a
              href="https://wa.me/1138240929?text=Hola!%20Me%20interesa%20saber%20c%C3%B3mo%20sus%20soluciones%20de%20software%20pueden%20ayudarme%20a%20reducir%20costos%20y%20aumentar%20ganancias."
              target="_blank"
              rel="noopener noreferrer"
              className="contact-info-item"
            >
              <FaWhatsapp style={{ color: '#25D366' }} size={20} />
              <span>Chatea con nosotros</span>
            </a>
          </div>

          {/* Redes Sociales */}
          <div className="social-links">
            <a
              href="https://www.instagram.com/dotasolutions"
              target="_blank" rel="noopener noreferrer"
              className="social-link"
              aria-label="Instagram" title="Instagram"
            >
              <AiFillInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/dota-solutions/"
              target="_blank" rel="noopener noreferrer"
              className="social-link"
              aria-label="Linkedin" title="Linkedin"
            >
              <TbBrandLinkedinFilled />
            </a>
          </div>
        </div>

        {/* Right Side: Form */}
        <form onSubmit={handleSubmit} className="lg:w-1/2 p-6 roundedForm responsiveForm shadow-md flex flex-col items-center text-center contact-form-card">
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
              placeholder="Tu empresa (opcional)"
              value={formData.company}
              onChange={handleChange}
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
            placeholder="Contanos sobre tu negocio"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full p-3 border border-gray-300 roundedForm focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Mensaje"
          ></textarea>

          <button
            type="submit"
            className={`contactButton mt-3 ${isSubmitting ? 'submitting' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="loader-container">
                <div className="loader"></div>
              </div>
            ) : (
              'Enviar Mensaje'
            )}
          </button>

          {showSuccess && (
            <div className="success-notification">
              <div className="success-icon">✓</div>
              <p>Tu mensaje se envió con éxito!</p>
            </div>
          )}

          {status && <p className="error-message">{status}</p>}
        </form>
      </div>
    </section>
  );
};
