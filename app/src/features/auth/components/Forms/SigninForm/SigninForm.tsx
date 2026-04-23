import * as yup from "yup";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { RiDoorOpenLine } from "react-icons/ri"; 
import FormInput from "../../FormInput/FormInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../../validation/loginSchema";

export default function SigninForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const submitData = (data: any) => {
    console.log(data, " => form data");
  };

  return (
    <form
      onSubmit={handleSubmit(submitData)}
      className="flex duration-200 mt-2.5 items-center justify-center mb-2 w-full flex-col pb-4 gap-5 px-10"
    >
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
        className="w-full flex items-center justify-center gap-1.5 bg-primary mt-1 cursor-pointer duration-200 transition-all hover:opacity-90 text-white p-2 text-sm rounded-lg"
      >
        ورود
        <RiDoorOpenLine size={18} />
      </button>
    </form>
  );
}
