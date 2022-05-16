import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./stylesX.css";

// import required modules
import { Autoplay, Navigation } from "swiper";

import visitaBlog from "./visitaBlog.webp"
import MeshWasi from "./MeshWasi.webp"
import nWPC from "./nWPC.webp"

import nW from "./nW.webp"
import VisitaBlogMovil from "./VisitaBlogMovil.webp"
import MeshMovil from "./MeshMovil.webp"
import FondoInferior from "./FondoInferior.webp"


import styled from "styled-components";
import { NavLink } from "react-router-dom";



const Pc = styled.div`

@media screen and (max-width: 800px) {
    display:none;
}`;  
const Movil = styled.div`
@media screen and (min-width: 800px) {
    display:none;
}
@media screen and (max-width: 800px) {
    display:block;
}`;  
export default function SliderHome() {
  return (
    <>
      <img style={{width:"100%", marginBottom:"-7px"}} src={FondoInferior} />

    <Pc>
    <Swiper autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }} navigation={true} modules={[Navigation, Autoplay]} className="mySwiper">
       
       <SwiperSlide >
         <NavLink to="/2021/12/27/wifimesh/"> 
         <img style={{width:"100%"}}  src={MeshWasi} />
         </NavLink>
       </SwiperSlide>

       <SwiperSlide >
         <NavLink to="/Blog">
         <img style={{width:"100%"}}  src={nWPC} />

         </NavLink>
       </SwiperSlide>

       <SwiperSlide >
       <NavLink to="/Blog">
       <img style={{width:"100%"}}  src={visitaBlog} />
       </NavLink>
       </SwiperSlide>

     </Swiper>
    </Pc>


    <Movil>
    <Swiper style={{width:"110%"}} navigation={true} modules={[Navigation]} className="mySwiper">
       
       <SwiperSlide >

       <NavLink to="/2021/12/27/wifimesh/"> 
       <img style={{width:"100%"}}  src={nW} />
       </NavLink>

       </SwiperSlide>
       <SwiperSlide >
         <NavLink to="/Blog">
         <img style={{width:"100%"}}  src={VisitaBlogMovil} />
         </NavLink>
       </SwiperSlide>
       <SwiperSlide >
       <NavLink to="/Blog">

       <img style={{width:"100%"}}  src={MeshMovil} />
       </NavLink>
       </SwiperSlide>
       
     </Swiper>
    </Movil>
    </>
  );
}
