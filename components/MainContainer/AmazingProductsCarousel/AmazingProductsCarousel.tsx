"use client"

import useDataStore from "@/components/Store/CreateSlice"
import axios from "axios"
import { memo, useEffect } from "react"
import Image from "next/image"
import LoadingPic from "../../../public/loading.gif"



const AmazingProductsCarousel = () => {
    const { generateItems, DataList, setError } = useDataStore(state => state)


    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/")
            .then(res => generateItems(res.data))
            .catch(err =>setError(true)
            )
    }, [])





    return (
        <section className="amzaing-products-carousel-container container mt-5 mx-auto p-3">
            <div className="flex lg:justify-between">

                <div className="flex flex-col items-center justify-evenly mx-1">
                    <figure>
                        <Image priority={true} src="https://www.digikala.com/statics/img/svg/specialCarousel/Amazings.svg" width={72} height={77} alt="شگفت انگیز" />
                    </figure>
                    <figure>
                        <Image priority={true} src="https://www.digikala.com/statics/img/png/specialCarousel/box.webp" width={125} height={115} alt="شگفت انگیز" />
                    </figure>
                    <p className="text-white flex items-center text-sm font-medium mt-1 cursor-pointer">مشاهده همه <i className="bi bi-chevron-left inline-flex text-xs mr-1"></i></p>
                </div>

                <div className="amzaing-products-carousel-items flex flex-col items-center justify-around rounded-r-lg p-1 lttr bg-white mx-1">
                    <figure className="flex justify-center items-center">
                        {
                            DataList?.[0]?.image ? (
                                <Image
                                    priority={false}
                                    src={DataList[0].image}
                                    width={72}
                                    height={77}
                                    alt="کیف"
                                />
                            ) : (
                                <Image
                                    className="loading-logo"
                                    priority={true}
                                    src={LoadingPic}
                                    alt="loading"
                                    width={50}
                                    height={50}
                                />
                            )
                        }
                    </figure>
                    <p className={`text-sm desktop-menu-color font-medium ${DataList?.[0] ? "block" : "hidden"}`}>title : {DataList?.[0]?.category}</p>
                    <p className={`text-sm desktop-menu-color font-medium ${DataList?.[0] ? "block" : "hidden"}`}>price : {DataList?.[0]?.price}$</p>
                </div>

                <div className="amzaing-products-carousel-items flex flex-col items-center justify-around p-1 lttr bg-white mx-1">
                    <figure className="flex justify-center items-center">
                        {
                            DataList?.[1]?.image ? (
                                <Image
                                    priority={false}
                                    src={DataList[1].image}
                                    width={72}
                                    height={77}
                                    alt="لباس1"
                                />
                            ) : (
                                <Image
                                    className="loading-logo"
                                    priority={true}
                                    src={LoadingPic}
                                    alt="loading"
                                    width={50}
                                    height={50}
                                />
                            )
                        }
                    </figure>
                    <p className={`text-sm desktop-menu-color font-medium ${DataList?.[1] ? "block" : "hidden"}`}>title : {DataList?.[1]?.category}</p>
                    <p className={`text-sm desktop-menu-color font-medium ${DataList?.[1] ? "block" : "hidden"}`}>price : {DataList?.[1]?.price}$</p>
                </div>

                <div className="amzaing-products-carousel-items hidden sm:flex flex-col items-center justify-around p-1 lttr bg-white mx-1">
                    <figure className="flex justify-center items-center">
                        {
                            DataList?.[2]?.image ? (
                                <Image
                                    priority={false}
                                    src={DataList[2].image}
                                    width={72}
                                    height={77}
                                    alt="لباس2"
                                />
                            ) : (
                                <Image
                                    className="loading-logo"
                                    priority={true}
                                    src={LoadingPic}
                                    alt="loading"
                                    width={50}
                                    height={50}
                                />
                            )
                        }
                    </figure>
                    <p className={`text-sm desktop-menu-color font-medium ${DataList?.[2] ? "block" : "hidden"}`}>title : {DataList?.[2]?.category}</p>
                    <p className={`text-sm desktop-menu-color font-medium ${DataList?.[2] ? "block" : "hidden"}`}>price : {DataList?.[2]?.price}$</p>
                </div>

                <div className="amzaing-products-carousel-items hidden md:flex flex-col items-center justify-around p-1 lttr bg-white mx-1 ">
                    <figure className="flex justify-center items-center">
                        {
                            DataList?.[3]?.image ? (
                                <Image
                                    priority={false}
                                    src={DataList[3].image}
                                    width={72}
                                    height={77}
                                    alt="لباس3"
                                />
                            ) : (
                                <Image
                                    className="loading-logo"
                                    priority={true}
                                    src={LoadingPic}
                                    alt="loading"
                                    width={50}
                                    height={50}
                                />
                            )
                        }
                    </figure>
                    <p className={`text-sm desktop-menu-color font-medium ${DataList?.[3] ? "block" : "hidden"}`}>title : {DataList?.[3]?.category}</p>
                    <p className={`text-sm desktop-menu-color font-medium ${DataList?.[3] ? "block" : "hidden"}`}>price : {DataList?.[3]?.price}$</p>
                </div>

                <div className="amzaing-products-carousel-items hidden lg:flex flex-col items-center justify-around p-1 lttr bg-white mx-1">
                    <figure className="flex justify-center items-center">
                        {
                            DataList?.[4]?.image ? (
                                <Image
                                    priority={false}
                                    src={DataList[4].image}
                                    width={72}
                                    height={77}
                                    alt="جواهر"
                                />
                            ) : (
                                <Image
                                    className="loading-logo"
                                    priority={true}
                                    src={LoadingPic}
                                    alt="loading"
                                    width={50}
                                    height={50}
                                />
                            )
                        }
                    </figure>
                    <p className={`text-sm desktop-menu-color font-medium ${DataList?.[4] ? "block" : "hidden"}`}>title : {DataList?.[4]?.category}</p>
                    <p className={`text-sm desktop-menu-color font-medium ${DataList?.[4] ? "block" : "hidden"}`}>price : {DataList?.[4]?.price}$</p>
                </div>

            </div>

        </section>
    );
}

export default memo(AmazingProductsCarousel);
