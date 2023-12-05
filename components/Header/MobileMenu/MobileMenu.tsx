"use client"


import Image from "next/image";
import { useState, useEffect } from "react";



const MobileMenu: React.FC = () => {
    const [searchToggleBox, setSearchToggleBox] = useState(false)


    useEffect(() => {
        let searchBoxElem = document.querySelector(".serch-box-mobile-toggle")!
        if (searchBoxElem) {
            if (searchToggleBox) {
                document.documentElement.style.overflowY = "hidden";
                (document.querySelector(".searchBoxInp") as HTMLInputElement).focus()
            } else {
                document.documentElement.style.overflowY = "auto"
            }
        }

    }, [searchToggleBox])


    return (
        <>
            <section onClick={() => setSearchToggleBox(true)} className="p-2 mobile-menu-container lg:hidden">
                <div className="flex items-center">
                    <div className="flex items-center w-fit px-2">
                        <i className="bi bi-search light-gray-text text-lg"></i>
                        <p className="mx-3 text-sm light-gray-text font-medium">جستجو در</p>
                        <figure>
                            <Image src="https://www.digikala.com/statics/img/svg/digi.svg" alt="search" width={90} height={24} />
                        </figure>
                    </div>
                </div>
            </section>

            <section className={`serch-box-mobile-toggle ${searchToggleBox ? "serch-box-mobile-toggle-up" : "serch-box-mobile-toggle-down"}`}>
                <div className="py-4 px-4">
                    <div>
                        <i onClick={() => setSearchToggleBox(false)} className="bi bi-arrow-right cursor-pointer"></i>
                        <input autoFocus maxLength={50} className="searchBoxInp m-2 border w-[94%] pr-[40px]" type="text" placeholder="جستجو..." />
                    </div>
                </div>
            </section>
            <div className={`bg-shadow ${searchToggleBox ? "block" : "hidden"}`}></div>
        </>
    );
}

export default MobileMenu;