import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "../assets/styles/faq.css";

const faqs = [
  {
    question: "How quickly will I see ROI on my investment?",
    answer: "Most clients see positive ROI within the first quarter. Our custom websites are ready in 1 week, while ERP systems are delivered in 2-3 weeks with incremental releases. You start saving money and generating revenue from day one."
  },
  {
    question: "How much can I save on operational costs?",
    answer: "Our systems automate manual processes, reducing labor costs by up to 60%. The admin panel includes automated inventory management, sales reporting, payment processing, and analytics—eliminating hours of manual work daily and cutting overhead significantly."
  },
  {
    question: "How will this increase my revenue?",
    answer: "Custom systems streamline sales processes, improve customer experience, and unlock new revenue streams. By automating workflows and reducing errors, you can handle more customers with the same resources, directly boosting your bottom line."
  },
  {
    question: "What's the cost of not automating?",
    answer: "Manual processes cost time and money. Every hour spent on repetitive tasks is revenue lost. Our systems eliminate these inefficiencies, allowing your team to focus on growth while automation handles the rest—saving thousands monthly."
  },
  {
    question: "Do you offer ongoing support to maximize ROI?",
    answer: "Yes, we provide 24/7 support to ensure your system continuously delivers value. We monitor performance, optimize processes, and add features that further reduce costs and increase revenue. Your investment keeps paying off year after year."
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
