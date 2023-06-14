import { getClient } from "@/apolloClient";
import { GET_ALL_EXPERIENCES } from "@/apolloClient/queries/experience";
import Work from "@/components/content/Work/work";
import About from "@/components/content/about";
import Experience from "@/components/content/experience";
import Hero from "@/components/content/hero";
import Private from "@/components/content/private";

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

export default async function Home() {
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

// export async function getStaticProps() {
//   const { data: experiences } = await getClient().query({
//     query: GET_ALL_EXPERIENCES,
//     fetchPolicy: "network-only",
//   });

//   return { props: { experiences } };
// }
