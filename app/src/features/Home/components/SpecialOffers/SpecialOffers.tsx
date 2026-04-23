"use client"

import { FaArrowLeft } from 'react-icons/fa';
import { products } from '@/app/constants';
import SpecialOffersCart from './SpecialOffersCart/SpecialOffersCart';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Scrollbar } from 'swiper/modules'; 

const breakpoints = {
  0: {
    slidesPerView: 1.2,
    spaceBetween: 5,
  },
  576: {
    slidesPerView: 2,
    spaceBetween: 5,
  },
  768: {
    slidesPerView: 3.5,
    spaceBetween: 5,
  },
  992: {
    slidesPerView: 3.5,
    spaceBetween: 5,
  },
  1120: {
    slidesPerView: 4.3,
    spaceBetween: 5,
  },
}

export default function SpecialOffers() {
  return (
    <section className="mt-14 bg-white border-1 border-gray-200 h-auto p-5 py-7 rounded-3xl">
      <div className="flex items-center justify-start h-80"> 
        <div className="flex h-full items-center border-l-4 border-dotted w-48 pl-2.5 justify-start gap-3.5 flex-col">
            <h2 className="text-3xl text-center">پیشنهادات شگفت انگیز</h2>
            <div className="w-40 h-40">
             <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 24 24"><defs><linearGradient id="iconGradient" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="var(--color-primary)"></stop><stop offset="100%" stopColor="black"></stop></linearGradient></defs><path fill="url(#iconGradient)" d="M13.946 2.094a3 3 0 0 0-3.892 0L8.706 3.243a1 1 0 0 1-.569.236l-1.765.14A3 3 0 0 0 3.62 6.371l-.14 1.766a1 1 0 0 1-.237.569l-1.148 1.348a3 3 0 0 0 0 3.891l1.148 1.349a1 1 0 0 1 .236.569l.141 1.765a3 3 0 0 0 2.752 2.752l1.765.14a1 1 0 0 1 .57.237l1.347 1.148a3 3 0 0 0 3.892 0l1.348-1.148a1 1 0 0 1 .57-.236l1.765-.141a3 3 0 0 0 2.752-2.752l.14-1.765a1 1 0 0 1 .236-.57l1.149-1.347a3 3 0 0 0 0-3.892l-1.149-1.348a1 1 0 0 1-.236-.57l-.14-1.765a3 3 0 0 0-2.752-2.752l-1.766-.14a1 1 0 0 1-.569-.236zm.882 5.663l1.415 1.414l-7.071 7.072l-1.415-1.415zm-4.596 2.475a1.5 1.5 0 1 1-2.121-2.121a1.5 1.5 0 0 1 2.121 2.121m3.536 5.657a1.5 1.5 0 1 1 2.12-2.121a1.5 1.5 0 0 1-2.12 2.12"></path></svg>
            </div>
            <span className="text-gray-700 cursor-pointer text-sm flex items-center justify-center gap-2">نمایش همه <FaArrowLeft className='text-gray-600'/></span>
        </div>
        <Swiper
          modules={[ Scrollbar]}
          spaceBetween={20} 
          slidesPerView={4.4} 
          scrollbar={{ draggable: true }} 
          breakpoints={breakpoints}
          className="mySwiper" 
        >
          {
            products.map((product) => (
              <SwiperSlide key={product.id}>
                <SpecialOffersCart props={product} />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </section>
  );
}
