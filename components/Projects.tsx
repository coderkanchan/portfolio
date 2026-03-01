const projects = [
  {
    title: "Full-Stack TypeScript E-Commerce",
    description:
      "A high-performance MERN platform featuring secure JWT Auth, Admin Dashboard for product/order management, and Cloudinary image integration.",
    tech: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Redux", "Tailwind"],
    live: "https://fullstack-ecommerce-app-alpha.vercel.app",
    github: "https://github.com/coderkanchan/fullstack-ecommerce-app",
  },
  {
    title: "Live Chat Application",
    description:
      "Real-time communication app with private messaging and authentication. Built with high-concurrency support using Socket.io.",
    tech: ["Next.js", "TypeScript", "Socket", "MongoDB", "Tailwind"],
    live: "https://nextjs-realtime-chat-murex-one.vercel.app",
    github: "https://github.com/coderkanchan/nextjs-realtime-chat",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen px-6 py-20 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl p-8 bg-slate-900/50 border border-slate-800 hover:border-teal-500/50 transition-all duration-300 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-teal-400 transition">
                {project.title}
              </h3>

              <p className="text-slate-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium bg-teal-500/10 text-teal-400 border border-teal-500/20 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-6 mt-auto">
                <a
                  href={project.live}
                  target="_blank"
                  className="flex items-center text-sm font-semibold text-white hover:text-teal-400 transition"
                >
                  Live Demo ↗
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  className="flex items-center text-sm font-semibold text-white hover:text-teal-400 transition"
                >
                  Source Code ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}