import Blogs from "@/app/src/features/blog/components/Blogs";

export default function page() {
  return (
    <div className="mt-28 md:mt-48 px-10">
      <h3 className="text-center text-2xl mb-10">وبلاگ فروشگاه</h3>
      <Blogs />
    </div>
  );
}
