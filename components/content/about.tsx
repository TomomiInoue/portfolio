import Container from "../common/container";
import StickyBox from "react-sticky-box";

const bio = [
  "Hello, I'm Tomomi Inoue, a dedicated frontend web developer with two years of full-time experience. I specialize in creating stunning websites using modern technologies such as ReactJS, TypeScript, Tailwind CSS, and headless CMS platforms like Contentful, Strapi, KeyStone, and Keystone Static. My goal is to deliver exceptional user experiences and visually appealing designs.",

  "I am passionate about leveraging my skills to develop dynamic CMS-driven websites that seamlessly blend functionality and aesthetics. With a keen eye for detail and a strong focus on creating visually appealing interfaces, I take pride in transforming ideas into captivating web experiences.",

  "If you're looking for a frontend web developer who is committed to delivering high-quality results and thrives in a collaborative environment, I would love to connect and discuss how I can contribute to your projects.",
];

export default function About() {
  return (
    <section className="bg-grey py-10 md:py-[88px] lg:py-[120px]" id="about">
      <Container>
        <div className="block md:grid md:grid-cols-12 md:gap-x-6">
          <div className="col-span-4">
            <StickyBox offsetTop={120} offsetBottom={0}>
              <div className="block">
                <h2 className="text-primary text-36px md:text-72px font-bold  mb-5 md:mb-0">
                  About me
                </h2>
              </div>
            </StickyBox>
          </div>
          <div className="col-span-7">
            {bio.map((p, index) => (
              <p
                key={index}
                className="text-16px md:text-20px font-normal text-navy mb-5"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
