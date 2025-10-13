import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Aplicación E-commerce",
    description:
      "Una aplicación de comercio electrónico completa construida con Next.js, TypeScript y Stripe. Incluye autenticación de usuarios, carrito de compras, procesamiento de pagos y panel de administración.",
    image: "/modern-ecommerce-app.png",
    technologies: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "Dashboard de Analytics",
    description:
      "Un dashboard interactivo para visualizar datos de analytics con gráficos en tiempo real, filtros avanzados y exportación de reportes. Construido con React y D3.js.",
    image: "/analytics-dashboard.png",
    technologies: ["React", "D3.js", "Node.js", "MongoDB", "Socket.io"],
    github: "#",
    demo: "#",
  },
  {
    title: "App de Gestión de Tareas",
    description:
      "Una aplicación de productividad con funciones de arrastrar y soltar, colaboración en tiempo real y notificaciones push. Incluye modo offline y sincronización automática.",
    image: "/task-management-app.png",
    technologies: ["React Native", "Firebase", "Redux", "PWA"],
    github: "#",
    demo: "#",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Proyectos
        </h2>
      </div>
      <div>
        <ul className="group/list">
          {projects.map((project, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-muted/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary group/link text-base"
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${project.title} (opens in a new tab)`}
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        {project.title}
                        <ExternalLink className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                      </span>
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="GitHub repository"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Live demo"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <li key={techIndex} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium leading-5 text-primary">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <Image
                  alt={project.title}
                  loading="lazy"
                  width={200}
                  height={48}
                  decoding="async"
                  className="rounded border-2 border-muted transition group-hover:border-muted-foreground/50 sm:order-1 sm:col-span-2 sm:translate-y-1"
                  src={project.image || "/placeholder.svg"}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
