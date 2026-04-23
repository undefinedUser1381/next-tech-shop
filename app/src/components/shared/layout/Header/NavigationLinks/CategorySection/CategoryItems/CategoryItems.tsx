import React from "react";

type TCategoryItems = {
  items?: string[];
  title? : string
};

export default function CategoryItems({ items , title }: TCategoryItems) {
  return (
    <div className="flex items-start flex-col justify-start pr-7 pt-1">
      <span className="font-bold text-lg text-black">{title}</span>
      <div className="grid *:w-[8rem] *:text-start *:py-1.5 *:pr-2 *:rounded-lg *:duration-100 *:hover:bg-gray-100 *:transition-all w-full gap-3 mt-4 grid-cols-4">
        {
          items?.map((item , i) => (
            <span key={i + 1}>{item}</span>
          ))
        }
      </div>
    </div>
  );
}
