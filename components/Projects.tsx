
// const projects = [
//   {
//     title: "Live Chat Application",
//     description:
//       "Real-time chat app with authentication, authorization, private chats, and modern UI. Built like WhatsApp with Next.js backend.",
//     tech: ["Next.js", "TypeScript", "Socket", "MongoDB", "Tailwind"],
//     live: "https://nextjs-realtime-chat-murex-one.vercel.app",
//     github: "https://github.com/coderkanchan/nextjs-realtime-chat",
//   },
//   {
//     title: "Full-Stack TypeScript E-Commerce",
//     description:
//       "A scalable MERN application with secure JWT authentication, dynamic product catalog, and an integrated Admin Dashboard for real-time inventory and order management.",
//     tech: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Cloudinary", "Tailwind"],
//     live: "https://fullstack-ecommerce-app-alpha.vercel.app",
//     github: "https://github.com/coderkanchan/fullstack-ecommerce-app",
//   },
// ];

// export default function Projects() {
//   return (
//     <section

//       id="projects"
//       className="min-h-screen px-6 py-20 flex items-center justify-center"
//     >
//       <div className="max-w-5xl mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-12">
//           Projects
//         </h2>

//         <div className="">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className=" rounded-xl p-6 bg-slate-800/70 hover:bg-slate-800 hover:text-teal-500 hover:shadow-[inset_0_2px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg text-slate-200 transition"
//             >
//               <h3 className="text-xl font-semibold mb-2">
//                 {project.title}
//               </h3>

//               <p className="text-slate-400 mb-4">
//                 {project.description}
//               </p>

//               <div className="flex flex-wrap gap-2 mb-4">
//                 {project.tech.map((tech, i) => (
//                   <span
//                     key={i}
//                     className="text-sm bg-slate-500 text-gray-200 px-2 py-1 rounded"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>

//               <div className="flex gap-4">
//                 <a
//                   href={project.live}
//                   target="_blank"
//                   className="text-blue-600 hover:underline"
//                 >
//                   Live
//                 </a>
//                 <a
//                   href={project.github}
//                   target="_blank"
//                   className="text-blue-600 hover:underline"
//                 >
//                   GitHub
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



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