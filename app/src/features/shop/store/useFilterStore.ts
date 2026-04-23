import { create } from "zustand";
import { TFilterStore } from "../types/filterStore";


const useFilterStore = create<TFilterStore>((set) => ({
    allFilters: [],

    handleFilter(filterPayload) {
        set((state) => ({
            allFilters: [...state.allFilters, filterPayload]
        }))
    },

    handleEmptyFilters() {
        set(() => ({
            allFilters: []
        }))
    }
}));

export { useFilterStore }