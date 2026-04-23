"use client";

import { HiBars3 } from "react-icons/hi2";
import CategorySection from "./CategorySection/CategorySection";
import { useState } from "react";
import Link from "next/link";

export default function NavigationLinks() {
  const [isEntered, setIsEntered] = useState(false);

  return (
    <div className="w-full items-center justify-start hidden md:flex">
      <div className="flex items-center justify-between gap-10">
        <div
          onMouseLeave={() => setIsEntered(false)}
          onMouseEnter={() => setIsEntered(true)}
          className="bg-[#f9fafb] relative text-gray-400 px-9 cursor-pointer hover:bg-gray-100 transition-all duration-200 gap-2.5 p-2 flex items-center justify-center rounded-md py-3"
        >
          <HiBars3 className="text-xl" />
          <p className="text-md">دسته بندی ها</p>
          <CategorySection isEntered={isEntered} />
        </div>
        <nav>
          <ul className="flex *:p-1 *:px-2 *:rounded-lg *:cursor-pointer *:hover:bg-gray-50 *:hover:duration-300 *:hover:transition-all items-center justify-center gap-5 text-gray-400 text-[13px] font-extrabold">
            <li><Link href={"/shop"}>فروشگاه</Link></li>
            <li><Link href={"/blogs"}>بلاگ</Link></li>
            <li><Link href={"/career"}>موقعیت‌های شغلی</Link></li>
            <li>سوالات متداول</li>
            <li>تماس با ما</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
