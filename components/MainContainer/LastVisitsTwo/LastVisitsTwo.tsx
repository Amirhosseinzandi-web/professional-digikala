import Image from "next/image";


type dataType = {
    titel1: string
    title2: string
    img1: string
    img2: string
    img3: string
    img4: string
}


const LastVisitsTwo: React.FC = () => {

    const data: dataType[] = [
        {
            titel1: "ساعت عقربه ای مردانه",
            title2: "بر اساس بازدیدهای شما",
            img1: "https://dkstatics-public.digikala.com/digikala-products/ed34ed330b1efaedf070091d5bad2abb486fb276_1693220734.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            img2: "https://dkstatics-public.digikala.com/digikala-products/ff15ca5445c2b1fb7fa368686b42a79c45c5f9cd_1667298070.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            img3: "https://dkstatics-public.digikala.com/digikala-products/eb21f8ef000d17ca24e7404ea73d4000a5002e1c_1693221230.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            img4: "https://dkstatics-public.digikala.com/digikala-products/18f96568882150d84cc4e764bc04f9e61da76010_1693219755.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
        },
        {
            titel1: "کیبورد (صفحه کلید)",
            title2: "بر اساس بازدیدهای شما",
            img1: "https://dkstatics-public.digikala.com/digikala-products/2c0822714b842a29f671d38c39dd5a9ffa4f1be0_1697374868.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            img2: "https://dkstatics-public.digikala.com/digikala-products/911fc7719420f2819baadb344669307422ac7dbc_1666039190.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            img3: "https://dkstatics-public.digikala.com/digikala-products/9a51f6d0a7caf91b728a2f997fa26dcf4923d8cc_1698221603.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            img4: "https://dkstatics-public.digikala.com/digikala-products/dea0a99f2b0fc865c7063911c4bd22b4979719c7_1691318038.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
        },
        {
            titel1: "کیس کامپیوتر",
            title2: "بر اساس بازدیدهای شما",
            img1: "https://dkstatics-public.digikala.com/digikala-products/97c8c791688cbccd42483aa2bb67f8d31f870edc_1690038434.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            img2: "https://dkstatics-public.digikala.com/digikala-products/90b621ce7ba8962c9b83ffb4fa4bd4520ebb7658_1662576772.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            img3: "https://dkstatics-public.digikala.com/digikala-products/afb5a2b6c19602cff32dde0abdc54bfff9baa2bf_1599374562.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            img4: "https://dkstatics-public.digikala.com/digikala-products/7841ddef0065fde2ddb88edd8757dfc62a10c52e_1689779953.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
        },
        {
            titel1: "قابلمه و تابه",
            title2: "بر اساس بازدیدهای شما",
            img1: "https://dkstatics-public.digikala.com/digikala-products/25ea216b0188570f5465823696c02e8f5c6950d7_1657628113.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            img2: "https://dkstatics-public.digikala.com/digikala-products/b61e5ca62ebd7bed5e352c157edd78d233870209_1636266581.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            img3: "https://dkstatics-public.digikala.com/digikala-products/1b19575e2c8948c9363f8f636649c32ebdf8d3fa_1634119173.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            img4: "https://dkstatics-public.digikala.com/digikala-products/37a69dcffc2669e2690925806ec133a1a899a880_1706264366.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
        }
    ];


    return (
        <>
            <section className="last-visits-two-container my-8">
                <div className="lg:container mx-auto lg:px-2">
                    <div>
                        <div className="lg:border rounded-lg flex flex-wrap select-none">
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

export default LastVisitsTwo;