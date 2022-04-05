import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation,Autoplay } from "swiper";

import BANNER1 from "./../../images/BANNER1.png"
import BANNER2 from "./../../images/BANNER2.png"
import BANNER3 from "./../../images/BANNER3.png"



export default function InicioWallpaper() {
  return (
    <>
      <Swiper style={{padding:"0px"}}
        autoHeight={true} 
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Autoplay,Pagination, Navigation]}
        id="mySwiper"
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
      >
        <SwiperSlide >
            <img  src={BANNER1} />
        </SwiperSlide>
        <SwiperSlide >
            <img src={BANNER2} />
        </SwiperSlide>
        <SwiperSlide >
            <img src={BANNER3} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
