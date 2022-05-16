import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation,Autoplay } from "swiper";

import BANNERS1 from "./images/BANNERS1.webp"
import BANNERS2 from "./images/BANNERS2.webp"
import BANNERS3 from "./images/BANNERS3.webp"
import BannerDayPC from "./images/BannerDayPC.webp"

import BANNERS1MOVIL from "./images/BANNERS1MOVIL.webp"
import BANNERS2MOVIL from "./images/BANNERS2MOVIL.webp"
import BANNERS3MOVIL from "./images/BANNERS3MOVIL.webp"
import BannerDayMovil from "./images/BannerDayMovil.webp"


import BotonWallp1 from "./images/BotonWallp1.svg"
import BotonWallp2 from "./images/BotonWallp2.svg"
import BotonWallp3 from "./images/BotonWallp3.svg"

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

export default function InicioWallpaper() {
 
       
  return (
    <>
    <Pc>
      <Swiper style={{padding:"0px"}}
        autoHeight={true} 
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Autoplay,Pagination, Navigation]}
        id="mySwiper"
       
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide  >
            <img  style={{width:"100%", marginTop:"70px", marginBottom:"24px"}}  src={BannerDayPC} />
    
        </SwiperSlide>
        <SwiperSlide  >
            <img  style={{width:"100%", marginTop:"70px"}}  src={BANNERS1} />
            <div style={{textAlign:"right"}}>
            <NavLink style={{
                
                width:"14%",
            }} to="/Solicitar" >
             <img  style={{
               position:"relative",
               width:"32%",
               marginRight:"63%",
               marginBottom:"11%",
               marginTop:"-21%",
               }}  src={BotonWallp1} />

            </NavLink>
          </div>
        </SwiperSlide>
        <SwiperSlide >
            <img style={{width:"100%", marginTop:"70px"}} src={BANNERS2} />
            <div style={{textAlign:"right"}}>
            <NavLink style={{
                
                width:"14%",
            }} to="/Planes" >
             <img  style={{
               position:"relative",
               width:"32%",
               marginRight:"0%",
                marginBottom:"5%",
                marginTop:"-14%",
               }}  src={BotonWallp2} />

            </NavLink>
          </div>
        </SwiperSlide>
        <SwiperSlide >
        <img style={{width:"100%", marginTop:"70px"}} src={BANNERS3} />
        <div style={{textAlign:"right"}}>
            <NavLink style={{
                
                width:"14%",
            }} to="/Planes" >
             <img  style={{
               position:"relative",
               width:"32%",
               marginRight:"62%",
               marginBottom:"17%",
               marginTop:"-27%",
               }}  src={BotonWallp3} />

            </NavLink>
          </div>
        </SwiperSlide>
      </Swiper>
      </Pc>

<Movil>
    
      <Swiper style={{padding:"0px", width:"110%"}}
        autoHeight={true} 
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Autoplay,Pagination, Navigation]}
        id="mySwiper"
        autoplay={{
            delay: 3500,
            disableOnInteraction: true,
        }}
        loop={true}

      >
        <SwiperSlide  >
            <img  style={{width:"100%", marginTop:"70px"}}  src={BannerDayMovil} />
    
        </SwiperSlide>
        <SwiperSlide >

        <NavLink to="/Solicitar" >
        <img  style={{width:"100%", marginTop:"70px"}} src={BANNERS1MOVIL} />
        </NavLink>
            
        </SwiperSlide>
        <SwiperSlide >
        <NavLink to="/Planes" >
            <img  style={{width:"100%", marginTop:"70px"}} src={BANNERS2MOVIL} />
        </NavLink>
        </SwiperSlide>
        <SwiperSlide >
          <NavLink to="/Planes">
          <img style={{width:"100%", marginTop:"70px"}} src={BANNERS3MOVIL} />

          </NavLink>
        </SwiperSlide>
      </Swiper>
      </Movil>
    </>
  );
}
