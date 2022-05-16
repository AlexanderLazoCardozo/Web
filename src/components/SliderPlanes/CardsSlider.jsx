import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Planes.css";

// import required modules
import { EffectCoverflow, Navigation, Pagination,Autoplay } from "swiper";
import { Button, Card, Icon, Image, Modal } from "semantic-ui-react";

import Plan30 from "./images/Plan30.jpg"
import Plan50 from "./images/Plan50.jpg"
import Plan80 from "./images/Plan80.jpg"
import Plan100 from "./images/Plan100.jpg"
import Plan150 from "./images/Plan150.jpg"
import { NavLink } from "react-router-dom";

export default function CardsSlider() {

    const [open, setOpen] = React.useState(false)
    const [open2, setOpen2] = React.useState(false)
    const [open3, setOpen3] = React.useState(false)
    const [open4, setOpen4] = React.useState(false)
    const [open5, setOpen5] = React.useState(false)


  return (
    <>
    <div style={{textAlign:"center"}}>
        <div style={{color:"#00267d", marginTop:"40px"}}>
           <h1 id="ofIn" >¡TE OFRECEMOS EL INTERNET</h1> 
        </div>
        <br />
        <div style={{color:"#66277d" }}>
           <h3 id="ofIn2" >MÁS ESTABLE A PRECIOS DE TU ALCANCE!</h3> 
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
        navigation={true}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        modules={[Autoplay, EffectCoverflow, Pagination,Navigation]}
        className="mySwiperPlan"
        loop={true}
      >
        <SwiperSlide id="slidePlan">
            
        <Card id="card" style={{
            borderRadius:"15px",
            width:"90%",
            textAlign:"center",
            border:"2px solid #66277d",
            marginLeft:"15px",
            display: "block",
            height: "590px",
            }}>
            <br /> <br />
            <div>
                <b id="lvl1" style={{color:"#00267d"}}>30 Mbps</b>
            </div>
            <div style={{marginTop:"8px"}}>
                <b id="lvl2" style={{color:"#00267d"}}>Internet de fibra óptica</b>
            </div>
            <br/>
            <div id="soles">
                <b id="lvl3" style={{color:"#66277d"}}> S/.   </b>
                <b id="lvl4" style={{color:"#66277d"}}>75 </b> 
            </div>
            <br/>
            <div style={{textAlign:"left", margin:"20px 50px"}}>
            <Icon bordered size="large" name="wifi" style={{borderRadius:"10px",backgroundColor:"#66277d",color:"white",height:"20px", marginTop:"-4px"}}/>
            
               <b id="lvl5" style={{display:"inline", marginLeft:"7px"}}>Router Wifi</b> 
            </div>
            <div style={{textAlign:"left", margin:"10px 50px"}}>
            <Icon bordered  size="large" name="random"  style={{borderRadius:"10px",backgroundColor:"#66277d",color:"white",marginTop:"-2px",height:"20px"}}></Icon>
            <b id="lvl5" style={{display:"inline", marginLeft:"7px"}}>Internet Simétrico</b> 
            </div>
            <div style={{textAlign:"left", margin:"10px 50px"}}>
            <Icon bordered  size="large" name="download" style={{borderRadius:"10px",backgroundColor:"#66277d",color:"white",height:"20px", marginTop:"15px"}}></Icon>
             
             <b id="lvl5" style={{marginTop:"20px", marginLeft:"7px"}}>Descargas y Cargas</b><div style={{marginLeft:"53px", marginTop:"-19px"}}><b id="lvl5" > Ilimitadas</b> </div>


            </div>
            <br/>
            <div>
            <NavLink to="/Solicitar">
                <Button size="big" style={{
                borderRadius:"20px",
                color:"white", 
                backgroundColor:"#66277d",
                width:"50%",
                marginTop:"35px",
                marginBottom:"10px"
            }} animated='fade'>
                <Button.Content id="lvl6" visible><b style={{marginLeft:"10px"}}>Solicitar</b></Button.Content>
                <Button.Content hidden>
                    <Icon name='shop' />
            </Button.Content>
            </Button><br/>
                </NavLink>
                <Modal
                size="large"
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<a style={{fontSize:"20px",fontFamily:"Poppins, sans-serif"}}>Ver más</a>}
                >
                    <Modal.Header>Información Adicional Plan 30MB</Modal.Header>
                    <Modal.Content image>
                        <Image size='fullscreen' src={Plan30}  />
                        
                    </Modal.Content>
                    <Modal.Actions>
                        <Button onClick={() => setOpen(false)} positive>
                        Ok
                        </Button>
                    </Modal.Actions>
                </Modal>
            </div>
            
            </Card>
        </SwiperSlide>
        <SwiperSlide id="slidePlan">
            
        <Card id="card" style={{
            borderRadius:"15px",
            width:"90%",
            textAlign:"center",
            border:"2px solid #66277d",
            marginLeft:"15px",
            display: "block",
            height: "590px",
            }}>
            <br /> <br />
            <div>
                <b id="lvl1" style={{color:"#00267d"}}>50 Mbps</b>
            </div>
            <div style={{marginTop:"8px"}}>
                <b id="lvl2" style={{color:"#00267d"}}>Internet de fibra óptica</b>
            </div>
            <br/>
            <div id="soles">
                <b id="lvl3" style={{color:"#66277d"}}> S/.   </b>
                <b id="lvl4" style={{color:"#66277d"}}>85 </b> 
            </div>
            <br/>
            <div style={{textAlign:"left", margin:"20px 50px"}}>
            <Icon bordered size="large" name="wifi" style={{borderRadius:"10px",backgroundColor:"#66277d",color:"white",height:"20px", marginTop:"-4px"}}/>
            
               <b id="lvl5" style={{display:"inline", marginLeft:"7px"}}>Router Wifi</b> 
            </div>
            <div style={{textAlign:"left", margin:"10px 50px"}}>
            <Icon bordered  size="large" name="random"  style={{borderRadius:"10px",backgroundColor:"#66277d",color:"white",marginTop:"-2px",height:"20px"}}></Icon>
            <b id="lvl5" style={{display:"inline", marginLeft:"7px"}}>Internet Simétrico</b> 
            </div>
            <div style={{textAlign:"left", margin:"10px 50px"}}>
            <Icon bordered  size="large" name="download" style={{borderRadius:"10px",backgroundColor:"#66277d",color:"white",height:"20px", marginTop:"15px"}}></Icon>
             
             <b id="lvl5" style={{marginTop:"20px", marginLeft:"7px"}}>Descargas y Cargas</b><div style={{marginLeft:"53px", marginTop:"-19px"}}><b id="lvl5" > Ilimitadas</b> </div>


            </div>
            <br/>
            <div>
            <NavLink to="/Solicitar">
                <Button size="big" style={{
                borderRadius:"20px",
                color:"white", 
                backgroundColor:"#66277d",
                width:"50%",
                marginTop:"35px",
                marginBottom:"10px"
            }} animated='fade'>
                <Button.Content id="lvl6" visible><b style={{marginLeft:"10px"}}>Solicitar</b></Button.Content>
                <Button.Content hidden>
                    <Icon name='shop' />
            </Button.Content>
            </Button><br/>
                </NavLink>
                <Modal
                size="large"
                onClose={() => setOpen2(false)}
                onOpen={() => setOpen2(true)}
                open={open2}
                trigger={<a style={{fontSize:"20px",fontFamily:"Poppins, sans-serif"}}>Ver más</a>}
                >
                    <Modal.Header>Información Adicional Plan 50MB</Modal.Header>
                    <Modal.Content image>
                        <Image size='fullscreen' src={Plan50}  />
                        
                    </Modal.Content>
                    <Modal.Actions>
                        <Button onClick={() => setOpen2(false)} positive>
                        Ok
                        </Button>
                    </Modal.Actions>
                </Modal>
            </div>
            
            </Card>
        </SwiperSlide>
        <SwiperSlide id="slidePlan">
            
        <Card id="card" style={{
            borderRadius:"15px",
            width:"90%",
            textAlign:"center",
            border:"2px solid #66277d",
            marginLeft:"15px",
            display: "block",
            height: "590px",
            }}>
            <br /> <br />
            <div>
                <b id="lvl1" style={{color:"#00267d"}}>80 Mbps</b>
            </div>
            <div style={{marginTop:"8px"}}>
                <b id="lvl2" style={{color:"#00267d"}}>Internet de fibra óptica</b>
            </div>
            <br/>
            <div id="soles">
                <b id="lvl3" style={{color:"#66277d"}}> S/.   </b>
                <b id="lvl4" style={{color:"#66277d"}}>99 </b> 
            </div>
            <br/>
            <div style={{textAlign:"left", margin:"20px 50px"}}>
            <Icon bordered size="large" name="wifi" style={{borderRadius:"10px",backgroundColor:"#66277d",color:"white",height:"20px", marginTop:"-4px"}}/>
            
               <b id="lvl5" style={{display:"inline", marginLeft:"7px"}}>Router Wifi</b> 
            </div>
            <div style={{textAlign:"left", margin:"10px 50px"}}>
            <Icon bordered  size="large" name="random"  style={{borderRadius:"10px",backgroundColor:"#66277d",color:"white",marginTop:"-2px",height:"20px"}}></Icon>
            <b id="lvl5" style={{display:"inline", marginLeft:"7px"}}>Internet Simétrico</b> 
            </div>
            <div style={{textAlign:"left", margin:"10px 50px"}}>
            <Icon bordered  size="large" name="download" style={{borderRadius:"10px",backgroundColor:"#66277d",color:"white",height:"20px", marginTop:"15px"}}></Icon>
             
             <b id="lvl5" style={{marginTop:"20px", marginLeft:"7px"}}>Descargas y Cargas</b><div style={{marginLeft:"53px", marginTop:"-19px"}}><b id="lvl5" > Ilimitadas</b> </div>


            </div>
            <br/>
            <div>
            <NavLink to="/Solicitar">
                <Button size="big" style={{
                borderRadius:"20px",
                color:"white", 
                backgroundColor:"#66277d",
                width:"50%",
                marginTop:"35px",
                marginBottom:"10px"
            }} animated='fade'>
                <Button.Content id="lvl6" visible><b style={{marginLeft:"10px"}}>Solicitar</b></Button.Content>
                <Button.Content hidden>
                    <Icon name='shop' />
            </Button.Content>
            </Button><br/>
                </NavLink>
                <Modal
                size="large"
                onClose={() => setOpen3(false)}
                onOpen={() => setOpen3(true)}
                open={open3}
                trigger={<a style={{fontSize:"20px",fontFamily:"Poppins, sans-serif"}}>Ver más</a>}
                >
                    <Modal.Header>Información Adicional Plan 80MB</Modal.Header>
                    <Modal.Content image>
                        <Image size='fullscreen' src={Plan80}  />
                        
                    </Modal.Content>
                    <Modal.Actions>
                        <Button onClick={() => setOpen3(false)} positive>
                        Ok
                        </Button>
                    </Modal.Actions>
                </Modal>
            </div>
            
            </Card>
        </SwiperSlide>
        <SwiperSlide id="slidePlan">
            
        <Card id="card" style={{
            borderRadius:"15px",
            width:"90%",
            textAlign:"center",
            border:"2px solid #66277d",
            marginLeft:"15px",
            display: "block",
            height: "590px",
            }}>
            <br /> <br />
            <div>
                <b id="lvl1" style={{color:"#00267d"}}>100 Mbps</b>
            </div>
            <div style={{marginTop:"8px"}}>
                <b id="lvl2" style={{color:"#00267d"}}>Internet de fibra óptica</b>
            </div>
            <br/>
            <div id="soles">
                <b id="lvl3" style={{color:"#66277d"}}> S/.   </b>
                <b id="lvl4" style={{color:"#66277d"}}>119 </b> 
            </div>
            <br/>
            <div style={{textAlign:"left", margin:"20px 50px"}}>
            <Icon bordered size="large" name="wifi" style={{borderRadius:"10px",backgroundColor:"#66277d",color:"white",height:"20px", marginTop:"-4px"}}/>
            
               <b id="lvl5" style={{display:"inline", marginLeft:"7px"}}>Router Wifi</b> 
            </div>
            <div style={{textAlign:"left", margin:"10px 50px"}}>
            <Icon bordered  size="large" name="random"  style={{borderRadius:"10px",backgroundColor:"#66277d",color:"white",marginTop:"-2px",height:"20px"}}></Icon>
            <b id="lvl5" style={{display:"inline", marginLeft:"7px"}}>Internet Simétrico</b> 
            </div>
            <div style={{textAlign:"left", margin:"10px 50px"}}>
            <Icon bordered  size="large" name="download" style={{borderRadius:"10px",backgroundColor:"#66277d",color:"white",height:"20px", marginTop:"15px"}}></Icon>
             
             <b id="lvl5" style={{marginTop:"20px", marginLeft:"7px"}}>Descargas y Cargas</b><div style={{marginLeft:"53px", marginTop:"-19px"}}><b id="lvl5" > Ilimitadas</b> </div>


            </div>
            <br/>
            <div>
            <NavLink to="/Solicitar">
                <Button size="big" style={{
                borderRadius:"20px",
                color:"white", 
                backgroundColor:"#66277d",
                width:"50%",
                marginTop:"35px",
                marginBottom:"10px"
            }} animated='fade'>
                <Button.Content id="lvl6" visible><b style={{marginLeft:"10px"}}>Solicitar</b></Button.Content>
                <Button.Content hidden>
                    <Icon name='shop' />
            </Button.Content>
            </Button><br/>
                </NavLink>
                <Modal
                size="large"
                onClose={() => setOpen4(false)}
                onOpen={() => setOpen4(true)}
                open={open4}
                trigger={<a style={{fontSize:"20px",fontFamily:"Poppins, sans-serif"}}>Ver más</a>}
                >
                    <Modal.Header>Información Adicional Plan 100MB</Modal.Header>
                    <Modal.Content image>
                        <Image size='fullscreen' src={Plan100}  />
                        
                    </Modal.Content>
                    <Modal.Actions>
                        <Button onClick={() => setOpen4(false)} positive>
                        Ok
                        </Button>
                    </Modal.Actions>
                </Modal>
            </div>
            
            </Card>
        </SwiperSlide>
        <SwiperSlide id="slidePlan">
            
        <Card id="card" style={{
            borderRadius:"15px",
            width:"90%",
            textAlign:"center",
            border:"2px solid #66277d",
            marginLeft:"15px",
            display: "block",
            height: "590px",
            }}>
            <br /> <br />
            <div>
                <b id="lvl1" style={{color:"#00267d"}}>150 Mbps</b>
            </div>
            <div style={{marginTop:"8px"}}>
                <b id="lvl2" style={{color:"#00267d"}}>Internet de fibra óptica</b>
            </div>
            <br/>
            <div id="soles">
                <b id="lvl3" style={{color:"#66277d"}}> S/.   </b>
                <b id="lvl4" style={{color:"#66277d"}}>159 </b> 
            </div>
            <br/>
            <div style={{textAlign:"left", margin:"20px 50px"}}>
            <Icon bordered size="large" name="wifi" style={{borderRadius:"10px",backgroundColor:"#66277d",color:"white",height:"20px", marginTop:"-4px"}}/>
            
               <b id="lvl5" style={{display:"inline", marginLeft:"7px"}}>Router Wifi</b> 
            </div>
            <div style={{textAlign:"left", margin:"10px 50px"}}>
            <Icon bordered  size="large" name="random"  style={{borderRadius:"10px",backgroundColor:"#66277d",color:"white",marginTop:"-2px",height:"20px"}}></Icon>
            <b id="lvl5" style={{display:"inline", marginLeft:"7px"}}>Internet Simétrico</b> 
            </div>
            <div style={{textAlign:"left", margin:"10px 50px"}}>
            <Icon bordered  size="large" name="download" style={{borderRadius:"10px",backgroundColor:"#66277d",color:"white",height:"20px", marginTop:"15px"}}></Icon>
             
             <b id="lvl5" style={{marginTop:"20px", marginLeft:"7px"}}>Descargas y Cargas</b><div style={{marginLeft:"53px", marginTop:"-19px"}}><b id="lvl5" > Ilimitadas</b> </div>


            </div>
            <br/>
            <div>
            <NavLink to="/Solicitar">
                <Button size="big" style={{
                borderRadius:"20px",
                color:"white", 
                backgroundColor:"#66277d",
                width:"50%",
                marginTop:"35px",
                marginBottom:"10px"
            }} animated='fade'>
                <Button.Content id="lvl6" visible><b style={{marginLeft:"10px"}}>Solicitar</b></Button.Content>
                <Button.Content hidden>
                    <Icon name='shop' />
            </Button.Content>
            </Button><br/>
                </NavLink>
                <Modal
                size="large"
                onClose={() => setOpen5(false)}
                onOpen={() => setOpen5(true)}
                open={open5}
                trigger={<a style={{fontSize:"20px",fontFamily:"Poppins, sans-serif"}}>Ver más</a>}
                >
                    <Modal.Header>Información Adicional Plan 150MB</Modal.Header>
                    <Modal.Content image>
                        <Image size='fullscreen' src={Plan150}  />
                        
                    </Modal.Content>
                    <Modal.Actions>
                        <Button onClick={() => setOpen5(false)} positive>
                        Ok
                        </Button>
                    </Modal.Actions>
                </Modal>
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