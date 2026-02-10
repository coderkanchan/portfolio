
const projects = [
  {
    title: "Live Chat Application",
    description:
      "Real-time chat app with authentication, authorization, private chats, and modern UI. Built like WhatsApp with Next.js backend.",
    tech: ["Next.js", "TypeScript", "Socket", "MongoDB", "Tailwind"],
    live: "https://nextjs-realtime-chat-murex-one.vercel.app",
    github: "https://github.com/coderkanchan/nextjs-realtime-chat",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-20 flex items-center justify-center"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Projects
        </h2>

        <div className="">
          {projects.map((project, index) => (
            <div
              key={index}
              className=" rounded-xl p-6 bg-slate-800/70 hover:bg-slate-800 hover:text-teal-500 hover:shadow-[inset_0_2px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg text-slate-200 transition"
            >
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-slate-400 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm bg-slate-500 text-gray-200 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  Live
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
