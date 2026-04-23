import ProductCart from "./ProductCart/ProductCart";
import { products } from "@/app/constants";

export default function ShopCartWrapper() {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6">
      {products.map((p) => (
        <ProductCart key={p.id} props={p}/>
      ))}
    </div>
  );
}
