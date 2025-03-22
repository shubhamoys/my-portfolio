import About from "@/components/sections/about/about";
import Contact from "@/components/sections/contact/contact";
import Experience from "@/components/sections/experience/experience";
import Hero from "@/components/sections/hero/hero";
import TechStack from "@/components/sections/tech-stack/tech-stack";

export default function Home() {
  return (
    <>
      <section id="hero">
        <Hero></Hero>
      </section>

      <section id="about">
        <About></About>
      </section>

      <section id="tech-stack">
        <TechStack></TechStack>
      </section>

      <section id="experience">
        <Experience></Experience>
      </section>

      <section id="contact">
        <Contact></Contact>
      </section>
    </>
  );
}
