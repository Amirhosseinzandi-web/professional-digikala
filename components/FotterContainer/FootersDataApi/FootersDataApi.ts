

type DatasType = {
    title: string
    items: {
        item1: string
        item2: string
        item3: string
        item4?: string
        item5?: string
        item6?: string
    }
}

export const datas: DatasType[] = [
    {
        title: "با دیجی‌کالا",
        items: {
            item1: "اتاق خبر دیجی‌کالا",
            item2: "فروش در دیجی‌کالا",
            item3: "فرصت‌های شغلی",
            item4: "گزارش تخلف در دیجی‌کالا",
            item5: "تماس با دیجی‌کالا",
            item6: "درباره دیجی‌کالا",
        },
    },
    {
        title: "خدمات مشتریان",
        items: {
            item1: "پاسخ به پرسش‌های متداول",
            item2: "رویه‌های بازگرداندن کالا",
            item3: "شرایط استفاده",
            item4: "حریم خصوصی",
            item5: "گزارش باگ",
        },
    },
    {
        title: "راهنمای خرید از دیجی‌کالا",
        items: {
            item1: "نحوه ثبت سفارش",
            item2: "رویه ارسال سفارش",
            item3: "شیوه‌های پرداخت",
        },
    },
];

// *********************************************************************************************

type businessPartners = {
    title: string;
    items: {
        imageUrl: string;
        alt: string;
    }[];
}[]



export const businessPartners: businessPartners = [
    {
        title: "شرکای تجاری",
        items: [
            {
                imageUrl: "https://www.digikala.com/statics/img/svg/footer/digimag.svg",
                alt: "مجله اینترنتی دیجی‌کالا مگ",
            },
            {
                imageUrl: "https://www.digikala.com/statics/img/svg/footer/digipay.svg",
                alt: "بهترین راهکارهای پرداخت آنلاین",
            },
            {
                imageUrl: "https://www.digikala.com/statics/img/svg/footer/digistyle.svg",
                alt: "خرید آنلاین مد و لباس از فروشگاه اینترنتی دیجی‌استایل با همان تجربه از دیجی‌کالا",
            },
            {
                imageUrl: "https://www.digikala.com/statics/img/svg/footer/digiplus.svg",
                alt: "خدمات ویژه دیجی‌کالا برای کاربران با اشتراک دیجی‌پلاس",
            },
            {
                imageUrl: "https://www.digikala.com/statics/img/svg/footer/digiclub.svg",
                alt: "دیجی کلاب باشگاه مشتریان دیجیکالا",
            },
            {
                imageUrl: "https://www.digikala.com/statics/img/svg/footer/jet.svg",
                alt: "خرید آنی سوپرمارکتی از فروشگاه های نزدیک",
            },
            {
                imageUrl: "https://www.digikala.com/statics/img/svg/footer/digify.svg",
                alt: "دیجی‌فای",
            },
            {
                imageUrl: "https://www.digikala.com/statics/img/svg/footer/magnet.svg",
                alt: "مگنت - پلتفرم بررسی و انتخاب کالا",
            },
            {
                imageUrl: "https://www.digikala.com/statics/img/svg/footer/digiMehr.svg",
                alt: "دیجیکالا مهر - زنجیره مهربانی و لبخند",
            },
            {
                imageUrl: "https://www.digikala.com/statics/img/svg/footer/diginext.svg",
                alt: "مرکز نوآوری و فناوری گروه دیجی‌کالا",
            },
            {
                imageUrl: "https://www.digikala.com/statics/img/svg/footer/ganjeh.svg",
                alt: "گنجه",
            },
            {
                imageUrl: "https://www.digikala.com/statics/img/svg/footer/digiexpress.svg",
                alt: "سیستم حمل و نقل دیجی‌کالا",
            },
            {
                imageUrl: "https://www.digikala.com/statics/img/svg/footer/smartech.svg",
                alt: "اسمارتک",
            },
            {
                imageUrl: "https://www.digikala.com/statics/img/svg/footer/digikala-service.svg",
                alt: "دیجی‌کالا سرویس",
            },
            {
                imageUrl: "https://www.digikala.com/statics/img/svg/footer/digikala-business.svg",
                alt: "دیجی‌کالا بیزینس",
            },
        ],
    },
];


// *********************************************************************************************

type DataContentType = {
    firstTitle: string
    firtstTagContent: string
    otherContents: {
        title: string
        content: string
    }[]
}[]


export const dataContent: DataContentType = [
    {
        firstTitle: "فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین",
        firtstTagContent:
            "یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمان ی کوتاه به دست مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی که فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و توانسته از این طریق مشتریان ثابت خود را داشته باشد.",
        otherContents: [
            {
                title: "کدام محصولات در دیجی‌کالا قابل سفارش هستند؟",
                content:
                    "تقریبا می‌توان گفت محصولی وجود ندارد که دیجی‌کالا برای مشتریان خود در سراسر کشور فراهم نکرده باشد. شما می‌توانید در تمامی روزهای هفته و تمامی شبانه روز یا در روزهای خاصی مثل حراج نوروز دیجی‌کالا که محصولات دارای تخفیف عالی می‌شوند، سفارش خود را به سادگی ثبت کرده و در روز و محدوده زمانی مناسب خود، درب منزل تحویل بگیرید. بعضی از گروه‌های اصلی و زیر مجموعه‌های پرطرفدار محصولات دیجی‌کالا شامل مواردی می‌شود که در ادامه به معرفی آن‌ها می‌پردازیم که امکان ارسال امروز برای آن ها وجود دارد."
            },
            {
                title: "کالای دیجیتال",
                content:
                    "انواع گوشی موبایل از برندهای مختلفی مثل آیفون،  گوشی سامسونگ، گوشی نوکیا، گوشی شیائومی، گوشی هواوی، و...، انواع کنسول بازی ps4 و ps5، انواع تبلت‌های پرطرفدار مثل تبلت سامسونگ نوت 10، انواع هندزفری مثل هندزفری بی سیم، تلوزیون از برندهای مختلف مثل تلویزیون سامسونگ، سونی و...، انواع مانیتور، کیس، کیبورد، مودم از برندهای مختلف مثل مودم ایرانسل، آنتن و ... تنها بخشی از محصولاتی هستند که زیر مجموعه کالای دیجیتال در دیجی‌کالا قرار دارند."
            },
            {
                title: "خودرو، ابزار و تجهیزات صنعتی",
                content:
                    "انواع خودروهای ایرانی و خارجی از برندهای مطرحی مثل هوندا، کیا و...، موتور سیکلت از برندهایی مثل کویر موتور و...، لوازم جانبی خودرو مثل سیستم صوتی تصویر، ضبط و...، لوازم یدکی مثل دیسک و صفحه کلاج و... و لوازم مصرفی خودرو مثل کفپوش سانا در این گروه قرار می‌گیرند."
            },
            {
                title: "مد و پوشاک",
                content:
                    "محصولاتی مثل انواع لباس مثل لباس مجلسی زنانه و مردانه، لباس راحتی، لباس ورزشی، اکسسوری، کیف، کفش، عینک آفتابی، لباس زیر، شال و روسری و... جزو مواردی هستند که می‌توانید آن‌ها را از برندهای مطرح ایرانی و خارجی موجود در دیجی کالا مثل آدیداس، نایکی، دبنهامز، آلدو، درسا و... خریداری کنید."
            },
            {
                title: "اسباب بازی کودک و نوزاد",
                content:
                    "در این دسته از کالاهای دیجی‌کالا، انواع لوازم بهداشتی و حمام کودک و نوزاد، انواع پوشاک و کفش، تبلت، اسباب‌بازی، لوازم اتاق خواب کودک، لوازم ایمنی، لوازم شخصی و غذا خوری و ... قرار می‌گیرد تا خرید را برای پدر و مادرها به کاری سریع و آسان تبدیل کند."
            },
            {
                title: "کالاهای سوپر مارکتی",
                content:
                    "هر چیزی از مواد خوراکی که به آن نیاز دارید، در سوپرمارکت دیجی‌کالا پیدا می‌شود، محصولات پرطرفداری مثل کره بادام‌زمینی، عسل، سس، قهوه، زعفران، شکلات، انواع نان و ... از برندهای معتبر و معروفی مثل نستله، نوتلا، استارباکس، مزمز، چی توز و ... همگی در اختیار شما هستند و تا رسیدن به آشپزخانه شما تنها چند کلیک فاصله دارند."
            },
            {
                title: "زیبایی و سلامت",
                content:
                    "انواع لوازم آرایش مثل لاک، رنگ مو، لوازم آرایش لب، چشم، صورت و... همگی در دیجی‌کالا موجود هستند. همچنین محصولات بهداشتی مثل انواع شامپو، کرم، ماسک صورت، ضد تعریق، ماسک مو  و...، انواع لوازم شخصی برقی، ست هدیه، بهترین انواع عطر و اسپری، انواع زیورآلات طلا و نقره مثل سرویس طلا، سرویس نقره و... به همراه وسایل مراقبت شخصی طبی در گروه زیبایی و سلامت دیجی‌کالا قرار می‌گیرد. در این بخش برندهای مطرحی مثل اسنس، پنبه ریز، سینره و... حضور دارند."
            },
            {
                title: "خانه و آشپزخانه",
                content:
                    "یکی از متنوع‌ترین بخش‌های دیجی‌کالا، بخش لوازم خانه و آشپزخانه است که از محصولاتی مثل صندلی گیمینگ در بخش صندلی‌ها گرفته تا انواع مبل راحتی، انواع آبگرمکن مثل آبگرمکن بوتان، لباسشویی‌های متنوع مثل انواع لباسشویی اسنوا، شیرآلات مختلف مثل شیرآلات قهرمان و...، ظروف و همچنین لوازم برقی آشپزخانه مثل توستر و... را شامل می‌شود و امکان خریدی عالی را برای مشتریان فراهم کرده است. در بخش لوازم خانگی دیجی‌کالا، برندهای معتبری مثل تفال، اخوان، فیلیپس، ال جی، اسنوا، جی پلاس و... حضور دارند."
            },
            {
                title: "کتاب، لوازم تحریر و هنر",
                content:
                    "بخش هنر، کتاب، رمان و لوازم تحریر دیجی‌کالا نیز یکی از متنوع‌ترین بخش‌های این فروشگاه اینترنتی است. انواع کتاب و مجله، کتاب زبان، بازی، لوازم تحریر با طرح‌های مختلف مانند دختر کفشدوزکی، سازهایی مثل پیانو، سنتور، هنگ درام  و... با بهترین قیمت‌ها و از بهترین برندها در دسترس شما قرار دارند."
            },
            {
                title: "ورزش و سفر",
                content:
                    "هر نوع وسیله و لباس ورزشی که فکرش را کنید، انواع وسایل کمپینگ و کوهنوردی، ساک و قمقمه ورزشی و... در این بخش قرار می‌گیرند. همچنین شما می‌توانید وسایل مد نظر خود را بر اساس نوع ورزش (آبی، هوازی، بدنسازی و...) در دسته‌بندی‌های دیجی‌کالا پیدا کنید."
            },
            {
                title: "محصولات بومی و محلی",
                content:
                    "و در آخر دیجی‌کالا از طریق به فروش رساندن محصولات بومی و سنتی متفاوتی مثل انواع خوراکی، گلیم و گبه، ابزار و ... تلاش کرده تا بین هنر ایرانی و متقاضیان آن کوتاه‌ترین راه را پیدا کند. در این بخش شما می‌توانید انواع محصولات از جمله ظروف زیبای مخصوص به سفره هفت‌سین  و پذیرایی از مهمانان در روزهای نوروز، انواع آیینه و شمعدان و هر آن چیزی را که برای خلق زیبایی در روزهای بهاری به آن نیاز دارید، با قیمت مناسب و تنوع بسیار بالا انتخاب کنید. همچنین در صفحه برچسب ها، امکان مشاهده و خرید انواع محصولات با طرح های بومی وجود دارد.  دیجی‌کالا همچنین برای اینکه حال و هوای عید را به اعضای خود هدیه کند، تقویم ۱۴۰۱، انواع ایده عکس پروفایل عید نوروز، آهنگ‌های عید نوروز و موزیک‌های شاد بهاری، وسایل مربوط به خانه‌تکانی و انواع لباس های عید  را برای شما فراهم کرده است تا بتوانید در کنار خرید خود، از این حال و هوای تازه نهایت لذت را ببرید."
            },
            {
                title: "گزارش های سالیانه دیجی کالا",
                content:
                    "در راستای توجه ویژه به شفافیت به عنوان یکی از اصلی‌ترین ارزش‌های محوری دیجی‌کالا، با شروع سال ۱۳۹۸ داستان‌پردازی با داده‌های آماری و ارائه گزارش‌های سالانه آغاز شد. مسیری که دستاورد آن تا امروز چندین گزارش سالانه و تخصصی مثل گزارش سالانه ۱۳۹۸، گزارش سالانه ۱۳۹۹ و گزارش سالانه ۱۴۰۰  دیجی‌کالا هستند. علاوه بر این، گزارش منابع انسانی سال ۱۳۹۹، گزارش منابع انسانی سال ۱۴۰۰  و همچنین گزارش کتاب دیجی‌کالا، از دیگر گزارش‌های تخصصی دیجی‌کالا به حساب می‌آیند. انتشار این گزارش‌ها امکان رصد شفاف‌تر و دقیق‌تر خدمات دیجی‌کالا را فراهم می‌کند، وضعیت بازار آنلاین کشور را به نمایش می‌گذارد و به تمامی کسب‌وکارهای ایرانی کمک می‌کند تا با فرایندهای فروش و عرضه آنلاین کالاهای خود بیشتر آشنا شوند.",
            }
        ]
    }
];


// *********************************************************************************************


type menuDatasType = {
    mainTitle: string
    secondaryTitles: {
        title: string
    }[]
}[]

export const menuDatas: menuDatasType = [
    {
        mainTitle: "با دیجی‌کالا",
        secondaryTitles: [
            {
                title: "اتاق خبر دیجی‌کالا"
            },
            {
                title: "فروش در دیجی‌کالا"
            },
            {
                title: "فرصت‌های شغلی"
            },
            {
                title: "گزارش تخلف در دیجی‌کالا"
            },
            {
                title: "تماس با دیجی‌کالا"
            },
            {
                title: "درباره دیجی‌کالا"
            }
        ]
    },
    {
        mainTitle: "خدمات مشتریان",
        secondaryTitles: [
            {
                title: "پاسخ به پرسش‌های متداول"
            },
            {
                title: "رویه‌های بازگرداندن کالا"
            },
            {
                title: "شرایط استفاده"
            },
            {
                title: "حریم خصوصی"
            },
            {
                title: "گزارش باگ"
            }
        ]
    },
    {
        mainTitle: "راهنمای خرید از دیجی‌کالا",
        secondaryTitles: [
            {
                title: "نحوه ثبت سفارش"
            },
            {
                title: "رویه ارسال سفارش"
            },
            {
                title: "شیوه‌های پرداخت"
            }
        ]
    }
]