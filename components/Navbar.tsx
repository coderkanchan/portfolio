const navlinks = [
  { id: 1, href: "#skills", element: "Skills" },
  { id: 2, href: "#projects", element: "Projects" },
  { id: 3, href: "#contact", element: "Contact" }
]

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-2xl z-50">

      <nav className="max-w-285 mx-auto flex justify-between items-center  pt-8">

        <h1 className="font-bold text-xl">Kanchan</h1>

        <div className="flex gap-15">
          {navlinks.map((link) => (
            <ul key={link.id} className="flex text-lg">
              <li>
                <a href={link.href} className="hover:text-blue-600 hover:underline">
                  {link.element}
                </a>
              </li>
            </ul>
          ))}
        </div>
      </nav>

    </header>
  );
}
