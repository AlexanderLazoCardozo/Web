import React from 'react'
import "./stylesBannerWasi.css"
import LogoLogin from "./img/LogoLogin.png"
import BotonLogin from "./img/BotonLogin.png"
import FondoLogin from "./img/FondoLogin.png"
import { Button, Grid, Input } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'


const LoginView = () => {
  return (
    <div id='bannerLogin'>
        <Grid centered >
            <Grid.Row>
            <img src={LogoLogin} style={{marginTop:"8%", marginLeft:"-15px"}} />

            </Grid.Row>
            <Grid.Row>
                
               <Input style={{
                   width:"400px",
                   height:"50px",
                   marginTop:"30px"
                   }} icon='user' iconPosition='left' placeholder="Email" ></Input>
            </Grid.Row>  
            <Grid.Row>
               <Input style={{
                   width:"400px",
                   height:"50px"
                   }} icon='key' iconPosition='left' placeholder="Contraseña" ></Input>
            </Grid.Row>  
            <Grid.Row>

                <NavLink to="/MiWasi/Login/Datos">
                <Button size='massive' style={{
                    backgroundColor:"#7BBBD2", 
                    color:"white",
                    width:"400px",
                    marginLeft:"8px",
                    marginTop:"20px",
                    fontFamily:"Poppins"
                    }}>
                    Ingresar
                </Button>
                </NavLink>

            </Grid.Row>  
        </Grid>
    </div>
  )
}

export default LoginView