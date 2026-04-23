type TFilterObj = {
     type: string , value: string
}

type TFilterStore = {
    allFilters: TFilterObj[]
    handleFilter: (filterPayload: TFilterObj) => void
    handleEmptyFilters : () => void
}


export type { TFilterStore , TFilterObj }