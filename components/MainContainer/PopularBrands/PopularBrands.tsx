"use client"

import "./PopularBrandsSlider.css"
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper/modules';
import BoxTitle from "@/components/Modules/BoxTitle/BoxTitle";
// import LoadingPic from "../../../../public/loading.gif"





type moreCategoriesType = {
    imageSrc: string
}


const PopularBrands: React.FC = () => {

    const moreCategories: moreCategoriesType[] = [

        {
            imageSrc: "https://dkstatics-public.digikala.com/digikala-brands/2c36ceb629598fa31b9b321fcd4e47773bd93ef7_1649498016.png?x-oresize,m_lfit,h_160,w_160/quality,q_80"
        },
        {
            imageSrc: "https://dkstatics-public.digikala.com/digikala-brands/7d615272ba7fc5dd708195ae858e2971de86a06f_1649498033.png?x-oresize,m_lfit,h_160,w_160/quality,q_80"
        },
        {
            imageSrc: "https://dkstatics-public.digikala.com/digikala-brands/6091.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
        },
        {
            imageSrc: "https://dkstatics-public.digikala.com/digikala-brands/3518.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
        },
        {
            imageSrc: "https://dkstatics-public.digikala.com/digikala-brands/af664f0bcf9bc412b741c618e6e52fc2d090198f_1619269008.png?x-oresize,m_lfit,h_160,w_160/quality,q_80"
        },
        {
            imageSrc: "https://dkstatics-public.digikala.com/digikala-brands/7857.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
        },
        {
            imageSrc: "https://dkstatics-public.digikala.com/digikala-brands/100012423.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
        },
        {
            imageSrc: "https://dkstatics-public.digikala.com/digikala-brands/3280.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
        },
        {
            imageSrc: "https://dkstatics-public.digikala.com/digikala-brands/e2d33dcdd991ae450ef90a6a3510e1cebe1056bb_1684054184.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
        },
        {
            imageSrc: "https://dkstatics-public.digikala.com/digikala-brands/2994.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
        }, {
            imageSrc: "https://dkstatics-public.digikala.com/digikala-brands/3960.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
        },
        {
            imageSrc: "https://dkstatics-public.digikala.com/digikala-brands/311.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
        }, {
            imageSrc: "https://dkstatics-public.digikala.com/digikala-brands/482302342bcecdf560aa25e7698c2ef8c62339ea_1602073618.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
        },
        {
            imageSrc: "https://dkstatics-public.digikala.com/digikala-brands/477ab48bb7261595c02cb0f4c504837e464f00d0_1663485028.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
        },
        {
            imageSrc: "https://dkstatics-public.digikala.com/digikala-brands/87dcb454f4d8df28bd2f8fd902f0f27b5fb1fac4_1666761801.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
        },
        {
            imageSrc: "https://dkstatics-public.digikala.com/digikala-brands/3f0e8a262651232007912c06d7cd69f7d9b4bfa4_1662306119.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
        },
        {
            imageSrc: "https://dkstatics-public.digikala.com/digikala-brands/627f3a8485f2884e7ae2951adf0761fc3792495e_1627386509.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
        },
        {
            imageSrc: "https://dkstatics-public.digikala.com/digikala-brands/3972.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
        },
        {
            imageSrc: "https://dkstatics-public.digikala.com/digikala-brands/5f9e5a98fc72f4eac2d4b4e6e4e6399ebd9aa65c_1646565463.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
        },
        {
            imageSrc: "https://dkstatics-public.digikala.com/digikala-brands/830.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
        }

    ]

    return (
        <>
            <section className="popular-brands mt-4">
                <div className="container mx-auto px-2">
                    <div className="border border-gray-300 rounded-lg overflow-hidden">
                        <div className="mt-6">
                            <div className="flex justify-center items-center">
                                <i style={{ color: "var(--gold)" }} className="bi bi-star-half inline-flex ml-2 text-xl"></i>
                                <BoxTitle showImg={false} title="محبوب ترین برندها"/>
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-around gap-5 py-5">

                            <Swiper
                                slidesPerView={"auto"}
                                spaceBetween={0}
                                freeMode={true}
                                grabCursor={true}
                                navigation={true}
                                modules={[FreeMode, Navigation]}
                                className="mySwiper"
                            >

                                {
                                    moreCategories?.map((el, index) => (
                                        <SwiperSlide className="border-left-gray" key={index}>
                                            <div className="w-[135px] flex justify-center items-center">
                                                <figure className="flex flex-col items-center">
                                                    <Image width={100} height={100} src={el.imageSrc} className="my-3" alt="photo" />
                                                </figure>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }


                            </Swiper>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default PopularBrands;