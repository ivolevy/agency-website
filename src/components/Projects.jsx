import { motion } from "framer-motion";
import "../assets/styles/projects.css";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Tengo un Plan",
      img: "/images/proyecto1.jpg",
      textColor: "text-yellow-400",
      bgColor: "bg-black",
      altText: "Imagen del proyecto Tengo un Plan",
    },
    {
      id: 2,
      title: "estudio versus.",
      img: "/images/proyecto2.jpg",
      textColor: "text-black",
      bgColor: "bg-[#F5F1E5]",
      altText: "Imagen del proyecto estudio versus.",
    },
    {
      id: 3,
      title: "Carlos Galán",
      img: "/images/proyecto3.jpg",
      textColor: "text-white",
      bgColor: "bg-gray-900",
      altText: "Imagen del proyecto Carlos Galán",
    },
  ];

  return (
    <section className="text-center py-20 projects h-auto flex flex-col justify-center" id="projects" aria-labelledby="projects-title">
      <h2 className="servicesTitle text-center mb-5">
        <span className="underline">Proyectos</span> recientes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            className={`projectClouds overflow-hidden shadow-lg p-4 ${project.bgColor}`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            aria-labelledby={`project-title-${project.id}`}
          >
            <div
              className="relative flex items-center justify-center h-52 bg-cover bg-center rounded-lg"
              style={{ backgroundImage: `url(${project.img})` }}
            >
              <h3 id={`project-title-${project.id}`} className={`text-2xl font-bold ${project.textColor} bg-opacity-70 p-2 rounded-lg`}>
                {project.title}
              </h3>
            </div>
            <img
              src={project.img}
              alt={project.altText}
              className="hidden"  // Esto es para mejorar la accesibilidad sin que la imagen se muestre dos veces
              loading="lazy"
            />
          </motion.article>
        ))}
      </div>
    </section>
  );
};
