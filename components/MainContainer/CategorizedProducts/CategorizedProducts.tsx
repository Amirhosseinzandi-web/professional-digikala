"use client"

import useDataStore from "@/components/Store/CreateSlice";
import ProductsItems from "./ProductsItems";


const CategorizedProducts = () => {
    const { DataList } = useDataStore(state => state)



    return (
        <section className="categorized-products">
            <div className="container mx-auto my-10 px-2">

                <div className="border p-6 rounded-lg">
                    <section className="min-h-[412px]">
                        <p className="font-medium my-6">{"دسته بندی محصولات بر اساس Men's clothing"}</p>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lttr">
                            {
                                DataList?.length > 0 && (
                                    DataList.map((el) => {
                                        if (el.category === "men's clothing") {
                                            return (
                                                <ProductsItems key={el.id} el={el} />
                                            )
                                        }
                                    })
                                )
                            }
                        </div>
                        <h1 className={` ${DataList.length>0 ? "hidden" : "block"} w-full font-bold text-center lttr`}>loading...</h1>
                    </section>




                    <section className="min-h-[412px]">
                        <p className=" font-medium my-6">دسته بندی محصولات بر اساس jewelery</p>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lttr">
                            {
                                DataList?.length > 0 && (
                                    DataList.map((el) => {
                                        if (el.category === "jewelery") {
                                            return (
                                                <ProductsItems key={el.id} el={el} />
                                            )
                                        }
                                    })
                                )
                            }
                        </div>
                        <h1 className={` ${DataList.length>0 ? "hidden" : "block"} w-full font-bold text-center lttr`}>loading...</h1>
                    </section>



                    <section className="min-h-[412px]">
                        <p className=" font-medium my-6">دسته بندی محصولات بر اساس electronics</p>
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lttr">
                            {
                                DataList?.length > 0 && (
                                    DataList.map((el) => {
                                        if (el.category === "electronics") {
                                            return (
                                                <ProductsItems key={el.id} el={el} />
                                            )
                                        }
                                    })
                                )
                            }
                        </div>
                        <h1 className={` ${DataList.length>0 ? "hidden" : "block"} w-full font-bold text-center lttr`}>loading...</h1>
                    </section>
                </div>

            </div>
        </section>
    );
}

export default CategorizedProducts;