import { motion } from "framer-motion";
import "../assets/styles/steps.css";

export const Steps = () => {
  const steps = [
    { id: 1, title: "Free Audit", description: "We analyze your processes and identify cost-saving opportunities at no cost.", link: "#contact" },
    { id: 2, title: "ROI Analysis", description: "We calculate potential savings and revenue increases from automation." },
    { id: 3, title: "Solution Design", description: "We design a system that maximizes efficiency and minimizes operational costs." },
    { id: 4, title: "Build & Optimize", description: "We build your solution and continuously optimize for maximum cost savings." },
    { id: 5, title: "Launch & Scale", description: "You get a system that immediately starts saving money and generating revenue." },
    { id: 6, title: "Ongoing Support", description: "We ensure your system keeps delivering value and improving your bottom line." },
  ];

  return (
    <section className="flex flex-col items-center stepsSection py-16" aria-labelledby="steps-title">
      <h2 id="steps-title" className="text-sm mb-4 text-center stepsTitle" style={{ color: '#fff' }}>
        How we help you <span className="text-pink-400">save money</span> and grow revenue
      </h2>
      <div className="relative flex flex-col items-center w-full max-w-3xl" role="list">
        <div className="absolute w-1 bg-pink-400 rounded-full h-full left-1/2 transform -translate-x-1/2" style={{ opacity: 0.6 }}></div>
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            className={`flex w-full mb-3 items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            role="listitem"
          >
            <div className="w-1/2 flex flex-col items-center p-3 steps">
              <h3 className="text-sm font-semibold mt-1 text-center stepsTitleSquare" style={{ color: '#fff' }}>{step.title}</h3>
              <p className="text-center text-sm step-description" style={{ color: '#d1d1d1' }}>{step.description}</p>
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
