import TitleSection from "../TitleSection/TitleSection";
import { FaChartLine } from "react-icons/fa";
import { products } from "@/app/constants";
import TopSellingCart from "./TopSellingCart/TopSellingCart";

export default function TopSelling() {
  return (
    <section className="mt-10">
      <TitleSection
        link="نمایش همه"
        title="پرفروش‌ترین ها"
        icon={<FaChartLine className="text-primary" />}
      />
      <div className="mt-5 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((item) => (
          <TopSellingCart key={item.id} props={item} />
        ))}
      </div>
    </section>
  );
}
