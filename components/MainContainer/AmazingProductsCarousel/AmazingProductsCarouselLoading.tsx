
import { memo } from "react"
import "../AmazingProductsCarousel/Slider.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import Skeleton from "react-loading-skeleton"




const AmazingProductsCarouselLoading: React.FC = () => {


    return (
        <section className="amzaing-products-carousel-container--loading container mt-5 mx-auto p-3 rounded-xl pointer-events-none">

            <Swiper
                slidesPerView={'auto'}
                grabCursor={true}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="flex flex-col items-center justify-evenly mx-1 bg-white h-full">
                        <figure>
                            <Skeleton width={92} height={10} count={3} style={{ borderRadius: "12px" }} />
                        </figure>
                        <figure>
                            <Skeleton width={130} height={115} style={{ borderRadius: "12px" }} />
                        </figure>
                    </div>
                </SwiperSlide>

                {
                    Array(11)?.fill(0).map((item, i) => (
                        <SwiperSlide key={i}>
                            <div className="amzaing-products-carousel-items flex flex-col items-center justify-around p-1 lttr bg-white">
                                <figure className="flex justify-center items-center">
                                    <Skeleton width={102} height={115} style={{ borderRadius: "12px" }} />
                                </figure>
                                <p className={`text-sm desktop-menu-color font-medium`}><Skeleton width={92} height={10} style={{ borderRadius: "12px" }} /></p>
                                <p className={`text-sm desktop-menu-color font-medium`}><Skeleton width={72} height={10} style={{ borderRadius: "12px" }} /></p>
                            </div>
                        </SwiperSlide>
                    ))

                }

            </Swiper>


        </section>
    );
}

export default memo(AmazingProductsCarouselLoading);
