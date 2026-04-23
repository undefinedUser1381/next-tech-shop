import { TFilterObj } from "../types/filterStore"

const convertToMap = (list: TFilterObj[]) => {
    const filterMap = new Map();
    list.forEach((item) => {
        filterMap.set(item.type, item.value)
    })

    return filterMap
}

export { convertToMap }