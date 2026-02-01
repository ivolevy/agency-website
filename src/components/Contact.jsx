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
      <h1 className="text-center mb-5" style={{ color: '#fff', fontFamily: '"Instrument Serif", serif', fontWeight: '700' }}>
        Contacto
      </h1>
      <div className="flex flex-col items-center lg:flex-row mx-auto text-center contactContainer contact-card">
        {/* Left Side: Information + Social Media */}
        <div className="lg:w-1/2 flex flex-col items-start justify-center text-left p-6 responsiveData">
          <h3 className="text-white contactSubtitle" style={{ fontFamily: '"Inter", sans-serif', fontWeight: '400', fontSize: '1.2rem' }}>Te quedaste con dudas?</h3>
          <p className="mb-4 contactText" style={{ fontFamily: '"Inter", sans-serif', fontWeight: '300', fontSize: '0.9rem', color: '#d1d1d1' }}>Hablemos de cómo vamos a llenar tus bolsillos.</p>

          {/* Redes Sociales */}
          <div className="flex items-center space-x-4 mb-4">
            <a
              href="https://www.instagram.com/dotasolutions"
              target="_blank" rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-600 text-3xl"
              aria-label="Instagram" title="Instagram"
            >
              <AiFillInstagram className="contactIcon" />
            </a>
            <a
              href="https://www.linkedin.com/company/dota-solutions/"
              target="_blank" rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-800 text-3xl"
              aria-label="Linkedin" title="Linkedin"
            >
              <TbBrandLinkedinFilled className="contactIcon" />
            </a>
          </div>

          {/* Email */}
          <p className="mb-4" style={{ fontFamily: '"Inter", sans-serif', fontWeight: '300', fontSize: '0.95rem', color: '#d1d1d1' }}>
            <a href="mailto:solutionsdota@gmail.com" className="contactEmail" style={{ color: '#fff', textDecoration: 'none' }}>solutionsdota@gmail.com</a>
          </p>

          {/* WhatsApp Link */}
          <p className="mb-4" style={{ fontFamily: '"Inter", sans-serif', fontWeight: '300', fontSize: '0.95rem', color: '#d1d1d1' }}>
            <a
              href="https://wa.me/1138240929?text=Hola!%20Me%20interesa%20saber%20c%C3%B3mo%20sus%20soluciones%20de%20software%20pueden%20ayudarme%20a%20reducir%20costos%20y%20aumentar%20ganancias."
              target="_blank"
              rel="noopener noreferrer"
              className="contactEmail"
              style={{
                color: '#25D366',
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
                transition: 'all 0.3s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#4ade80';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#25D366';
              }}
            >
              <FaWhatsapp size={18} />
              <span>Chatea con nosotros en WhatsApp</span>
            </a>
          </p>

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
