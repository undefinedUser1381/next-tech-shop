import { FaChevronLeft } from "react-icons/fa";

type TCategoryTitle = {
    icon : React.ReactNode
    title : string
    onSetCategory : (catTitle : string) => void
}

export default function CategoryTitleBox({icon , title , onSetCategory} : TCategoryTitle) {
  return (
    <div onMouseEnter={() => onSetCategory(title)} className='flex items-center justify-between p-2 rounded-lg'>
       <div className='flex items-center justify-start gap-2'>
         {icon}
         <span>{title}</span>
       </div>
       <FaChevronLeft size={16}/>
    </div>
  )
}
