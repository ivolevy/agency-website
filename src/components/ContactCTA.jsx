import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { ContactPopup } from './ContactPopup';
import '../assets/styles/contact-cta.css';

export const ContactCTA = () => {
  console.log('ContactCTA component mounted');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Verificar estado inicial después de un pequeño delay
    const timer = setTimeout(handleScroll, 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const handleClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

    console.log('ContactCTA rendering, isVisible:', isVisible);
    return (
    <>
      <div className="contact-cta visible">
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
