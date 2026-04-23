interface IActiveFilters {
  category: "brand" | "sort" | "category" | "ram" | "memory";
  value: string;
  onRemoveParam : (keyToRemove : string) => void
}

export default function ActiveFilters({ category, value , onRemoveParam }: IActiveFilters) {
  const categoryDictionary = {
    brand: "برند",
    sort: "مرتب",
    category: "دسته بندی",
    ram: "رم",
    memory: "حافظه",
  };

  return (
    <div className="bg-gray-100 p-3 w-full rounded-full text-xs flex items-center justify-between gap-2">
      <span className="">
        {categoryDictionary[category]}: {value}
      </span>
      <button onClick={() => onRemoveParam(category)} className="hover:text-red-500 cursor-pointer">✕</button>
    </div>
  );
}
