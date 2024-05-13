"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper/modules';
import "./TopSellerProductsSlider.css"
import Image from 'next/image';
import BoxTitle from '@/components/Modules/BoxTitle/BoxTitle';



type ProductsType = {
    src: string
    alt: string
    text: string
    num: string
}


const TopSellerProducts: React.FC = () => {


    const products: ProductsType[] = [
        {
            src: "https://dkstatics-public.digikala.com/digikala-products/2ab1f589cee7b8b62cfc6ca1ed91f9a10cfd496e_1662902252.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            alt: "پوشک بچه هانیز سایز 4 بسته 34 عددی",
            text: "پوشک بچه هانیز سایز 4 بسته 34 عددی",
            num: "۱"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-products/f55ceeffca5e2bdcc904dd939abc37e36cb0ad82_1657598550.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            alt: "اسپاگتی قطر 1.2 زر ماکارون مقدار 700 گرم",
            text: "اسپاگتی قطر 1.2 زر ماکارون مقدار 700 گرم",
            num: "۲"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-products/96cc6a20198b2985332be1f19ebcf36e3af4d7b7_1699186866.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            alt: "روغن سرخ کردنی غنچه - 1.5 لیتر",
            text: "روغن سرخ کردنی غنچه - 1.5 لیتر",
            num: "۳"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-products/121654059.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            alt: "پنیر فتا دوشه هراز - 400 گرم",
            text: "پنیر فتا دوشه هراز - 400 گرم",
            num: "۴"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-products/a53a52ac63771ba0dbb13e40b395b5cfbcd37b20_1678654164.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            alt: "نوار دستگاه تست قند خون ایزی گلوکو مدل اتوکدینگ بسته 50 عددی",
            text: "نوار دستگاه تست قند خون ایزی گلوکو مدل اتوکدینگ بسته 50 عددی",
            num: "۵"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-products/25a3509464b031408045c6f657d55b0a4bebaf66_1661075759.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            alt: "پوشک بچه هانیز سایز 5 بسته 28 عددی",
            text: "پوشک بچه هانیز سایز 5 بسته 28 عددی",
            num: "۶"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-products/ad6854c3ac0aeae551e31d70b0f69ac651fa9c19_1653729496.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            alt: "روغن آفتابگردان حاوی توکوفرول غنچه پلاس - 1800 میلی لیتر",
            text: "روغن آفتابگردان حاوی توکوفرول غنچه پلاس - 1800 میلی لیتر",
            num: "۷"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-products/2dba4180216c3deeff3655329e7fd1efd1390379_1659528467.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            alt: "لازانیا پیش پخت زر ماکارون - 500 گرم",
            text: "لازانیا پیش پخت زر ماکارون - 500 گرم",
            num: "۸"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-products/bb63c85bbd4d7781ad2b4513e1f52dce7e7ced6c_1618813597.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            alt: "کاغذ A4 کپی مکس کد 020 بسته 500 عددی",
            text: "کاغذ A4 کپی مکس کد 020 بسته 500 عددی",
            num: "۹"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-products/c5636babe93250ee8d32c9748da8732018af70ee_1609577970.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            alt: "پوشک کودک مولفیکس سایز 4 بسته 34 عددی",
            text: "پوشک کودک مولفیکس سایز 4 بسته 34 عددی",
            num: "۱۰"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-products/bc78de1c0210a5f9ce752f82de851fc7bf7cd01c_1709533747.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            alt: "بیسکویت گندم کامل ساقه طلایی مینو - 200 گرم",
            text: "بیسکویت گندم کامل ساقه طلایی مینو - 200 گرم",
            num: "۱۱"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-products/15f73330a521a53118766d8945eaf17f2cb17bf7_1627818065.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            alt: "پوشک کودک مولفیکس سایز 6 بسته 24 عددی",
            text: "پوشک کودک مولفیکس سایز 6 بسته 24 عددی",
            num: "۱۲"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-products/5d4956cf75c3113bb0fe079e2f691017ee99592d_1659790166.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            alt: "لوبیا قرمز همدل - 900 گرم",
            text: "لوبیا قرمز همدل - 900 گرم",
            num: "۱۳"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-products/5c110a918e2fc216a61ab81c356a7c0bc89d1352_1700314936.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            alt: "پودر رختشویی دستی سافتلن مقدار 500 گرم",
            text: "پودر رختشویی دستی سافتلن مقدار 500 گرم",
            num: "۱۴"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-products/dc1940616b8f53ffc260310173d5a28bdb01d118_1657707012.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            alt: "مايع ظرفشويی پريل مدل ليمويی وزن  1000 گرم",
            text: "مايع ظرفشويی پريل مدل ليمويی وزن  1000 گرم",
            num: "۱۵"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-products/875e77a2d2449c861f4a9a2431af39c995f5dacc_1621058916.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            alt: "مایع لباسشویی جنرال اکتیو مدل سبز حجم  2500 میلی لیتر",
            text: "مایع لباسشویی جنرال اکتیو مدل سبز حجم  2500 میلی لیتر",
            num: "۱۶"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-products/2113921.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            alt: "کاغذ A4 کپی مکس بسته 500 عددی",
            text: "کاغذ A4 کپی مکس بسته 500 عددی",
            num: "۱۷"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-products/b077b7e2b1abbb32b8703e8b75d4f7a9a6d0827f_1653732511.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            alt: "روغن کانولا غنچه - 900 میلی لیتر",
            text: "روغن کانولا غنچه - 900 میلی لیتر",
            num: "۱۸"
        }
    ];


    return (
        <section className="top-seller-products-container my-8">
            <div className="lg:container lg:mx-auto lg:px-2">
                <div className='border rounded-lg px-1 py-3 select-none'>
                    <div className='mb-9 mt-2 flex p-2 items-center'>
                        <div className='w-[50%] lg:w-[54%] flex justify-start lg:justify-end items-end gap-1'>
                            <BoxTitle showImg={true} title='پرفروش‌ترین کالاها' src='/top-seller.png' alt='top-sellers' />
                        </div>
                        <div className='w-[50%] lg:w-[46%] flex justify-end'>
                            <p className='text-center font-medium text-sm text-[#19bfd3]'>مشاهده همه</p>
                        </div>
                    </div>
                    <div>
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
                                products.map((item, index) => {
                                    if (index % 3 === 0) {
                                        return (
                                            <SwiperSlide className="!w-[314.5px] overflow-hidden mx-5" key={index}>
                                                <div className="flex flex-col gap-3">

                                                    <div className='flex items-center border-bottom-gray p-2 gap-3'>
                                                        <div>
                                                            <figure className='w-[86px] h-[86px]'>
                                                                <Image src={products[index].src} alt={products[index].alt} width={86} height={86} className='w-full h-full' />
                                                            </figure>
                                                        </div>
                                                        <div className=" flex justify-center">
                                                            <p className='text-[#19bfd3] text-4xl  font-extrabold text-center'>{products[index].num}</p>
                                                        </div>
                                                        <div>
                                                            <p className="w-[90%] text-xs ellipse2">{products[index].text}</p>
                                                        </div>
                                                    </div>

                                                    <div className='flex items-center border-bottom-gray p-2 gap-3'>
                                                        <div>
                                                            <figure className='w-[86px] h-[86px]'>
                                                                <Image src={products[index + 1].src} alt={products[index + 1].alt} width={86} height={86} className='w-full h-full' />
                                                            </figure>
                                                        </div>
                                                        <div className=" flex justify-center">
                                                            <p className='text-[#19bfd3] text-4xl  font-extrabold text-center'>{products[index + 1].num}</p>
                                                        </div>
                                                        <div>
                                                            <p className="w-[90%] text-xs ellipse2">{products[index + 1].text}</p>
                                                        </div>
                                                    </div>

                                                    <div className='flex items-center p-2 gap-3'>
                                                        <div>
                                                            <figure className='w-[86px] h-[86px]'>
                                                                <Image src={products[index + 2].src} alt={products[index + 2].alt} width={86} height={86} className='w-full h-full' />
                                                            </figure>
                                                        </div>
                                                        <div className=" flex justify-center">
                                                            <p className='text-[#19bfd3] text-4xl  font-extrabold text-center'>{products[index + 2].num}</p>
                                                        </div>
                                                        <div>
                                                            <p className="w-[90%] text-xs ellipse2">{products[index + 2].text}</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </SwiperSlide>
                                        );
                                    }
                                })
                            }


                        </Swiper>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default TopSellerProducts;