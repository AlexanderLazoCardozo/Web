import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import DudasFacturacion from "./images/DudasFacturacion.jpg"
import DudasLentitud from "./images/DudasLentitud.png"
import DudasPing from "./images/DudasPing.jpg"
import DudasRecibo from "./images/DudasRecibo.jpg"
import DudasRouter from "./images/DudasRouter.jpg"
import DudasContraseña from "./images/DudasContraseña.jpg"
import DudasConexion from "./images/DudasConexion.jpg"
import ParteInferior from "./images/ParteInferior.png"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./pregStyles.css";

import { Modal, Button, Card, Image, Icon } from "semantic-ui-react";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import ModalAcordeon1 from "./Acordeon/ModalAcordeon1";
import ModalAcordeon2 from "./Acordeon/ModalAcordeon2";
import ModalAcordeon3 from "./Acordeon/ModalAcordeon3";
import ModalAcordeon4 from "./Acordeon/ModalAcordeon4";
import ModalAcordeon5 from "./Acordeon/ModalAcordeon5";
import ModalAcordeon6 from "./Acordeon/ModalAcordeon6";
import ModalAcordeon7 from "./Acordeon/ModalAcordeon7";

export default function PreguntasFrecuentes() {

  const [open1, setOpen1] = React.useState(false)
  const [open2, setOpen2] = React.useState(false)
  const [open3, setOpen3] = React.useState(false)
  const [open4, setOpen4] = React.useState(false)
  const [open5, setOpen5] = React.useState(false)
  const [open6, setOpen6] = React.useState(false)
  const [open7, setOpen7] = React.useState(false)



  return (
    <>
    <div style={{textAlign:"center", margin:"30px 0px"}}>
    <Button style={{fontSize:"30px",color:"white",borderRadius:"30px",backgroundColor:"#76227e"}} >
       <b id="frecu" >¡PREGUNTAS FRECUENTES! </b>
    </Button>
    <br /><br />  

    <div id="soluciones">
     <b>Las soluciones a las dudas habituales de nuestros clientes.</b> 
    </div>

    </div> 
    <Swiper
      slidesPerView={1}
      slidesPerGroup={1}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        800: {
          slidesPerView: 2,
          spaceBetween: -150,
        },
        1170: {
          slidesPerView: 3,
          spaceBetween: -150,
        },
        1540: {
          slidesPerView: 4,
          spaceBetween: -150,
        }
      }}
        loopFillGroupWithBlank={true}
        
        navigation={true}
        modules={[Pagination, Navigation,Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide style={{height:"360px"}} >
            <Card id="card" style={{
            borderRadius:"15px",
            marginTop:"10px",
            margin:"10px auto auto auto"}}>
            <img id="preg" src={DudasLentitud} />

            <b id="preguntasF">Problemas de Lentitud</b>
            <Modal
              dimmer="default"
              onClose={() => setOpen1(false)}
              onOpen={() => setOpen1(true)}
              open={open1}
              trigger={<Button circular style={{color:"white",borderRadius:"20px",width:"100px", margin:"3px auto auto auto",backgroundColor:"#76227e"}} animated>
                <Button.Content visible>Ayuda</Button.Content>
                <Button.Content hidden>
                  <Icon name='arrow right' />
                </Button.Content>
              </Button>}
            >
              <Modal.Header>Problemas de Lentitud</Modal.Header>
              <Modal.Content image>
                <Image style={{display:"flex", alignItems:"center"}} size="medium" src={DudasLentitud} wrapped />
                <Modal.Description>
                  <ModalAcordeon1 />
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Button onClick={() => setOpen1(false)} positive>
                  Ok
                </Button>
              </Modal.Actions>
            </Modal>
            </Card>
        </SwiperSlide>
        <SwiperSlide>
            <Card id="card" style={{
            borderRadius:"15px",
            marginTop:"10px",
            margin:"10px auto auto auto"}}>
            <img id="preg" src={DudasContraseña} />
            <b id="preguntasF">Cambio de contraseña Wifi</b>
            <Modal
              dimmer="default"
              onClose={() => setOpen2(false)}
              onOpen={() => setOpen2(true)}
              open={open2}
              trigger={<Button circular style={{color:"white",backgroundColor:"#76227e",borderRadius:"20px",width:"100px", margin:"3px auto auto auto"}}  animated>
                <Button.Content visible>Ayuda</Button.Content>
                <Button.Content hidden>
                  <Icon name='arrow right' />
                </Button.Content>
              </Button>}
            >
              <Modal.Header>Cambio de contraseña Wifi</Modal.Header>
              <Modal.Content image>
                <Image style={{display:"flex", alignItems:"center"}} size="large" src={DudasContraseña} wrapped />
                <Modal.Description>
                  <ModalAcordeon2 />
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Button onClick={() => setOpen2(false)} positive>
                  Ok
                </Button>
              </Modal.Actions>
            </Modal>
            </Card>
        </SwiperSlide>
        <SwiperSlide>
            <Card id="card" style={{
            borderRadius:"15px",
            marginTop:"10px",
            margin:"10px auto auto auto"}}>
            <img id="preg" src={DudasFacturacion} />

            <b id="preguntasF">Dudas con la facturacion</b>
            <Modal
              dimmer="default"
              onClose={() => setOpen3(false)}
              onOpen={() => setOpen3(true)}
              open={open3}
              trigger={<Button style={{color:"white",backgroundColor:"#76227e",borderRadius:"20px",width:"100px", margin:"3px auto auto auto"}} color="violet" animated>
                <Button.Content visible>Ayuda</Button.Content>
                <Button.Content hidden>
                  <Icon name='arrow right' />
                </Button.Content>
              </Button>}
            >
              <Modal.Header>Dudas con la facturacion</Modal.Header>
              <Modal.Content image>
                <Image size="medium" src={DudasFacturacion} wrapped />
                <Modal.Description>
                  <div>
                    <ModalAcordeon3 />
                  </div>
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Button onClick={() => setOpen3(false)} positive>
                  Ok
                </Button>
              </Modal.Actions>
            </Modal>
            </Card>
        </SwiperSlide>
        <SwiperSlide>
            <Card id="card" style={{
            borderRadius:"15px",
            marginTop:"10px",
            margin:"10px auto auto auto"}}>
            <img id="preg" src={DudasConexion} />

            <b id="preguntasF">Problemas de Conexión</b>
            <Modal
              dimmer="default"
              onClose={() => setOpen4(false)}
              onOpen={() => setOpen4(true)}
              open={open4}
              trigger={<Button style={{color:"white",backgroundColor:"#76227e",borderRadius:"20px",width:"100px", margin:"3px auto auto auto"}} color="violet" animated>
                <Button.Content visible>Ayuda</Button.Content>
                <Button.Content hidden>
                  <Icon name='arrow right' />
                </Button.Content>
              </Button>}
            >
              <Modal.Header>Problemas de Conexión</Modal.Header>
              <Modal.Content image>
                <Image style={{display:"flex", alignItems:"center"}} size="medium" src={DudasConexion} wrapped />
                <Modal.Description>
                  <div>
                    <ModalAcordeon4 />
                  </div>
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Button onClick={() => setOpen4(false)} positive>
                  Ok
                </Button>
              </Modal.Actions>
            </Modal>
            </Card>
        </SwiperSlide>
        <SwiperSlide>
            <Card id="card" style={{
            borderRadius:"15px",
            marginTop:"10px",
            margin:"10px auto auto auto"}}>
            <img id="preg" src={DudasPing} />

            <b id="pingLat">Problemas de Ping y Latencia</b>
            <Modal
              dimmer="default"
              onClose={() => setOpen5(false)}
              onOpen={() => setOpen5(true)}
              open={open5}
              trigger={<Button style={{color:"white",backgroundColor:"#76227e",borderRadius:"20px",width:"100px", margin:"3px auto auto auto"}} color="violet" animated>
                <Button.Content visible>Ayuda</Button.Content>
                <Button.Content hidden>
                  <Icon name='arrow right' />
                </Button.Content>
              </Button>}
            >
              <Modal.Header>Problemas de Ping y Latencia</Modal.Header>
              <Modal.Content image>
                <Image style={{display:"flex", alignItems:"center"}} size="medium" src={DudasPing} wrapped />
                <Modal.Description>
                  <div>
                    <ModalAcordeon5 />
                  </div>
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Button onClick={() => setOpen5(false)} positive>
                  Ok
                </Button>
              </Modal.Actions>
            </Modal>
            </Card>
        </SwiperSlide> 
        <SwiperSlide>
            <Card id="card" style={{
            borderRadius:"15px",
            marginTop:"10px",
            margin:"10px auto auto auto"}}>
            <img id="preg" src={DudasRouter} />

            <b id="preguntasF">Restablecer Router</b>
            <Modal
              dimmer="default"
              onClose={() => setOpen6(false)}
              onOpen={() => setOpen6(true)}
              open={open6}
              trigger={<Button style={{color:"white",backgroundColor:"#76227e",borderRadius:"20px",width:"100px", margin:"3px auto auto auto"}} color="violet" animated>
                <Button.Content visible>Ayuda</Button.Content>
                <Button.Content hidden>
                  <Icon name='arrow right' />
                </Button.Content>
              </Button>}
            >
              <Modal.Header>Restablecer Router</Modal.Header>
              <Modal.Content image>
                <Image style={{display:"flex", alignItems:"center"}} size="medium" src={DudasRouter} wrapped />
                <Modal.Description>
                  <div>
                    <ModalAcordeon6 />
                  </div>
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Button onClick={() => setOpen6(false)} positive>
                  Ok
                </Button>
              </Modal.Actions>
            </Modal>
            </Card>
        </SwiperSlide>   
        <SwiperSlide>
            <Card id="card" style={{
            borderRadius:"15px",
            marginTop:"10px",
            margin:"10px auto auto auto"}}>
            <img id="preg" src={DudasRecibo} />

            <b id="preguntasF">¿Cómo pago mi Recibo?</b>
            <Modal
              dimmer="default"
              onClose={() => setOpen7(false)}
              onOpen={() => setOpen7(true)}
              open={open7}
              trigger={<Button style={{color:"white",backgroundColor:"#76227e",borderRadius:"20px",width:"100px", margin:"3px auto auto auto"}} color="violet" animated>
                <Button.Content visible>Ayuda</Button.Content>
                <Button.Content hidden>
                  <Icon name='arrow right' />
                </Button.Content>
              </Button>}
            >
              <Modal.Header>¿Cómo pago mi Recibo?</Modal.Header>
              <Modal.Content image>
                <Image style={{display:"flex", alignItems:"center"}} size="medium" src={DudasRecibo} wrapped />
                <Modal.Description>
                  <div>
                    <ModalAcordeon7 />
                  </div>
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Button onClick={() => setOpen7(false)} positive>
                  Ok
                </Button>
              </Modal.Actions>
            </Modal>
            </Card>
        </SwiperSlide>    
      </Swiper>
      <img style={{width:"100%", marginTop:"-80px", marginBottom:"-10px"}} src={ParteInferior} />

    </>
  );
}
