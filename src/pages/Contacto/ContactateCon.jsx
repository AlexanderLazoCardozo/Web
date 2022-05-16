import React from 'react'

import Contactate from "./images/Contactate.webp"
import ContactateMovil from "./images/ContactateMovil.webp"

import FondoInferior from "./images/FondoInferior.webp"
import IconoW from "./images/IconoW.png"
import styled from "styled-components";

const Pc = styled.div`

        @media screen and (max-width: 700px) {
            display:none;
        }`;  
    const Movil = styled.div`
        @media screen and (min-width: 700px) {
            display:none;
        }
        @media screen and (max-width: 700px) {
            display:block;
    }`; 
const ContactateCon = () => {
  return (
    <>
    <img style={{width:"110%", marginBottom:"-10px"}} src={FondoInferior} />
    <Pc>
    <img style={{width:"100%"}} src={Contactate} />
    <div style={{textAlign:"right"}}>
      <a href="https://api.whatsapp.com/send/?phone=51956880681&text=Hola+estoy+interesado+en+adquirir+el+internet+de+WASI.+Quisiera+saber+si+tengo+cobertura%2C+me+encuentro+en+el+distrito+de...&app_absent=0" target="_blank">
      <img style={{width:"10%",marginTop:"-500px", marginBottom:"70px", marginRight:"75px"}} src={IconoW} />
      </a>
    </div>
    </Pc>

    <Movil>
    <img style={{width:"110%"}} src={ContactateMovil} />

    </Movil>
    

    </>
)
}

export default ContactateCon