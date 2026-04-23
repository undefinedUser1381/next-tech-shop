import { useState, useEffect } from "react";
import FilterSelectBox from "./FilterSelectBox/FilterSelectBox";
import { useFilterStore } from "../../store/useFilterStore";
import { TFilterObj } from "../../types/filterStore";
import { convertToMap } from "../../helpers/convertToMap";
import useSearchParam from "@/app/src/hooks/useSearchParams";
import ActiveFilters from "../ActiveFilters/ActiveFilters";

interface IFilterProdcuts {
  onCloseModal: () => void;
}

export default function FilterProducts({ onCloseModal }: IFilterProdcuts) {
  const [selectedFilterField, setSelectedFilterFeild] = useState("");
  const {
    setParams: setMultipleParam,
    resetParams,
    getAllParams,
    deleteParam
  } = useSearchParam();

  const { allFilters, handleFilter, handleEmptyFilters } = useFilterStore();

  const handleFilterBox = (filterPaylod: TFilterObj) => {
    handleFilter(filterPaylod);
  };

  const toggleFilterMenu = (filterType: string) => {
    setSelectedFilterFeild(
      selectedFilterField === filterType ? "" : filterType
    );
  };

  const handleFilterQuery = () => {
    if (allFilters.length === 0) {
      return;
    }
    const resultFilterMap = convertToMap(allFilters);
    setMultipleParam(resultFilterMap);
  };

  const paramValues = getAllParams();
  const paramList = Object.entries(paramValues);

  useEffect(() => {
    handleFilterQuery();
  }, [allFilters]);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-[-10rem] sm:bottom-0 bg-[rgba(0,0,0,0.6)] z-20 flex items-center justify-center">
      <div className="bg-white p-5 rounded-xl w-[35rem] flex flex-col justify-between h-[34rem]">
        <div className="flex items-center mb-3.5 justify-between">
          <span className="text-lg font-bold">فیلتر محصولات</span>
          <button
            onClick={onCloseModal}
            className="text-red-500 p-2 px-3 cursor-pointer"
          >
            بستن
          </button>
        </div>
        <div className="flex flex-col gap-2 w-full h-[20rem] overflow-auto">
          <FilterSelectBox
            subMenyType="sort"
            filterTitle={"مرتب سازی بر اساس"}
            filterDescription="انتخاب کنید"
            onToggle={toggleFilterMenu}
            onSetFilter={handleFilterBox}
            isOpen={selectedFilterField === "sort"}
            filterItems={["جدیدترین", "ارزانترین", "گران‌ترین", "محبوب‌ترین"]}
          />
          <FilterSelectBox
            filterDescription="انتخاب کنید"
            subMenyType="category"
            filterTitle={"همه دسته بندی ها"}
            filterItems={["اپل واچ", "آیفون", "کابل شارژ", "لپتاپ"]}
            onToggle={toggleFilterMenu}
            onSetFilter={handleFilterBox}
            isOpen={selectedFilterField === "category"}
          />
          <FilterSelectBox
            subMenyType="brand"
            filterTitle={"برند"}
            onToggle={toggleFilterMenu}
            onSetFilter={handleFilterBox}
            isOpen={selectedFilterField === "brand"}
            filterDescription="همه‌ برندها"
            filterItems={["اپل", "ایرپاد", "سونی", "مک بوک"]}
          />
          <FilterSelectBox
            subMenyType="ram"
            filterTitle={"رم"}
            onToggle={toggleFilterMenu}
            onSetFilter={handleFilterBox}
            isOpen={selectedFilterField === "ram"}
            filterDescription="انتخاب رم"
            filterItems={["16", "24", "8"]}
          />
          <FilterSelectBox
            subMenyType="memory"
            filterTitle={"حافظه"}
            onToggle={toggleFilterMenu}
            onSetFilter={handleFilterBox}
            isOpen={selectedFilterField === "memory"}
            filterDescription="انتخاب حافظه"
            filterItems={["128", "256", "512"]}
          />
        </div>
        {paramList.length ? (
          <div className="w-full mt-3.5">
            <h4>فیلترهای فعال</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-3 gap-y-5 w-full mt-5">
              {paramList.map((filter: any, i: any) => (
                <ActiveFilters
                  key={i + 1}
                  category={filter[0]}
                  value={filter[1]}
                  onRemoveParam={deleteParam}
                />
              ))}
            </div>
          </div>
        ) : null}
        <div className="flex items-center text-sm justify-end gap-3 mt-3">
          <button
            onClick={() => {
              resetParams();
              handleEmptyFilters();
            }}
            className="text-red-400 p-2 px-3 cursor-pointer rounded-lg duration-150 transition-all hover:bg-red-200"
          >
            پاک کردن همه
          </button>
          <button onClick={onCloseModal} className="bg-primary text-white px-3 cursor-pointer duration-150 transition-all hover:opacity-75 rounded-lg p-2">
            اعمال فیلترها
          </button>
        </div>
      </div>
    </div>
  );
}
