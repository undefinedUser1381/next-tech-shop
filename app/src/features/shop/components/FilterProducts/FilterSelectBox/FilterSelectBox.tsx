import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { TFilterObj } from "../../../types/filterStore";
import { useState } from "react";

interface IFilterSelectBox {
  filterTitle: string;
  filterDescription: string;
  filterItems: string[];
  subMenyType: string;
  isOpen: boolean;
  onToggle: (filterType: string) => void;
  onSetFilter: (filterPaylod: TFilterObj) => void;
}
export default function FilterSelectBox({
  filterDescription,
  filterTitle,
  filterItems,
  subMenyType,
  onToggle,
  isOpen,
  onSetFilter,
}: IFilterSelectBox) {
  const [choosedTitle, setChoosedTitle] = useState("");

  return (
    <>
      <div
        onClick={() => onToggle(subMenyType)}
        className="relative bg-[#f4f4f5] rounded-xl duration-150 transition-all hover:bg-[rgba(0,0,0,0.1)] cursor-pointer w-full px-2 py-2"
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col text-gray-500 gap-0.5">
            <span className="text-[12px]">
              {choosedTitle ? choosedTitle : filterTitle}
            </span>
            <span className="text-[13px]">{filterDescription}</span>
          </div>
          {isOpen ? (
            <FiChevronUp className="text-gray-400" />
          ) : (
            <FiChevronDown className="text-gray-400" />
          )}
        </div>
        {isOpen ? (
          <div className="absolute right-0 top-14 bg-white w-full h-auto z-10 border-2 border-gray-200 rounded-xl">
            <ul className="flex flex-col *:duration-150 *:transition-all *:hover:bg-[rgba(0,0,0,0.1)] rounded-xl *:text-sm *:w-full *:nth-[4]:border-none *:border-b-2 *:border-gray-200 *:px-3 *:py-3">
              {filterItems.map((item, i) => (
                <li
                  onClick={() => {
                    onSetFilter({ type: subMenyType, value: item });
                    setChoosedTitle(item);
                  }}
                  key={i + 1}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
}
