import Image, { StaticImageData } from "next/image";
import { FaStar } from 'react-icons/fa'; 


type TSpecialOffersCart = {
  props: {
    id: string;
    title: string;
    imgSrc : string | StaticImageData;
    price: string;
    offPrice: string;
    offerPercent: string;
    score: string;
  };
};

export default function SpecialOffersCart({
   props
}: TSpecialOffersCart) {
  return (
    <div className="bg-transparent w-full border-r-2 border-gray-200 pr-6">
      <div className="flex items-center justify-center">
        <Image src={props.imgSrc} width={200} height={100} alt={props.title} />
      </div>
      <div className="flex items-center justify-center flex-col gap-1.5">
        <span>{props.title}</span>
        <span className="line-through">{props.price}</span>
        <div className="flex items-center gap-1 w-full justify-between">
          <span className="bg-primary px-4 text-sm rounded-xl text-white">{props.offerPercent}</span>
          <span className="text-primary">{props.offPrice}</span>
        </div>
        <span  className="flex items-center justify-between gap-2 mt-1.5">{props.score} <FaStar className="text-yellow-500"/></span>
      </div>
    </div>
  );
}
