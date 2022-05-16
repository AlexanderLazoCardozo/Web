import React from "react";

import Nosotros from "./images/Nosotros.webp"
import NosotrosMovil from "./images/NosotrosMovil.webp"
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

export default function NosotrosWallpaper() {

  return (
    <>
    <Pc>
      <img style={{marginLeft:"-2px",width:"100%"}} src={Nosotros} />
    </Pc>
    <Movil>
      <img style={{width:"110%", marginTop:"40px"}} src={NosotrosMovil} />
    </Movil>
    </>
  );
}
