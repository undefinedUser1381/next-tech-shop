import Img1 from "../public/images/special-offer/airpod1.webp"
import Img2 from "../public/images/special-offer/head.png"
import Img3 from "../public/images/special-offer/iphone1.webp"
import Img4 from "../public/images/special-offer/iphone3.webp"
import Img5 from "../public/images/special-offer/lapp1.webp"
import Img6 from "../public/images/special-offer/lap2.webp"
import Img7 from "../public/images/blog/1.webp"
import Img8 from "../public/images/blog/2.webp"
import Img9 from "../public/images/blog/3.webp"
import Img10 from "../public/images/blog/4.webp"

const products = [
  {
    id: "1",
    title: "آیفون ۱۵ پرو مکس فلان",
    imgSrc: Img1,
    price: "۶۵,۰۰۰,۰۰۰ تومان",
    offPrice: "۶۲,۵۰۰,۰۰۰ تومان",
    offerPercent: "۴%",
    score: "۴.۹"
  },
  {
    id: "2",
    title: "محصول اپل (نامشخص)",
    imgSrc: Img2,
    price: "۱۰,۰۰۰,۰۰۰ تومان",
    offPrice: "۹,۵۰۰,۰۰۰ تومان",
    offerPercent: "۵%",
    score: "۴.۵"
  },
  {
    id: "3",
    title: "هدست گیمینگ حرفه‌ای",
    imgSrc: Img3,
    price: "۳,۵۰۰,۰۰۰ تومان",
    offPrice: "۳,۲۰۰,۰۰۰ تومان",
    offerPercent: "۹%",
    score: "۴.۳"
  },
  {
    id: "4",
    title: "ایرپاد نسل ۱",
    imgSrc: Img4,
    price: "۵,۵۰۰,۰۰۰ تومان",
    offPrice: "۵,۲۰۰,۰۰۰ تومان",
    offerPercent: "۵%",
    score: "۴.۶"
  },
  {
    id: "5",
    title: "ایرپاد پرو نسل ۲",
    imgSrc: Img5,
    price: "۹,۸۰۰,۰۰۰ تومان",
    offPrice: "۹,۰۰۰,۰۰۰ تومان",
    offerPercent: "۸%",
    score: "۴.۷"
  },
  {
    id: "6",
    title: "لپتاپ مک پرو ۱۶ اینچ",
    imgSrc: Img6,
    price: "۹۵,۰۰۰,۰۰۰ تومان",
    offPrice: "۹۲,۰۰۰,۰۰۰ تومان",
    offerPercent: "۳%",
    score: "۴.۹"
  },
  {
    id: "7",
    title: "لپتاپ بوک پرو ۱۶ اینچ",
    imgSrc: Img6,
    price: "۹۵,۰۰۰,۰۰۰ تومان",
    offPrice: "۹۲,۰۰۰,۰۰۰ تومان",
    offerPercent: "۳%",
    score: "۴.۹"
  }
  ,
  {
    id: "8",
    title: "لپتاپ ایسوس ویو بوک ۱۶ اینچ",
    imgSrc: Img6,
    price: "۹۵,۰۰۰,۰۰۰ تومان",
    offPrice: "۹۲,۰۰۰,۰۰۰ تومان",
    offerPercent: "۳%",
    score: "۴.۹"
  },
  {
    id: "9",
    title: "لپتاپ مک بوک پرو ۱۶ اینچ",
    imgSrc: Img6,
    price: "۹۵,۰۰۰,۰۰۰ تومان",
    offPrice: "۹۲,۰۰۰,۰۰۰ تومان",
    offerPercent: "۳%",
    score: "۴.۹"
  }
];

const latestProducts = [
  {
    id: "1",
    title: "آیفون ۱۵ پرو مکس فلان",
    imgSrc: Img1,
    price: "۶۵,۰۰۰,۰۰۰ تومان",
    offPrice: "۶۲,۵۰۰,۰۰۰ تومان",
    score: "۴.۹"
  },
  {
    id: "2",
    title: "محصول اپل (نامشخص)",
    imgSrc: Img2,
    price: "۱۰,۰۰۰,۰۰۰ تومان",
    offPrice: "۹,۵۰۰,۰۰۰ تومان",
    offerPercent: "۵%",
    score: "۴.۹"
  },
  {
    id: "3",
    title: "هدست گیمینگ حرفه‌ای",
    imgSrc: Img3,
    price: "۳,۵۰۰,۰۰۰ تومان",
    score: "۴.۹"
  },
  {
    id: "4",
    title: "ایرپاد نسل ۱",
    imgSrc: Img4,
    price: "۵,۵۰۰,۰۰۰ تومان",
    offPrice: "۵,۲۰۰,۰۰۰ تومان",
    offerPercent: "۵%",
    score: "۴.۹"
  },
  {
    id: "5",
    title: "ایرپاد پرو نسل ۲",
    imgSrc: Img5,
    price: "۹,۸۰۰,۰۰۰ تومان",
    score: "۴.۹"
  },
  {
    id: "6",
    title: "لپتاپ مک بوک پرو ۱۶ اینچ",
    imgSrc: Img6,
    price: "۹۵,۰۰۰,۰۰۰ تومان",
    offPrice: "۹۲,۰۰۰,۰۰۰ تومان",
    offerPercent: "۳%",
    score: "۴.۹"
  }
];


const blogs = [
  { id : 1 , src : Img7 , title : "بررسی آیفون ۱۷ پرو مکس؛ قهرمان استقامت یا غول بی‌احساس؟" , desc : "بررسی آیفون ۱۷ پرو مکس؛ قهرمان استقامت یا غول بی‌احساس؟ لورم لورم لورم لورم لورم" },
  { id : 2 , src : Img8 , title : "بررسی آیفون ۱۷ پرو مکس؛ قهرمان استقامت یا غول بی‌احساس؟" , desc : "بررسی آیفون ۱۷ پرو مکس؛ قهرمان استقامت یا غول بی‌احساس؟ لورم لورم لورم لورم لورم" },
  { id : 3 , src : Img9 , title : "بررسی آیفون ۱۷ پرو مکس؛ قهرمان استقامت یا غول بی‌احساس؟" , desc : "بررسی آیفون ۱۷ پرو مکس؛ قهرمان استقامت یا غول بی‌احساس؟ لورم لورم لورم لورم لورم" },
  { id : 4 , src : Img9 , title : "بررسی آیفون ۱۷ پرو مکس؛ قهرمان استقامت یا غول بی‌احساس؟" , desc : "بررسی آیفون ۱۷ پرو مکس؛ قهرمان استقامت یا غول بی‌احساس؟ لورم لورم لورم لورم لورم" },
  { id : 5 , src : Img9 , title : "بررسی آیفون ۱۷ پرو مکس؛ قهرمان استقامت یا غول بی‌احساس؟" , desc : "بررسی آیفون ۱۷ پرو مکس؛ قهرمان استقامت یا غول بی‌احساس؟ لورم لورم لورم لورم لورم" },
  { id : 6 , src : Img10 , title : "بررسی آیفون ۱۷ پرو مکس؛ قهرمان استقامت یا غول بی‌احساس؟" , desc : "بررسی آیفون ۱۷ پرو مکس؛ قهرمان استقامت یا غول بی‌احساس؟ لورم لورم لورم لورم لورم" },
  { id : 7 , src : Img10 , title : "بررسی آیفون ۱۷ پرو مکس؛ قهرمان استقامت یا غول بی‌احساس؟" , desc : "بررسی آیفون ۱۷ پرو مکس؛ قهرمان استقامت یا غول بی‌احساس؟ لورم لورم لورم لورم لورم" },
]


export { products, latestProducts , blogs }