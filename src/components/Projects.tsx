import { Github, ExternalLink, Lock } from "lucide-react";

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Real-Time Chat App",
      role: "Frontend Developer",
      description:
        "Built React components and integrated Redux for state management in a real-time chat platform.",
      tech: ["React", "Redux", "Tailwind CSS", "Socket.io"],
      live: "https://chatapp.example.com",
      github: "https://github.com/yourusername/chatapp",
      isRepoPrivate: false,
    },
    {
      id: 2,
      title: "E-commerce Dashboard",
      role: "React Developer",
      description:
        "Developed responsive admin dashboard UI with Tailwind CSS and connected APIs for product management.",
      tech: ["React", "Tailwind CSS", "Redux Toolkit"],
      live: "https://dashboard.example.com",
      github: "",
      isRepoPrivate: true,
      privateNote: "Repo is private; available on request.",
    },
    {
      id: 3,
      title: "Portfolio Website",
      role: "Full Stack Developer",
      description:
        "Personal portfolio showcasing projects, skills, and contact info built with Next.js and Tailwind CSS.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      live: "https://yourportfolio.com",
      github: "https://github.com/yourusername/portfolio",
      isRepoPrivate: false,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-2">{project.role}</p>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 items-center">
                  {project.isRepoPrivate ? (
                    <span className="flex items-center gap-2 text-slate-500 italic">
                      <Lock size={16} />
                      {project.privateNote || "Private Repo"}
                    </span>
                  ) : (
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-slate-600 hover:text-blue-500 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-slate-600 hover:text-cyan-500 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
