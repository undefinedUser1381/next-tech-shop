"use client"

import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import { IoPersonOutline } from 'react-icons/io5';
import SearchSidebar from '../../SearchSidebar/SearchSidebar';
import BasketSidebar from './BasketSidebar/BasketSidebar';
import Link from 'next/link';

export default function HeaderTop() {

   const [isInputFocused , setIsInputFocused] = useState(false)
   const [isCartSidebarOpen, setIsCartSidebarOpen] = useState(false);

  return (
    <div className="flex items-center justify-between w-full gap-1.5 mt-2">
      <div className='flex items-center justify-between w-[15%] sm:w-[17%] md:w-28'>
       <div className="bg-primary rounded-md rotate-[-5deg]">
        <p className="text-white px-1 pb-0.5 text-lg font-extraboldbold">بوم</p>
       </div>
      <p className='hidden sm:block text-lg sm:text-2xl font-bold'>بوم‌تک</p>
      </div>
      <div className="p-2 border-2 flex items-center justify-between border-gray-200 w-[70%] sm:w-[65%] md:w-[50%] lg:w-[45%] rounded-2xl">
        <div className="flex px-5 items-center justify-between gap-4">
          <FaSearch className='md:w-6 md:h-6 h-5 w-5 text-gray-500'/>
          <div><input onFocus={() => setIsInputFocused(true)} type="text" className="outline-none placeholder:text-gray-400" placeholder="دنبال چی هستی ؟ ..." /></div>
        </div>
         <button className="rounded-xl hidden md:block w-[25%] bg-primary text-white p-2">جستجو</button>
      </div>
      <div className="flex items-center justify-center gap-3 p-2">
         <Link href={"/sign"} className='hidden md:flex bg-primary p-2 items-center justify-center gap-1 text-white rounded-lg px-3 transition-all hover:bg-white hover:text-primary hover:border-primary border-2 duration-100 cursor-pointer'>عضویت <IoPersonOutline/></Link>
         <button onClick={() => setIsCartSidebarOpen(true)} className='hidden md:flex bg-white border-primary p-2 items-center border-2 justify-center gap-1 text-primary rounded-lg px-3 transition-all duration-100 hover:bg-primary hover:text-white cursor-pointer'>سبد خرید <IoCartOutline className='w-5 h-5'/></button>
         <IoCartOutline size={21} onClick={() => setIsCartSidebarOpen(true)} className='cursor-pointer md:hidden'/>
         <IoPersonOutline size={22} className='cursor-pointer md:hidden'/>
      </div>
      <SearchSidebar onCloseSearchSidebar={() => setIsInputFocused(false)} isOpenSearchSidebar={isInputFocused}/>
      <BasketSidebar isBasketOpen={isCartSidebarOpen} onCloseBasket={() => setIsCartSidebarOpen(false)}/>
    </div>
  );
}
