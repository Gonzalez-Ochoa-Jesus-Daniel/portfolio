import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section
      id="contact"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Contacto
        </h2>
      </div>
      <div>
        <p className="mb-6 text-muted-foreground leading-relaxed">
          ¿Tienes un proyecto en mente o simplemente quieres saludar? Me
          encantaría escuchar de ti. Siempre estoy abierto a discutir nuevas
          oportunidades y colaboraciones interesantes.
        </p>

        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-3 text-muted-foreground">
            <Mail className="h-5 w-5 text-primary" />
            <a
              href="mailto:tu@email.com"
              className="hover:text-primary transition-colors"
            >
              tu@email.com
            </a>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <Phone className="h-5 w-5 text-primary" />
            <a
              href="tel:+1234567890"
              className="hover:text-primary transition-colors"
            >
              +1 (234) 567-890
            </a>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <MapPin className="h-5 w-5 text-primary" />
            <span>Tu Ciudad, País</span>
          </div>
        </div>

        <Button
          asChild
          className="bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <a href="mailto:tu@email.com">Enviar mensaje</a>
        </Button>
      </div>
    </section>
  );
}
