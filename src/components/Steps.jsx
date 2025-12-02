import { motion } from "framer-motion";
import "../assets/styles/steps.css";

export const Steps = () => {
  const steps = [
    { id: 1, title: "Free Audit", description: "We review your situation at no cost.", link: "#contact" },
    { id: 2, title: "Case Evaluation", description: "We identify issues and propose suitable solutions." },
    { id: 3, title: "Project Discussion", description: "We define the details and objectives of the project." },
    { id: 4, title: "Work & Feedback", description: "We execute the project and refine the work based on your feedback." },
    { id: 5, title: "Delivery", description: "You receive the final result ready to use." },
    { id: 6, title: "Maintenance", description: "We provide support and post-delivery follow-up to ensure quality." },
  ];

  return (
    <section className="flex flex-col items-center stepsSection py-20" aria-labelledby="steps-title">
      <h2 id="steps-title" className="text-lg mb-5 text-center stepsTitle" style={{ color: '#fff' }}>
        Curious about how we <span className="text-pink-400">work?</span> Here's our process.
      </h2>
      <div className="relative flex flex-col items-center w-full max-w-3xl" role="list">
        <div className="absolute w-1 bg-pink-400 rounded-full h-full left-1/2 transform -translate-x-1/2" style={{ opacity: 0.6 }}></div>
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            className={`flex w-full mb-4 items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            role="listitem"
          >
            <div className="w-1/2 flex flex-col items-center p-4 steps">
              <h3 className="text-lg font-semibold mt-2 text-center stepsTitleSquare" style={{ color: '#fff' }}>{step.title}</h3>
              <p className="text-center" style={{ color: '#d1d1d1' }}>{step.description}</p>
              {step.link && (
                <a
                  href={step.link}
                  rel="noopener noreferrer"
                  className="link text-pink-400 hover:underline"
                  aria-label={`Schedule a free audit for ${step.title}`}
                  title={`Schedule a call for ${step.title}`}
                >
                  Let's talk!
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
