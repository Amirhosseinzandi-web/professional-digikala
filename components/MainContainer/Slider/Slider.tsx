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
import LoadingPic from "../../../public/loading.gif"
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import SwiperCore from 'swiper';






const Slider = () => {
    const [swiperStatus, setSwiperStatus] = useState<SwiperCore | null>(null);
    const [isLoded, setIsLoded] = useState(false);



    useEffect(() => {
        setTimeout(() => {
            setIsLoded(true)
        }, 400)
    }, [])



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



    return (
        <section className={`slider container mx-auto mt-[60px] lg:mt-[130px] ${isLoded ? "" : "skeleton"}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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
                className={`mySwiper ${isLoded ? "" : "v-none"}`}
            >
                <SwiperSlide>
                    <figure>
                        <Image src={pic1} alt="pic1" width={1272} height={300} />
                    </figure>
                </SwiperSlide>

                <SwiperSlide>
                    <figure>
                        <Image src={pic2} alt="pic2" width={1272} height={300} />
                    </figure>
                </SwiperSlide>

                <SwiperSlide>
                    <figure>
                        <Image src={pic3} alt="pic3" width={1272} height={300} />
                    </figure>
                </SwiperSlide>

                <SwiperSlide>
                    <figure>
                        <Image src={pic4} alt="pic4" width={1272} height={300} />
                    </figure>
                </SwiperSlide>

                <SwiperSlide>
                    <figure>
                        <Image src={pic5} alt="pic5" width={1272} height={300} />
                    </figure>
                </SwiperSlide>

                <SwiperSlide>
                    <figure>
                        <Image src={pic6} alt="pic6" width={1272} height={300} />
                    </figure>
                </SwiperSlide>

                <SwiperSlide>
                    <figure>
                        <Image src={pic7} alt="pic7" width={1272} height={300} />
                    </figure>
                </SwiperSlide>

                <SwiperSlide>
                    <figure>
                        <Image src={pic8} alt="pic8" width={1272} height={300} />
                    </figure>
                </SwiperSlide>

                <SwiperSlide>
                    <figure>
                        <Image src={pic9} alt="pic9" width={1272} height={300} />
                    </figure>
                </SwiperSlide>

                <SwiperSlide>
                    <figure>
                        <Image src={pic10} alt="pic10" width={1272} height={300} />
                    </figure>
                </SwiperSlide>

            </Swiper>
        </section>
    );
}


export default memo(Slider);