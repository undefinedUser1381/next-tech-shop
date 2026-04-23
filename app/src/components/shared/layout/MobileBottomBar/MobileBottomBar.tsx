import { HiBars3 } from "react-icons/hi2";
import { IoCartOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { BsHouse } from "react-icons/bs";
import Link from "next/link";

export default function MobileBottomBar() {
  return (
    <section className="block md:hidden fixed bottom-5 w-[90%] z-[10] bg-white left-5 border-gray-300 border-1 rounded-lg p-3 px-7">
      <div className="w-full flex items-center justify-between text-[11px] text-gray-600">
        <div className="flex flex-col items-center justify-center gap-1.5">
          <BsHouse size={24} />
          <span>خانه</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-1.5">
          <HiBars3 size={24} />
          <span>دسته‌بندی</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-1.5">
          <IoCartOutline size={24} />
          <span>سبد‌خرید</span>
        </div>
        <Link href={"/sign"} className="flex flex-col items-center justify-center gap-1.5">
          <IoPersonOutline size={24} />
          <span>ورود | ثبت نام</span>
        </Link>
      </div>
    </section>
  );
}
