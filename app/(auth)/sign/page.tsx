import Auth from "@/app/src/features/auth/components/Auth/Auth";
import { HiOutlineUser } from "react-icons/hi2";

export default function SignPage() {
  return (
    <div className="flex items-center pt-8 justify-center bg-white w-[25rem] mt-24 md:mt-44 rounded-3xl h-auto shadow-xl">
      <div className="flex flex-col w-full">
        <div className="flex flex-col items-center gap-4">
          <HiOutlineUser size={24} className="text-primary" />
          <p className="font-bold text-xl">ورود و عضویت</p>
        </div>
        <Auth />
      </div>
    </div>
  );
}
