import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "../assets/styles/faq.css";

const faqs = [
  {
    question: "How long does it take to develop custom websites and systems?",
    answer: "Our custom websites are ready in 1 week, while custom ERP systems are delivered in 2-3 weeks. We always work with incremental deliveries so you can start using the main features quickly."
  },
  {
    question: "What does the backoffice panel of the systems include?",
    answer: "Our admin panel includes complete product management (add, edit, delete), customer and order management, inventory control, sales reports, payment management, shipping configuration, and metrics analysis. Everything is designed to be intuitive and easy to use, with no technical knowledge required."
  },
  {
    question: "What advantages does a custom system have over a generic one?",
    answer: "A custom system adapts exactly to your processes and specific needs. This means greater efficiency, less time wasted on manual tasks, better integration with your existing systems, and a user experience optimized for your team. Plus, you can add unique features that give you a competitive advantage."
  },
  {
    question: "How do you guarantee data security in the systems?",
    answer: "We implement multiple layers of security: data encryption, two-factor authentication, automatic backups, and compliance with international security standards. Additionally, we perform regular audits and security updates to keep your system protected."
  },
  {
    question: "Do you offer technical support after delivery?",
    answer: "Yes, we offer 24/7 technical support for all our systems. This includes maintenance, updates, troubleshooting, and assistance for new features. Our team is always available to ensure your system works perfectly."
  }
];

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col justify-center items-center h-auto p-4 faqsSection">
      <h2 className="text-2xl font-bold text-center mb-4 text-white">Frequently Asked Questions</h2>
      <div className="w-full max-w-3xl shadow-lg p-6 faqs">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b last:border-none">
            <button
              className="flex justify-between items-center w-full p-4 text-left text-white font-medium transition-all faqCard"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              {faq.question}
              <span
                className={`transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              >
                {openIndex === index ? (
                  <FaMinus className="text-gray-400" />
                ) : (
                  <FaPlus className="text-gray-400" />
                )}
              </span>
            </button>
            <div
              id={`faq-answer-${index}`}
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {openIndex === index && (
                <div className="p-4 text-gray-300">{faq.answer}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
