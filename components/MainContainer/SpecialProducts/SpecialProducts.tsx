import Image from "next/image";
import "./responsive.scss"
import BoxTitle from "@/components/Modules/BoxTitle/BoxTitle";




const SpecialProducts: React.FC = () => {

    type DataType = {
        alt: string
        discount: string
        after_discount: string
        before_discount: string
        src: string
    }

    const data: DataType[] = [
        {
            alt: "سرویس قابلمه ۱۰ پارچه مدل دلسا B002",
            discount: "۴۲٪",
            after_discount: "۳,۴۹۹,۰۰۰",
            before_discount: "۶,۰۰۰,۰۰۰",
            src: "https://dkstatics-public.digikala.com/digikala-products/114112042.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
        },
        {
            alt: "ماوس مخصوص بازی یوسیتک مدل GM308",
            discount: "۵۶٪",
            after_discount: "۱۵۷,۰۰۰",
            before_discount: "۳۵۹,۰۰۰",
            src: "https://dkstatics-public.digikala.com/digikala-products/e16dc8c98bc28f0b7103f814001d10b07ebd7a7b_1704392846.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
        },
        {
            alt: "هدست بلوتوثی مدل spd",
            discount: "۸۹٪",
            after_discount: "۴۶۸,۰۰۰",
            before_discount: "۴,۳۰۰,۰۰۰",
            src: "https://dkstatics-public.digikala.com/digikala-products/4b84f37876897de501b622c0eedefdb9d8c07414_1713452532.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
        },
        {
            alt: "گوشی موبایل تی سی ال مدل 40 SE دو سیم کارت ظرفیت 256 گیگابایت و رم 6 گیگابایت",
            discount: "۲۴٪",
            after_discount: "۵,۸۵۱,۲۴۰",
            before_discount: "۷,۶۹۹,۰۰۰",
            src: "https://dkstatics-public.digikala.com/digikala-products/b31cf1cc502d7fc674e0b6c3d587e2a7aed1c3d6_1696081819.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
        },
        {
            alt: "سرویس قابلمه 4 پارچه مدل 2424",
            discount: "۵۰٪",
            after_discount: "۹۹۹,۹۰۰",
            before_discount: "۲,۰۰۰,۰۰۰",
            src: "https://dkstatics-public.digikala.com/digikala-products/dadd931c8022485900dbbcdaedfe3bda8cbb325f_1671740417.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
        },
        {
            alt: "هدفون بلوتوثی مدل AirPods Pro 2nd Generation ZAA",
            discount: "۸۸٪",
            after_discount: "۵۹۰,۰۰۰",
            before_discount: "۵,۰۰۰,۰۰۰",
            src: "https://dkstatics-public.digikala.com/digikala-products/8413adcfde281904bea6fae26dd2ff0fba58bbed_1713171479.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
        },
        {
            alt: "ست گیمینگ اونیکوما مدل TZ5006",
            discount: "۳۹٪",
            after_discount: "۱,۹۳۷,۰۰۰",
            before_discount: "۳,۲۰۰,۰۰۰",
            src: "https://dkstatics-public.digikala.com/digikala-products/9eb8557bf36c6a7cf17c2e527927237ee0bed5d4_1713958500.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
        },
        {
            alt: "کارت گرافیک ایسوس مدل PH-GT1030-O2G",
            discount: "۸٪",
            after_discount: "۴,۶۰۰,۰۰۰",
            before_discount: "۵,۰۰۰,۰۰۰",
            src: "https://dkstatics-public.digikala.com/digikala-products/1149519.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
        },
        {
            alt: "کیبورد و ماوس بی سیم ونزو مدل V-828",
            discount: "۵۰٪",
            after_discount: "۶۴۹,۰۰۰",
            before_discount: "۱,۳۰۰,۰۰۰",
            src: "https://dkstatics-public.digikala.com/digikala-products/727391ebfa68800bd30d1f4b3b4bcab00763abc0_1713347672.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
        },
        {
            alt: "سرویس تابه 4 پارچه مدل 428",
            discount: "۵۲٪",
            after_discount: "۱,۰۹۹,۰۰۰",
            before_discount: "۲,۲۷۰,۰۰۰",
            src: "https://dkstatics-public.digikala.com/digikala-products/4f91e8735277240cf2cfbc63957fb560e85d8c36_1656032352.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
        },
        {
            alt: "سرویس قابلمه 4 پارچه مدل 2424",
            discount: "۵۰٪",
            after_discount: "۹۹۹,۹۰۰",
            before_discount: "۲,۰۰۰,۰۰۰",
            src: "https://dkstatics-public.digikala.com/digikala-products/dadd931c8022485900dbbcdaedfe3bda8cbb325f_1671740417.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
        },
        {
            alt: "کیبورد مخصوص بازی تی کی ام بی مدل T68SE",
            discount: "۴۶٪",
            after_discount: "۲,۰۶۲,۸۰۰",
            before_discount: "۳,۸۲۰,۰۰۰",
            src: "https://dkstatics-public.digikala.com/digikala-products/75f312657d4505833c1a82038c8294182bd163eb_1709716600.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
        },
        {
            alt: "سرویس قابلمه 4 پارچه مدل سلین 2024",
            discount: "۵۰٪",
            after_discount: "۱,۴۹۹,۰۰۰",
            before_discount: "۳,۰۰۰,۰۰۰",
            src: "https://dkstatics-public.digikala.com/digikala-products/1b5f74601e2dfb75dd9bd4f8b8d1de4763ae08e8_1700549902.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
        },
        {
            alt: "سرویس پخت و پز ۱۰ پارچه مدل دلسا B001",
            discount: "۴۲٪",
            after_discount: "۳,۴۹۹,۰۰۰",
            before_discount: "۶,۰۰۰,۰۰۰",
            src: "https://dkstatics-public.digikala.com/digikala-products/114369246.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
        },
        {
            alt: "کارت گرافیک ای فاکس مدل Radeon R5 220",
            discount: "۱۹٪",
            after_discount: "۱,۳۰۰,۰۰۰",
            before_discount: "۱,۶۰۰,۰۰۰",
            src: "https://dkstatics-public.digikala.com/digikala-products/670af4730fe8f3845032f64d13386a41fc2e4299_1620576093.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
        },
        {
            alt: "هات چاکلت شادنوش بسته 20 عددی",
            discount: "۳۸٪",
            after_discount: "۸۵,۰۰۰",
            before_discount: "۱۳۸,۰۰۰",
            src: "https://dkstatics-public.digikala.com/digikala-products/f33a09e257d7956e9657ca67204bbf58be1158ad_1708932657.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
        },
        {
            alt: "ساعت مچی دیجیتال مدل اسپرت کد TAL2025",
            discount: "۶۰٪",
            after_discount: "۱۹۵,۰۰۰",
            before_discount: "۴۹۰,۰۰۰",
            src: "https://dkstatics-public.digikala.com/digikala-products/40afc9d890171181e721303e3aafbfcf398f6201_1714412272.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
        },
        {
            alt: "ماوس مدل G900",
            discount: "۵۱٪",
            after_discount: "۳۸۹,۰۰۰",
            before_discount: "۷۹۹,۰۰۰",
            src: "https://dkstatics-public.digikala.com/digikala-products/7adbca1af1917420a04a92f32b3f45d127456e1a_1657614788.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
        }
    ]


    return (
        <>
            <section className="special-products-container">
                <div className="lg:container lg:mx-auto px-2">
                    <div className="lg:border rounded-lg select-none py-9">
                        <BoxTitle showImg={true} title="منتخب محصولات تخفیف و حراج" src="/digikala-special-products.png" alt="pic"  mx="mx-auto"/>
                        <div className="special-products grid grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 mt-9">

                            {
                                data?.map((item, i) => (
                                    <div key={i} className="px-1 py-4 flex flex-col items-center gap-3">
                                        <figure className="w-[130px] h-[130px] lg:w-[150px] lg:h-[150px]">
                                            <Image src={item.src} alt={item.alt} width={150} height={150} className="w-full h-full" />
                                        </figure>
                                        <div className="w-[90%] flex justify-between">
                                            <span className="rounded-xl bg-rose-600 text-white px-2 text-xs flex justify-center items-center font-bold tracking-widest">{item.discount}</span>
                                            <div className="flex gap-1 items-center">
                                                <p className="font-medium">{item.after_discount}</p>
                                                <p className="font-medium text-xs">تومان</p>
                                            </div>
                                        </div>
                                        <p className="text-stone-400 text-xs w-[90%] text-end pl-8 line-through">{item.before_discount}</p>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SpecialProducts;