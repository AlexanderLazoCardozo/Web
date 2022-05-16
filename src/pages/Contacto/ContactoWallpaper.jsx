import React from "react";

import Contacto from "./images/Contacto.webp"
import ContactoMovil from "./images/ContactoMovil.webp"

import styled from "styled-components";

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

export default function ContactoWallpaper() {
  return (
    <>
    <Pc>
      <img style={{width:"100%", marginLeft:"-2px"}} src={Contacto} />

    </Pc>
    <Movil>
      <img style={{width:"110%", marginLeft:"-2px", marginTop:"40px"}} src={ContactoMovil} />
    </Movil>
    </>
  );
}
