import About from "@/components/sections/about/about";
import Contact from "@/components/sections/contact/contact";
import Experience from "@/components/sections/experience/experience";
import Hero from "@/components/sections/hero/hero";
import TechStack from "@/components/sections/tech-stack/tech-stack";
import Projects from "@/components/sections/projects/projects";

export default function Home() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="tech-stack">
        <TechStack />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
