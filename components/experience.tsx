import { ExternalLink } from "lucide-react";

const experiences = [
  {
    period: "2025 — PRESENTE",
    title: "Desarrollador Froentend",
    company: "Codedrilos",
    description:
      "Construyo y mantengo componentes críticos utilizados para construir el frontend de la empresa, a través de todo el producto. Trabajo estrechamente con equipos multifuncionales, incluyendo desarrolladores, diseñadores y gerentes de producto, para implementar y abogar por las mejores prácticas en accesibilidad web.",
    technologies: ["JavaScript", "TypeScript", "React", "Next.js"],
    link: "#",
  },
  {
    period: "2022 — 2024",
    title: "Desarrollador Frontend",
    company: "Empresa Anterior",
    description:
      "Desarrollé y mantuve el código para experiencias web internas y orientadas al cliente principalmente usando React, TypeScript y SCSS. Dejé un impacto inmediato en el equipo al integrar mejoras de accesibilidad.",
    technologies: ["React", "TypeScript", "SCSS", "Jest"],
    link: "#",
  },
  {
    period: "2020 — 2022",
    title: "Desarrollador Junior",
    company: "Primera Empresa",
    description:
      "Trabajé con un equipo pequeño de desarrolladores para construir aplicaciones web modernas y responsivas para una variedad de clientes en diferentes industrias.",
    technologies: ["HTML", "CSS", "JavaScript", "WordPress"],
    link: "#",
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Experiencia
        </h2>
      </div>
      <div>
        <ol className="group/list">
          {experiences.map((experience, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-muted/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2">
                  {experience.period}
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-foreground">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary group/link text-base"
                        href={experience.link}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${experience.title} at ${experience.company} (opens in a new tab)`}
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          {experience.title} ·{" "}
                          <span className="inline-block">
                            {experience.company}
                            <ExternalLink className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                          </span>
                        </span>
                      </a>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-muted-foreground">
                    {experience.description}
                  </p>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    {experience.technologies.map((tech, techIndex) => (
                      <li key={techIndex} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium leading-5 text-primary">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
