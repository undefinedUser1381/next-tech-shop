import ShopBlogCart from "@/app/src/components/shared/ShopBlogCart.tsx/ShopBlogCart";
import { blogs } from "@/app/constants";

export default function Blogs() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5.5">
      {blogs.map((blog) => (
        <ShopBlogCart key={blog.id} props={blog} />
      ))}
    </div>
  );
}
