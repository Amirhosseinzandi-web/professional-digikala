

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
}


export type DataStoreType = {
    DataList: ItemsType[]
    generateItems: (newRecords: ItemsType[]) => void
}