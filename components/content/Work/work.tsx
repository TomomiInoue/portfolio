import { useState } from "react";
import Container from "../../common/container";

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
    <section id="hero" className="py-10 md:py-[80px] lg:py-[120px]">
      <Container>
        <h2 className="text-primary text-72px font-bold">
          Recent work and technology
        </h2>
      </Container>
    </section>
  );
}
