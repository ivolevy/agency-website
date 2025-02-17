import "../assets/styles/projects.css";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Tengo un Plan",
      img: "/images/proyecto1.jpg",
      textColor: "text-yellow-400",
      bgColor: "bg-black",
    },
    {
      id: 2,
      title: "estudio versus.",
      img: "/images/proyecto2.jpg",
      textColor: "text-black",
      bgColor: "bg-[#F5F1E5]",
    },
    {
      id: 3,
      title: "Carlos Galán",
      img: "/images/proyecto3.jpg",
      textColor: "text-white",
      bgColor: "bg-gray-900",
    },
  ];

  return (
    <section className="text-center py-16 projects min-h-screen flex flex-col justify-center">
      <h2 className="text-4xl font-bold">
        PROYECTOS <span className="italic font-light">DESTACADOS</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 px-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`projectClouds overflow-hidden shadow-lg p-4 ${project.bgColor}`}
          >
            <div
              className="relative flex items-center justify-center h-52 bg-cover bg-center rounded-lg"
              style={{ backgroundImage: `url(${project.img})` }}
            >
              <h3
                className={`text-2xl font-bold ${project.textColor} bg-opacity-70 p-2 rounded-lg`}
              >
                {project.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
