'use client'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "src/styles/slider.css";

// import required modules
import { Navigation } from "swiper";

export default function App() {
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide><img src="/image/slider/image-2.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/image/slider/image-1.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/image/slider/image.png" alt="" /></SwiperSlide>
            </Swiper>
        </>
    );
}
