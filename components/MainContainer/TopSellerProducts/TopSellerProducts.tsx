"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper/modules';
import "./TopSellerProductsSlider.css"
import Image from 'next/image';



const TopSellerProducts: React.FC = () => {

    type ProductsType = {
        src: string
        alt: string
        text: string
    }

    const products: ProductsType[] = [
        {
            src: "https://dkstatics-public.digikala.com/digikala-products/96b6f0646a5ba3e560c909d495f174d7a2c65ad4_1684070603.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            alt: "گوشی موبایل سامسونگ مدل Galaxy A24 4G دو سیم کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت",
            text: "گوشی موبایل سامسونگ مدل Galaxy A24 4G دو سیم کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-products/b3fc8709835b119e98cf5b9147fe9f8c38934db5_1710170751.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            alt: "گوشی موبایل ریلمی مدل Note 50 ظرفیت 128 گیگابایت و رم 4 گیگابایت",
            text: "گوشی موبایل ریلمی مدل Note 50 ظرفیت 128 گیگابایت و رم 4 گیگابایت"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-products/19f32dc5db336fefe519d25770740c95fc1c358d_1709119546.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            alt: "تلویزیون کیو ال ای دی هوشمند جی پلاس مدل GTV-50RQ754N سایز 50 اینچ",
            text: "تلویزیون کیو ال ای دی هوشمند جی پلاس مدل GTV-50RQ754N سایز 50 اینچ"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-products/7b0419ac1e0211003c658885f947d0c2088ed8b7_1705400381.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            alt: "تلویزیون ال ای دی هوشمند نکسار مدل NTV-H43E614N سایز 43 اینچ",
            text: "تلویزیون ال ای دی هوشمند نکسار مدل NTV-H43E614N سایز 43 اینچ"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-products/0b7a39cead8f1294c2af6c8f948423359c6fab0e_1662894966.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            alt: "کیبورد تسکو مدل TK 8032 با حروف فارسی",
            text: "کیبورد تسکو مدل TK 8032 با حروف فارسی"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-products/f6c5aebca9b8df7db87f23049986b395742d7418_1637407846.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            alt: "ساعت مچی عقربه ای زنانه لاروس مدل 0417-79244G",
            text: "ساعت مچی عقربه ای زنانه لاروس مدل 0417-79244G"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-products/d84e03f2db08940c9b3059331614cea8460cd6e1_1671706620.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            alt: "ادکلن مردانه مولکول ویورک مدل شنل بلو د شنل&nbsp;حجم 200 میلی لیتر",
            text: "ادکلن مردانه مولکول ویورک مدل شنل بلو د شنل&nbsp;حجم 200 میلی لیتر"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-products/f426c35d5239faf0828e5ad22591e875507687ca_1704705889.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            alt: "هندزفری بلوتوثی تی سی اچ مدل TCH S33 ENC+ANC",
            text: "هندزفری بلوتوثی تی سی اچ مدل TCH S33 ENC+ANC"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-products/efc2087b5c550a65adf9f00170a5166bc3ddc70c_1704529153.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            alt: "گوشی موبایل موتورولا مدل Moto G54 5G دو سیم کارت ظرفیت 256 گیگابایت و رم 12 گیگابایت",
            text: "گوشی موبایل موتورولا مدل Moto G54 5G دو سیم کارت ظرفیت 256 گیگابایت و رم 12 گیگابایت"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-products/f992b92035d756f767b0ec1173d6dcc4c8c8afbf_1706622456.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            alt: "کاپوچینو جاموکا - 25 گرم بسته 10 عددی",
            text: "کاپوچینو جاموکا - 25 گرم بسته 10 عددی"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-products/23cfb01bca1d70200799e996bedab6c4464154f6_1689939804.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            alt: "  لوستر ام کی ای لایتینگ مدل مدرن کد Ringo-w60",
            text: "  لوستر ام کی ای لایتینگ مدل مدرن کد Ringo-w60"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-products/d124db6ef7cc8307041c4329a3ca24ba45c3e22d_1631347575.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            alt: "اسپیکر بلوتوثی تسکو مدل TS 2316",
            text: "اسپیکر بلوتوثی تسکو مدل TS 2316"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-products/3c7df5b965fc821b902ea7b9b11f3d3ad1089616_1639385048.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            alt: " سرویس پذیرایی 6 پارچه گلاسکو مدل نوبلیس",
            text: " سرویس پذیرایی 6 پارچه گلاسکو مدل نوبلیس"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-products/b5940c8b1d600409cbff2a8f875df339d7c50d9b_1702212312.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            alt: "لامپ 8 وات اس ام دی سایروکس مدل حبابی پایه E27 بسته دو عددی",
            text: "لامپ 8 وات اس ام دی سایروکس مدل حبابی پایه E27 بسته دو عددی"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-products/8ab5d0be76b7199273edda7ff19b8763e0d52be8_1656756871.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            alt: "گاز کولر انتخاب سرویس مدل R134a وزن 13.6 کیلوگرم",
            text: "گاز کولر انتخاب سرویس مدل R134a وزن 13.6 کیلوگرم"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-products/f3677da58ff79f4456c99964ec2ba6cbc3ae3571_1690889279.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            alt: "کوله پشتی فوروارد کد 6006blk به همراه جامدادی",
            text: "کوله پشتی فوروارد کد 6006blk به همراه جامدادی"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-products/435928a7029e82616749de456d5782b15866097a_1710187514.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            alt: "کافی میکس 3 در 1 جاموکا - 18 گرم بسته 16 عددی",
            text: "کافی میکس 3 در 1 جاموکا - 18 گرم بسته 16 عددی"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-products/f3cd0885d85c79b0565aada301ac9f552236963b_1667618237.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            alt: "لامپ هوشمند ال ای دی داشبورد خودرو آی لد مدل DB1033",
            text: "لامپ هوشمند ال ای دی داشبورد خودرو آی لد مدل DB1033"
        }
    ];

    let counter = 1

    return (
        <section className="top-seller-products-container my-8">
            <div className="container mx-auto px-2">
                <div className='border rounded-lg px-1 py-3'>
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

                                                <div className='flex gap-3 items-center border-b-2'>
                                                    <div>
                                                        <figure className='w-[86px] h-[86px]'>
                                                            <Image src={products[index].src} alt={products[index].alt} width={86} height={86} className='w-full h-full' />
                                                        </figure>
                                                    </div>
                                                    <div>
                                                        <p>{counter++}</p>
                                                    </div>
                                                    <div>
                                                        <p className="w-[90%] text-sm ellipse2">{products[index].text}</p>
                                                    </div>
                                                </div>

                                                <div className='flex gap-3 items-center border-b-2'>
                                                    <div>
                                                        <figure className='w-[86px] h-[86px]'>
                                                            <Image src={products[index + 1].src} alt={products[index + 1].alt} width={86} height={86} className='w-full h-full' />
                                                        </figure>
                                                    </div>
                                                    <div>
                                                        <p>{counter++}</p>
                                                    </div>
                                                    <div>
                                                        <p className="w-[90%] text-sm ellipse2">{products[index + 1].text}</p>
                                                    </div>
                                                </div>

                                                <div className='flex gap-3 items-center'>
                                                    <div>
                                                        <figure className='w-[86px] h-[86px]'>
                                                            <Image src={products[index + 2].src} alt={products[index + 2].alt} width={86} height={86} className='w-full h-full' />
                                                        </figure>
                                                    </div>
                                                    <div>
                                                        <p>{counter++}</p>
                                                    </div>
                                                    <div>
                                                        <p className="w-[90%] text-sm ellipse2">{products[index + 2].text}</p>
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

        </section>
    );
}

export default TopSellerProducts;