

export type ItemsType = {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
        rate: number
        count: number
    }
}


export type DataListArrayType = {
    DataList : ItemsType[]
    error : boolean
    openSearchModalDesktop : boolean
}


export type DataStoreType = {
    DataList: ItemsType[]
    error : boolean
    openSearchModalDesktop : boolean
    fetchData: () => void
    setModalSearch : (newRecord:boolean) =>void
}