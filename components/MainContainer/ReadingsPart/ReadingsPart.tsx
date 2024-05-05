import Image from "next/image";


type ArticleType = {
    src: string
    alt: string
    text: string
}


const ReadingsPart = () => {

    const articles: ArticleType[] = [
        {
            src: "https://www.digikala.com/mag/wp-content/uploads/2024/04/01.28-12.jpg",
            alt: "بررسی شیکر گرین لاین مدل شارژی ۵۵W Portable؛ با قابلیت خودشور و با کیفیت بالا",
            text: "بررسی شیکر گرین لاین مدل شارژی ۵۵W Portable؛ با قابلیت خودشور و با کیفیت بالا"
        },
        {
            src: "https://www.digikala.com/mag/wp-content/uploads/2024/05/tinsel.jpg",
            alt: "لمه‌ی مو چیست و چطور می‌توان آن را روی موها نصب کرد؟",
            text: "لمه‌ی مو چیست و چطور می‌توان آن را روی موها نصب کرد؟"
        },
        {
            src: "https://www.digikala.com/mag/wp-content/uploads/2024/04/01.28-11.jpg",
            alt: "بررسی شومیز آستین بلند زنانه مدل D100؛ زیبا، خوش فرم و چشم‌نواز",
            text: "بررسی شومیز آستین بلند زنانه مدل D100؛ زیبا، خوش فرم و چشم‌نواز"
        },
        {
            src: "https://www.digikala.com/mag/wp-content/uploads/2024/05/Best-Redmi-13C-Accessories-12.jpg",
            alt: "محبوب‌ترین لوازم جانبی ردمی ۱۳C شیائومی در دیجی‌کالا",
            text: "محبوب‌ترین لوازم جانبی ردمی ۱۳C شیائومی در دیجی‌کالا"
        }
    ];

    return (
        <section className="readings-part">
            <div className="lg:container lg:mx-auto px-2">
                <div className="px-5 py-3">
                    <div className="flex justify-between my-3">
                        <p className="font-medium">خواندنی</p>
                        <div className="flex items-center gap-1">
                            <p className='text-xs text-[#19bfd3]'>مطالب بیشتر در دیجی‌کالا مگ</p>
                            <i className="bi bi-chevron-left text-xs text-[#19bfd3]"></i>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
                        {
                            articles?.map((article, index) => (
                                <article key={index} className="flex flex-col rounded-lg border overflow-hidden">
                                    <figure className="lg:h-[201.2px]">
                                        <Image src={article.src} alt={article.alt} width={751} height={422} className="w-full h-full object-cover"/>
                                    </figure>
                                    <figcaption className="text-xs p-3 line leading-loose">{article.text}</figcaption>
                                </article>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ReadingsPart;