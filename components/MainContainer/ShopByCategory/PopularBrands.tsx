import Image from "next/image";



const PopularBrands = () => {
    return (
        <>
            <div>
                <div className="my-10">
                    <h2 className="text-xl font-medium text-center">
                        محبوب ترین برندها
                    </h2>
                </div>

                <div className="flex flex-wrap justify-around gap-5 border border-gray-300 rounded-lg py-5">

                    <div className="w-[30%] lg:w-[10%] flex justify-center items-center">
                        <figure className="flex flex-col items-center">
                            <Image width={90} height={90} src="https://dkstatics-public.digikala.com/digikala-brands/2c36ceb629598fa31b9b321fcd4e47773bd93ef7_1649498016.png?x-oresize,m_lfit,h_160,w_160/quality,q_80" className="my-3" alt="photo" />
                        </figure>
                    </div>

                    <div className="w-[30%] lg:w-[10%] flex justify-center items-center">
                        <figure className="flex flex-col items-center">
                            <Image width={90} height={90} src="https://dkstatics-public.digikala.com/digikala-brands/7d615272ba7fc5dd708195ae858e2971de86a06f_1649498033.png?x-oresize,m_lfit,h_160,w_160/quality,q_80" className="my-3" alt="photo" />
                        </figure>
                    </div>

                    <div className="w-[30%] lg:w-[10%] flex justify-center items-center">
                        <figure className="flex flex-col items-center">
                            <Image width={90} height={90} src="https://dkstatics-public.digikala.com/digikala-brands/6091.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80" alt="photo" />
                        </figure>
                    </div>

                    <div className="w-[30%] lg:w-[10%] flex justify-center items-center">
                        <figure className="flex flex-col items-center">
                            <Image width={90} height={90} src="https://dkstatics-public.digikala.com/digikala-brands/3518.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80" alt="photo" />
                        </figure>
                    </div>

                    <div className="w-[30%] lg:w-[10%] flex justify-center items-center">
                        <figure className="flex flex-col items-center">
                            <Image width={90} height={90} src="https://dkstatics-public.digikala.com/digikala-brands/af664f0bcf9bc412b741c618e6e52fc2d090198f_1619269008.png?x-oresize,m_lfit,h_160,w_160/quality,q_80" className="my-3" alt="photo" />
                        </figure>
                    </div>

                    <div className="w-[30%] lg:w-[10%] flex justify-center items-center">
                        <figure className="flex flex-col items-center">
                            <Image width={90} height={90} src="https://dkstatics-public.digikala.com/digikala-brands/7857.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80" alt="photo" />
                        </figure>
                    </div>

                    <div className="w-[30%] lg:w-[10%] flex justify-center items-center">
                        <figure className="flex flex-col items-center">
                            <Image width={90} height={90} src="https://dkstatics-public.digikala.com/digikala-brands/100012423.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80" alt="photo" />
                        </figure>
                    </div>

                    <div className="w-[30%] lg:w-[10%] flex justify-center items-center">
                        <figure className="flex flex-col items-center">
                            <Image width={90} height={90} src="https://dkstatics-public.digikala.com/digikala-brands/3280.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80" alt="photo" />
                        </figure>
                    </div>

                </div>
            </div>
        </>
    );
}

export default PopularBrands;