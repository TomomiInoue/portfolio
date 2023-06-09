import Image from "next/image";
import Container from "../common/container";
import Button from "../common/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-grey relative pt-20 pb-10 md:py-[88px] lg:py-[120px]">
      <Container>
        <div className="block md:grid md:grid-cols-12 md:gap-x-6 items-center">
          <div className="md:col-span-6">
            <div className="text-navy font-medium text-32px md:40px lg:text-48px mb-3 md:md-10">
              Hi, my name is{" "}
              <h1 className="text-56px lg:72px xl:text-88px text-primary font-bold">
                TOMOMI
              </h1>
            </div>
            <p className="text-navy font-medium text-32px md:40px lg:text-48px">
              I am Frontend web developer
            </p>
            <Button variant="primary" className="mt-5 md:mt-10">
              Contact
            </Button>
          </div>
          <div className="col-span-6">
            <div className="relative w-full h-[480px] md:h-[600px]">
              <Image
                src="/images/bio_rounded.png"
                alt="profile photo"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
