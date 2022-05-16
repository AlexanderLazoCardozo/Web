import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

import "./stylesV.css";

// import required modules
import { Autoplay, EffectCreative } from "swiper";

import { Card, Icon } from 'semantic-ui-react'
import FondoInferior from "./images/FondoInferior.png"
import DiseoInferior from "./images/DiseoInferior.jpg"

import styled from "styled-components";

const Pc = styled.div`

        @media screen and (max-width: 757px) {
            display:none;
        }`;  
    const Movil = styled.div`
        @media screen and (min-width: 757px) {
            display:none;
        }
        @media screen and (max-width: 757px) {
            display:block;
    }`;  

const Valores = () => {
  return (

    <>
        <img style={{width:"110%"}} src={DiseoInferior} />

    <Pc>
    <div style={{textAlign:"center"}}>
        <div style={{color:"#00267d", marginTop:"40px"}}>
           <h1 style={{fontSize:"80px", fontWeight:"1"}}><b id="comp">COMPROMETIDOS</b></h1> 
        </div>
        <br />
        <div style={{color:"#66277d"}}>
           <h1 style={{fontSize:"50px", marginTop:"-30px"}}><b id="comp">CON TODA TU FAMILIA</b></h1> 
        </div>
    </div>
    <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative, Autoplay]}
        className="basesita2"
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          
        }}
        loop={true}
      >
        <SwiperSlide className="cartita">
          <Card style={{
            borderRadius:"10px",
            border:"3px solid #66277d",
            textAlign:"center",
            height:"500px",
            width:"575px", 
          }}>
                <div style={{textAlign:"center",color:"#7cbcd3",fontSize:"45px"}}>
                <Icon name="rocket" style={{fontSize:"70px", marginTop:"30px"}}/><br/>
                   <b id="val" style={{fontSize:"50px"}}>MISIÓN</b> 
                </div>
                <div id="val" style={{fontSize:"20px",textAlign:"center",color:"#66277d", margin:"60px 30px" }}>
                      Hacer realidad la
                      experiencia de
                      navegación en Internet
                      más estable del mercado
                      a cada uno de nuestros
                      clientes con tecnologia
                      de punta. Brindando
                      ademas un servicio y
                      atención de calidad a
                      cada una de las
                      necesidades de nuestros
                      clientes. Optimizando
                      anticipadamente nuestra
                      propuesta de valor para
                      ellos.<br/>
                      <Icon name="arrows alternate horizontal" style={{fontSize:"80px", marginTop:"100px"}}/>
                      <br/>
                  <div style={{fontSize:"40px",marginTop:"-40px"}}>
                   <b id="val">Desliza</b> 
                  </div>
                </div>

          </Card>
        </SwiperSlide>
        <SwiperSlide className="cartita">
        <Card style={{
            borderRadius:"10px",
            border:"3px solid #66277d",
            textAlign:"center",
            height:"500px",
            width:"575px", 
          }}>
                <div style={{textAlign:"center",color:"#7cbcd3",fontSize:"40px"}}>
                <Icon name="handshake outline" style={{fontSize:"50px", marginTop:"30px"}}/><br/>
                   <b id="val">SOMOS WASI</b> 
                </div>
                <div style={{fontSize:"24px",textAlign:"center",color:"#66277d", margin:"100px 20px" }}>
                Somos 100% peruanos,
                Internet de casa para tu
                casa. Te proveemos el
                servicio de internet con la
                tecnología de fibra
                óptica. Nuestro objetivo
                es llevarte la más alta
                tecnología en transmisión
                de datos a tu hogar.
                Estamos comprometidos
                a maximizar tu
                experiencia de
                navegación de internet.<br/>
                <Icon name="arrows alternate horizontal" style={{fontSize:"80px", marginTop:"80px"}}/>
                      <br/>
                  <div style={{fontSize:"40px",marginTop:"-40px"}}>
                   <b id="val">Desliza</b> 
                  </div>
                </div>
          </Card>
        </SwiperSlide>
        <SwiperSlide className="cartita">
        <Card style={{
            borderRadius:"10px",
            border:"3px solid #66277d",
            textAlign:"center",
            height:"500px",
            width:"575px", 
          }}>
                <div style={{textAlign:"center",color:"#7cbcd3",fontSize:"45px"}}>
                <Icon name="eye" style={{fontSize:"60px", marginTop:"30px"}}/><br/>
                   <b id="val">VISIÓN</b> 
                </div>
                <div id="val" style={{fontSize:"20px",textAlign:"center",color:"#66277d", margin:"30px 20px" }}>
                Ser la empresa
                peruana líder en la
                prestación de
                servicios de internet
                a cada uno delos
                hogares y empresas
                del Perú.<br/><br/><br/>
                Compromiso.<br/><br/>
                Credibilidad.<br/><br/>
                Honestidad.<br/><br/>
                Innovación.<br/><br/>
                <br/>
                      <Icon name="arrows alternate horizontal" style={{fontSize:"80px", marginTop:"0px"}}/>
                      <br/>
                  <div style={{fontSize:"40px",marginTop:"-40px"}}>
                   <b>Desliza</b> 
                  </div>
                </div>
          </Card>
        </SwiperSlide>
      </Swiper>
    </Pc>
    

<Movil>
    <div style={{textAlign:"center"}}>
        <div style={{color:"#00267d", marginTop:"40px"}}>
           <h1 style={{fontSize:"33px"}}>COMPROMETIDOS</h1> 
        </div>
        <br />
        <div style={{color:"#66277d" }}>
           <h1 style={{fontSize:"25px", marginTop:"-30px"}}>CON TODA TU FAMILIA</h1> 
        </div>
    </div>
    <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative, Autoplay]}
        className="basesita"
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        <SwiperSlide className="cartita">
          <Card style={{
            borderRadius:"10px",
            border:"3px solid #66277d",
            textAlign:"center",
            height:"500px",
            width:"275px", 
          }}>
                <div style={{textAlign:"center",color:"#7cbcd3",fontSize:"45px"}}>
                <Icon name="rocket" style={{fontSize:"60px", marginTop:"30px"}}/><br/>
                   <b>MISIÓN</b> 
                </div>
                <div style={{fontSize:"20px",textAlign:"center",color:"#66277d", margin:"20px 20px" }}>
                      Hacer realidad la
                      experiencia de
                      navegación en Internet
                      más estable del mercado
                      a cada uno de nuestros
                      clientes con tecnologia
                      de punta. Brindando
                      ademas un servicio y
                      atención de calidad a
                      cada una de las
                      necesidades de nuestros
                      clientes. Optimizando
                      anticipadamente nuestra
                      propuesta de valor para
                      ellos.<br/>
                      <Icon name="arrows alternate horizontal" style={{fontSize:"60px", marginTop:"30px"}}/>
                      <br/>
                  <div style={{marginTop:"-30px"}}>
                   <b>Desliza</b> 
                  </div>
                </div>

          </Card>
        </SwiperSlide>
        <SwiperSlide className="cartita">
        <Card style={{
            borderRadius:"10px",
            border:"3px solid #66277d",
            textAlign:"center",
            height:"500px",
            width:"275px", 
          }}>
                <div style={{textAlign:"center",color:"#7cbcd3",fontSize:"40px"}}>
                <Icon name="handshake outline" style={{fontSize:"50px", marginTop:"30px"}}/><br/>
                   <b>SOMOS WASI</b> 
                </div>
                <div style={{fontSize:"20px",textAlign:"center",color:"#66277d", margin:"35px 20px" }}>
                Somos 100% peruanos,
                Internet de casa para tu
                casa. Te proveemos el
                servicio de internet con la
                tecnología de fibra
                óptica. Nuestro objetivo
                es llevarte la más alta
                tecnología en transmisión
                de datos a tu hogar.
                Estamos comprometidos
                a maximizar tu
                experiencia de
                navegación de internet.<br/>
                      <Icon name="arrows alternate horizontal" style={{fontSize:"60px", marginTop:"40px"}}/>
                      <br/>
                  <div style={{marginTop:"-30px"}}>
                   <b>Desliza</b> 
                  </div>
                </div>
          </Card>
        </SwiperSlide>
        <SwiperSlide className="cartita">
        <Card style={{
            borderRadius:"10px",
            border:"3px solid #66277d",
            textAlign:"center",
            height:"500px",
            width:"275px", 
          }}>
                <div style={{textAlign:"center",color:"#7cbcd3",fontSize:"45px"}}>
                <Icon name="eye" style={{fontSize:"60px", marginTop:"30px"}}/><br/>
                   <b>VISIÓN</b> 
                </div>
                <div style={{fontSize:"23px",textAlign:"center",color:"#66277d", margin:"80px 20px" }}>
                Ser la empresa
                peruana líder en la
                prestación de
                servicios de internet
                a cada uno delos
                hogares y empresas
                del Perú.<br/>
                      <Icon name="arrows alternate horizontal" style={{fontSize:"60px", marginTop:"120px"}}/>
                      <br/>
                  <div style={{marginTop:"-30px"}}>
                   <b>Desliza</b> 
                  </div>
                </div>
          </Card>
        </SwiperSlide>
      </Swiper>
      </Movil>
      <img style={{width:"110%"}} src={FondoInferior} />

    </>
  )
}

export default Valores