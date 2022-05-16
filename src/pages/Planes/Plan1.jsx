import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";


// import required modules
import { EffectFade,Navigation } from "swiper";

import Plan30 from "./images/Plan30.webp"
import Plan50 from "./images/Plan50.webp"
import Plan80 from "./images/Plan80.webp"
import Plan100 from "./images/Plan100.webp"
import Plan150 from "./images/Plan150.webp"

import Plan30Movil from "./images/Plan30Movil.webp"
import Plan50Movil from "./images/Plan50Movil.webp"
import Plan80Movil from "./images/Plan80Movil.webp"
import Plan100Movil from "./images/Plan100Movil.webp"
import Plan150Movil from "./images/Plan150Movil.webp"


import { Button, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";

const Pc = styled.div`

@media screen and (max-width: 1000px) {
    display:none;
}`;  
const Movil = styled.div`
@media screen and (min-width: 1000px) {
    display:none;
}
@media screen and (max-width: 1000px) {
    display:block;
}`;

const Plan1 = () => {

  


  return (
    <>
    <div >
        <div >
        <Pc>
        <Swiper navigation={true} modules={[EffectFade,Navigation]} className="mySwiper">
        <SwiperSlide >
          <img style={{width:"100%"}}  src={Plan30} />

          <div style={{textAlign:"right"}}>
            <NavLink to="/Solicitar" >
            <Button size="big" style={{
                marginRight:"72%",
                marginBottom:"28%",
                marginTop:"-37%",
                borderRadius:"20px",
                color:"white", 
                backgroundColor:"#66277d",
                width:"14%",
            }} animated='fade'>
                <Button.Content id="lvl6" visible>SOLICITAR</Button.Content>
                <Button.Content hidden>
                    <Icon name='shop' />
            </Button.Content>
            </Button>
            </NavLink>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <img style={{width:"100%"}}  src={Plan50} />

          <div style={{textAlign:"right"}}>
            <NavLink to="/Solicitar" >
            <Button size="big" style={{
                marginRight:"72%",
                marginBottom:"28%",
                marginTop:"-37%",
                borderRadius:"20px",
                color:"white", 
                backgroundColor:"#66277d",
                width:"14%",
            }} animated='fade'>
                <Button.Content id="lvl6" visible>SOLICITAR</Button.Content>
                <Button.Content hidden>
                    <Icon name='shop' />
            </Button.Content>
            </Button>
            </NavLink>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <img style={{width:"100%"}}  src={Plan80} />

          <div style={{textAlign:"right"}}>
            <NavLink to="/Solicitar" >
            <Button size="big" style={{
                marginRight:"72%",
                marginBottom:"28%",
                marginTop:"-37%",
                borderRadius:"20px",
                color:"white", 
                backgroundColor:"#66277d",
                width:"14%",
            }} animated='fade'>
                <Button.Content id="lvl6" visible>SOLICITAR</Button.Content>
                <Button.Content hidden>
                    <Icon name='shop' />
            </Button.Content>
            </Button>
            </NavLink>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <img style={{width:"100%"}}  src={Plan100} />

          <div style={{textAlign:"right"}}>
            <NavLink to="/Solicitar" >
            <Button size="big" style={{
                marginRight:"72%",
                marginBottom:"28%",
                marginTop:"-37%",
                borderRadius:"20px",
                color:"white", 
                backgroundColor:"#66277d",
                width:"14%",
            }} animated='fade'>
                <Button.Content id="lvl6" visible>SOLICITAR</Button.Content>
                <Button.Content hidden>
                    <Icon name='shop' />
            </Button.Content>
            </Button>
            </NavLink>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <img style={{width:"100%"}}  src={Plan150} />

          <div style={{textAlign:"right"}}>
            <NavLink to="/Solicitar" >
            <Button size="big" style={{
                marginRight:"72%",
                marginBottom:"28%",
                marginTop:"-37%",
                borderRadius:"20px",
                color:"white", 
                backgroundColor:"#66277d",
                width:"14%",
            }} animated='fade'>
                <Button.Content id="lvl6" visible>SOLICITAR</Button.Content>
                <Button.Content hidden>
                    <Icon name='shop' />
            </Button.Content>
            </Button>
            </NavLink>
          </div>
        </SwiperSlide>
      </Swiper>
        </Pc>
          


          <Movil>
          <Swiper navigation={true} modules={[EffectFade,Navigation]} className="mySwiper">
        <SwiperSlide >

            <NavLink to="/Solicitar" >
            <img style={{width:"100%"}}  src={Plan30Movil} />
            </NavLink>

        </SwiperSlide>
        <SwiperSlide >

            <NavLink to="/Solicitar" >
            <img style={{width:"100%"}}  src={Plan50Movil} />
            </NavLink>

        </SwiperSlide>
        <SwiperSlide >

            <NavLink to="/Solicitar" >
            <img style={{width:"100%"}}  src={Plan80Movil} />
            </NavLink>

        </SwiperSlide>
        <SwiperSlide >

            <NavLink to="/Solicitar" >
            <img style={{width:"100%"}}  src={Plan100Movil} />
            </NavLink>

        </SwiperSlide>
        <SwiperSlide >

            <NavLink to="/Solicitar" >
            <img style={{width:"100%"}}  src={Plan150Movil} />
            </NavLink>

        </SwiperSlide>
      </Swiper>
          </Movil>
        </div>
    </div>
    </>
  )
}

export default Plan1