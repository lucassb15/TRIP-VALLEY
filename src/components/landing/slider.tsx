'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Title from "@/components/title/title";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "src/styles/slider.css";

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";

export default function App() {
    return (
        <>
            <Swiper
                slidesPerView={3}
                centeredSlides={false}
                slidesPerGroupSkip={1}
                grabCursor={true}
                keyboard={{
                    enabled: true,
                }}
                breakpoints={{
                    769: {
                        slidesPerView: 3,
                        slidesPerGroup: 1,
                    },
                }}
                scrollbar={true}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                spaceBetween={25}
                autoplay={{
                    delay: 2000
                }}
                className="mySwiper mb-32 mt-20 ">
                <SwiperSlide>
                    <div>
                    <img className="rounded-lg" src="/image/slider/image-2.png" alt="" />
                    <h3 className="text-gray-800 font-semibold text-lg mb-1 mt-3">Circuito religioso</h3>
                    <p className="text-gray-700 font-light text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                    <img className="rounded-lg" src="/image/slider/image-1.png" alt="" />
                    <h3 className="text-gray-800 font-semibold text-lg mb-1 mt-3">Vale histórico</h3>
                    <p className="text-gray-700 font-light text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    </SwiperSlide>
                <SwiperSlide>
                    <div>
                    <img className="rounded-lg" src="/image/slider/image.png" alt="" />
                    <h3 className="text-gray-800 font-semibold text-lg mb-1 mt-3">Serra da Mantiqueira</h3>
                    <p className="text-gray-700 font-light text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    </SwiperSlide>
                <SwiperSlide>
                    <div>
                    <img className="rounded-lg" src="/image/slider/image-2.png" alt="" />
                    <h3 className="text-gray-800 font-semibold texttext-lg mb-1l mt-3">Circuito religioso</h3>
                    <p className="text-gray-700 font-light text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    </SwiperSlide>
                <SwiperSlide>
                    <div>
                    <img className="rounded-lg" src="/image/slider/image-1.png" alt="" />
                    <h3 className="text-gray-800 font-semibold text-lg mb-1 mt-3">Vale histórico</h3>
                    <p className="text-gray-700 font-light text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    </SwiperSlide>
                <SwiperSlide>
                    <div>
                    <img className="rounded-lg" src="/image/slider/image.png" alt="" />
                    <h3 className="text-gray-800 font-semibold text-lg mb-1 mt-3">Serra da Mantiqueira</h3>
                    <p className="text-gray-700 font-light text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    </SwiperSlide>
                <span slot="container-start"><Title title="Categorias"></Title></span>
            </Swiper>
        </>
    );
}
