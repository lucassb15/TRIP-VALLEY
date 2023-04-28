'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Title from "@/components/title/title";
import Feedback from "@/components/landing/fdbackCard"

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "src/styles/slider.css";

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";

export function SliderFeedBack(): JSX.Element {
    return (
        <>
            <Swiper
                slidesPerView={1}
                centeredSlides={false}
                slidesPerGroupSkip={1}
                grabCursor={true}
                keyboard={{
                    enabled: true,
                }}
                breakpoints={{
                    // when window width is >= 320px
                    480: {
                        slidesPerView: 1,
                    },
                    // when window width is >= 480px
                    769: {
                        slidesPerView: 1,
                    },
                    // when window width is >= 640px
                    890: {
                        slidesPerView: 2,
                    }
                }}
                scrollbar={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                spaceBetween={25}
                navigation={true}
                autoplay={{
                    delay: 2000
                }}
                className="mb-32 mt-20 max-w-[1200px]">
                <SwiperSlide>
                    <div>
                        <Feedback
                            desc="A Trip Valley superou minhas expectativas! Tudo foi muito bem planejado e organizado, o atendimento foi excelente e as opções de passeios foram incríveis. Recomendo muito!"
                            image="/image/fdback/profile-C.png"
                            titleName="Carlos Alberto"
                            city="Aparecida do Norte • SP"
                        ></Feedback>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <Feedback
                            desc="A Trip Valley é uma das melhores agências de viagem que já conheci! O atendimento é personalizado, as opções de passeios são diversas e o preço é justo."
                            image="/image/fdback/profile-J.png"
                            titleName="João Pedro"
                            city="Paraty • RJ"
                        ></Feedback>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <Feedback
                            desc="Amei viajar com a Trip Valley! A agência se preocupou em conhecer meus interesses e necessidades para oferecer o melhor roteiro de viagem possível. "
                            image="/image/fdback/profile-A.png"
                            titleName="Ana Maria"
                            city="Ubatuba • SP"
                        ></Feedback>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <Feedback
                            desc="Ótima experiência com a Trip Valley, tudo muito organizado e bem planejado. Atendimento excelente da equipe da Trip Valley, opções de passeios incríveis e preços justos"
                            image="/image/fdback/profile-B.png"
                            titleName="Bruna Cristina"
                            city="Cunha • SP"
                        ></Feedback>
                    </div>
                </SwiperSlide>
                <span slot="container-start"><Title title="Feedback dos clientes"></Title></span>

            </Swiper>
        </>
    );
}

export default SliderFeedBack;
