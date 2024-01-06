"use client"

import useDataStore from "@/components/Store/CreateSlice"
import { memo, useEffect } from "react"
import Image from "next/image"
import { useQuery } from "react-query";
import Axios from "axios";
import mainApi from "@/components/Store/Api/Api"
import "../AmazingProductsCarousel/Slider.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper/modules';
import AmazingProductsCarouselLoading from "./AmazingProductsCarouselLoading"




const AmazingProductsCarousel = () => {
    const { DataList, setDataList, setLoadingHandler, setErrorStatus, errorStatus, loadingHandler } = useDataStore(state => state)

    const { data, isLoading, error } = useQuery(["test"], () => {
        return Axios.get(mainApi).then(res => res.data)
    })


    useEffect(() => {
        if (data) {
            setDataList(data)
        }

        if (!isLoading) {
            setLoadingHandler(false)
        }
        setErrorStatus(Boolean(error))

    }, [data, isLoading, error])



    return (
        <>
            {
                (errorStatus || loadingHandler) ?
                    <AmazingProductsCarouselLoading />
                    :
                    <section className="amzaing-products-carousel-container container mt-5 mx-auto p-3 rounded-xl">

                        <Swiper
                            slidesPerView={'auto'}
                            spaceBetween={2}
                            grabCursor={true}
                            navigation={true}
                            freeMode={true}
                            modules={[FreeMode, Navigation]}
                            className="mySwiper"
                        >

                            <SwiperSlide>
                                <div className="flex flex-col h-full items-center justify-evenly">
                                    <figure>
                                        <Image src="https://www.digikala.com/statics/img/svg/specialCarousel/Amazings.svg" width={72} height={77} alt="شگفت انگیز" />
                                    </figure>
                                    <figure>
                                        <Image src="https://www.digikala.com/statics/img/png/specialCarousel/box.webp" width={125} height={115} alt="شگفت انگیز" />
                                    </figure>
                                    <p className="text-white flex items-center text-sm font-medium mt-1 cursor-pointer">مشاهده همه <i className="bi bi-chevron-left inline-flex text-xs mr-1"></i></p>
                                </div>
                            </SwiperSlide>

                            {
                                DataList?.slice(0, 11)?.map((item, i) => (
                                    <SwiperSlide key={item.id}>
                                        <div className="amzaing-products-carousel-items flex flex-col items-center justify-around p-1 lttr bg-white">
                                            <figure className="flex justify-center items-center">
                                                <Image
                                                    src={item.image}
                                                    width={72}
                                                    height={77}
                                                    alt="data"
                                                />
                                            </figure>
                                            <p className={`text-sm desktop-menu-color font-medium`}>title : {item.category}</p>
                                            <p className={`text-sm desktop-menu-color font-medium`}>price : {item.price}$</p>
                                        </div>
                                    </SwiperSlide>
                                ))

                            }

                            <SwiperSlide>
                                <div className="flex flex-col items-center">
                                    <span><i className="bi bi-arrow-left-short"></i></span>
                                    <p className="mt-3">مشاهده همه</p>
                                </div>
                            </SwiperSlide>

                        </Swiper>


                    </section>
            }
        </>
    );
}

export default memo(AmazingProductsCarousel);
