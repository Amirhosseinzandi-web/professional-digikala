import Image from "next/image";




const ExpressServicesHub = () => {
    return (
        <section className="express-services-hub-container">
            <div className="container mx-auto flex flex-wrap justify-evenly lg:flex-nowrap">
                <div className="w-[25%] mt-6 my-1">
                    <figure className="flex flex-col items-center">
                        <Image src="https://dkstatics-public.digikala.com/digikala-bellatrix/d0dc31c892be8cf1408e4e14580b3f479da66bd1_1648897133.png" alt="search" width={50} height={50} />
                        <figcaption className="text-xs">دیجی کالا جت</figcaption>
                    </figure>
                </div>

                <div className="w-[25%] mt-6 my-1">
                    <figure className="flex flex-col items-center">
                        <Image src="https://dkstatics-public.digikala.com/digikala-bellatrix/ac127167132653d14c758748b07824a6a7643a31_1663444619.png" alt="search" width={50} height={50} />
                        <figcaption className="text-xs">دریافت وام</figcaption>
                    </figure>
                </div>

                <div className="w-[25%] mt-6 my-1">
                    <figure className="flex flex-col items-center">
                        <Image src="https://dkstatics-public.digikala.com/digikala-bellatrix/625d8883f37944f3f0c4af5fe39435600931ab22_1664309850.png" alt="search" width={50} height={50} />
                        <figcaption className="text-xs">حراج استایل</figcaption>
                    </figure>
                </div>

                <div className="w-[25%] mt-6 my-1">
                    <figure className="flex flex-col items-center">
                        <Image src="https://dkstatics-public.digikala.com/digikala-bellatrix/425c8f55c9bb5ad8e860bdc9f82421ce4fcc18de_1699778276.png" alt="search" width={50} height={50} />
                        <figcaption className="text-xs">سوپرمارکت</figcaption>
                    </figure>
                </div>

                <div className="w-[25%] mt-6 my-1">
                    <figure className="flex flex-col items-center">
                        <Image src="https://dkstatics-public.digikala.com/digikala-bellatrix/e8c1c372a304dc7c6ed600a6d4eb017f2aaea8cd_1697297561.png" alt="search" width={50} height={50} />
                        <figcaption className="text-xs">گیم نت</figcaption>
                    </figure>
                </div>

                <div className="w-[25%] mt-6 my-1">
                    <figure className="flex flex-col items-center">
                        <Image src="https://dkstatics-public.digikala.com/digikala-bellatrix/78ccd40cbf305fb067de78ddab5be84f69589c8d_1648897009.png" alt="search" width={50} height={50} />
                        <figcaption className="text-xs">دیجی پلاس</figcaption>
                    </figure>
                </div>

                <div className="w-[25%] mt-6 my-1">
                    <figure className="flex flex-col items-center">
                        <Image src="https://dkstatics-public.digikala.com/digikala-bellatrix/bfcafaf7f0afffbfd326adc48e29e3449dd69910_1688462197.png" alt="search" width={50} height={50} />
                        <figcaption className="text-xs">ارسال سریع</figcaption>
                    </figure>
                </div>

                <div className="w-[25%] mt-6 my-1 flex flex-col items-center">
                    <div className="w-[50px] h-[50px] rounded-full flex justify-center items-center overflow-hidden"><span className=" h-full text-2xl light-gray-text font-extrabold">...</span></div>
                    <p className="text-xs">بیشتر</p>

                </div>

            </div>
        </section>
    );
}

export default ExpressServicesHub;