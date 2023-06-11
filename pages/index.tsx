import Work from "@/components/content/Work/work";
import About from "@/components/content/about";
import Experience from "@/components/content/experience";
import Hero from "@/components/content/hero";
import Private from "@/components/content/private";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Private />
      <Experience />
      <Work />
    </main>
  );
}
