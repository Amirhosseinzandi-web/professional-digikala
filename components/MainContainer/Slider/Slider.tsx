"use client"
import "./Slider.css"
import Image from "next/image";
import { memo, useEffect, useState } from "react"
import pic1 from "../../../public/1.webp"
import pic2 from "../../../public/2.webp"
import pic3 from "../../../public/3.webp"
import pic4 from "../../../public/4.webp"
import pic5 from "../../../public/5.webp"
import pic6 from "../../../public/6.webp"
import pic7 from "../../../public/7.webp"
import pic8 from "../../../public/8.webp"
import pic9 from "../../../public/9.webp"
import pic10 from "../../../public/10.gif"
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
import Skeleton from 'react-loading-skeleton'






const Slider = () => {
    const [swiperStatus, setSwiperStatus] = useState<SwiperCore | null>(null);
    const [isLoded, setIsLoded] = useState(false);


    const allPictures = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10]

    const swiperInit = (swiper: SwiperCore) => {
        setSwiperStatus(swiper);
    };



    const handleMouseEnter = () => {
        if (swiperStatus) {
            swiperStatus?.autoplay?.stop();
        }
    }


    const handleMouseLeave = () => {
        if (swiperStatus) {
            swiperStatus?.autoplay?.start();
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setIsLoded(true)
        }, 2000)
    }, [])



    return (
        <section className={`slider flex h-[268px] lg:h-[300px] xl:h-[400px] max-w-[1920px] mx-auto mt-[60px] lg:mt-[130px]`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {
                isLoded ?
                    <Swiper onSwiper={swiperInit}
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        grabCursor={true}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 5000,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation, Autoplay]}
                        className="mySwiper"
                    >
                        {
                            allPictures?.map((el, i) => (
                                <SwiperSlide key={i}>
                                    <figure>
                                        <Image src={el} alt="slider" width={1272} height={300} />
                                    </figure>
                                </SwiperSlide>
                            ))
                        }

                    </Swiper>
                    :
                    <Skeleton />
            }
        </section>
    );
}


export default memo(Slider);