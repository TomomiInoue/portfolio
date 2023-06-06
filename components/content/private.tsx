import Container from "../common/container";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Pagination, type Swiper as SwiperRef, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { useRef } from "react";

const bio = [
  "My name is Chase Ohlson. I’m a frontend software engineer & freelance web developer in Los Angeles -- with roots in digital marketing & SEO. I'm passionate about music, technology and basically everything that makes the internet tick.",

  "My work currently consists of a full time engineering role at The Noun Project (working on Lingo) & managing ongoing freelance clients and side projects. I find this balancing act to be super resourceful in terms my learning as a web developer, as well as for keeping up with the rapid expansion of developer tools, libraries, frameworks, etc.",

  "My freelance web development roots are in Wordpress & Shopify, of which I'm self taught. In 2017, I started at UCLA to broaden my knowledge of the Node.js ecosystem. Since then, I fell in love with & have been primarily using React & Redux in web applications. For static sites, I love using Gatsby for creating blazing fast, SEO-driven headless frontend user interfaces.",

  "Whether you're a business owner looking to get started on a app or web development project with a freelance web developer, a developer looking to collaborate on something cool, or just wanting to say hi, shoot me a message and let's work together.",
];

const images = [
  {
    url: "/images/hang_five.png",
  },
  {
    url: "/images/under_rip.png",
  },
];
export default function Private() {
  const sliderRef = useRef<SwiperRef>();
  return (
    <section className="bg-grey py-10 md:py-[88px] lg:py-[120px]">
      <Container>
        <div className="block md:grid md:grid-cols-12 md:gap-x-6">
          <div className="col-span-6">
            <div className="block">
              <h2 className="text-primary text-48px font-bold mb-5 md:mb-10">
                What I am doing outside of coding
              </h2>
            </div>
            {bio.map((p, index) => (
              <p
                key={index}
                className="text-16px md:text-20px font-normal text-navy mb-5"
              >
                {p}
              </p>
            ))}
          </div>
          <div className="col-span-5 col-start-8">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => {
                sliderRef.current = swiper;
              }}
              loop
              autoplay={{ delay: 2500 }}
              slidesPerView={1}
              //   breakpoints={{
              //     320: {
              //       slidesPerView: 1,
              //       spaceBetween: 10,
              //       centeredSlides: true,
              //     },
              //     640: {
              //       slidesPerView: 2.1,
              //       spaceBetween: 15,
              //       centeredSlides: false,
              //     },
              //     790: {
              //       slidesPerView: 2.5,
              //       spaceBetween: 20,
              //       centeredSlides: false,
              //     },
              //   }}
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-[700px] h-[700px]" key={index}>
                    <Image src={image.url} alt="photos surfing" fill />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </section>
  );
}
