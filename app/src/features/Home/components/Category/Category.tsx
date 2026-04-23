"use client";

import { FiGrid } from "react-icons/fi";

import { Swiper, SwiperSlide } from "swiper/react";

import Cat1 from "../../../../../../public/images/category-slide/cat1.png";
import Cat2 from "../../../../../../public/images/category-slide/cat2.png";
import Cat3 from "../../../../../../public/images/category-slide/cat3.png";
import Cat4 from "../../../../../../public/images/category-slide/cat4.webp";
import Cat5 from "../../../../../../public/images/category-slide/cat5.webp";
import Cat6 from "../../../../../../public/images/category-slide/cat6.webp";
import Cat7 from "../../../../../../public/images/category-slide/cat7.webp";
import Cat8 from "../../../../../../public/images/category-slide/cat8.webp";
import Cat9 from "../../../../../../public/images/category-slide/cat9.png";
import Cat10 from "../../../../../../public/images/category-slide/cat10.png";
import Cat11 from "../../../../../../public/images/category-slide/cat12.webp";

import CategoryBox from "./CategoryBox/CategoryBox";
import TitleSection from "../TitleSection/TitleSection";

const categoryItems = [
  { id: 1, title: "انواع‌ایرپاد", src: Cat1 },
  { id: 2, title: "انواع هارد", src: Cat2 },
  { id: 3, title: "لپتاپ اپل", src: Cat3 },
  { id: 4, title: "اپل واچ", src: Cat4 },
  { id: 5, title: "لپ‌‌تاپ ایسوز", src: Cat5 },
  { id: 6, title: "انواع مانیتور", src: Cat6 },
  { id: 7, title: "موبایل اپل", src: Cat7 },
  { id: 8, title: "سامسونگ", src: Cat8 },
  { id: 9, title: "ابزارآلات", src: Cat9 },
  { id: 10, title: "پوشاک", src: Cat10 },
  { id: 11, title: "لوازم منزل", src: Cat11 },
];

const breakpointsConfig = {
  0: {
    slidesPerView: 3.5,
    spaceBetween: 10,
  },
  640: {
    slidesPerView: 5.5,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 9.5,
    spaceBetween: 30,
  },
};

export default function Category() {
  return (
    <section className="mt-8">
      <TitleSection link="نمایش همه" title="دسته ها" icon={<FiGrid className="text-primary"/>} />
      <div className="flex items-center mt-8 justify-between">
        <Swiper loop={false} breakpoints={breakpointsConfig}>
          {categoryItems.map((category) => (
            <SwiperSlide key={category.id}>
              <CategoryBox title={category.title} source={category.src} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
