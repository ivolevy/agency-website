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
              Usamos inteligencia artificial en cada etapa para brindarte soluciones más inteligentes, listas para usar y eficientes.
              Desde generación de código hasta análisis predictivo, la IA potencia nuestras herramientas y te permite operar desde el primer día.
            </p>
            <p>
              Nuestro enfoque con IA significa que accedes a sistemas complejos en segundos, encontrás oportunidades de ganancia automáticamente
              y utilizas herramientas que mejoran con el tiempo. No es solo software, es inteligencia aplicada lista para tu negocio.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
