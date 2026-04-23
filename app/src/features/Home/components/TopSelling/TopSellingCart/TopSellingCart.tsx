import Image, { StaticImageData } from "next/image";
import { FaStar } from 'react-icons/fa'; 

type TopSellingProps = {
  props: {
    imgSrc: string | StaticImageData;
    title: string;
    score: string;
    price: string;
    offPrice: string;
  };
};

export default function TopSellingCart({ props }: TopSellingProps) {
  return (
    <div className="flex items-center justify-between cursor-pointer duration-150 transition-all hover:opacity-40 bg-white rounded-xl p-4">
      <div className="">
        <Image width={70} height={70} alt={props.title} src={props.imgSrc} />
      </div>
      <div className="flex flex-col gap-2.5">
        <p className="text-[13px]">{props.title}</p>
        <div className="flex items-center gap-2 justify-end">
          <span className="text-gray-300 text-[11px] flex items-center justify-center gap-1.5">{props.score} <FaStar className="text-yellow-400"/></span>
          {props.offPrice ? (
            <>
              <span className="text-[10px] font-bold text-gray-300 line-through">{props.price}</span>
              <span className="text-[12px] font-bold text-black">{props.offPrice}</span>
            </>
          ) : (
            <span className="text-[10px] font-bold text-black">{props.price}</span>
            )}
        </div>
      </div>
    </div>
  );
}
