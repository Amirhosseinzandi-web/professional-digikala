"use client"
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper/modules';
import LoadingPic from "../../../../public/loading.gif"
import "./DigikalaOfferSlider.css"

type moreCategoriesType = {
    firstSrc: string
    firstTitle: string
    secondSrc: string
    secondTitle: string
}


const DigikalaOffer: React.FC = () => {


    const moreCategories: moreCategoriesType[] = [
        {
            firstSrc: "https://dkstatics-public.digikala.com/digikala-products/ec9a962187e1f82cc47e7a148ef99ec1c6fd024d_1656423336.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
            firstTitle: "گوشی موبایل",
            secondSrc: "https://dkstatics-public.digikala.com/digikala-products/2a7c05fbbc272f35198071dd084756b206b44a49_1694700836.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
            secondTitle: "هدفون، هدست و هندزفری"
        },
        {
            firstSrc: "https://dkstatics-public.digikala.com/digikala-products/54eab84c83d2335de43895c4a29706cfa5accff5_1696526224.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
            firstTitle: "ساعت هوشمند",
            secondSrc: "https://dkstatics-public.digikala.com/digikala-products/4c0ad8206701dbb56f2e6cc8a15db3a9ce7befec_1671470920.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
            secondTitle: "لپ تاپ و الترابوک"
        },
        {
            firstSrc: "https://dkstatics-public.digikala.com/digikala-products/7f0c6c207a3c72b266fc96466ff2011b48bad06f_1700307536.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
            firstTitle: "کنسول خانگی",
            secondSrc: "https://dkstatics-public.digikala.com/digikala-products/8439c8877331c42e596b4b5af672a5c76ddc9d23_1684771641.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
            secondTitle: "جوراب مردانه"
        },
        {
            firstSrc: "https://dkstatics-public.digikala.com/digikala-products/5e17eff04fbf4054215f2e480c488e6268479f19_1601998557.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
            firstTitle: "مکمل دارویی",
            secondSrc: "https://dkstatics-public.digikala.com/digikala-products/8948c22b78a85ec54c944d842da991804b942927_1632295762.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
            secondTitle: "اسپیکر (بلندگو)"
        },
        {
            firstSrc: "https://dkstatics-public.digikala.com/digikala-products/827b353cd2a9c336d3e55fba3c97ea995297e32f_1690197872.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
            firstTitle: "تلویزیون",
            secondSrc: "https://dkstatics-public.digikala.com/digikala-products/e10938a8268399a90fdae8e245015cf765753be4_1613486389.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
            secondTitle: "لامپ و چراغ"
        },
        {
            firstSrc: "https://dkstatics-public.digikala.com/digikala-products/68971590561c982a47d0bd5df6e5ef686f24c15d_1641027821.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
            firstTitle: "سرخ کن",
            secondSrc: "https://dkstatics-public.digikala.com/digikala-products/0333a923f53d59fac216d97b7e7b2618531fa10d_1672647946.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
            secondTitle: "تبلت"
        },
        {
            firstSrc: "https://dkstatics-public.digikala.com/digikala-products/efa832aa8e59001a303aa5e1b428a9b9c0417345_1701586495.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
            firstTitle: "عروسک",
            secondSrc: "https://dkstatics-public.digikala.com/digikala-products/1555a206c56224ead35900e9ce882b245288f2a8_1628185143.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
            secondTitle: "شارژر تبلت و موبایل"
        }
    ];


    return (
        <>
            <section className="digikala-offer-container">
                <div className="container mx-auto px-2">
                    <div>
                        <h2 className="text-xl font-medium text-center">
                            پیشنهاد دیجی‌کالا
                        </h2>
                    </div>

                    <div className="flex flex-wrap mt-3 justify-around gap-5 border border-gray-300 rounded-lg overflow-hidden">
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
                                moreCategories?.map((item, i) => (
                                    <SwiperSlide key={i}>
                                        <div className="w-[236px] 2xl:w-[218px]">
                                            <section className="h-[50%] border-bottom-gray border-left-gray">

                                                <div className="h-full">
                                                    <div className="flex flex-col items-center w-full h-full overflow-hidden">
                                                        <div style={{ background: "var(--lightGrayBg)" }} className="w-[85px] h-[85px] rounded-full flex justify-center items-center overflow-hidden mt-4">
                                                            <Image className="mix-blend-multiply" width={100} height={100} src={item.firstSrc} alt="photo" />
                                                        </div>
                                                        <p className="text-sm font-semibold desktop-menu-color text-center my-4">{item.firstTitle}</p>
                                                    </div>
                                                </div>

                                            </section>

                                            <section className="h-[50%] border-left-gray">

                                                <div className="h-full">
                                                    <div className="flex flex-col items-center w-full h-full overflow-hidden">
                                                        <div>
                                                            <Image width={100} height={100} src={item.secondSrc} className="mt-4" alt="photo" />
                                                        </div>
                                                        <p className="text-sm font-semibold desktop-menu-color text-center my-4">{item.secondTitle}</p>
                                                    </div>
                                                </div>

                                            </section>

                                        </div>
                                    </SwiperSlide>
                                ))
                            }

                        </Swiper>

                    </div>
                </div>
            </section>
        </>
    );
}

export default DigikalaOffer;