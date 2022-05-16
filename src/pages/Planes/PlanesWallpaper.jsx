import React from "react";

import Planes from "./images/Planes.webp"
import PlanesMovil from "./images/PlanesMovil.webp"


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

export default function PlanesWallpaper() {
  return (
    <>
    <Pc>
    <img style={{width:"100%"}} src={Planes} />

    </Pc>
    <Movil>
    <img style={{width:"110%", marginTop:"40px"}} src={PlanesMovil} />

    </Movil>
    </>
  );
}
