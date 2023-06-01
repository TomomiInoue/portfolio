import Container from "../common/container";

const bio = [
  "My name is Chase Ohlson. I’m a frontend software engineer & freelance web developer in Los Angeles -- with roots in digital marketing & SEO. I'm passionate about music, technology and basically everything that makes the internet tick.",

  "My work currently consists of a full time engineering role at The Noun Project (working on Lingo) & managing ongoing freelance clients and side projects. I find this balancing act to be super resourceful in terms my learning as a web developer, as well as for keeping up with the rapid expansion of developer tools, libraries, frameworks, etc.",

  "My freelance web development roots are in Wordpress & Shopify, of which I'm self taught. In 2017, I started at UCLA to broaden my knowledge of the Node.js ecosystem. Since then, I fell in love with & have been primarily using React & Redux in web applications. For static sites, I love using Gatsby for creating blazing fast, SEO-driven headless frontend user interfaces.",

  "Whether you're a business owner looking to get started on a app or web development project with a freelance web developer, a developer looking to collaborate on something cool, or just wanting to say hi, shoot me a message and let's work together.",
];

export default function About() {
  return (
    <section className="bg-white py-10 md:py-[88px] lg:py-[120px]">
      <Container>
        <div className="max-w-[880px] m-auto">
          <h2 className="text-primary text-72px font-bold">About me</h2>
          {bio.map((p, index) => (
            <p
              key={index}
              className="text-16px md:text-20px font-normal text-navy mb-5"
            >
              {p}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}
