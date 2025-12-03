import { motion } from "framer-motion";
import { LavaLampBackground } from "./LavaLampBackground";
import "../assets/styles/steps.css";

export const Steps = () => {
  return (
    <section className="stepsSection" aria-labelledby="ai-powered-title">
      <div className="lava-lamp-container">
        <LavaLampBackground />
        <div className="steps-content">
          <motion.h1
            id="ai-powered-title"
            className="steps-main-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Powered by AI throughout the process
          </motion.h1>
          
          <motion.div
            className="steps-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>
              We leverage artificial intelligence at every stage of development to deliver smarter, faster, and more efficient solutions. 
              From intelligent code generation and automated testing to predictive analytics and continuous optimization, AI amplifies our capabilities 
              and accelerates your time to market.
            </p>
            <p>
              Our AI-powered approach means we can analyze complex requirements faster, identify optimization opportunities automatically, 
              and build solutions that adapt and improve over time. This isn't just automation—it's intelligent development that learns 
              and evolves with your business needs.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
