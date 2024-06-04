"use client"

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { businessPartners, dataContent, datas } from "../FootersDataApi/FootersDataApi";





const MobileFooter = () => {
    const [domLoaded, setDomloaded] = useState(false)
    const [showMore, setShowMore] = useState(false)




    useEffect(() => {

        const resizeHandler = () => {
            setDomloaded(!domLoaded)
        }

        window.addEventListener("resize", resizeHandler)

        return () => {
            window.removeEventListener("resize", resizeHandler)
        }
    })


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
    }, [domLoaded])




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
                                        <h2 className="font-bold py-3 select-none text-sm">{i.title}</h2>
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
                                        <h2 className="font-bold py-3 select-none text-sm">{i.title}</h2>
                                        <i className="bi bi-chevron-compact-down text-lg font-extrabold"></i>
                                    </div>
                                    <ul className="grid grid-cols-3 gap-[1px]" style={{ background: "rgba(209, 213, 219, 0.33)" }}>
                                        {
                                            (i.items).map((z, index) => (
                                                <li onClick={(e) => e.stopPropagation()} key={index} className="text-sm bg-white flex justify-center items-center">
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

                <div className="py-4 more-content-container">
                    <div className={`more-content-container__item ${showMore ? "h-auto" : "more-content--shadow h-[80px]"}`}>
                        {
                            dataContent.map((item, firstInd) => (
                                <React.Fragment key={firstInd}>
                                    <h1 className="text-sm mb-2">{item.firstTitle}</h1>
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
                    <button onClick={() => setShowMore(!showMore)} className="text-[#a1a3a8] font-bold text-[15px] flex items-center gap-2">{showMore ? "بستن" : "مشاهده بیشتر"}<i className="bi bi-chevron-left text-xs pr-1 pt-1"></i></button>
                </div>

            </div>
        </div>
    );
}

export default MobileFooter;