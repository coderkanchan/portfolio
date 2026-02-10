"use client";

import { useEffect, useState } from "react";

export default function GlobalCursorGlow() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setActive(true);

      document.documentElement.style.setProperty("--x", `${(e.clientX / window.innerWidth) * 100}%`);
      document.documentElement.style.setProperty("--y",`${(e.clientY / window.innerHeight) * 100}%`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () =>
      window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className={`pointer-events-none fixed inset-0 -z-10 transition-opacity duration-500
        ${active ? "opacity-100" : "opacity-0"}
        bg-[radial-gradient(800px_circle_at_var(--x,50%)_var(--y,50%),rgba(100,50,230,0.12),transparent_55%)]
      `}
    />
  );
}









