import HomeSlider from "../../src/features/Home/components/HomeSlider/HomeSlider";
import Category from "../../src/features/Home/components/Category/Category";
import SpecialOffers from "../../src/features/Home/components/SpecialOffers/SpecialOffers";
import LatestProducts from "../../src/features/Home/components/LatestProducts/LatestProducts";
import TopSelling from "../../src/features/Home/components/TopSelling/TopSelling";
import ShopBlog from "../../src/features/Home/components/ShopBlog/ShopBlog";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center ">
      <main className="mx-auto w-[95%] p-2 min-h-[100vh] mt-24 md:mt-40">
        <HomeSlider />
        <Category />
        <SpecialOffers />
        <LatestProducts />
        <TopSelling />
        <ShopBlog />
      </main>
    </div>
  );
}
