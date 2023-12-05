import { create } from "zustand";
import { DataListArrayType, DataStoreType } from "./CreateSlice.types";



const initialState : DataListArrayType = {
    DataList : [] 
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
    }
}))


export default useDataStore