"use client"

import { useState } from "react"
import SignupForm from "../Forms/SignupForm/SignupForm"
import SigninForm from "../Forms/SigninForm/SigninForm"

export default function Auth() {

  const [formMode , setFormMode] = useState<"register" | "login">("register")

  return (
    <section className="flex items-center flex-col gap-5 justify-center mt-7">
       <div className="flex flex-col sm:flex-row items-center justify-around w-[20rem] py-6 bg-gray-100 rounded-xl h-auto sm:h-8">
          <p onClick={() => setFormMode("register")} className={`block w-[90%] sm:w-[9rem] duration-150 transition-all hover:text-primary p-2 cursor-pointer ${ formMode === "register" ? "text-primary bg-white" : "" } text-center text-[15px] rounded-xl py-2`}>ثبت نام</p>
          <p onClick={() => setFormMode("login")} className={`block w-[90%] sm:w-[9rem] duration-150 transition-all hover:text-primary p-2 cursor-pointer ${ formMode === "login" ? "text-primary bg-white" : "" }  text-center text-[15px] rounded-xl py-2`}>ورود</p>
       </div>
       {
          formMode === "register" ? <SignupForm /> : <SigninForm />
       }
    </section>
  )
}
