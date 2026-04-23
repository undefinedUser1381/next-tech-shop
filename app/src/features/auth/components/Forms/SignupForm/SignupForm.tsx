import FormInput from "../../FormInput/FormInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaUserCircle } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdPersonAdd } from 'react-icons/md'; 
import { registerSchema } from "../../../validation/registerSchema";

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const submitData = (data: any) => {
    console.log(data, " => form data");
  };

  return (
    <form
      onSubmit={handleSubmit(submitData)}
      className="flex duration-200 mt-2.5 items-center justify-center w-full flex-col mb-2 pb-4 gap-5 px-10"
    >
      <FormInput
        inputConfigs={{
          label: "نام و نام خانوادگی",
          icon: <FaUserCircle className="text-gray-400" size={18} />,
          id: "username",
          type: "text",
        }}
        register={register}
        error={errors}
      />
      <FormInput
        inputConfigs={{
          label: "شماره موبایل",
          icon: <FaPhone className="text-gray-400" size={18} />,
          id: "phone",
          type: "text",
        }}
        register={register}
        error={errors}
      />
      <FormInput
        inputConfigs={{
          label: "ایمیل",
          icon: <FaEnvelope className="text-gray-400" size={18} />,
          id: "email",
          type: "email",
        }}
        register={register}
        error={errors}
      />
      <FormInput
        inputConfigs={{
          label: "رمزعبور",
          icon: <FaLock className="text-gray-400" size={18} />,
          id: "password",
          type: "password",
        }}
        register={register}
        error={errors}
      />
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-primary mt-1 cursor-pointer duration-200 transition-all hover:opacity-90 text-white p-2 text-sm rounded-lg"
      >
        ثبت نام
        <MdPersonAdd size={18}/>
      </button>
    </form>
  );
}
