import { useState } from "react";
import Container from "../common/container";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const experience = [
  {
    company: "Hello Again",
    position: "Junior web developer",
    period: "Sep 2021 - Present",
    body: [
      "At Hello Again, a startup agency, I have had the opportunity to contribute my skills as a frontend web developer. My primary focus has been on building web applications using technologies such as ReactJS, TypeScript, Tailwind CSS, and Styled Components. Additionally, I have gained experience working with headless CMS platforms, specifically Contentful and Strapi.",
      "During my time at Hello Again, I have been involved in various projects, collaborating closely with the team to deliver high-quality and visually appealing web applications. I have played a key role in developing user interfaces, implementing responsive designs, and ensuring seamless functionality.",
      "My responsibilities have included:",
      "Collaborating with designers and backend developers to translate design concepts into functional web applications.",
      "Writing clean and maintainable code using best practices and coding standards.",
      "Integrating APIs and managing data flow within the applications.",
      "Optimizing performance and ensuring cross-browser compatibility.",
      "Utilizing version control systems, such as Git, for efficient collaboration and code management.",
      "Working in a dynamic startup environment has allowed me to hone my problem-solving skills and adapt quickly to evolving project requirements. I have gained valuable experience in agile development methodologies, effective communication, and efficient project management.",
      "I am proud of the contributions I have made at Hello Again and the web applications I have helped bring to life. I continue to grow and expand my skill set, keeping up with the latest trends and advancements in frontend development.",
    ],
    tech: ["NextJS", "Typescript", "GraphQl"],
  },
  {
    company: "Flow Hive",
    position: "Marketing/Web Developer Intern",
    period: "June 2021 - Aug 2021",
    body: [
      "During my internship at Flow Hive, I had the opportunity to contribute to both marketing and web development initiatives. As a marketing/web developer, I played a crucial role in enhancing the company's online presence and solving various IT-related challenges.",
      "In this role, I utilized technologies such as Shopify, Shogun, Sumo, Autopilot, Klaviyo, and Bee Free. I leveraged these tools to create websites, campaign banners, and emails that effectively promoted the brand and engaged with customers.",
      "Additionally, I took charge of updating and maintaining web pages, ensuring a seamless user experience and resolving any technical issues that arose. Through my proactive approach, I significantly improved the company's online platforms, driving traffic and enhancing overall functionality.",
      "Some key responsibilities and accomplishments during my internship included:",
      "Developing visually appealing and user-friendly websites that effectively showcased Flow Hive's products and brand.",
      "Designing engaging campaign banners to support marketing initiatives and boost customer engagement.",
      "Creating and optimizing email campaigns using Klaviyo, resulting in improved open rates and click-through rates.",
      "Troubleshooting IT-related problems and implementing solutions to enhance the company's digital infrastructure.",
      "Collaborating with cross-functional teams to ensure consistent branding and messaging across various online channels.",
      "My internship at Flow Hive allowed me to strengthen my marketing skills while also expanding my knowledge of web development and problem-solving. It provided valuable hands-on experience in both technical and creative aspects of digital marketing.",
    ],
    tech: ["Shopify"],
  },
];

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animationParent] = useAutoAnimate();

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  const tabVariant = {
    active: {
      borderBottom: "2px solid #FCA311",
      borderWidth: "100%",
      transition: {
        type: "tween",
        duration: 0.4,
      },
    },
    inactive: {
      borderBottom: "0px solid #FCA311",
      borderWidth: "0%",
      transition: {
        type: "tween",
        duration: 0.4,
      },
    },
  };

  const tabTextVariant = {
    active: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    inactive: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <section
      className="bg-grey py-10 md:py-[80px] lg:py-[120px]"
      id="experience"
    >
      <Container>
        <h2 className="text-primary text-36px md:text-72px font-bold mb-10">
          Experience
        </h2>
        <div
          className="block md:grid grid-cols-12 gap-x-6 border-l-2 border-primary"
          ref={animationParent}
        >
          <div className="flex md:block md:col-span-4 mr-auto w-full pl-3">
            {experience.map((e, index) => (
              <motion.div
                key={index}
                onClick={() => handleClick(index)}
                className={clsx(
                  "text-32px py-3 mb-5 md:mb-0 md:py-10 cursor-pointer w-full",
                  index === activeIndex
                    ? "text-primary font-semibold"
                    : "text-navy font-normal"
                )}
                variants={tabVariant}
                animate={activeIndex === index ? "active" : "inactive"}
              >
                {e.company}
              </motion.div>
            ))}
          </div>
          <motion.div
            className="col-span-7 col-start-6 ml-4 md:ml-0"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                delayChildren: 0.5,
                staggerDirection: -1,
              },
            }}
          >
            <div className="font-medium text-20px md:text-28px mb-3 md:mb-6">
              {experience[activeIndex].period}
            </div>
            <div className="font-semibold text-20px md:text-28px mb-5 md:mb-10">
              {experience[activeIndex].position}
            </div>
            {experience[activeIndex].body.map((content, index) => (
              <p
                className="text-16px md:text-20px text-navy font-normal mb-5"
                key={index}
              >
                {content}
              </p>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
