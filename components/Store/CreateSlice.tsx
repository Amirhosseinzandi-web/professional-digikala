import { create } from "zustand";
import { DataListArrayType, DataStoreType } from "./CreateSlice.types";



const initialState : DataListArrayType = {
    DataList : [] ,
    error : false,
    openSearchModalDesktop : false
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
    } ,
    setModalSearch : (newRecord) =>{
        set(state=>{
            return {
                ...state , 
                openSearchModalDesktop : newRecord
            }
        })
    } 
}))


export default useDataStore