import Work from "@/app/components/content/Work/work";
import About from "@/app/components/content/about";
import Experience from "@/app/components/content/experience";
import Hero from "@/app/components/content/hero";
import Private from "@/app/components/content/private";
import { gql } from "@apollo/client";
import { getClient } from "../lib/client";

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

async function getExperiences() {
  const res = await fetch("http://localhost:3000/api/graphql", {
    cache: "no-store",
    headers: {
      "content-type": "",
    },
  });
  const data = await res.json();
  console.log(data);

  return data?.experiences as any[];
}

export default async function Home() {
  const experiences = await getExperiences();
  // console.log(experiences);

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
