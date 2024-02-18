import Image from "next/image";

type AllPhotosType = {
    src: string
    alt: string
}




const DigiPlus:React.FC = () => {

    const AllPhotos: AllPhotosType[] = [
        {
            src: "https://dkstatics-public.digikala.com/digikala-products/b94ea8bc33d7cb3ea9fe81f6b40b59ed09dde3b5_1630906332.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            alt: "رب طبیعت"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-products/373cf0add6b2964b30a9a59b2ce2f5f2c8ea976f_1681112650.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            alt: "1 موبایل"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-products/ad6854c3ac0aeae551e31d70b0f69ac651fa9c19_1653729496.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            alt: "1 روغن"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-products/7c391ac4335c87cc49b458650470ac240a6bf7da_1619600774.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            alt: "رب روژین"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-products/6ea8d1688bd9dda01dc7f5716bb7c84e9d9c3a0d_1652694146.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            alt: "روغن 2"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-products/f1c52ab36a753464bb6a17919f6b3f781acc44b5_1684135768.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            alt: "موبایل 2"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-products/e10938a8268399a90fdae8e245015cf765753be4_1613486389.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            alt: "ریسه"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-products/e653310af0d91f1a1af91ec44fb9a6993e51e38f_1598187909.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            alt: "خودکار"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-products/348e17f0fe855cb25127298fd5003460b3d29297_1690712123.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            alt: "موبایل 3"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-products/e528c4fc959a655b24d53ccbdb2369d991cd1215_1699681186.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            alt: "روغن غنچه"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-products/b8e58a24ffd11982d94ae7c436dae4c138523108_1684915061.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            alt: "موبایل 4"
        },
        {
            src: "https://dkstatics-public.digikala.com/digikala-products/9195e7d7ca87e8dac34d10c2af9a7567a0048363_1663692449.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            alt: "موبایل 5"
        },
    ]

    return (
        <>
            <section className="digi-plus-container my-9">
                <div className="lg:container lg:mx-auto lg:px-2">
                    <div className="lg:rounded-xl p-2 lg:p-4 lg:flex flex-wrap" style={{ background: "var(--purple)" }}>
                        <section className="digi-plus-container__right-item w-full lg:w-[35%] min-h-[350px] lg:min-h-[300px] p-4">
                            <figure>
                                <Image width={128} height={32} alt="digiplus" src="https://www.digikala.com/statics/img/svg/digiplus-logo.svg" />
                            </figure>
                            <p className="text-white text-sm">خدمات ویژه برای اعضای دیجی پلاس</p>
                            <button className="text-white flex items-center border border-white py-2 px-4 rounded-lg mt-4">
                                <span className="text-xs">عضویت</span>
                                <i className="bi bi-arrow-left inline-flex text-xl mr-2"></i>
                            </button>
                        </section>
                        <section className="bg-white w-full lg:w-[65%] rounded-md lg:rounded-xl overflow-hidden p-2">
                            <div className="flex justify-between">
                                <div className="flex items-center">
                                    <figure>
                                        <Image width={32} height={32} src="/immediate-delivery-icon.png" alt="immediate-delivery-icon" />
                                    </figure>
                                    <p className="font-bold text-sm mb-1">ارسال فوری رایگان</p>
                                </div>

                                <div className="flex items-center font-medium" style={{ color: "var(--purple)" }}>
                                    <p className="text-sm">مشاهده همه</p>
                                    <i className="bi bi-chevron-left text-xs mr-1"></i>
                                </div>

                            </div>
                            <div className="digi-plus-container__photos-part flex justify-evenly md:grid md:grid-cols-4 md:place-items-center md:grid-rows-2 lg:grid-cols-6 gap-7 my-3">
                                {
                                    AllPhotos?.map((item, ind) => (
                                        <figure key={ind} className="w-auto h-auto">
                                            <Image width={116} height={116} src={item.src} alt={item.alt} />
                                        </figure>
                                    ))
                                }
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </>
    );
}

export default DigiPlus;