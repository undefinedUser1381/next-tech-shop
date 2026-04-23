import Image, { StaticImageData } from "next/image"
import { FaStar } from 'react-icons/fa'; 
import { AiOutlinePlus } from 'react-icons/ai';

type TLatestProductsCart = {
    props : {
       imgSrc : string | StaticImageData
       score : string 
       price : string
       title : string
       offPrice? : string
       offerPercent? : string
    }
}

export default function LatestProductsCart({props} : TLatestProductsCart) {
  return (
    <div className="bg-white rounded-2xl border-2 flex items-center justify-center flex-col border-gray-100 p-3">
       <div className="relative">
         <Image src={props.imgSrc} width={200} height={200} alt={props.title} loading="lazy"/>
         { props.offerPercent && <span className="px-2 text-white bg-primary rounded-xl text-[12px] absolute left-1 top-1">{props.offerPercent}</span> }
       </div>
       <div className="flex items-center justify-start gap-2 mt-2.5">
        <div className="flex *:text-yellow-500 items-center justify-start gap-0.5">
           <FaStar size={13}/>
           <FaStar size={13}/>
           <FaStar size={13}/>
           <FaStar size={13}/>
           <FaStar size={13}/>
         </div>
          <span className="text-[10px] text-gray-400">{props.score}</span>
       </div>
       <p className="text-[12px] text-gray-600 block mt-2">{props.title}</p>
       <div className="flex items-center justify-between w-full mt-5">
          <button className="bg-primary p-2 rounded-xl text-white flex items-center justify-center"><AiOutlinePlus /></button>
          <div className="flex flex-col">
          {props.offPrice ? <>
            <span className="text-[12px] line-through text-gray-300">{props.price}</span>
            <span className="text-[12px] text-gray-600">{props.offPrice}</span>
           </> : <>
             <span className="text-[12px] text-gray-600">{props.price}</span>
           </>}
          </div>
       </div>
    </div>
  )
}
