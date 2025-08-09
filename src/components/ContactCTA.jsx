import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { ContactPopup } from './ContactPopup';
import '../assets/styles/contact-cta.css';

export const ContactCTA = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      setIsVisible(scrollPosition > 0);
    };

    // Estado inicial inmediato
    updateVisibility();

    // Escuchar múltiples eventos para compatibilidad amplia
    window.addEventListener('scroll', updateVisibility, { passive: true });
    window.addEventListener('wheel', updateVisibility, { passive: true });
    window.addEventListener('touchmove', updateVisibility, { passive: true });

    // Fallback por si ya se abre con scroll
    const timer = setTimeout(updateVisibility, 200);

    return () => {
      window.removeEventListener('scroll', updateVisibility);
      window.removeEventListener('wheel', updateVisibility);
      window.removeEventListener('touchmove', updateVisibility);
      clearTimeout(timer);
    };
  }, []);

  const handleClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <div className={`contact-cta ${isVisible ? 'visible' : ''}`}>
        <button
          className="contact-cta-button"
          onClick={handleClick}
          aria-label="Cotizar proyecto"
          title="Cotiza tu proyecto"
        >
          <span>Cotiza tu proyecto</span>
          <ArrowRight size={16} />
        </button>
      </div>

      <ContactPopup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
      />
    </>
  );
};
