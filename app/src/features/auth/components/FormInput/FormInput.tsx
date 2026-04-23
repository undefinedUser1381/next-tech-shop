import { UseFormRegister, FieldValues, FieldErrors, Path } from "react-hook-form";
import React from "react"; 

interface FormInputProps<T extends FieldValues> {
  inputConfigs: {
    label: string;
    icon: React.ReactNode;
    id: Path<T>; 
    type: string;
  };
  register: UseFormRegister<T>;
  error: FieldErrors<T>;
}

export default function FormInput<T extends FieldValues>({
  inputConfigs,
  error,
  register
}: FormInputProps<T>) { 

  const { id, label, type, icon } = inputConfigs;

  return (
   <div className="w-full flex flex-col gap-1.5 justify-start">
     <span className="text-[9px] text-gray-400">{label}</span>
     <label className="border-2 flex items-center justify-between bg-gray-50 rounded-lg duration-150 py-3 transition-all focus:border-primary p-2 w-full border-gray-100" htmlFor={id}>
         <input
            type={type}
            id={id}
            placeholder={label}
            className="w-full outline-0 text-[12px]"
            {...register(id)} 
         />
         {icon}
     </label>
     {error[id] && <p className="text-red-500 text-xs mt-1">- {error[id]?.message as string}</p>}
   </div>
 );
}
