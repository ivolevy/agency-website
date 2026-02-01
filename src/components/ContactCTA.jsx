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

    // Immediate initial state
    updateVisibility();

    // Listen to multiple events for broad compatibility
    window.addEventListener('scroll', updateVisibility, { passive: true });
    window.addEventListener('wheel', updateVisibility, { passive: true });
    window.addEventListener('touchmove', updateVisibility, { passive: true });

    // Fallback in case it already opens with scroll
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
          aria-label="Hablemos"
          title="Hablemos"
        >
          <span>Hablemos</span>
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
