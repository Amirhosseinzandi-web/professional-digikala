// "use client"
import { useState, useEffect } from "react"




const DesktopMenuBottom: React.FC = () => {
    // const [newFlag, setNewFlag] = useState(0);
    // const [oldFlag, setOldFlag] = useState(0)
    // const [itemIdMouseIn, setItemIdMouseIn] = useState("")
    // const [itemIdMouseOut, setItemIdMouseOut] = useState("")



    // const generateRedLine = (e: React.MouseEvent, flag: number) => {
    //     setNewFlag(flag)
    //     setOldFlag(newFlag)
    //     setItemIdMouseIn((e.currentTarget as HTMLElement).id)
    //     console.log("mouse enter");
        
    // }

    // const removeRedLine = (e: React.MouseEvent, flag: number) => {
    //     setNewFlag(flag)
    //     setOldFlag(newFlag)
    //     setItemIdMouseOut((e.currentTarget as HTMLElement).id)
    //     console.log("mouse out");
        
    // }
    

    // useEffect(() => {

    //     if (itemIdMouseIn !== "" && itemIdMouseIn && !isNaN(Number(itemIdMouseIn))) {
    //         let elem = document.querySelector(`.first div[id="${itemIdMouseIn}"]`)!
    //         if (elem) {

    //             let redLine = elem.querySelector("span.red-line")!
    //             if (redLine) {

    //                 if (newFlag > oldFlag) {
    //                     (redLine as HTMLElement).style.right = "0%";
    //                     (redLine as HTMLElement).style.left = "unset";
    //                     (redLine as HTMLElement).style.width = "120%";       
    //                 } else {
    //                     (redLine as HTMLElement).style.right = "unset";
    //                     (redLine as HTMLElement).style.left = "0%";
    //                     (redLine as HTMLElement).style.width = "120%";                       
    //                 }                    
    //             }
    //         }
    //     }
    // }, [newFlag])


    // useEffect(() => {
    //     if (itemIdMouseOut !== "" && itemIdMouseOut && !isNaN(Number(itemIdMouseOut))) {
    //         let elem = document.querySelector(`.first div[id="${itemIdMouseOut}"]`)!
    //         if (elem) {

    //             let redLine = elem.querySelector("span.red-line")!
    //             if (redLine) {

    //                 (redLine as HTMLElement).style.width = "0%";
    //             }
    //         }
    //     }
    // }, [itemIdMouseOut])

    return (
        <nav className="hidden lg:block desktop-menu-bottom container mx-auto px-3 border">
            <div className="flex w-full justify-between first">
                <div className="flex">

                    <div className="flex items-center cursor-pointer py-2 nav-items" id="1">
                        <i className="bi bi-justify hamburger-menu inline-flex text-lg"></i>
                        <p className="text-sm font-bold mr-1">دسته بندی کالا ها</p>
                        <span className="mr-5 light-gray-text opacity-40">|</span>
                        <span className="red-line"></span>
                    </div>

                    <div className="flex items-center mr-3 cursor-pointer py-2 nav-items" id="2">
                        <i className="bi bi-cookie light-gray-text text-sm inline-flex"></i>
                        <p className="desktop-menu-color text-xs mr-1">شگفت انگیزها</p>
                        <span className="red-line"></span>
                    </div>

                    <div className="flex items-center mr-6 cursor-pointer py-2 nav-items" id="3">
                        <i className="bi bi-basket light-gray-text text-sm inline-flex"></i>
                        <p className="desktop-menu-color text-xs mr-1">سوپرمارکت</p>
                        <span className="red-line"></span>
                    </div>

                    <div className="flex items-center mr-6 cursor-pointer py-2 nav-items" id="4">
                        <i className="bi bi-credit-card-2-back light-gray-text text-sm inline-flex"></i>
                        <p className="desktop-menu-color text-xs mr-1">کارت هدیه</p>
                        <span className="red-line"></span>
                    </div>

                    <div className="flex items-center mr-6 cursor-pointer py-2 nav-items" id="5">
                        <i className="bi bi-fire light-gray-text text-sm inline-flex"></i>
                        <p className="desktop-menu-color text-xs mr-1">پرفروش ترین ها</p>
                        <span className="mr-5 light-gray-text opacity-40">|</span>
                        <span className="red-line"></span>
                    </div>

                    <div className="flex items-center mr-3 cursor-pointer py-2 nav-items" id="6">
                        <p className="desktop-menu-color text-xs mr-1">سوالی دارید؟</p>
                        <span className="red-line"></span>
                    </div>

                    <div className="flex items-center mr-5 cursor-pointer py-2 nav-items" id="7">
                        <p className="desktop-menu-color text-xs mr-1">در دیجی کالا بفروشید!</p>
                        <span className="red-line"></span>
                    </div>

                </div>

                <div className="flex">

                    <div className="flex items-center cursor-pointer py-2 nav-items" id="8">
                        <i className="bi bi-balloon light-gray-text text-sm inline-flex"></i>
                        <p className="desktop-menu-color text-xs text-end">ارسال به تهران، تهران</p>
                        <span className="red-line"></span>
                    </div>

                </div>
            </div>
        </nav>
    );
}






export default DesktopMenuBottom;