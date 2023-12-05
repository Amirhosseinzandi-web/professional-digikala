"use client"

import Image from "next/image";
import bg from "../../../public/freshPattern.png"
import useDataStore from "@/components/Store/CreateSlice";
import LoadingPic from "../../../public/loading.gif"


const AmazingSupermarket = () => {
    const { DataList } = useDataStore(state => state)
    return (
        <section className="amazing-supermarket-container">
            <div className="container mx-auto p-2 flex justify-center">
                <div className="amazing-supermarket-top overflow-hidden">
                    <figure>
                        <Image src={bg} alt="background" width={500} height={100} />
                    </figure>

                    <div className="relative z-10 m-4 lg:flex lg:w-full lg:justify-between">
                        <div className="flex items-center">

                            <figure>
                                <Image src="https://www.digikala.com/statics/img/png/amazing/fresh.webp" alt="background" width={40} height={38} className="lg:w-[66px] lg:h-[66px]"/>
                            </figure>

                            <figure>
                                <Image src="https://www.digikala.com/statics/img/svg/typography/fresh.svg" alt="background" width={190} height={20} className="lg:w-[250px] lg:h-[38px]"/>
                            </figure>

                        </div>
                        <div className="flex justify-between">
                            <div className="flex">

                                <section className="w-[65px] h-[65px] rounded-full bg-white relative lg:w-[74px] lg:h-[74px] mr-1">
                                    <figure className="w-full h-full flex justify-center items-center">
                                        {
                                            DataList?.[5]?.image ? (
                                                <Image width={30} height={30} alt="photo" src={DataList[5].image} />
                                            ) : (
                                                <Image width={40} height={40} alt="loading" src={LoadingPic} />
                                            )
                                        }
                                        <figcaption className={`absolute bottom-0 right-0 text-white bg-red-600 rounded-full px-2 text-xs ${DataList?.[5]?.rating?.rate ? "block" : "hidden"}`}>{DataList?.[5]?.rating?.rate}%</figcaption>
                                    </figure>
                                </section>

                                <section className="w-[65px] h-[65px] rounded-full bg-white relative lg:w-[74px] lg:h-[74px] mr-1">
                                    <figure className="w-full h-full flex justify-center items-center">
                                        {
                                            DataList?.[6]?.image ? (
                                                <Image width={30} height={30} alt="photo" src={DataList[6].image} />
                                            ) : (
                                                <Image width={40} height={40} alt="loading" src={LoadingPic} />
                                            )
                                        }
                                        <figcaption className={`absolute bottom-0 right-0 text-white bg-red-600 rounded-full px-2 text-xs ${DataList?.[6]?.rating?.rate ? "block" : "hidden"}`}>{DataList?.[6]?.rating?.rate}%</figcaption>
                                    </figure>
                                </section>

                                <section className="w-[65px] h-[65px] rounded-full bg-white relative lg:w-[74px] lg:h-[74px] mr-1">
                                    <figure className="w-full h-full flex justify-center items-center">
                                        {
                                            DataList?.[7]?.image ? (
                                                <Image width={30} height={30} alt="photo" src={DataList[7].image} />
                                            ) : (
                                                <Image width={40} height={40} alt="loading" src={LoadingPic} />
                                            )
                                        }
                                        <figcaption className={`absolute bottom-0 right-0 text-white bg-red-600 rounded-full px-2 text-xs ${DataList?.[7]?.rating?.rate ? "block" : "hidden"}`}>{DataList?.[7]?.rating?.rate}%</figcaption>
                                    </figure>
                                </section>

                                <section className="w-[65px] h-[65px] rounded-full bg-white relative lg:w-[74px] lg:h-[74px] mr-1">
                                    <figure className="w-full h-full flex justify-center items-center">
                                        {
                                            DataList?.[8]?.image ? (
                                                <Image width={30} height={30} alt="photo" src={DataList[8].image} />
                                            ) : (
                                                <Image width={40} height={40} alt="loading" src={LoadingPic} />
                                            )
                                        }
                                        <figcaption className={`absolute bottom-0 right-0 text-white bg-red-600 rounded-full px-2 text-xs ${DataList?.[8]?.rating?.rate ? "block" : "hidden"}`}>{DataList?.[8]?.rating?.rate}%</figcaption>
                                    </figure>
                                </section>

                                <section className="w-[65px] h-[65px] rounded-full bg-white relative lg:w-[74px] lg:h-[74px] mr-1">
                                    <figure className="w-full h-full flex justify-center items-center">
                                        {
                                            DataList?.[9]?.image ? (
                                                <Image width={30} height={30} alt="photo" src={DataList[9].image} />
                                            ) : (
                                                <Image width={40} height={40} alt="loading" src={LoadingPic} />
                                            )
                                        }
                                        <figcaption className={`absolute bottom-0 right-0 text-white bg-red-600 rounded-full px-2 text-xs ${DataList?.[9]?.rating?.rate ? "block" : "hidden"}`}>{DataList?.[9]?.rating?.rate}%</figcaption>
                                    </figure>
                                </section>

                            </div>

                            <div className="flex justify-center items-center">
                                <div className="w-[44px] h-[44px] rounded-full bg-white flex justify-center items-center">
                                    <i className="bi bi-arrow-left inline-flex text-xl "></i>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default AmazingSupermarket;