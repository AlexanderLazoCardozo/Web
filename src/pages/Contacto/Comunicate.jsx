import React from 'react'
import { Grid, Icon } from 'semantic-ui-react';
import FondoInferior from "./images/FondoInferior.webp"
import styled from "styled-components";

const Pc = styled.div`

        @media screen and (max-width: 1133px) {
            display:none;
        }`;  
    const Movil = styled.div`
        @media screen and (min-width: 1133px) {
            display:none;
        }
        @media screen and (max-width: 1133px) {
            display:block;
    }`;  
const Comunicate = () => {
  return (
    <>   
    <Pc>
    <div style={{textAlign:"center"}}>
        <div style={{color:"#00267d", marginTop:"40px"}}>
           <h1 id='siguenos'>¡SIGUENOS EN NUESTRAS</h1> 
        </div>
        <br />
        <div style={{color:"#66277d" }}>
           <h1 id='redes'>REDES SOCIALES!</h1> 
        </div>
    </div>   
    <Grid centered style={{marginTop:"30px"}}  >
        <Grid.Row  columns={5}>

        <Grid.Column>
        <div style={{textAlign:"center", color:"#67277C"}}>
          <a href='https://www.facebook.com/wasiperu.pe' target="_blank">
          <Icon style={{color:"#66277d" }} color='darkblue' circular size='massive'   name='facebook'/>

          </a>
        </div>
        </Grid.Column> 

        <Grid.Column> 
        <div style={{textAlign:"center", color:"#67277C"}}>
         <a href='https://www.instagram.com/wasiperu.pe/' target="_blank"> 
         <Icon style={{color:"#66277d" }} circular size='massive' name='instagram'/>

          </a> 
        </div>
        </Grid.Column>

        <Grid.Column>
        <div style={{textAlign:"center", color:"#67277C"}}>
         <a href='https://www.youtube.com/channel/UC66bN-db1VOufgDGvZ8ojyg' target="_blank">
         <Icon style={{color:"#66277d" }} circular size='massive'  name='youtube'/>

          </a> 
        </div>
        </Grid.Column>

        <Grid.Column>
        <div style={{textAlign:"center", color:"#67277C"}}>
        <a href='https://www.linkedin.com/in/wasiperuinternet/' target="_blank" >
        <Icon style={{color:"#66277d" }} circular size='massive'  name='linkedin square'/>

        </a>
        </div>
        </Grid.Column>

        </Grid.Row>
    </Grid>
    </Pc>
     <Movil >
     <div style={{textAlign:"center"}}>
        <div style={{color:"#00267d", marginTop:"40px"}}>
           <h1 style={{fontSize:"30px"}}>¡SIGUENOS EN NUESTRAS</h1> 
        </div>
        <br />
        <div style={{color:"#66277d" }}>
           <h1 style={{fontSize:"40px", marginTop:"-30px"}}>REDES SOCIALES!</h1> 
        </div>
    </div>   
    <Grid centered style={{marginTop:"30px"}}  >

        <Grid.Row>
        <div style={{textAlign:"center", color:"#67277C"}}>
          <a href='https://www.facebook.com/wasiperu.pe' target="_blank">
          <Icon style={{color:"#66277d" }} color='darkblue' circular size='massive'   name='facebook'/>

          </a>
        </div>
        </Grid.Row> 

        <Grid.Row> 
        <div style={{textAlign:"center", color:"#67277C"}}>
         <a href='https://www.instagram.com/wasiperu.pe/' target="_blank"> 
         <Icon style={{color:"#66277d" }} circular size='massive' name='instagram'/>

          </a> 
        </div>
        </Grid.Row>

        <Grid.Row>
        <div style={{textAlign:"center", color:"#67277C"}}>
         <a href='https://www.youtube.com/channel/UC66bN-db1VOufgDGvZ8ojyg' target="_blank">
         <Icon style={{color:"#66277d" }} circular size='massive'  name='youtube'/>

          </a> 
        </div>
        </Grid.Row>

        <Grid.Row>
        <div style={{textAlign:"center", color:"#67277C"}}>
        <a href='https://www.linkedin.com/in/wasiperuinternet/' target="_blank" >
        <Icon style={{color:"#66277d" }} circular size='massive'  name='linkedin square'/>

        </a>
        </div>
        </Grid.Row>

    </Grid>
     </Movil>
    <img style={{width:"110%", marginTop:"100px", marginBottom:"50px"}} src={FondoInferior} />

    </>
  )
}

export default Comunicate