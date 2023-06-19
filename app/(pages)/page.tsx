import Work from "@/app/components/content/Work/work";
import About from "@/app/components/content/about";
import Experience from "@/app/components/content/experience";
import Hero from "@/app/components/content/hero";
import Private from "@/app/components/content/private";
import client from "@/app/lib/client";
import { gql } from "@apollo/client";

interface ExperienceProps {
  id: number;
  company: string;
  position: string;
  period: string;
  body: string;
  tech: string;
}

interface PageProps {
  experiences: ExperienceProps[];
}

export const dynamic = "force-dynamic";

export default async function Home() {
  // const { data: experiences } = await client.query<PageProps>({
  //   query: GET_ALL_EXPERIENCES,
  // });
  // console.log(experiences, "data");

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
