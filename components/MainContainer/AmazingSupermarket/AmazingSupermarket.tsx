"use client"

import Image from "next/image";
import bg from "../../../public/freshPattern.png"
import useDataStore from "@/components/Store/CreateSlice";
import LoadingPic from "../../../public/loading.gif"


const AmazingSupermarket = () => {
    const { DataList } = useDataStore(state => state)
    // console.log(DataList);

    return (
        <section className="amazing-supermarket-container">
            <div className="container mx-auto p-2 ">
                <div className="amazing-supermarket-top overflow-hidden">
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
                                    DataList.length > 0 ? (DataList?.slice(0, 7)?.map((el, ind) => (
                                        <section key={ind} className="w-[65px] h-[65px] rounded-full bg-white relative lg:w-[74px] lg:h-[74px] mr-1">
                                            <figure className="w-full h-full flex justify-center items-center">
                                                <Image width={30} height={30} alt="photo" src={el.image} />
                                                <figcaption className="absolute bottom-0 right-0 text-white bg-red-600 rounded-full px-2 text-xs">{el?.rating?.rate}%</figcaption>
                                            </figure>
                                        </section>
                                    ))) :
                                        <Image
                                            className="loading-logo"
                                            priority={true}
                                            src={LoadingPic}
                                            alt="loading"
                                            width={50}
                                            height={50}
                                        />
                                }

                            </div>

                            <div className="flex justify-center items-center">
                                <div className="w-[44px] h-[44px] rounded-full bg-white flex justify-center items-center">
                                    <i className="bi bi-arrow-left inline-flex text-xl "></i>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="amazing-supermarket-bottom mt-5">
                    <div className="flex flex-wrap gap-4 justify-between">
                        <section className="w-[40%] lg:w-[20%] 2xl:w-[15%]">
                            <figure className="rounded-xl overflow-hidden">
                                <Image width={218} height={163} src="https://dkstatics-public.digikala.com/digikala-adservice-banners/8058ea1aae6b95ef724356e11acc09c7ff51c66d_1701253928.jpg?x-oss-process=image/quality,q_95/format,webp" alt="پارتنرشیپ-مای لیدی" />
                            </figure>
                        </section>

                        <section className="w-[40%] lg:w-[20%] 2xl:w-[15%]">
                            <figure className="rounded-xl overflow-hidden">
                                <Image width={218} height={163} src="https://dkstatics-public.digikala.com/digikala-adservice-banners/7ab376a9399957fb53682c2b92c6c35d6b3ce954_1701253937.jpg?x-oss-process=image/quality,q_95/format,webp" alt="پارتنرشیپ-مای لیدی" />
                            </figure>
                        </section>

                        <section className="w-[40%] lg:w-[20%] 2xl:w-[15%]">
                            <section>
                                <figure className="rounded-xl overflow-hidden">
                                    <Image width={218} height={163} src="https://dkstatics-public.digikala.com/digikala-adservice-banners/98595c5c87356705ff388ae9e785114670a35055_1701254463.jpg?x-oss-process=image/quality,q_95/format,webp" alt="پارتنرشیپ-مای لیدی" />
                                </figure>
                            </section>
                        </section>

                        <section className="w-[40%] lg:w-[20%] 2xl:w-[15%]">
                            <section>
                                <figure className="rounded-xl overflow-hidden">
                                    <Image width={218} height={163} src="https://dkstatics-public.digikala.com/digikala-adservice-banners/a487e5e0d29b615218df7e8aa2092ffbe343fa77_1701777408.jpg?x-oss-process=image/quality,q_95/format,webp" alt="پارتنرشیپ-مای لیدی" />
                                </figure>
                            </section>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AmazingSupermarket;