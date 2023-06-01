import Image from "next/image";
import Container from "../common/container";

export default function Hero() {
  return (
    <section className="bg-grey ">
      <Container>
        <div className="block md:grid md:grid-cols-12 md:gap-x-6">
          <div className="md:col-span-6">
            <h1>Name</h1>
          </div>
          <div className="col-span-6">
            <div className="relative w-full h-[700px] grayscale">
              <Image
                src="/images/bio.png"
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
