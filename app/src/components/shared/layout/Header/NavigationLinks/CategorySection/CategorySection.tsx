"use client";
import { BiGridAlt } from "react-icons/bi";
import { FaDesktop } from "react-icons/fa";
import { MdLaptop } from "react-icons/md";
import { AiOutlineApple } from "react-icons/ai";
import CategoryTitleBox from "./CategoryTitleBox/CategoryTitleBox";
import CategoryItems from "./CategoryItems/CategoryItems";
import { useState } from "react";

type TCategorySection = {
  isEntered: boolean;
};

const products = [
  {
    id: 1,
    name: "لپ‌تاپ",
    items: ["تستی 1", "تستی 2", "تستی 3"],
    icon: <MdLaptop />,
  },
  {
    id: 2,
    name: "کامپیوتر",
    items: ["تستی 1", "تستی 3"],
    icon: <FaDesktop />,
  },
  {
    id: 3,
    name: "اپل‌واچ",
    items: ["تستی 2", "تستی 3", "تستی 1"],
    icon: <AiOutlineApple size={22} />,
  },
];

export default function CategorySection({ isEntered }: TCategorySection) {
  const [categoryTitle, setCategoryTitle] = useState("");

  const setCategoryTitleFn = (catTitle: string) => {
    setCategoryTitle(catTitle);
  };

  const categoryItems = products.find((item) => item.name === categoryTitle);

  return (
    <div
      className={`absolute bg-[#f9fafb] transition-all duration-150 right-[20%] lg:right-0 top-11 ${
        isEntered ? "visible opacity-100" : "invisible opacity-0"
      } w-[45rem] lg:w-[55rem]`}  
    >
      <div className="flex border-b-1 border-gray-300 items-start justify-between">
        <div className="border-l-1 w-[35%] border-gray-300">
          <div className="bg-[#f7f8fa] w-full p-3 h-[10rem] rounded-lg *:hover:bg-white *:duration-150 *:transition-all flex flex-col">
            {products.map((item) => (
              <CategoryTitleBox
                key={item.id}
                title={item.name}
                icon={item.icon}
                onSetCategory={setCategoryTitleFn}
              />
            ))}
          </div>
        </div>
        <div className="bg-white pt-4 w-[70%] h-[10rem]">
          <CategoryItems title={categoryItems?.name} items={categoryItems?.items} {...categoryItems}/>
        </div>
      </div>
      <div className="mt-2 bg-[#f7f8fa] p-3">
        <button className="bg-primary flex items-center justify-center gap-2 transition-all duration-150 hover:bg-black cursor-pointer text-white p-2 rounded-lg w-full mt-1">
          <BiGridAlt size={22} />
          همه دسته‌بندی‌ها
        </button>
      </div>
    </div>
  );
}
