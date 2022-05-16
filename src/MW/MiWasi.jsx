import React from 'react'
import { NavLink } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import BannerMW from "./img/BannerMW.png"
import botonIngresar from "./img/botonIngresar.png"
import ImagenBanner from "./img/ImagenBanner.png"
import MiWasiTxt from "./img/MiWasiTxt.png"

import "./stylesBannerWasi.css"

const MiWasi = () => {
  return (
    <div id="bannerWasi" >
        <Grid centered >

          <Grid.Column style={{width:"40%", marginTop:"10%"}}  >
            <img src={MiWasiTxt} />
            <p style={{color:"white", fontSize:"30px"}}>¡Una sección en donde podrás revisar
            los datos del servicio contratado,
            estar al pendiente de tus recibos
            y realizar consultas del mismo!</p>
            <br/><br/><br/><br/>
            <NavLink to="/MiWasi/Login">
            <img src={botonIngresar} />
            </NavLink>

          </Grid.Column>
          
          <Grid.Column style={{width:"30%",marginTop:"7%"}}>
            <img src={ImagenBanner} />

          </Grid.Column>

        </Grid>
    </div>
  )
}

export default MiWasi