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
  "Outside of my professional pursuits, I lead an active and adventurous lifestyle. Surfing has been a longtime passion of mine, and I find solace and inspiration in riding the waves. I also have an insatiable wanderlust and love exploring the beauty of nature through exciting adventures and travel.",

  "These personal experiences provide me with a fresh perspective, fuel my creativity, and contribute to my overall well-being. They remind me of the importance of balance and finding inspiration beyond the screen.",

  "Feel free to reach out to me for any web development opportunities or to share stories about our shared passions. Let's connect and create something amazing together.",
];

const images = [
  {
    url: "/images/hang_five.png",
  },
  {
    url: "/images/under_rip.png",
  },
  {
    url: "/images/sunset_surf.png",
  },
  {
    url: "/images/blue_water.png",
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
              <h2 className="text-primary text-48px font-bold ">
                When I&apos;m Off-Screen:
              </h2>
              <h5 className="text-primary text-28px font-semibold mb-5 md:mb-10">
                Exploring Life Beyond the Computer
              </h5>
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
                  <div className="relative w-full h-[500px]" key={index}>
                    <Image
                      src={image.url}
                      alt="photos surfing"
                      fill
                      className="object-contain"
                    />
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
