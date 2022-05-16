import React from 'react'
import { Grid, Icon } from 'semantic-ui-react';
import WasiFooter from "../../images/WasiFooter.png"
import wasiLogo from "../../images/wasiLogo.png"

import Legal from './Accordion/Legal';
import Contacto from './Accordion/Contacto';
import Atencion from './Accordion/Atencion';

import styled from "styled-components";

const StyleFooter = styled.div`

        @media screen and (max-width: 1215px) {
            display:none;
        }`;  
    const StyleFooter2 = styled.div`
        @media screen and (min-width: 1215px) {
            display:none;
        }
        @media screen and (max-width: 1215px) {
            display:block;
    }`;  

const Footer = () => {
    
       
  return (
    <>
    <StyleFooter>
    <div  id='computer'>   
        <br />
        <Grid centered  >
        <Grid.Row  columns={5}>
        <Grid.Column>
            <Grid>
                <Grid.Row>
                <img style={{width:"200px",marginTop:"50px",marginLeft:"-40px"}} src={wasiLogo}></img>
                </Grid.Row>
                <Grid.Row style={{fontSize:"35px", textAlign:"center"}}>
                    <Grid.Column  style={{marginLeft:"-40px"}}>
                    <a href='https://www.facebook.com/wasiperu.pe' target="_blank">
                    <Icon style={{color:"#66277d"}}  name='facebook official' />
                    </a>
                    </Grid.Column>

                    <Grid.Column  style={{marginLeft:"20px"}}>
                    <a href='https://www.instagram.com/wasiperu.pe/' target="_blank">

                    <Icon style={{color:"#66277d"}} name='instagram' />
                    </a>
                    </Grid.Column>
                    
                    <Grid.Column style={{marginLeft:"20px"}}>
                    <a href='https://www.youtube.com/channel/UC66bN-db1VOufgDGvZ8ojyg' target="_blank">

                    <Icon style={{color:"#66277d"}} name='youtube' />
                    </a>
                    </Grid.Column>

                    <Grid.Column style={{marginLeft:"20px"}}>
                    <a href='https://www.linkedin.com/in/wasiperuinternet/' target="_blank">

                    <Icon style={{color:"#66277d"}} name='linkedin' />
                    </a>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Grid.Column>   
        <Grid.Column> 
            <h1 style={{color:"#00277C",fontFamily:"Poppins, sans-serif", fontWeight:"550"}}>Contáctanos</h1>
            <Contacto />
            
        </Grid.Column>
        <Grid.Column>
        <div style={{marginTop:"50px"}}></div>
            <Legal />
            
        </Grid.Column>
        <Grid.Column>
            <div style={{marginTop:"50px"}}></div>
            <Atencion />
            
        </Grid.Column>
        </Grid.Row>
        </Grid>
    </div>
    <br/><br/><br/>
    </StyleFooter>
    <StyleFooter2 >
    <div >
        <Grid style={{marginRight:"6%"}} centered columns={2} >
        <Grid.Row  >
        <Grid centered columns={8}>
                <Grid.Row>
                <img style={{width:"200px"}} src={wasiLogo}></img>
                </Grid.Row>
                <Grid.Row style={{fontSize:"40px", textAlign:"center"}}>
                <Grid.Column  style={{marginLeft:"-40px"}}>
                    
                    </Grid.Column>
                    <Grid.Column  style={{marginLeft:"-40px"}}>
                    <a href='https://www.facebook.com/wasiperu.pe' target="_blank">
                    <Icon style={{color:"#66277d"}}  name='facebook official' />
                    </a>
                    </Grid.Column>

                    <Grid.Column  style={{marginLeft:"20px"}}>
                    <a href='https://www.instagram.com/wasiperu.pe/' target="_blank">

                    <Icon style={{color:"#66277d"}} name='instagram' />
                    </a>
                    </Grid.Column>
                    
                    <Grid.Column style={{marginLeft:"20px"}}>
                    <a href='https://www.youtube.com/channel/UC66bN-db1VOufgDGvZ8ojyg' target="_blank">

                    <Icon style={{color:"#66277d"}} name='youtube' />
                    </a>
                    </Grid.Column>

                    <Grid.Column style={{marginLeft:"20px"}}>
                    <a href='https://www.linkedin.com/in/wasiperuinternet/' target="_blank">

                    <Icon style={{color:"#66277d"}} name='linkedin' />
                    </a>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
         
        
        </Grid.Row>
        <Grid.Row style={{marginLeft:"50px"}}>
        <Grid.Column  >
            <h1 style={{color:"#00277C",fontFamily:"Poppins, sans-serif", fontWeight:"550"}}>Contáctanos</h1>
            <Contacto />


        </Grid.Column>
        
        <Grid.Column >
            <div style={{marginTop:"50px", marginRight:"10%"}}>
            <Atencion />
            <br/><br/>
            <Legal />

            </div>
        </Grid.Column>
        
        </Grid.Row>
        </Grid>
    </div>
    <br/><br/><br/>
    </StyleFooter2>
    </>
  )
}

export default Footer