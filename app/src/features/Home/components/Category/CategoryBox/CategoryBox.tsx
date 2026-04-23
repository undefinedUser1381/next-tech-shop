import Image, { StaticImageData } from "next/image"

export default function CategoryBox({
  title,
  source,
}: {
  title: string;
  source: string | StaticImageData;
}) {
  return (
    <div className="flex items-center justify-center cursor-pointer group flex-col gap-2">
      <div className="p-5 h-22 flex items-center justify-center border-3 border-gray-100 rounded-2xl">
        <Image width={45} className="group-hover:scale-105 duration-150 transition-all" height={50} src={source} alt={title} />
      </div>
      <span className="text-[13px] group-hover:text-primary duration-150 transition-all">{title}</span>
    </div>
  );
}
