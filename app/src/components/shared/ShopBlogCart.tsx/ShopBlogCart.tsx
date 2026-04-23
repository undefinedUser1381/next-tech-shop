import Image, { StaticImageData } from "next/image";

type TShopBlogCart = {
  props: {
    title: string;
    desc: string;
    src: string | StaticImageData;
  };
};

export default function ShopBlogCart({ props }: TShopBlogCart) {
  return (
    <div className="relative h-96 group">
      <Image
        src={props.src}
        alt={props.title}
        fill
        className="object-cover cursor-pointer rounded-4xl z-0 blur-[4px] group-hover:blur-[7px] transition-all duration-600"
      />

      <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-10">
        <div className="text-white text-right">
          <p className="text-xl group-hover:text-gray-100 transition-all duration-300 boldshod singleBlogCardTitle">
           {props.title}
          </p>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 right-6 space-y-3 z-10">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-4 text-white">
          <p className="text-sm leading-relaxed text-right">
            {props.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
