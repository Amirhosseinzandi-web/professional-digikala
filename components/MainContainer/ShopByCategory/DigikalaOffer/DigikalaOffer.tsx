"use client"
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper/modules';
import LoadingPic from "../../../../public/loading.gif"
import "../DigikalaOffer/DigikalaOfferSlider.css"

type moreCategoriesType = {
    src: string
    title: string
}


const DigikalaOffer = () => {

    const moreCategories: moreCategoriesType[] = [
        {
            src: "https://dkstatics-public.digikala.com/digikala-products/ec9a962187e1f82cc47e7a148ef99ec1c6fd024d_1656423336.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
            title: "گوشی موبایل"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-products/fc93220eb5f822eb5cc93c3812c07fbd434a2fa1_1675534585.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
            title: "ساعت هوشمند"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-products/7feb4cb3c37a28289c1bbd7d24f06b1dca5caa4d_1695733063.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
            title: "لپ تاپ و اولترابوک"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-products/d1476a05bc84a98521a53fad140efa060a6c1bf9_1605099191.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
            title: "کنسول خانگی"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-categories/c2957abd1f437415eceb6428c7dce93ef3ee7495_1701193097.png",
            title: "زیبایی و سلامت"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-categories/3e3ec550569f974bc7e9d78c30b48612e5b1c606_1701193057.png",
            title: "خانه و آشپزخانه"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-categories/f1ff29c0399fdbeef7cef44bf6ec897f31287449_1701193077.png",
            title: "کتاب، لوازم تحریر و هنر"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-categories/f64a3adf6e327bf1b85ce43449740d974eaaf037_1701193104.png",
            title: "ورزش و سفر"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-categories/c48ab9fc81e7732a617f90eca608b943d4616ff7_1701193126.png",
            title: "محصولات بهداشتی"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-products/154366.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
            title: "بخاری برقی"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-products/73cff44507108a902b0d128e02f78524af0690eb_1641910933.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
            title: "مکمل ورزشی و تناسب اندام"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-products/19e5fcf7184fb562ce80d3b4fc846037ebff45b5_1692097050.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
            title: "هدفون، هدست و هندزفری"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-products/56e275dac1648915a8eb621ed818890220ae5608_1602679367.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
            title: "مکمل دارویی"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-products/5f25267956b47517b78356231977554803d11218_1693391335.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
            title: "لامپ و چراغ"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-products/343d9a4045a1f213bb565d4c59562092649717f1_1608126754.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
            title: "کاغذ"
        }
    ];


    return (
        <>
            <div className="shop-by-category-container__digikala-offer">
                <div>
                    <h2 className="text-xl font-medium text-center">
                        پیشنهاد دیجی‌کالا
                    </h2>
                </div>

                <div className="shop-by-category-container__digikala-offer__slider flex flex-wrap mt-3 justify-around gap-5 border border-gray-300 rounded-lg">
                    <Swiper
                        slidesPerView={7}
                        spaceBetween={0}
                        freeMode={true}
                        grabCursor={true}
                        navigation={true}
                        modules={[FreeMode, Navigation]}
                        className="mySwiper"
                    >

                        {
                            Array(9).fill(0)?.map((item, i) => (
                                <SwiperSlide key={i}>
                                    <div>
                                        <section className="h-[50%] border-bottom-gray border-left-gray">

                                            <div>
                                                <Image src={LoadingPic} width={90} height={90} alt="loading" />
                                            </div>

                                        </section>

                                        <section className="h-[50%] border-left-gray">

                                            <div>
                                                <Image src={LoadingPic} width={90} height={90} alt="loading" />
                                            </div>

                                        </section>

                                    </div>
                                </SwiperSlide>
                            ))
                        }


                    </Swiper>
                    {/* {
                        moreCategories?.map((item, i) => (
                            <div key={i} className="w-[30%] lg:w-[15%]">
                                <figure className="flex flex-col items-center">
                                    <Image width={90} height={90} src={item.src} className="my-3" alt="photo" />
                                    <figcaption className="text-sm desktop-menu-color text-center w-[95%] overflow-hidden whitespace-nowrap text-ellipsis">{item.title}</figcaption>
                                </figure>
                            </div>
                        ))
                    } */}
                </div>
            </div>
        </>
    );
}

export default DigikalaOffer;