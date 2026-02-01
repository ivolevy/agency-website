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
            IA potenciando todo el proceso
          </motion.h1>

          <motion.div
            className="steps-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>
              Usamos inteligencia artificial en cada etapa para entregarte soluciones más inteligentes, rápidas y eficientes.
              Desde generación de código hasta análisis predictivo, la IA amplifica nuestras capacidades y acelera tu llegada al mercado.
            </p>
            <p>
              Nuestro enfoque con IA significa que analizamos requerimientos complejos en segundos, encontramos oportunidades de ganancia automáticamente
              y construimos sistemas que mejoran con el tiempo. No es solo software, es desarrollo inteligente que evoluciona con tu negocio.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
