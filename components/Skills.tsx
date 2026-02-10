
const skills = [
  {
    title: "Frontend",
    id: 1,
    element: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "TypeScript", "React", "Next.js"]
  },
  {
    title: "Backend",
    id: 2,
    element: ["Next.js API Routes", "Authentication & Authorization", "JWT", "Form Validation", "MongoDB", "Live Chat (Socket basics)"]
  }
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-6 "
    >
      <div className="max-w-5xl mx-auto w-full ">
        <h2 className="text-4xl font-bold mb-10 text-center text-slate-200 leading-loose">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-10 mx-auto ">

          {skills.map((skill) => (
            <div key={skill.id} className="p-6 rounded-xl  bg-slate-800/50 hover:bg-slate-800 hover:shadow-[inset_0_2px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg">

              <h3 className="text-2xl font-semibold mb-4 text-slate-200 leading-loose">
                {skill.title}
              </h3>
              <ul className=" space-y-2 text-slate-400">
                {skill.element.map((element, i) => (
                  <li key={i}>
                    {element}
                  </li>
                ))}
              </ul>
            </div>
          ))
          }
        </div>
      </div>
    </section>
  );
}
