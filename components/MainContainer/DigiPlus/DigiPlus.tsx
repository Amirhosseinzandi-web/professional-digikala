import Image from "next/image";

type AllPhotosType = {
    src: string
    alt: string
}




const DigiPlus = () => {

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
                                        <figure className="w-auto h-auto">
                                            <Image width={116} height={116} src={item.src} alt={item.alt} />
                                        </figure>
                                    ))
                                }
                            </div>
                        </section>
                    </div>
                </div>
            </section>

            <h3>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt et deserunt, fugit veniam itaque sit, modi minima dolores, voluptate unde quaerat beatae blanditiis cum nostrum error debitis officia fugiat autem est rerum necessitatibus excepturi non dolor? Ipsam ipsa quod soluta libero quo maiores doloribus magni accusantium autem! Ea distinctio laboriosam odio, aspernatur temporibus tenetur veritatis, odit deleniti consequuntur repudiandae ducimus recusandae. Dignissimos voluptates rerum necessitatibus soluta cupiditate tempora voluptatum autem? Vitae blanditiis placeat nisi iure voluptas atque, iusto nihil tempore recusandae rem id cumque dolores excepturi quam accusantium praesentium culpa qui itaque iste aliquam quia saepe nulla? Nihil dolorem perspiciatis nostrum tenetur eveniet repellendus, possimus at exercitationem adipisci dolor quo labore a modi esse, placeat tempore! Fuga asperiores et provident, quidem perspiciatis vel laborum repudiandae. Placeat cum velit aspernatur ducimus impedit delectus minus veniam adipisci sit quod. Aliquid aut nesciunt voluptatibus dolorum dolor ratione beatae nulla! Reiciendis tempore a eos dolor dignissimos illum magnam quod cumque eveniet, tenetur, pariatur facilis rerum ducimus nostrum aperiam minima quisquam error distinctio numquam quasi delectus perferendis aspernatur! Velit debitis ducimus ut explicabo qui consequuntur eligendi, aliquid atque. Eum dolore perferendis cumque officiis porro iusto aspernatur tempora adipisci sit ex atque, facere voluptatem iste. Mollitia at tempore iure laboriosam? Aperiam impedit laboriosam iste error magnam consequuntur, praesentium aut voluptatum deserunt fuga temporibus officiis minima? Molestias placeat sit nostrum qui magnam illo totam, incidunt corporis quam suscipit perferendis enim ipsa eligendi vel ad repudiandae omnis soluta fuga reprehenderit culpa quos modi voluptatum! Esse error sequi libero, atque, similique fuga modi deleniti, unde mollitia ut veritatis. In, itaque beatae deserunt modi vitae cum praesentium enim laudantium officia libero asperiores porro officiis consequuntur nisi incidunt unde error animi! Suscipit hic, ex corporis doloribus dignissimos est dicta vero unde alias commodi repellendus. Quidem ratione provident, nemo optio quis, non distinctio magni iure esse eum quaerat earum perspiciatis aut officia id dolores aspernatur molestias iste itaque. Dolor reiciendis, aut doloribus doloremque cumque non deserunt voluptates sint eum, qui fugiat unde, suscipit et asperiores dolorum consectetur exercitationem consequuntur natus magni nam in? Vitae ea quam ipsa explicabo accusantium, quaerat dolore voluptas soluta reprehenderit voluptatem architecto sit deleniti autem temporibus dicta. Mollitia, quas tempore quae quo quos ducimus corporis velit autem maxime, illum nesciunt earum tempora necessitatibus totam nostrum temporibus rerum? Quidem saepe reiciendis expedita consequatur minima fugit suscipit eius corporis non deserunt cum nesciunt, quisquam harum iure impedit ipsum qui debitis amet repudiandae fuga excepturi commodi! Corrupti nulla corporis, obcaecati perspiciatis impedit odit maiores quo nesciunt. Suscipit blanditiis qui at velit consequatur reprehenderit, repellat aut sapiente nisi porro aperiam nam dolor modi consectetur natus rerum, aliquam provident quos atque. Numquam fugit tempora animi maiores ipsam quisquam ullam, qui placeat esse sunt minus beatae velit porro veniam neque, aspernatur blanditiis, consequuntur optio iure debitis hic. Ipsam nesciunt maiores aliquid sed, rem asperiores distinctio nobis repudiandae ea, nisi non ab eligendi harum voluptatibus ducimus esse explicabo omnis quia quasi officia necessitatibus. Neque ex mollitia reprehenderit recusandae! Delectus, sint error! Optio illo voluptas suscipit dolores. Sit sint voluptatibus voluptate esse incidunt sapiente vero harum ex ullam? Animi velit, ut vel quasi quos facilis praesentium tenetur minus nostrum natus suscipit rem ullam unde harum ex magni quisquam numquam ea veniam? Praesentium suscipit nesciunt eveniet saepe facere cupiditate! Beatae natus placeat omnis debitis, itaque minus aperiam laudantium rem? Ullam delectus dolores earum cum necessitatibus sunt voluptate dicta in, adipisci assumenda unde magnam blanditiis placeat dolorum corporis. Molestias saepe neque soluta autem reiciendis ullam earum quibusdam in incidunt facilis suscipit cupiditate amet omnis accusantium culpa sunt aliquam, adipisci facere! Veritatis placeat enim optio culpa libero sit deleniti minus, voluptate fuga adipisci odit iure dolores sed beatae quia provident delectus cumque vero quae! Expedita voluptatem itaque dolores nam ratione delectus hic architecto possimus laboriosam minus dolorem, rerum sunt earum obcaecati ut! Deserunt vitae delectus mollitia labore alias illo odit itaque consequuntur praesentium voluptatum nobis iste provident aliquam laboriosam officiis, odio sunt necessitatibus quam nam iure fuga? Molestiae possimus nam sequi amet iure dolor corporis quisquam nulla maiores non quia, architecto adipisci magni quam ut labore quo debitis temporibus quaerat provident aspernatur numquam. Dolorem deleniti corrupti aspernatur maiores tenetur hic minus odit ipsa? Autem, itaque? Iste, ea ab. Omnis unde praesentium exercitationem, officia magni atque. Voluptatem pariatur ullam debitis quos itaque possimus amet dolores suscipit doloribus? Nesciunt, nobis repellat harum, iste fugit odio dicta explicabo eos libero obcaecati veritatis voluptate odit dolorem similique blanditiis? Ut ab, exercitationem non recusandae possimus, dignissimos fugiat labore nesciunt, explicabo unde laborum dolorum omnis earum id est delectus dolores tenetur culpa obcaecati et maxime? Animi voluptate expedita aliquam harum. Eveniet sapiente maiores accusantium est possimus, inventore ducimus illo assumenda maxime amet quasi autem pariatur! Maiores voluptate, quod quas ipsam libero autem perspiciatis cumque nulla? Nesciunt, asperiores sint temporibus necessitatibus fuga cumque quaerat soluta, ipsam laboriosam vitae incidunt quos! Quibusdam tenetur expedita possimus aut, quod molestias vitae enim blanditiis, ipsum reiciendis rem dignissimos deleniti accusantium minus sapiente autem optio ad voluptate amet dolor id, placeat architecto nostrum? Inventore, sequi? Distinctio non voluptatum ipsam ea alias laudantium ipsa quibusdam mollitia nulla nihil ab, necessitatibus quos asperiores eveniet, provident veniam praesentium quasi perferendis illo sequi eos sint? Animi dolorum praesentium neque maxime deleniti odio adipisci ad atque totam, assumenda ducimus officia ea nihil id explicabo quos! Exercitationem quam deserunt ex ratione esse. Placeat, vel blanditiis odit perspiciatis officia eveniet dicta natus modi est optio, autem labore quod quae molestias amet illum eum cum magnam nisi. Incidunt magnam dignissimos expedita distinctio itaque, aperiam vel sit hic mollitia repudiandae fugiat consequatur quas provident numquam in! Ipsum explicabo ratione ut rerum libero! At, minima. Quod officiis ad eveniet magni aut tempore eius iste libero, expedita modi, facilis voluptates tenetur laboriosam nobis commodi nesciunt adipisci eligendi quos deleniti quam alias debitis architecto, accusantium natus! Ad, itaque atque. Nulla perferendis saepe, culpa pariatur ratione ducimus itaque, sunt doloribus quisquam dicta iusto cupiditate, quae praesentium deleniti modi incidunt blanditiis vitae eveniet veniam soluta iste eos. Nemo voluptas quos quisquam, quibusdam voluptatem quae placeat!
            </h3>
        </>
    );
}

export default DigiPlus;