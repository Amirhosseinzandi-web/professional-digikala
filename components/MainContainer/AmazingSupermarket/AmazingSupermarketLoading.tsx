import { memo } from "react";
import Skeleton from "react-loading-skeleton";


const AmazingSupermarketLoading = () => {


    return (
        <section className="amazing-supermarket-container--loading py-4">
            <div className="container mx-auto px-2">
                <div className="amazing-supermarket-top bg-white rounded-xl overflow-hidden">


                    <div className="relative z-10 m-4 lg:flex w-full lg:justify-between">
                        <div className="flex items-center">

                            <figure>
                                <Skeleton width={54.44} height={54.44} circle style={{ borderRadius: "50%" }} className="lg:w-[66px] lg:h-[66px]" />
                            </figure>

                            <figure>
                                <Skeleton width={175} height={8} style={{ borderRadius: "8px" }} className="lg:w-[250px] lg:h-[38px] mr-2" />
                            </figure>

                        </div>
                        <div className="flex justify-between w-full">
                            <div className="flex relative w-[70%] flex-wrap h-[65px] overflow-hidden lg:h-[74px] lg:w-[80%] lg:justify-evenly">

                                {
                                    Array(7).fill(0)?.map((el, ind) => (
                                        <section key={ind} className="w-[65px] h-[65px] rounded-full relative lg:w-[74px] lg:h-[74px] mr-1">
                                            <figure className="w-full h-full flex justify-center items-center">
                                                <Skeleton width={62} height={62} circle style={{ borderRadius: "50%" }} />
                                            </figure>
                                        </section>
                                    ))

                                }

                            </div>

                            <div className="flex justify-center items-center">

                                <div className="w-[44px] h-[44px] rounded-full flex justify-center items-center lg:hidden">
                                    <Skeleton width={44} height={44} circle style={{ borderRadius: "50%" }} />
                                </div>

                                <div className="w-[145px] h-[44px] justify-center items-center hidden lg:flex rounded-[50px]">
                                    <div className="flex flex-col items-end gap-2" style={{ color: "var(--green)" }}>
                                        <Skeleton width={140} height={10} style={{ borderRadius: "8px"}}/>
                                        <Skeleton width={100} height={10} style={{ borderRadius: "8px"}}/>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default memo(AmazingSupermarketLoading);