
import About from "@/components/About";

const buttonLinks = [
  { id: 1, href: "#projects", desc: "Projects" },
  { id: 2, href: "#contact", desc: "Contact Me" }
]

export default function Hero() {
  return (
    <div className="min-h-screen w-full mx-auto flex items-center justify-center px-6 text-slate-400">

      <div className="flex  justify-between gap-20 max-w-285">

        <div className="w-full text-left items-start flex flex-col gap-10">

          <div className="flex flex-col gap-4">

            <h1 className="text-4xl md:text-5xl font-bold  text-slate-200 tracking-tight">
              Kanchan Sharma
            </h1>

            <p className="text-slate-100 text-lg md:text-xl tracking-tight">Full Stack Developer</p>

            <p className="text-lg md:text-xl mx-w-xs leading-normal ">
              Full Stack Developer specializing in React, Next.js, and TypeScript.
            </p>

          </div>

          <div className="flex gap-6 justify-center ">

            {buttonLinks.map((button) => (
              <a
                key={button.id}
                href={button.href} className="px-8 py-3 flex items-center justify-center rounded-lg bg-slate-800/50 hover:bg-slate-800 hover:shadow-[inset_0_2px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg hover:text-teal-600 group transition-all duration-300">
                <span className="group-hover:scale-105">{button.desc}</span>
              </a>
            ))}

          </div>
        </div>

        <div className="w-full">
          <About />
        </div>
      </div>

    </div >
  );
}





