import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";

export default function BasketSidebar({
  isBasketOpen,
  onCloseBasket
}: {
  isBasketOpen: boolean;
  onCloseBasket : () => void
}) {
  return (
    <section onClick={onCloseBasket} className={`cursor-pointer flex bg-[rgba(0,0,0,0.5)] items-start justify-start invisible ${isBasketOpen ? "visible" : ""} w-full fixed z-30 top-0 left-0 right-0 bottom-0 h-full`}>
      <div className={`bg-white p-5 w-72 h-full duration-150 transition-all fixed ${isBasketOpen ? "right-0" : "right-[-25rem]"} top-0 bottom-0`}>
        <div className="flex items-center justify-between w-full">
          <span className="font-extrabold text-md">سبد خرید شما</span>
          <IoCloseOutline onClick={onCloseBasket} size={20} className="cursor-pointer text-red-500" />
        </div>
        <div className="flex flex-col mt-36 items-center justify-center gap-5">
          <IoCartOutline size={85} className="text-gray-500" />
          <p className="font-extrabold text-lg">هیچی توی سبد نیست ):</p>
          <p className="text-[13px] text-gray-400">برو به لینکای زیر</p>
          <div className="flex gap-2 *:text-[14px] *:text-primary items-center justify-center">
            <Link href={"/"}>صفحه‌اصلی</Link>
            <span>| </span>
            <Link href={"/shop"}>فروشگاه</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
