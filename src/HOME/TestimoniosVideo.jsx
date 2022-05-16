import React from 'react'
import Testimonios from "./images/Testimonios.webp"
import TestimoniosMovil from "./images/TestimoniosMovil.webp"


import { Embed, Icon } from 'semantic-ui-react';

import styled from "styled-components";

const Pc = styled.div`

        @media screen and (max-width: 989px) {
            display:none;
        }`;  
    const Movil = styled.div`
        @media screen and (min-width: 989px) {
            display:none;
        }
        @media screen and (max-width: 989px) {
            display:block;
    }`; 

const TestimoniosVideo = () => {
  return (
    <>
    <Pc>
    <img style={{width:"100%"}} src={Testimonios} />
      <div style={{
        width:"35%",
        marginTop:"-34%", 
        marginLeft:"33%"
      }}>
        <Embed  
        active
          id='pwTlSejnDsE'
          source='youtube'
        /> 
      </div>

      <div style={{
        textAlign:"center",
        marginTop:"30px",
        marginBottom:"10%"
      }}>
          <div style={{display:"inline-block", marginTop:"20px",marginLeft:"30px", marginRight:"30px",color:"white"}}>
          <Icon name="rocket" style={{fontSize:"40px"}} /><br />
          <b>Alta Velocidad </b><br /><br />
          </div>
          
          <div style={{display:"inline-block",marginTop:"20px", marginLeft:"30px", marginRight:"30px",color:"white"}}>
            <Icon name="random" style={{fontSize:"40px"}} /><br />
            <b>Misma Velocidad de </b><br /><b>subidas y Bajadas</b>
          </div>
          
          <div style={{display:"inline-block",marginTop:"20px", marginLeft:"30px", marginRight:"30px",color:"white"}}>
            <Icon name="download" style={{fontSize:"40px"}} /><br />
            <b>Descarga Ilimitada</b><br /><br />
          </div>
          <div style={{display:"inline-block",marginTop:"20px", marginLeft:"30px", marginRight:"30px",color:"white"}}>
            <Icon name="video camera" style={{fontSize:"40px"}} /><br />
            <b>Mejora al 100% tus</b> <br/> <b>contenido multimedia</b>
          </div>
          <div style={{display:"inline-block", marginTop:"20px",marginLeft:"30px", marginRight:"30px",color:"white"}}>
            
              <Icon name="call" style={{fontSize:"40px"}} />
              <br />
            <b>Atencion Rapida</b><br /><br />

          </div>
        </div>   
    </Pc>
      
      <Movil>
      <img style={{width:"110%"}} src={TestimoniosMovil} />
      <div style={{
        width:"85%",
        marginTop:"-130%",
        marginBottom:"80%",  
        marginLeft:"13%"
      }}>
        <Embed  
        active
          id='pwTlSejnDsE'
          source='youtube'
        /> 
      </div>
      
      </Movil>

    </>
  )
}

export default TestimoniosVideo