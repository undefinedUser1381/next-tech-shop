export default function SearchSidebar({
  onCloseSearchSidebar,
  isOpenSearchSidebar
}: {
  onCloseSearchSidebar: () => void;
  isOpenSearchSidebar : boolean
}) {
  return (
    <section className={`fixed block md:hidden top-0 right-0 w-full duration-150 bg-white bottom-0 opacity-0 invisible transition-all ${isOpenSearchSidebar ? "visible opacity-100" : ""} left-0`}>
      <div className="mt-5 px-4 flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <p className="text-[18px]">جستجو در فروشگاه</p>
          <span onClick={onCloseSearchSidebar} className="text-red-500 text-sm cursor-pointer">بستن</span>
        </div>
        <div className="">
          <input
            placeholder="دنبال چی هستی؟..."
            className="w-full border border-gray-300 rounded-xl px-4 py-2 text-gray-500 outline-none"
          />
        </div>
        <div className="flex items-center border-1 border-gray-300 bg-white shadow-md p-3 rounded-lg justify-start text-sm">
          <span className="text-gray-400">نتیجه‌ای یافت نشد !</span>
        </div>
      </div>
    </section>
  );
}
