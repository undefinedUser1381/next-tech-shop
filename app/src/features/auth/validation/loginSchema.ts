import * as yup from "yup"

const loginSchema = yup.object({
    email: yup.string().email("ایمیل را به درستی وارد نمایید !").required("این فیلد اجباری است !").trim(),
    password: yup.string().required("این فیلد اجباری است !").trim().min(8, "پسورد باید حداقل 8 کاراکتر باشد !"),
})

export { loginSchema }