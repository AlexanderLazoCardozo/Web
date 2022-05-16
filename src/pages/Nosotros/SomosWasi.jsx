import React from 'react'

import Ver from "./images/Ver.svg"

import FONDO3 from "./images/FONDO3.png"


import styled from "styled-components";

import { Grid } from 'semantic-ui-react';

const Pc = styled.div`

@media screen and (max-width: 1216px) {
    display:none;
}`;  
const Movil = styled.div`
@media screen and (min-width: 1216px) {
    display:none;
}
@media screen and (max-width: 1216px) {
    display:block;
}`;  

const SomosWasi = () => {
  return (
    <>
    <Pc>
    <div>
      <div >
        <img style={{zIndex:"-1",width:"100%", textAlign:"center", position:"absolute"}} src={FONDO3} />
      </div>
        <Grid centered  >
        <Grid.Row columns={2}>
        <Grid.Column>
          <div style={{textAlign:"left", marginLeft:"20%", color:"#372C70"}}>
            <h1 style={{fontSize:"80px", marginTop:"70px"}}>SOMOS WASI</h1>
            <h3 style={{fontSize:"30px"}}>Somos 100% peruanos, internet de casa para tu casa. Te proveemos el servicio de internet con la tecnologia de fibra óptica.</h3>
          </div>
        </Grid.Column>   
        <Grid.Column> 
        <div style={{textAlign:"center"}}>
          <a href="https://www.youtube.com/watch?v=pwTlSejnDsE" target="_blank">
            <img style={{width:"60%",marginBottom:"10%",marginTop:"70px"}} src={Ver}></img>
          </a>
          </div>
            
        </Grid.Column>
        
        </Grid.Row>
        </Grid>
         
    </div>
    </Pc>

    <Movil>
    <div>
        <Grid centered  >
        <Grid.Row columns={2}>
          <div style={{textAlign:"left", marginLeft:"10%", marginRight:"5%", color:"#372C70"}}>
            <h1 style={{fontSize:"80px", marginTop:"70px"}}>SOMOS WASI</h1>
            <h3 style={{fontSize:"20px"}}>Somos 100% peruanos, internet de casa para tu casa. Te proveemos el servicio de internet con la tecnologia de fibra óptica.</h3>
          </div>
        </Grid.Row>

        <Grid.Row> 
        <div style={{textAlign:"center"}}>
        <a href="https://www.youtube.com/watch?v=pwTlSejnDsE" target="_blank">
            <img style={{width:"100%",marginBottom:"150px",marginTop:"70px"}} src={Ver}></img>
        </a>
        </div>
        </Grid.Row>
        
        </Grid>
         
    </div>
    </Movil>
    </>

  )
}

export default SomosWasi