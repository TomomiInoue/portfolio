import Container from "../common/container";

const experience = [
  {
    company: "Hello Again",
    position: "Junior web developer",
    period: "Sep 2021 - Present",
    body: "work here",
    tech: ["NextJS", "Typescript", "GraphQl"],
  },
  {
    company: "Flow Hive",
    position: "Tech internship",
    period: "June 2021 - Aug 2021",
    body: "work here",
    tech: ["Shopify"],
  },
];

export default function Experience() {
  return (
    <section className="bg-grey">
      <Container>
        <h2 className="text-primary text-72px font-bold">Experience</h2>
        <div className="border-l-2 border-primary">
          <div className="w-1/2 mr-auto">
            {experience.map((e, index) => (
              <div key={index}>{e.company}</div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
