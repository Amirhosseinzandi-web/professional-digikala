

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
    DataList: ItemsType[]
    errorStatus: boolean
    loadingHandler: boolean
    openSearchModalDesktop: boolean
}


export type DataStoreType = {
    DataList: ItemsType[]
    errorStatus: boolean
    setErrorStatus: (newRecord: boolean) => void
    loadingHandler: boolean
    setLoadingHandler: (newRecord: boolean) => void
    openSearchModalDesktop: boolean
    setDataList: (newRecord: ItemsType[]) => void
    setModalSearch: (newRecord: boolean) => void
}