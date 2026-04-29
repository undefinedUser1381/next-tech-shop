import React from "react";
import CareerJobs from "@/app/src/features/career/componetns/CareerJobs/CareerJobs"; 

export default function page() {
  return (
    <section className="w-full mt-20 md:mt-36">
      <div className="xl:py-28 md:py-20 py-10 xl:px-0 px-10">
        <span className="w-fit mx-auto flex items-center justify-center bg-emerald-50 rounded-full text-emerald-600 text-center text-sm font-medium leading-5 px-3 py-1 mb-5">
          فرصت‌های شغلی در فروشگاه بوم
        </span>
        <h1 className="text-gray-900 text-center lg:text-4xl text-2xl font-bold md:!leading-[80px] !leading-[50px] mb-8 ">
          ما مشتاق نیرو های جدیدیم
        </h1>
        <p className="text-gray-900 text-center md:text-lg text-md font-normal md:!leading-[50px] !leading-[30px]">
          تیم بوم تک با جذب بهترین نیرو توانسته بهترین محصولات را خلق کند.
        </p>
      </div>

      <CareerJobs />
    </section>
  );
}
