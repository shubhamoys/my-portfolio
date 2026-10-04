import { Contact } from "@/components/contact/contact";
import { Hero } from "@/components/hero/hero";
import { Marquee } from "@/components/marquee/marquee";
import { Path } from "@/components/path/path";
import { Work } from "@/components/work/work";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Work />
      <Path />
      <Contact />
    </>
  );
}
