"use client";

import { latestProducts } from "@/app/constants";
import { MdLabelImportantOutline } from "react-icons/md";
import LatestProductsCart from "./LatestProductsCart/LatestProductsCart";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TitleSection from "../TitleSection/TitleSection";

const breakpoints = {
  0: {
    slidesPerView: 1.5,
    spaceBetween: 5,
  },
  576: {
    slidesPerView: 3.5,
    spaceBetween: 5,
  },
  768: {
    slidesPerView: 4.5,
    spaceBetween: 5,
  },
  992: {
    slidesPerView: 4.6,
    spaceBetween: 5,
  },
  1024: {
    slidesPerView: 4.8,
    spaceBetween: 5,
  },
}

export default function LatestProducts() {
  return (
    <section className="flex flex-col items-start justify-start w-full mt-10">
      <TitleSection link="نمایش همه" title="جدیدترین ها" icon={<MdLabelImportantOutline className="text-primary"/>} />
      <div className="w-full mt-5">
        <Swiper
          slidesPerView={4.8}
          spaceBetween={15}
          freeMode={true}
          modules={[FreeMode]}
          breakpoints={breakpoints}
          className="mySwiper"
        >
          {latestProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <LatestProductsCart props={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
