export function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Acerca de
        </h2>
      </div>
      <div>
        <p className="mb-4 text-muted-foreground leading-relaxed">
          Soy un desarrollador apasionado por crear interfaces de usuario
          accesibles y pixel-perfect que combinan un diseño reflexivo con una
          ingeniería robusta. Mi trabajo favorito se encuentra en la
          intersección del diseño y el desarrollo, creando experiencias que no
          solo se ven geniales sino que están meticulosamente construidas para
          el rendimiento y la usabilidad.
        </p>
        <p className="mb-4 text-muted-foreground leading-relaxed">
          Actualmente, soy Desarrollador Full Stack especializado en{" "}
          <span className="font-medium text-foreground">React</span>,{" "}
          <span className="font-medium text-foreground">Next.js</span> y{" "}
          <span className="font-medium text-foreground">Node.js</span>.
          Contribuyo a la creación y mantenimiento de aplicaciones web modernas,
          asegurando que nuestras plataformas cumplan con los estándares de
          accesibilidad web y las mejores prácticas para ofrecer una experiencia
          de usuario inclusiva.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          <span className="font-medium text-foreground"></span>
          <span className="font-medium text-foreground"></span>
          <span className="font-medium text-foreground"></span>
          <span className="font-medium text-foreground"></span>
          <span className="font-medium text-foreground"></span> Hola sigo
          pensando que poner aqui, pero bueno ya lo pondre luego.
        </p>
      </div>
    </section>
  );
}
