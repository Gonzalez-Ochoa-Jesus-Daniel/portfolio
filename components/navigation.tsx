"use client";

import { useState, useEffect } from "react";

const sections = [
  { id: "about", label: "ACERCA DE" },
  { id: "experience", label: "EXPERIENCIA" },
  { id: "projects", label: "PROYECTOS" },
  { id: "contact", label: "CONTACTO" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {sections.map(({ id, label }) => (
          <li key={id}>
            <button
              onClick={() => scrollToSection(id)}
              className={`group flex items-center py-3 transition-all hover:text-foreground focus-visible:text-foreground ${
                activeSection === id
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              <span
                className={`mr-4 h-px transition-all group-hover:w-16 group-hover:bg-foreground group-focus-visible:w-16 group-focus-visible:bg-foreground motion-reduce:transition-none ${
                  activeSection === id
                    ? "w-16 bg-foreground"
                    : "w-8 bg-muted-foreground"
                }`}
              ></span>
              <span className="text-xs font-bold uppercase tracking-widest">
                {label}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
