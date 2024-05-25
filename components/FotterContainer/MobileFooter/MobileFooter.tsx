"use client"

import Image from "next/image";
import { useEffect } from "react";


type DatasType = {
    title: string
    items: {
        item1: string
        item2: string
        item3: string
        item4?: string
        item5?: string
        item6?: string
    }
}


type businessPartners = {
    title: string;
    items: {
        imageUrl: string;
        alt: string;
    }[];
}[]


const MobileFooter = () => {


    const datas: DatasType[] = [
        {
            title: "با دیجی‌کالا",
            items: {
                item1: "اتاق خبر دیجی‌کالا",
                item2: "فروش در دیجی‌کالا",
                item3: "فرصت‌های شغلی",
                item4: "گزارش تخلف در دیجی‌کالا",
                item5: "تماس با دیجی‌کالا",
                item6: "درباره دیجی‌کالا",
            },
        },
        {
            title: "خدمات مشتریان",
            items: {
                item1: "پاسخ به پرسش‌های متداول",
                item2: "رویه‌های بازگرداندن کالا",
                item3: "شرایط استفاده",
                item4: "حریم خصوصی",
                item5: "گزارش باگ",
            },
        },
        {
            title: "راهنمای خرید از دیجی‌کالا",
            items: {
                item1: "نحوه ثبت سفارش",
                item2: "رویه ارسال سفارش",
                item3: "شیوه‌های پرداخت",
            },
        },
    ];

    const businessPartners: businessPartners = [
        {
            title: "شرکای تجاری",
            items: [
                {
                    imageUrl: "https://www.digikala.com/statics/img/svg/footer/digimag.svg",
                    alt: "مجله اینترنتی دیجی‌کالا مگ",
                },
                {
                    imageUrl: "https://www.digikala.com/statics/img/svg/footer/digipay.svg",
                    alt: "بهترین راهکارهای پرداخت آنلاین",
                },
                {
                    imageUrl: "https://www.digikala.com/statics/img/svg/footer/digistyle.svg",
                    alt: "خرید آنلاین مد و لباس از فروشگاه اینترنتی دیجی‌استایل با همان تجربه از دیجی‌کالا",
                },
                {
                    imageUrl: "https://www.digikala.com/statics/img/svg/footer/digiplus.svg",
                    alt: "خدمات ویژه دیجی‌کالا برای کاربران با اشتراک دیجی‌پلاس",
                },
                {
                    imageUrl: "https://www.digikala.com/statics/img/svg/footer/digiclub.svg",
                    alt: "دیجی کلاب باشگاه مشتریان دیجیکالا",
                },
                {
                    imageUrl: "https://www.digikala.com/statics/img/svg/footer/jet.svg",
                    alt: "خرید آنی سوپرمارکتی از فروشگاه های نزدیک",
                },
                {
                    imageUrl: "https://www.digikala.com/statics/img/svg/footer/digify.svg",
                    alt: "دیجی‌فای",
                },
                {
                    imageUrl: "https://www.digikala.com/statics/img/svg/footer/magnet.svg",
                    alt: "مگنت - پلتفرم بررسی و انتخاب کالا",
                },
                {
                    imageUrl: "https://www.digikala.com/statics/img/svg/footer/digiMehr.svg",
                    alt: "دیجیکالا مهر - زنجیره مهربانی و لبخند",
                },
                {
                    imageUrl: "https://www.digikala.com/statics/img/svg/footer/diginext.svg",
                    alt: "مرکز نوآوری و فناوری گروه دیجی‌کالا",
                },
                {
                    imageUrl: "https://www.digikala.com/statics/img/svg/footer/ganjeh.svg",
                    alt: "گنجه",
                },
                {
                    imageUrl: "https://www.digikala.com/statics/img/svg/footer/digiexpress.svg",
                    alt: "سیستم حمل و نقل دیجی‌کالا",
                },
                {
                    imageUrl: "https://www.digikala.com/statics/img/svg/footer/smartech.svg",
                    alt: "اسمارتک",
                },
                {
                    imageUrl: "https://www.digikala.com/statics/img/svg/footer/digikala-service.svg",
                    alt: "دیجی‌کالا سرویس",
                },
                {
                    imageUrl: "https://www.digikala.com/statics/img/svg/footer/digikala-business.svg",
                    alt: "دیجی‌کالا بیزینس",
                },
            ],
        },
    ];



    const GoTopHandler = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }


    useEffect(() => {
        document.querySelectorAll(".accordion-menu").forEach((item) => {
            const myElem = item as HTMLElement;
            const _height = (myElem.children[0] as HTMLElement).offsetHeight;
            myElem.style.height = `${_height}px`;
        })
    }, [])


    const openMenu = (e: React.MouseEvent) => {
        const el = e.currentTarget as HTMLElement;
        const _height = (el.children[0] as HTMLElement).offsetHeight;
        const currentHeight = el.style.height;
        const icon = el.querySelector("i") as HTMLElement;

        document.querySelectorAll(".accordion-menu").forEach((item) => {
            const myElem = item as HTMLElement;
            const _height = myElem.children[0].scrollHeight;
            myElem.style.height = `${_height}px`;
            (myElem.querySelector("i") as HTMLElement).style.transform = "unset";
            myElem.setAttribute("open-menu", "false")
        })


        if (currentHeight.includes("px")) {
            el.style.height = "auto"
            icon.style.transform = "rotate(180deg)"

        } else {
            el.style.height = `${_height}px`;
            icon.style.transform = "unset"
        }

    }


    return (
        <div className="mobile-footer-container lg:hidden">
            <div className="px-5">

                <div className="flex items-center justify-center gap-2 mt-3 cursor-pointer" onClick={GoTopHandler}>
                    <p className="text-sm text-[#19bfd3] text-center">بازگشت به بالا</p>
                    <i className="bi bi-arrow-up-short inline-flex text-[#19bfd3]"></i>
                </div>

                <div>

                    <div className="flex justify-between items-center border-b py-4 mt-2">
                        <div className="flex items-center gap-2">

                            <div className="w-[44px] flex justify-center">
                                <i className="bi bi-headphones inline-flex text-2xl"></i>
                            </div>

                            <div>
                                <div className="text-xs">۷ روز هفته، ۲۴ ساعت</div>
                                <div className="mt-2">
                                    <p className="font-bold text-sm">تماس به پشتیبانی</p>
                                </div>
                            </div>

                        </div>
                        <div>
                            <button className="text-xs px-4 py-3 border border-black rounded-md">تماس</button>
                        </div>
                    </div>

                    <div className="flex justify-between items-center border-b py-4">
                        <div className="flex items-center gap-2">

                            <div>
                                <figure className="w-[44px] h-[44px]">
                                    <Image src="https://www.digikala.com/statics/img/png/footerlogo2.webp" alt="digikala" width={100} height={100} className="w-full h-full" />
                                </figure>
                            </div>

                            <div>
                                <div className="text-xs">تجربه خرید بهتر در</div>
                                <div className="mt-2">
                                    <p className="font-bold text-sm">اپلیکیشن دیجی‌کالا</p>
                                </div>
                            </div>

                        </div>
                        <div>
                            <button className="text-xs px-4 py-3 bg-black text-white rounded-md">دانلود</button>
                        </div>
                    </div>

                    <div>
                        {
                            datas.map((i, ind) => (
                                <div key={ind} className="overflow-hidden accordion-menu border-b" onClick={(e) => openMenu(e)}>
                                    <div className="flex justify-between items-center cursor-pointer overflow-hidden">
                                        <h2 className="font-bold py-3">{i.title}</h2>
                                        <i className="bi bi-chevron-compact-down text-lg font-extrabold"></i>
                                    </div>
                                    <ul>
                                        {
                                            Object.keys(i.items).map((z, index) => (
                                                <li onClick={(e) => e.stopPropagation()} key={index} className="text-sm py-3">{i.items[z as keyof typeof i.items]}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            ))
                        }
                    </div>

                    <div>
                        {
                            businessPartners.map((i, ind) => (
                                <div key={ind} className="overflow-hidden accordion-menu border-b" onClick={(e) => openMenu(e)}>
                                    <div className="flex justify-between items-center cursor-pointer overflow-hidden">
                                        <h2 className="font-bold py-3">{i.title}</h2>
                                        <i className="bi bi-chevron-compact-down text-lg font-extrabold"></i>
                                    </div>
                                    <ul className="grid grid-cols-3 gap-[1px]" style={{ background: "rgba(209, 213, 219, 0.33)" }}>
                                        {
                                            (i.items).map((z, index) => (
                                                <li onClick={(e) => e.stopPropagation()} key={index} className="text-sm bg-white">
                                                    <figure className="relative w-[150px] h-[80px] flex justify-center items-center">
                                                        <Image src={z.imageUrl} alt="data" width={500} height={500} className="max-w-[110px] max-h-[20px]" />
                                                    </figure>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            ))
                        }
                    </div>

                </div>

            </div>
        </div>
    );
}

export default MobileFooter;