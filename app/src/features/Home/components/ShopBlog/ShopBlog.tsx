import { HiOutlineDocumentText } from "react-icons/hi";
import TitleSection from '../TitleSection/TitleSection'
import { blogs } from "@/app/constants";
import ShopBlogCart from "@/app/src/components/shared/ShopBlogCart.tsx/ShopBlogCart"; 

export default function ShopBlog() {
  return (
    <section className='mt-10'>
        <TitleSection  title='بلاگ فروشگاه' icon={<HiOutlineDocumentText className="text-primary" size={22}/>} link='نمایش همه'/>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
             {
                blogs.slice(0,4).map((blog) => (
                    <ShopBlogCart key={blog.id} props={blog}/>
                ))
             }
        </div>
    </section>
  )
}
