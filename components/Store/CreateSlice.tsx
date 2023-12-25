import { create } from "zustand";
import { DataListArrayType, DataStoreType } from "./CreateSlice.types";
import axios from "axios";
import mainApi from "./Api/Api";


const initialState: DataListArrayType = {
    DataList: [],
    error: false,
    openSearchModalDesktop: false
}


const useDataStore = create<DataStoreType>((set) => ({
    ...initialState,
    fetchData: () => {
        axios.get(mainApi)
            .then(res => {
                set((state) => {
                    return {
                        ...state,
                        DataList: res.data
                    }
                })
            })
            .catch(err => {
                set((state) => {
                    return {
                        ...state,
                        error: true
                    }
                })
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