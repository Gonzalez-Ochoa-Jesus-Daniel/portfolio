import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { SocialLinks } from "@/components/social-links";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="lg:flex">
        {/* Left sidebar - Navigation */}
        <div className="lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:w-1/2 lg:overflow-y-auto">
          <div className="px-6 py-12 lg:px-12 lg:py-24">
            <Hero />
            <Navigation />
            <SocialLinks />
          </div>
        </div>

        {/* Right content area */}
        <div className="lg:ml-[50%] lg:w-1/2">
          <div className="px-6 py-12 lg:px-12 lg:py-24">
            <About />
            <Experience />
            <Projects />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}
