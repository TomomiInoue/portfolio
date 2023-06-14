"use client";
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

import StickyBox from "react-sticky-box";

const bio = [
  "Outside of my professional pursuits, I lead an active and adventurous lifestyle while also maintaining a strong commitment to environmental sustainability. Surfing has been a longtime passion of mine, and through my experiences in the ocean, I have developed a deep appreciation for the beauty of nature. It has fueled my desire to protect our planet and combat climate change.",
  "I have an insatiable wanderlust and love exploring the wonders of nature, from pristine coastlines to majestic mountains. These experiences have not only provided me with a fresh perspective but have also deepened my commitment to environmental conservation. I believe in the importance of finding a balance between technology and nature, recognizing that our digital advancements should not come at the expense of the environment.",
  "My passion for climate change, protecting nature, and environmental concern motivates me to seek opportunities where I can contribute to the sustainability efforts of companies. I am committed to utilizing my web development skills to create digital solutions that promote eco-friendly practices, raise awareness about environmental issues, and inspire positive change. Feel free to reach out to me for any web development opportunities or to discuss how we can collaborate in using technology for the betterment of our planet. Let's connect and create something amazing together, while making a positive impact on our environment. This version emphasizes your passion for environmental sustainability and aligns it with your web development skills. It conveys your desire to work for companies that share your commitment to protecting the environment. Feel free to adjust and personalize the content to accurately reflect your own experiences and values. If you have any further questions or need additional assistance, please let me know!",
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
    <section
      className="bg-grey py-10 md:py-[88px] lg:py-[120px]"
      id="lifestyle"
    >
      <Container>
        <div className="block md:grid md:grid-cols-12 md:gap-x-6 ">
          <div className="col-span-6">
            <div className="block">
              <h2 className="text-primary text-28px md:text-48px font-bold ">
                When I&apos;m Off-Screen:
              </h2>
              <h5 className="text-primary text-20px md:text-28px font-semibold mb-5 md:mb-10">
                Exploring Life Beyond the Computer
              </h5>
            </div>
            {bio.map((p, index) => (
              <p
                key={index}
                className="text-20px md:text-24px font-normal text-navy mb-5"
              >
                {p}
              </p>
            ))}
          </div>
          <div className="col-span-5 col-start-8">
            <StickyBox offsetTop={120} offsetBottom={0}>
              <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => {
                  sliderRef.current = swiper;
                }}
                loop
                autoplay={{ delay: 1800 }}
                slidesPerView={1}
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
            </StickyBox>
          </div>
        </div>
      </Container>
    </section>
  );
}
