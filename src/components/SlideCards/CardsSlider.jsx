import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { Button, Card, Icon } from "semantic-ui-react";


export default function CardsSlider() {
  return (
    <>
    <div style={{textAlign:"center"}}>
        <div style={{color:"#00267d", marginTop:"40px"}}>
           <h1 style={{fontSize:"60px"}}>¡TE OFRECEMOS EL INTERNET</h1> 
        </div>
        <br />
        <div style={{color:"#66277d" }}>
           <h3 style={{fontSize:"30px"}}>MÁS ESTABLE A PRECIOS DE TU ALCANCE!</h3> 
        </div>
    </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <Card id="card" style={{
            borderRadius:"15px",
            width:"85%",
            boxShadow: "0px 0px 10px #66277d",
            textAlign:"center",
            marginLeft:"25px"}}>
            <br /> <br />
            <div>
                <b style={{fontSize:"45px", color:"#00267d"}}>30 MB</b>
            </div>
            <div>
                <b style={{color:"#00267d"}}>INTERNET DE FIBRA OPTICA</b>
            </div>
            <br/>
            <div>
                <b style={{fontSize:"25px", marginBottom:"1000px",color:"#66277d"}}> S/.   </b>
                <b style={{fontSize:"60px", color:"#66277d"}}>75 </b> 
            </div>
            <br/>
            <div style={{textAlign:"left", margin:"10px 20px"}}>
                <Icon name="check circle outline"></Icon>
               <b style={{display:"inline"}}>RAUTER WIFI</b> 
            </div>
            <div style={{textAlign:"left", margin:"10px 20px"}}>
            <Icon name="check circle outline"></Icon>
            <b style={{display:"inline"}}>INTERNET SIMÉTRICO</b> 
            </div>
            <div style={{textAlign:"left", margin:"10px 20px"}}>
            <Icon name="check circle outline"></Icon>
             <b style={{display:"inline"}}>DECARGAS Y CARGAS ILIMITADAS</b> 
            </div>
            <br/>
            <div>
            <Button style={{
                color:"white", 
                backgroundColor:"#66277d",
                width:"50%",
            }} animated='fade'>
                <Button.Content visible>SOLICITAR</Button.Content>
                <Button.Content hidden>
                    <Icon name='shop' />
            </Button.Content>
            </Button>
            </div>
            
            </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card id="card" style={{
            borderRadius:"15px",
            width:"85%",
            boxShadow: "0px 0px 20px #66277d",
            textAlign:"center",
            marginLeft:"25px"}}>
            <br /> <br />
            <div>
                <b style={{fontSize:"45px", color:"#00267d"}}>50 MB</b>
            </div>
            <div>
                <b style={{color:"#00267d"}}>INTERNET DE FIBRA OPTICA</b>
            </div>
            <br/>
            <div>
                <b style={{fontSize:"25px", marginBottom:"1000px",color:"#66277d"}}> S/.   </b>
                <b style={{fontSize:"60px", color:"#66277d"}}>85 </b> 
            </div>
            <br/>
            <div style={{textAlign:"left", margin:"10px 20px"}}>
                <Icon name="check circle outline"></Icon>
               <b style={{display:"inline"}}>RAUTER WIFI</b> 
            </div>
            <div style={{textAlign:"left", margin:"10px 20px"}}>
            <Icon name="check circle outline"></Icon>
            <b style={{display:"inline"}}>INTERNET SIMÉTRICO</b> 
            </div>
            <div style={{textAlign:"left", margin:"10px 20px"}}>
            <Icon name="check circle outline"></Icon>
             <b style={{display:"inline"}}>DECARGAS Y CARGAS ILIMITADAS</b> 
            </div>
            <br/>
            <div>
            <Button style={{
                color:"white", 
                backgroundColor:"#66277d",
                width:"50%",
            }} animated='fade'>
                <Button.Content visible>SOLICITAR</Button.Content>
                <Button.Content hidden>
                    <Icon name='shop' />
            </Button.Content>
            </Button>
            </div>
            
            </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card id="card" style={{
            borderRadius:"15px",
            width:"85%",
            boxShadow: "0px 0px 20px #66277d",
            textAlign:"center",
            marginLeft:"25px"}}>
            <br /> <br />
            <div>
                <b style={{fontSize:"45px", color:"#00267d"}}>80 MB</b>
            </div>
            <div>
                <b style={{color:"#00267d"}}>INTERNET DE FIBRA OPTICA</b>
            </div>
            <br/>
            <div>
                <b style={{fontSize:"25px", marginBottom:"1000px",color:"#66277d"}}> S/.   </b>
                <b style={{fontSize:"60px", color:"#66277d"}}>99 </b> 
            </div>
            <br/>
            <div style={{textAlign:"left", margin:"10px 20px"}}>
                <Icon name="check circle outline"></Icon>
               <b style={{display:"inline"}}>RAUTER WIFI</b> 
            </div>
            <div style={{textAlign:"left", margin:"10px 20px"}}>
            <Icon name="check circle outline"></Icon>
            <b style={{display:"inline"}}>INTERNET SIMÉTRICO</b> 
            </div>
            <div style={{textAlign:"left", margin:"10px 20px"}}>
            <Icon name="check circle outline"></Icon>
             <b style={{display:"inline"}}>DECARGAS Y CARGAS ILIMITADAS</b> 
            </div>
            <br/>
            <div>
            <Button style={{
                color:"white", 
                backgroundColor:"#66277d",
                width:"50%",
            }} animated='fade'>
                <Button.Content visible>SOLICITAR</Button.Content>
                <Button.Content hidden>
                    <Icon name='shop' />
            </Button.Content>
            </Button>
            </div>
            
            </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card id="card" style={{
            borderRadius:"15px",
            width:"85%",
            boxShadow: "0px 0px 20px #66277d",
            textAlign:"center",
            marginLeft:"25px"}}>
            <br /> <br />
            <div>
                <b style={{fontSize:"45px", color:"#00267d"}}>100 MB</b>
            </div>
            <div>
                <b style={{color:"#00267d"}}>INTERNET DE FIBRA OPTICA</b>
            </div>
            <br/>
            <div>
                <b style={{fontSize:"25px", marginBottom:"1000px",color:"#66277d"}}> S/.   </b>
                <b style={{fontSize:"60px", color:"#66277d"}}>119 </b> 
            </div>
            <br/>
            <div style={{textAlign:"left", margin:"10px 20px"}}>
                <Icon name="check circle outline"></Icon>
               <b style={{display:"inline"}}>RAUTER WIFI</b> 
            </div>
            <div style={{textAlign:"left", margin:"10px 20px"}}>
            <Icon name="check circle outline"></Icon>
            <b style={{display:"inline"}}>INTERNET SIMÉTRICO</b> 
            </div>
            <div style={{textAlign:"left", margin:"10px 20px"}}>
            <Icon name="check circle outline"></Icon>
             <b style={{display:"inline"}}>DECARGAS Y CARGAS ILIMITADAS</b> 
            </div>
            <br/>
            <div>
            <Button style={{
                color:"white", 
                backgroundColor:"#66277d",
                width:"50%",
            }} animated='fade'>
                <Button.Content visible>SOLICITAR</Button.Content>
                <Button.Content hidden>
                    <Icon name='shop' />
            </Button.Content>
            </Button>
            </div>
            
            </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card id="card" style={{
            borderRadius:"15px",
            width:"85%",
            boxShadow: "0px 0px 20px #66277d",
            textAlign:"center",
            marginLeft:"25px"}}>
            <br /> <br />
            <div>
                <b style={{fontSize:"45px", color:"#00267d"}}>150 MB</b>
            </div>
            <div>
                <b style={{color:"#00267d"}}>INTERNET DE FIBRA OPTICA</b>
            </div>
            <br/>
            <div>
                <b style={{fontSize:"25px", marginBottom:"1000px",color:"#66277d"}}> S/.   </b>
                <b style={{fontSize:"60px", color:"#66277d"}}>159 </b> 
            </div>
            <br/>
            <div style={{textAlign:"left", margin:"10px 20px"}}>
                <Icon name="check circle outline"></Icon>
               <b style={{display:"inline"}}>RAUTER WIFI</b> 
            </div>
            <div style={{textAlign:"left", margin:"10px 20px"}}>
            <Icon name="check circle outline"></Icon>
            <b style={{display:"inline"}}>INTERNET SIMÉTRICO</b> 
            </div>
            <div style={{textAlign:"left", margin:"10px 20px"}}>
            <Icon name="check circle outline"></Icon>
             <b style={{display:"inline"}}>DECARGAS Y CARGAS ILIMITADAS</b> 
            </div>
            <br/>
            <div>
            <Button style={{
                color:"white", 
                backgroundColor:"#66277d",
                width:"50%",
            }} animated='fade'>
                <Button.Content visible>SOLICITAR</Button.Content>
                <Button.Content hidden>
                    <Icon name='shop' />
            </Button.Content>
            </Button>
            </div>
            
            </Card>
        </SwiperSlide>
    
      </Swiper>
      <br/>
      <div style={{color:"#00267d", textAlign:"center"}}>
          <b>(*)Pago único de instalacion del servicio S/150.00 - Precios Incluyen IGV</b>  
        </div>
    </>
  );
}