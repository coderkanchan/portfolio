
const contactLins = [
  { id: 1, href: "mailto:kanusharma881388@gmail.com", desc: "kanusharma881388@gmail.com" },
  { id: 2, href: "https://github.com/coderkanchan", desc: "GitHub" },
  { id: 3, href: "https://linkedin.com/in/your-profile", desc: "LinkedIn" }
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center px-6 "
    >
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Contact
        </h2>

        <p className="text-slate-300 mb-8">
          Feel free to reach out if you want to collaborate or have any
          opportunity for me.
        </p>

        <div className="flex flex-col gap-6">
          {contactLins.map((contact) => (
            <a
              key={contact.id}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-lg bg-slate-800/70 hover:bg-slate-800 hover:text-teal-500 hover:shadow-[inset_0_2px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg text-slate-200">
              {contact.desc}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
