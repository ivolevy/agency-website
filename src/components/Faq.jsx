import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "../assets/styles/faq.css";

const faqs = [
  {
    question: "How quickly will I see ROI on my investment?",
    answer: "Most clients see positive ROI within the first quarter. Our AI-powered development process accelerates delivery while ensuring quality. You start saving money and generating revenue from day one, with measurable financial impact visible within weeks."
  },
  {
    question: "How much can I save on operational costs?",
    answer: "Our custom software solutions automate manual processes, reducing operational costs by up to 60%. By eliminating repetitive tasks, reducing errors, and streamlining workflows, you'll cut overhead significantly while improving accuracy and efficiency across your operations."
  },
  {
    question: "How will this increase my revenue?",
    answer: "Custom software streamlines sales processes, improves customer experience, and unlocks new revenue streams. By automating workflows and reducing bottlenecks, you can handle more customers with the same resources, directly boosting your bottom line. Our solutions also identify opportunities for growth through data-driven insights."
  },
  {
    question: "What's the cost of not automating?",
    answer: "Manual processes cost time and money every single day. Every hour spent on repetitive tasks is revenue lost and opportunity missed. Our systems eliminate these inefficiencies, allowing your team to focus on growth and strategy while automation handles routine work—saving thousands monthly and preventing costly errors."
  },
  {
    question: "Do you offer ongoing support to maximize ROI?",
    answer: "Yes, we provide continuous support to ensure your system keeps delivering value. We monitor performance, optimize processes using AI-powered insights, and add features that further reduce costs and increase revenue. Your investment keeps paying off year after year with ongoing improvements."
  },
  {
    question: "How does AI enhance your development process?",
    answer: "We leverage AI throughout development to deliver smarter, faster solutions. AI helps us analyze requirements more efficiently, generate optimized code, identify potential issues early, and continuously improve your system's performance. This means better solutions delivered faster, with ongoing optimization that adapts to your business needs."
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
