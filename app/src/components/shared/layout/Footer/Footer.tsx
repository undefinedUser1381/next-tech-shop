import {
  FaPhone,
  FaEnvelope,
  FaClock,
  FaInstagram,
  FaTelegram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-white w-full text-gray-800 mt-10 py-10 px-5 rounded-3xl shadow-inner flex flex-col justify-around items-start text-right dir-rtl">
        <div className="flex flex-col md:flex-row items-start justify-between w-full">
          
          <div className="mb-8 md:mb-0 p-3 *:text-sm w-full flex flex-col gap-1">
            <h4 className="text-lg font-semibold mb-3 relative pb-1">
              تماس با ما
              <span className="absolute bottom-0 right-0 w-8 h-1 bg-primary"></span>
            </h4>

            <div className="flex items-center mb-2">
              <FaPhone className="text-primary text-xl ml-2" />
              <p>0912345678</p>
            </div>

            <div className="flex items-center mb-2">
              <FaEnvelope className="text-primary text-xl ml-2" />
              <p>info@shuner.ir</p>
            </div>

            <div className="flex items-center mb-3">
              <FaClock className="text-primary text-xl ml-2" />
              <p>ساعت پاسخگویی: 10 تا 22</p>
            </div>

            <div className="flex gap-4 mt-3">
              <a href="#" aria-label="Instagram">
                <FaInstagram className="text-gray-400 hover:text-blue-500 text-2xl transition" />
              </a>
              <a href="#" aria-label="Telegram">
                <FaTelegram className="text-gray-400 hover:text-blue-500 text-2xl transition" />
              </a>
            </div>
          </div>
          <div className="mb-8 md:mb-0 p-3 w-full">
            <h4 className="text-lg font-semibold mb-3 relative pb-1">
              دسترسی سریع
              <span className="absolute bottom-0 right-0 w-8 h-1 bg-primary"></span>
            </h4>

            <ul className="*:text-sm">
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  پنل کاربری
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  کاربری
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  پنل کاربری
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  کاربری
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-8 md:mb-0 p-3 w-full">
            <h4 className="text-lg font-semibold mb-3 relative pb-1">
              محبوب ها
              <span className="absolute bottom-0 right-0 w-8 h-1 bg-primary"></span>
            </h4>

            <ul className="*:text-sm">
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  لپ تاپ اپل
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  موبایل اپل
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  لپ تاپ اپل
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  موبایل اپل
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full p-3 pt-8 md:pt-3">
            <p className="text-gray-600 leading-relaxed">
              بوم تک بهترین فروشگاه کامپیوتری برای خرید های دیجیتالی شما .
            </p>
          </div>
        </div>

        <div className="flex items-center mt-10 justify-center w-full text-[12px]">
          <p>طراحی و توسعه توسط <span className="text-primary">سید عرفان قزی</span></p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
