"use client"

import Image from "next/image";
import bg from "../../../public/freshPattern.png"
import useDataStore from "@/components/Store/CreateSlice";
import { memo } from "react";
import AmazingSupermarketLoading from "./AmazingSupermarketLoading";


const AmazingSupermarket = () => {
    const { DataList, loadingHandler, errorStatus } = useDataStore(state => state)

    return (
        <>
            {
                (loadingHandler || errorStatus) ?
                    <AmazingSupermarketLoading />
                    :
                    <section className="amazing-supermarket-container py-4">
                        <div className="container mx-auto px-2">
                            <div className="amazing-supermarket-top rounded-xl overflow-hidden">
                                <figure>
                                    <Image src={bg} alt="background" width={500} height={100} />
                                </figure>

                                <div className="relative z-10 m-4 lg:flex w-full lg:justify-between">
                                    <div className="flex items-center">

                                        <figure>
                                            <Image src="https://www.digikala.com/statics/img/png/amazing/fresh.webp" alt="background" width={40} height={38} className="lg:w-[66px] lg:h-[66px]" />
                                        </figure>

                                        <figure>
                                            <Image src="https://www.digikala.com/statics/img/svg/typography/fresh.svg" alt="background" width={190} height={20} className="lg:w-[250px] lg:h-[38px]" />
                                        </figure>

                                    </div>
                                    <div className="flex justify-between w-full">
                                        <div className="flex relative w-[70%] flex-wrap h-[65px] overflow-hidden lg:h-[74px] lg:w-[80%] lg:justify-evenly">

                                            {
                                                DataList?.slice(0, 7)?.map((el, ind) => (
                                                    <section key={ind} className="w-[65px] h-[65px] rounded-full bg-white relative lg:w-[74px] lg:h-[74px] mr-1">
                                                        <figure className="w-full h-full flex justify-center items-center">
                                                            <Image width={30} height={30} alt="photo" src={el.image} />
                                                            <figcaption className="absolute bottom-0 right-0 text-white bg-red-600 rounded-full px-2 text-xs">{el?.rating?.rate}%</figcaption>
                                                        </figure>
                                                    </section>
                                                ))
                                            }

                                        </div>

                                        <div className="flex justify-center items-center">

                                            <div className="w-[44px] h-[44px] rounded-full bg-white flex justify-center items-center lg:hidden">
                                                <i style={{ color: "var(--green" }} className="bi bi-arrow-left inline-flex text-xl "></i>
                                            </div>

                                            <div className="w-[145px] h-[44px] bg-white justify-center items-center hidden lg:flex rounded-[50px]">
                                                <div className="flex gap-2" style={{ color: "var(--green)" }}>
                                                    <p className="text-sm font-medium">بیش از ۱۰۰ کالا</p>
                                                    <i className="bi bi-arrow-left inline-flex text-xl "></i>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
            }
        </>
    );
}

export default memo(AmazingSupermarket);