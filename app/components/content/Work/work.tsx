import { useState } from "react";
import Container from "../../common/container";
import Button from "@/app/components/common/button";
import Link from "next/link";

export const works = [
  {
    title: "Craggle",
    description: "",
    technology: ["", ""],
    image: "/work/craggle.png",
    background: "",
  },
  {
    title: "Craggle",
    description: "",
    technology: ["", ""],
    image: "/work/craggle.png",
    background: "",
  },
  {
    title: "Craggle",
    description: "",
    technology: ["", ""],
    image: "/work/craggle.png",
    background: "",
  },
  {
    title: "Craggle",
    description: "",
    technology: ["", ""],
    image: "/work/craggle.png",
    background: "",
  },
];

export default function Work() {
  return (
    <section
      id="work"
      className="bg-grey text-navy py-10 md:py-[80px] lg:py-[120px]"
    >
      <Container>
        <h2 className="text-primary text-36px md:text-72px font-bold mb-10">
          Recent work and technology
        </h2>
        <div className="text-20px md:text-24px lg:w-[60%]">
          Upon request, I am prepared to provide a comprehensive showcase of my
          recent work during an in-person meeting. This will allow me to discuss
          the projects in detail, share my contributions, and demonstrate the
          outcomes achieved. I look forward to presenting my work and
          highlighting the value I can bring to your organization.
        </div>
        <Button className="mt-5 md:mt-10">
          <Link href="mailto:chibico1216@gmail.com">Contact</Link>
        </Button>
      </Container>
    </section>
  );
}
