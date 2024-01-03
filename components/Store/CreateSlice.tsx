import { create } from "zustand";
import { DataListArrayType, DataStoreType } from "./CreateSlice.types";




const initialState: DataListArrayType = {
    DataList: [],
    errorStatus: false,
    loadingHandler: true,
    openSearchModalDesktop: false
}


const useDataStore = create<DataStoreType>((set) => ({
    ...initialState,
    setDataList: (newRecord) => {
        set((state) => {
            return {
                ...state,
                DataList: newRecord
            }
        })
    },
    setErrorStatus: (newRecord) => {
        set((state) => {
            return {
                ...state,
                errorStatus: newRecord
            }
        })
    },
    setLoadingHandler: (newRecord) => {
        set((state) => {
            return {
                ...state,
                loadingHandler: newRecord
            }
        })
    },
    setModalSearch: (newRecord) => {
        set(state => {
            return {
                ...state,
                openSearchModalDesktop: newRecord
            }
        })
    }
}))


export default useDataStore