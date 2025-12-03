import { motion } from "framer-motion";
import { AiFillInstagram } from "react-icons/ai";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import "../assets/styles/team.css";
import ivo from "../assets/images/team/ivo.webp";
import juani from "../assets/images/team/juani.webp";
import nino from "../assets/images/team/nino.webp";

const teamMembers = [
  {
    name: "Ivan Levy",
    role: "CTO & Dev Ops Lead",
    image: ivo,
    description: "Líder técnico y arquitecto de soluciones digitales con experiencia en DevOps y desarrollo full-stack.",
    linkedin: "https://www.linkedin.com/in/ivan-levy/",
    instagram: "https://www.instagram.com/dotasolutions"
  },
  {
    name: "Nino Bizzotto",
    role: "Developer",
    image: nino,
    description: "Desarrollador full-stack especializado en crear soluciones robustas y escalables.",
    linkedin: "https://www.linkedin.com/company/dota-solutions/",
    instagram: "https://www.instagram.com/dotasolutions"
  },
  {
    name: "Juan Ignacio García Ríos",
    role: "CRO & Developer",
    image: juani,
    description: "Especialista en conversión y relaciones con clientes, combinando estrategia comercial con desarrollo técnico.",
    linkedin: "https://www.linkedin.com/company/dota-solutions/",
    instagram: "https://www.instagram.com/dotasolutions"
  }
];

export const Team = () => {
  return (
    <section className="team-section" id="team" style={{ scrollMarginTop: '80px' }}>
      <div className="container mx-auto px-4 md:px-4 max-w-6xl">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="inline-block px-3 py-1 bg-pink-400/20 text-pink-400 rounded-full text-xs font-medium mb-3"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            OUR TEAM
          </motion.span>
          <motion.h2 
            className="team-title text-center mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="underline">Meet</span> the team
          </motion.h2>
          <motion.p 
            className="max-w-3xl mx-auto text-sm team-subtitle"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Three friends with ambition to go far. We combine technical expertise with business vision to deliver exceptional results.
          </motion.p>
        </motion.div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="team-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Image Container */}
              <div className="team-image-container">
                <div className="team-image-wrapper">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="team-image"
                  />
                  <div className="team-image-gradient"></div>
                </div>
              </div>

              {/* Content */}
              <div className="team-content">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-description">{member.description}</p>

                {/* Social Links */}
                <div className="team-social">
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="team-social-link"
                    aria-label="LinkedIn"
                  >
                    <TbBrandLinkedinFilled />
                  </a>
                  <a 
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="team-social-link"
                    aria-label="Instagram"
                  >
                    <AiFillInstagram />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
