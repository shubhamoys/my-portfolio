import About from "@/components/sections/about/about";
import Hero from "@/components/sections/hero/hero";

export default function Home() {
  return (
    <>
      <section id="hero">
        <Hero></Hero>
      </section>

      <section id="about">
        <About></About>
      </section>
    </>
  );
}
