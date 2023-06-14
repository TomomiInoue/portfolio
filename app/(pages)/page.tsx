import client from "@/app/apolloClient";
import { GET_ALL_EXPERIENCES } from "@/app/apolloClient/queries/experience";
import Work from "@/app/components/content/Work/work";
import About from "@/app/components/content/about";
import Experience from "@/app/components/content/experience";
import Hero from "@/app/components/content/hero";
import Private from "@/app/components/content/private";

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

export default function Home({ experiences }: PageProps) {
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

// export async function getServerSideProps() {
//   const { data: experiences } = await client.query({
//     query: GET_ALL_EXPERIENCES,
//     fetchPolicy: "network-only",
//   });

//   return { props: { experiences } };
// }
