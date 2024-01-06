"use client"

import useDataStore from "@/components/Store/CreateSlice";
import Image from "next/image";


const CategorizedProducts = () => {
    const { DataList } = useDataStore(state => state)
    return (
        <section className="categorized-products">
            <div className="px-2 container mx-auto my-10 border">


                <section className="min-h-[412px]">
                    <p className="font-medium my-6">{"دسته بندی محصولات بر اساس Men's clothing"}</p>
                    <div className="flex flex-wrap justify-around gap-5 md:gap-1 lttr">
                        {
                            DataList?.length > 0 ? (
                                DataList.map((el) => {
                                    if (el.category === "men's clothing") {
                                        return (
                                            <div key={el.id} className="flex justify-evenly flex-col items-center p-1 border w-[40%] text-center md:w-[23%]">
                                                <figure className="border-bottom">
                                                    <Image width={60} height={60} alt="photo" src={el.image} />
                                                </figure>
                                                <p className="w-[90%] overflow-hidden whitespace-nowrap text-ellipsis text-sm desktop-menu-color font-medium border-bottom">Title : {el.title}</p>
                                                <p className="w-[90%] overflow-hidden whitespace-nowrap text-ellipsis text-sm desktop-menu-color font-medium border-bottom">Price : {el.price} $</p>
                                                <p className="w-[90%] overflow-hidden whitespace-nowrap text-ellipsis text-sm desktop-menu-color font-medium border-bottom">description : {el.description}</p>
                                                <p className="w-[90%] overflow-hidden whitespace-nowrap text-ellipsis text-sm desktop-menu-color font-medium border-bottom">category : {el.category}</p>
                                                <p className="w-[90%] overflow-hidden whitespace-nowrap text-ellipsis text-sm desktop-menu-color font-medium border-bottom">Rate : {el.rating.rate}</p>
                                                <p className="w-[90%] overflow-hidden whitespace-nowrap text-ellipsis text-sm desktop-menu-color font-medium border-bottom">Count : {el.rating.count}</p>
                                            </div>
                                        )
                                    }
                                })
                            ) : (<h1 className="w-full text-center font-bold">loading...</h1>)
                        }
                    </div>
                </section>




                <section className="min-h-[412px]">
                    <p className=" font-medium my-6">دسته بندی محصولات بر اساس jewelery</p>
                    <div className="flex flex-wrap justify-around gap-5 md:gap-1 lttr">
                        {
                            DataList?.length > 0 ? (
                                DataList.map((el) => {
                                    if (el.category === "jewelery") {
                                        return (
                                            <div key={el.id} className="flex justify-evenly flex-col items-center p-1 border w-[40%] text-center md:w-[23%]">
                                                <figure className="border-bottom">
                                                    <Image width={60} height={60} alt="photo" src={el.image} />
                                                </figure>
                                                <p className="w-[90%] overflow-hidden whitespace-nowrap text-ellipsis text-sm desktop-menu-color font-medium border-bottom">Title : {el.title}</p>
                                                <p className="w-[90%] overflow-hidden whitespace-nowrap text-ellipsis text-sm desktop-menu-color font-medium border-bottom">Price : {el.price} $</p>
                                                <p className="w-[90%] overflow-hidden whitespace-nowrap text-ellipsis text-sm desktop-menu-color font-medium border-bottom">description : {el.description}</p>
                                                <p className="w-[90%] overflow-hidden whitespace-nowrap text-ellipsis text-sm desktop-menu-color font-medium border-bottom">category : {el.category}</p>
                                                <p className="w-[90%] overflow-hidden whitespace-nowrap text-ellipsis text-sm desktop-menu-color font-medium border-bottom">Rate : {el.rating.rate}</p>
                                                <p className="w-[90%] overflow-hidden whitespace-nowrap text-ellipsis text-sm desktop-menu-color font-medium border-bottom">Count : {el.rating.count}</p>
                                            </div>
                                        )
                                    }
                                })
                            ) : (<h1 className="w-full text-center font-bold">loading...</h1>)
                        }
                    </div>
                </section>



                <section className="min-h-[412px]">
                    <p className=" font-medium my-6">دسته بندی محصولات بر اساس electronics</p>
                    <div className="flex flex-wrap justify-around gap-5 md:gap-1 lttr">
                        {
                            DataList?.length > 0 ? (
                                DataList.map((el) => {
                                    if (el.category === "electronics") {
                                        return (
                                            <div key={el.id} className="flex justify-evenly flex-col items-center p-1 border w-[40%] text-center md:w-[23%]">
                                                <figure className="border-bottom">
                                                    <Image width={60} height={60} alt="photo" src={el.image} />
                                                </figure>
                                                <p className="w-[90%] overflow-hidden whitespace-nowrap text-ellipsis text-sm desktop-menu-color font-medium border-bottom">Title : {el.title}</p>
                                                <p className="w-[90%] overflow-hidden whitespace-nowrap text-ellipsis text-sm desktop-menu-color font-medium border-bottom">Price : {el.price} $</p>
                                                <p className="w-[90%] overflow-hidden whitespace-nowrap text-ellipsis text-sm desktop-menu-color font-medium border-bottom">description : {el.description}</p>
                                                <p className="w-[90%] overflow-hidden whitespace-nowrap text-ellipsis text-sm desktop-menu-color font-medium border-bottom">category : {el.category}</p>
                                                <p className="w-[90%] overflow-hidden whitespace-nowrap text-ellipsis text-sm desktop-menu-color font-medium border-bottom">Rate : {el.rating.rate}</p>
                                                <p className="w-[90%] overflow-hidden whitespace-nowrap text-ellipsis text-sm desktop-menu-color font-medium border-bottom">Count : {el.rating.count}</p>
                                            </div>
                                        )
                                    }
                                })
                            ) : (<h1 className="w-full text-center font-bold">loading...</h1>)
                        }
                    </div>
                </section>


            </div>
        </section>
    );
}

export default CategorizedProducts;