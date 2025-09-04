import React, { useState, useEffect } from 'react';
import "../assets/styles/team.css";
import ivo from "../assets/images/team/ivo.webp";
import juani from "../assets/images/team/juani.webp";
import nino from "../assets/images/team/nino.webp";

const teamMembers = [
  {
    name: "Ivan Levy",
    role: "CTO & Dev Ops Lead",
    image: ivo,
    description: "Líder técnico y arquitecto de soluciones digitales con experiencia en DevOps y desarrollo full-stack."
  },
  {
    name: "Nino Bizzotto",
    role: "Developer",
    image: nino,
    description: "Desarrollador full-stack especializado en crear soluciones robustas y escalables."
  },
  {
    name: "Juan Ignacio García Ríos",
    role: "CRO & Developer",
    image: juani,
    description: "Especialista en conversión y relaciones con clientes, combinando estrategia comercial con desarrollo técnico."
  }
];

export const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        nextSlide();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isTransitioning]);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const goToSlide = (index) => {
    if (!isTransitioning && index !== currentIndex) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setIsTransitioning(false);
      }, 300);
    }
  };

  return (
    <section className="w-full py-16 bg-[#FAFAFA]" id="team" style={{ scrollMarginTop: '80px' }}>
      <div className="container mx-auto px-4 md:px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-pink-50 text-pink-400 rounded-full text-xs font-medium mb-3">
            EQUIPO
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestro equipo
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Solo somos 3 amigos con ambición de llegar lejos.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Slide */}
                      <div className="relative overflow-hidden rounded-3xl shadow-xl bg-white">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {teamMembers.map((member, index) => (
                <div key={member.name} className="w-full flex-shrink-0">
                  <div className="flex flex-col md:flex-row items-center p-8 md:p-12">
                    {/* Image */}
                    <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                      <div className="relative">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover mx-auto shadow-lg"
                        />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-400/20 to-purple-500/20"></div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="md:w-1/2 text-center md:text-left">
                      <h3 className="text-3xl md:text-4xl font-normal text-gray-900 mb-3">
                        {member.name}
                      </h3>
                      <p className="text-lg text-pink-400 font-normal mb-4">
                        {member.role}
                      </p>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-800 p-2 transition-all duration-300 hover:scale-110"
              aria-label="Anterior"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-800 p-2 transition-all duration-300 hover:scale-110"
              aria-label="Siguiente"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Lines Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-8 h-1 transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-pink-500' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir al slide ${index + 1}`}
              />
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

