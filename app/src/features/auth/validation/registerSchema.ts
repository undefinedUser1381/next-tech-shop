import * as yup from "yup"

const registerSchema = yup.object({
    username : yup.string().trim().required("وارد کردن نام اجباری است !").min(5 , "حداقل 5 کاراکتر وارد نمایید !"),
    phone : yup.string().trim().required("شماره همراه اجباری است !").matches(/^09\d{9}$/ , "شماره همراه را به درستی وارد کنید !"),
    email : yup.string().trim().required("فیلد ایمیل اجباری است !").email("ایمیل را به درستی وارد نمایید !"),
    password : yup.string().required("رمز عبور اجباری است !").matches(/^(?=.*[A-Z])(?=.*\d).{8,}$/ , "پسورد باید حداقل ۸ کاراکتر، یک حرف بزرگ و یک عدد داشته باشد")
})

export { registerSchema }