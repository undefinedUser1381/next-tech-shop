import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface IProductCart {
  props: {
    price: string;
    id: string;
    title: string;
    imgSrc: string | StaticImageData;
    offerPercent?: string;
    offPrice?: string;
    score?: string;
  };
}

export default function ProductCart({ props }: IProductCart) {
  const { id , imgSrc, offPrice, offerPercent, price, title } = props;

  return (
    <Link className="bg-white p-5 duration-150 transition-all hover:shadow-lg rounded-xl" href={`/product/${id}`}>
      <div className="flex items-center justify-center">
        <Image
          loading="lazy"
          src={imgSrc}
          width={300}
          height={200}
          alt={title}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-3">
        <p className="block my-4 text-sm">{title}</p>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1.5 text-xs">
            {offPrice && <span className="text-primary">{offPrice}</span>}
            <span className="line-through">{price}</span>
          </div>
          {offerPercent && (
            <span className="text-xs p-1 text-white px-3 rounded-xl bg-primary">
              {offerPercent}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
