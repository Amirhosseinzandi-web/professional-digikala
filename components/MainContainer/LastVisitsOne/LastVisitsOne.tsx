import Image from "next/image";


type dataType = {
    titel1: string
    title2: string
    img1: string
    img2: string
    img3: string
    img4: string
}


const LastVisitsOne: React.FC = () => {

    const data: dataType[] = [
        {
            titel1: "طبق آخرین بازدید هایتان",
            title2: "خرید نیمه تمام را با این پیشنهادها نهایی کنید",
            img1: "https://dkstatics-public.digikala.com/digikala-products/70619e891af27f9a915d53010245286b6582054b_1686639473.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            img2: "https://dkstatics-public.digikala.com/digikala-products/cf9dfd47ef1d85ac8d6901a5fc5954be37b441c1_1637077091.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            img3: "https://dkstatics-public.digikala.com/digikala-products/0d6d1daf67ea7cf76f677edde34c585ea5b898e8_1614519794.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            img4: "https://dkstatics-public.digikala.com/digikala-products/3699221.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
        },
        {
            titel1: "کیف و کاور گوشی",
            title2: "بر اساس بازدیدهای شما",
            img1: "https://dkstatics-public.digikala.com/digikala-products/878786a783dcf1748768edaa88242558db542d0a_1677417232.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            img2: "https://dkstatics-public.digikala.com/digikala-products/88a485d8d2883a63d9934b364b4937dfbcbb57a6_1644947100.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            img3: "https://dkstatics-public.digikala.com/digikala-products/2493eebb68e22bd982f15f59c47e2584003b8e2a_1662539027.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            img4: "https://dkstatics-public.digikala.com/digikala-products/2a219a00de515ffcfc5755b55c4b6b8d27506f17_1671259591.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
        },
        {
            titel1: "سرم و اسپری مو",
            title2: "بر اساس بازدیدهای شما",
            img1: "https://dkstatics-public.digikala.com/digikala-products/d95050937324918bab15e480177a70a49540b6f9_1670417309.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            img2: "https://dkstatics-public.digikala.com/digikala-products/3516298.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            img3: "https://dkstatics-public.digikala.com/digikala-products/34795b1ce3b08d1bbe096dc2bb9f6cb3f1136d0d_1606237754.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            img4: "https://dkstatics-public.digikala.com/digikala-products/1c011ef663a9c6c0ff25bce788f85058b81866fd_1668511212.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
        },
        {
            titel1: "شامپو مو",
            title2: "بر اساس بازدیدهای شما",
            img1: "https://dkstatics-public.digikala.com/digikala-products/b7d0569e1285bd1cf6296eef5466e6ecfbb44a32_1632563062.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            img2: "https://dkstatics-public.digikala.com/digikala-products/4442589.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            img3: "https://dkstatics-public.digikala.com/digikala-products/1268295.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            img4: "https://dkstatics-public.digikala.com/digikala-products/e906351ef28b1eacfc4a2b86006234925b8771d0_1699172914.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
        }
    ];


    return (
        <>
            <section className="last-visits-one-container">
                <div className="lg:container mx-auto lg:px-2">
                    <div>
                        <div className="lg:border rounded-lg flex flex-wrap select-none my-8">
                            <div className="w-full flex flex-wrap">

                                {
                                    data.map((item, ind) => (
                                        <section key={ind} className="w-[100%] lg:w-[25%] border-b lg:border-b-0 lg:border-l last-of-type:border-l-0 px-2 py-5">
                                            <div>
                                                <h2 className="font-semibold text-lg">{item.titel1}</h2>
                                                <p className="text-xs light-gray-text my-3">{item.title2}</p>
                                            </div>
                                            <div className="grid grid-cols-2 w-[88%] mx-auto" style={{ background: "rgb(209 213 219)", gap: "1px" }}>
                                                <section className="bg-white p-1 lg:p-1 flex justify-center items-center overflow-hidden">
                                                    <figure className="flex justify-center w-[96%] h-[96%]">
                                                        <Image src={item.img1} width={129.88} height={129.88} alt="picture" className="w-[100%] h-100% object-contain" />
                                                    </figure>
                                                </section>
                                                <section className="bg-white p-1 lg:p-1 flex justify-center items-center overflow-hidden">
                                                    <figure className="flex justify-center w-[96%] h-[96%]">
                                                        <Image src={item.img2} width={129.88} height={129.88} alt="picture" className="w-[100%] h-100% object-contain" />
                                                    </figure>
                                                </section>
                                                <section className="bg-white p-1 lg:p-1 flex justify-center items-center overflow-hidden">
                                                    <figure className="flex justify-center w-[96%] h-[96%]">
                                                        <Image src={item.img3} width={129.88} height={129.88} alt="picture" className="w-[100%] h-100% object-contain" />
                                                    </figure>
                                                </section>
                                                <section className="bg-white p-1 lg:p-1 flex justify-center items-center overflow-hidden">
                                                    <figure className="flex justify-center w-[96%] h-[96%]">
                                                        <Image src={item.img4} width={129.88} height={129.88} alt="picture" className="w-[100%] h-100% object-contain" />
                                                    </figure>
                                                </section>
                                            </div>
                                            <div className="flex justify-center items-center text-sm mt-3" style={{ color: "var(--lightBlue)" }}>
                                                <p className="cursor-pointer">مشاهده</p>
                                                <i className="bi bi-chevron-left text-xs pr-1"></i>
                                            </div>
                                        </section>
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default LastVisitsOne;