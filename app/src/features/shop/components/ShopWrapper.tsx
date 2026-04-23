"use client"

import { FiFilter } from "react-icons/fi";
import ShopCartWrapper from "./ShopCartWrapper/ShopCartWrapper";
import FilterProducts from "./FilterProducts/FilterProducts";
import { useState } from "react";

export default function ShopWrapper() {

  const [isFilterModalOpen , setIsFilterModalOpen] = useState(false)

  return (
    <>
      <div className="flex items-center justify-between w-full">
        <span>محصولات (12) محصول</span>
        <button onClick={() => setIsFilterModalOpen(true)} className="bg-white duration-150 transition-all border-gray-50 border-2 hover:border-gray-200 cursor-pointer text-gray-500 p-3 flex items-center justify-center gap-2 text-[14px] rounded-lg px-2">
          فیلتر محصولات <FiFilter />
        </button>
      </div>
      <ShopCartWrapper />
      { isFilterModalOpen ? <FilterProducts onCloseModal={() => setIsFilterModalOpen(false)} /> : null}
    </>
  );
}
