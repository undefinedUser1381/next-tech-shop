"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import Banner1 from "../../../../../../public/images/slider/img-4.webp";
import Banner2 from "../../../../../../public/images/slider/img-5.webp";

export default function HomeSlider() {
  const slides = [
    { id: 1, src: Banner1, alt: "بنر ۱", width: 1000, height: 400 },
    { id: 2, src: Banner2, alt: "بنر ۲", width: 1000, height: 400 },
  ];

  return (
    <section className="w-full h-[23rem] rounded-3xl">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        className="mySwiper z-0 h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className="flex items-center justify-center rounded-3xl"
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              quality={85}
              className="rounded-3xl object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
