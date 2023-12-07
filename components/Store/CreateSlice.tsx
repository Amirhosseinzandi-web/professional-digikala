import { create } from "zustand";
import { DataListArrayType, DataStoreType } from "./CreateSlice.types";



const initialState : DataListArrayType = {
    DataList : [] ,
    error : false
}


const useDataStore = create<DataStoreType>((set)=>({
    ...initialState , 
    generateItems : (newRecords) =>{
        set((state)=>{
            return {
                ...state ,
                DataList : newRecords
            }
        })
    },
    setError : (newRecord) =>{
        set(state=>{
            return {
                ...state , 
                error : newRecord
            }
        })
    }
}))


export default useDataStore