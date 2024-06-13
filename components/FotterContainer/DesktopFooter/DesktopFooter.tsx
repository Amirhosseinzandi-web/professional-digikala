"use client"

import Image from "next/image";
import React, { useState } from "react";
import kasboKarLogo from "../../../public/kasbokar.webp";
import enamadLogo from "../../../public/logo.png";
import reziLogo from "../../../public/rezi.webp";
import { dataContent, menuDatas, businessPartners } from "../FootersDataApi/FootersDataApi";



const DesktopFooter = () => {
    const [showMore, setShowMore] = useState(false)

    type DatasType = {
        imageUrl: string
        title: string
    }[]

    const datas: DatasType = [
        {
            imageUrl: "https://www.digikala.com//statics/img/svg/footer/express-delivery.svg",
            title: "اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس"
        },
        {
            imageUrl: "https://www.digikala.com//statics/img/svg/footer/cash-on-delivery.svg",
            title: "امکان پرداخت در محل"
        },
        {
            imageUrl: "https://www.digikala.com//statics/img/svg/footer/support.svg",
            title: "۷ روز ﻫﻔﺘﻪ، ۲۴ ﺳﺎﻋﺘﻪ"
        },
        {
            imageUrl: "https://www.digikala.com//statics/img/svg/footer/days-return.svg",
            title: "هفت روز ضمانت بازگشت کالا"
        },
        {
            imageUrl: "https://www.digikala.com//statics/img/svg/footer/original-products.svg",
            title: "ﺿﻤﺎﻧﺖ اﺻﻞ ﺑﻮدن ﮐﺎﻟﺎ"
        }
    ]




    const GoTopHandler = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }



    return (
        <>
            <section className="desktop-footer-container hidden lg:block border-t">
                <div className="container mx-auto px-2">

                    <div className="flex justify-between my-8">

                        <div>

                            <div>
                                <figure className="relative w-[136px] h-[30px]">
                                    <Image src={"https://www.digikala.com/statics/img/svg/digi.svg"} fill alt="digikala-logo" />
                                </figure>
                            </div>

                            <div className="flex items-center mt-4">
                                <p className="text-xs">تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</p>
                                <span className="text-[#a1a3a8] mx-5">|</span>
                                <p>۰۲۱-۹۱۰۰۰۱۰۰</p>
                                <span className="text-[#a1a3a8] mx-5">|</span>
                                <p className="text-xs">۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</p>
                            </div>

                        </div>

                        <div>
                            <button onClick={GoTopHandler} className="flex gap-2 border text-stone-500 text-xs items-center py-2 px-4 rounded-md">بازگشت به بالا <i className="bi bi-chevron-up inline-flex"></i></button>
                        </div>
                    </div>

                    <div className="flex justify-around">
                        {
                            datas?.map((item, ind) => (
                                <div key={ind} className="flex flex-col items-center">
                                    <figure className="relative w-[56px] h-[56px]">
                                        <Image fill src={item.imageUrl} alt={item.title} />
                                    </figure>
                                    <figcaption className="text-xs">{item.title}</figcaption>
                                </div>
                            ))
                        }
                    </div>

                    <div className="flex my-12">

                        {
                            menuDatas.map((item, firInd) => (
                                <React.Fragment key={firInd}>
                                    <div className="flex-grow flex flex-col gap-5">
                                        <h2 className="font-medium">{item.mainTitle}</h2>
                                        {
                                            item.secondaryTitles.map((elem, secInd) => (
                                                <React.Fragment key={secInd}>
                                                    <p className="text-[14px] text-stone-500">{elem.title}</p>
                                                </React.Fragment>
                                            ))
                                        }
                                    </div>
                                </React.Fragment>
                            ))
                        }

                        <div className="flex-grow-0 flex flex-col">
                            <h2 className="font-medium">همراه ما باشید!</h2>
                            <div className="flex justify-between my-5">
                                <i className="bi bi-instagram text-3xl text-stone-400"></i>
                                <i className="bi bi-twitter-x text-3xl text-stone-400"></i>
                                <i className="bi bi-line text-3xl text-stone-400"></i>
                                <i className="bi bi-linkedin text-3xl text-stone-400"></i>
                            </div>
                            <h2 className="font-medium my-5">با ثبت ایمیل، از تخفیف‌ها با‌خبر شوید</h2>
                            <div className="flex gap-2 justify-between">
                                <input type="text" placeholder="ایمیل شما" className="bg-[#f0f0f1] rounded-md px-3 font-medium border-0 outline-0" />
                                <button className="text-white bg-[#e0e0e2] rounded-md px-4 py-3 font-medium">ثبت</button>
                            </div>
                        </div>

                    </div>

                    <div className="p-5 bg-[#3c4b6d] rounded-md select-none flex justify-between">
                        <div className="flex gap-2 items-center">
                            <figure className="relative w-[44px] h-[44px]">
                                <Image fill src={"https://www.digikala.com/statics/img/png/footerlogo2.webp"} alt="logo" />
                            </figure>
                            <p className="text-xl text-white font-medium">دانلود اپلیکیشن دیجی‌کالا</p>
                        </div>
                        <div className="flex gap-5">
                            <figure className="relative rounded-md w-[142px] h-[44px]">
                                <Image alt="bazar" fill src={"https://www.digikala.com/statics/img/svg/appStores/coffe-bazzar.svg"} />
                            </figure>
                            <figure className="relative rounded-md w-[142px] h-[44px]">
                                <Image alt="myket" fill src={"https://www.digikala.com/statics/img/svg/appStores/myket.svg"} />
                            </figure>
                            <figure className="relative rounded-md w-[142px] h-[44px]">
                                <Image alt="sibapp" fill src={"https://www.digikala.com/statics/img/svg/appStores/sib-app.svg"} />
                            </figure>
                            <figure className="relative rounded-md w-[42px] h-[44px] bg-white">
                                <Image alt="new-app" fill src={"https://www.digikala.com/statics/img/svg/More.svg"} />
                            </figure>
                        </div>
                    </div>
                    <hr className="my-9" />

                    <div className="flex justify-between">
                        <div className="w-[66%]">
                            <div className="py-4 more-content-container">
                                <div className={`more-content-container__item ${showMore ? "h-auto" : "more-content--shadow h-[80px]"}`}>
                                    {
                                        dataContent.map((item, firstInd) => (
                                            <React.Fragment key={firstInd}>
                                                <h1 className="text-2xl text-[#62666d] font-extrabold mb-2">{item.firstTitle}</h1>
                                                <p className="text-[#81858b] text-xs leading-loose">{item.firtstTagContent}</p>
                                                {
                                                    item.otherContents.map((el, secondInd) => (
                                                        <React.Fragment key={secondInd}>
                                                            <h2 className="text-[#81858b] my-1 font-bold">{el.title}</h2>
                                                            <p className="text-[#81858b] text-xs leading-loose">{el.content}</p>
                                                        </React.Fragment>
                                                    ))
                                                }

                                            </React.Fragment>
                                        ))
                                    }
                                </div>
                                <button onClick={() => setShowMore(!showMore)} className="text-[#19bfd3] font-bold text-[15px] flex items-center gap-1 mt-3">{showMore ? "بستن" : "مشاهده بیشتر"}<i className="bi bi-chevron-left text-xs pr-1 pt-1"></i></button>
                            </div>
                        </div>

                        <div className="w-[30%] flex justify-end gap-2">
                            <div className="flex justify-center items-center rounded-lg border w-[109px] h-[109px]">
                                <figure className="w-[75px] h-[75px] relative">
                                    <Image fill src={reziLogo} alt="نشان ملی ثبت" />
                                </figure>
                            </div>
                            <div className="flex justify-center items-center rounded-lg border w-[109px] h-[109px]">
                                <figure className="w-[75px] h-[75px] relative">
                                    <Image fill src={kasboKarLogo} alt="نشان ملی ثبت" />
                                </figure>
                            </div>
                            <div className="flex justify-center items-center rounded-lg border w-[109px] h-[109px]">
                                <figure className="w-[75px] h-[75px] relative">
                                    <Image fill src={enamadLogo} alt="نشان ملی ثبت" />
                                </figure>
                            </div>
                        </div>

                    </div>

                    <hr className="mt-5" />
                    <p className="text-[#81858b] text-center text-xs my-9">برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع» کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه (فروشگاه آنلاین دیجی‌کالا) است.</p>
                </div>

                <div className="bg-[#f0f0f1]">
                    <div className="container mx-auto overflow-hidden">

                        <div className="grid grid-cols-8">
                            {
                                businessPartners[0].items?.slice(0, 8).map((i, index) => (
                                    <div key={index} className="h-[80px] border-l-2 border-b-2 flex justify-center items-center last:border-l-0">
                                        <figure>
                                            <Image width={600} height={600} src={i.imageUrl} alt={i.alt} className="max-w-[110px] xl:max-w-[150px] h-[20px]" />
                                        </figure>
                                    </div>
                                ))
                            }
                        </div>

                        <div className="grid grid-cols-6">
                            {
                                businessPartners[0].items?.slice(9, 15).map((i, index) => (
                                    <div key={index} className="h-[80px] border-l-2 border-b-2 flex justify-center items-center last:border-l-0">
                                        <figure>
                                            <Image width={600} height={600} src={i.imageUrl} alt={i.alt} className="max-w-[110px] xl:max-w-[150px] h-[20px]" />
                                        </figure>
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

export default DesktopFooter;