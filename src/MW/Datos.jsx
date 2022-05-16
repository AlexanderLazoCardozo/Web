import React from 'react'
import "./stylesBannerWasi.css"
import FondoDatos from "./img/FondoDatos.png"
import { Button, Card, Grid } from 'semantic-ui-react'
import Usuario from "./img/Usuario.png"
import Tag from "./img/Tag.png"
import Billetes from "./img/Billetes.png"

const Datos = () => {
  return (
    <div id="bannerDatos">
        <Grid  centered >
            <Grid.Column style={{marginLeft:"10%",marginRight:"-8%",width:"30%",marginTop:"15%"}}>
            <Card style={{height:"350px",width:"350px",padding:"20px",border:"15px solid #69007F", borderRadius:"20px"}}>
                <Card.Content>
                    <Card.Header><b style={{fontSize:"40px", fontFamily:"Poppins",color:"#362F70"}}>Deuda</b><br/> <b style={{fontSize:"35px",color:"#362F70"}}>Actual</b>
                    <img src={Billetes} style={{position:"absolute", marginLeft:"100px", marginTop:"-40px"}}/>
                    </Card.Header>
                    <Card.Description>
                    <br/><br/>
                    <p style={{fontSize:"50px", fontFamily:"Poppins",color:"#362F70",fontWeight:"900"}}>S/. 0.00</p>
                    <hr/> 
                    </Card.Description>
                </Card.Content>
            </Card>
            </Grid.Column>
            <Grid.Column style={{width:"30%",marginTop:"15%"}}>
            <Card style={{height:"350px",width:"350px",padding:"20px",border:"15px solid #69007F", borderRadius:"20px"}}>
                <Card.Content>
                    <Card.Header><b style={{fontSize:"40px", fontFamily:"Poppins",color:"#362F70"}}>Estado</b><br/> 
                    <img src={Usuario} style={{width:"60px",position:"absolute", marginLeft:"200px", marginTop:"-40px"}}/>

                    </Card.Header>
                    <Card.Description>
                    <br/><br/><br/>
                    <p style={{fontSize:"50px", fontFamily:"Poppins",color:"#362F70",fontWeight:"900"}}>Activo</p>
                    <hr/> 
                    <Button size='medium' style={{
                    backgroundColor:"#67277C", 
                    color:"white",
                    width:"200px",
                    fontFamily:"Poppins",
                    marginLeft:"10%",
                    marginTop:"20px"
                    }}>
                    Ver mis datos
                </Button>
                    </Card.Description>
                </Card.Content>
            </Card>
            </Grid.Column>
            <Grid.Column style={{width:"30%",marginTop:"15%", marginLeft:"-5%"}}>
                <Grid.Row>
                <Card  style={{marginTop:"10px",marginBottom:"20px",height:"150px",width:"350px",padding:"10px",border:"10px solid #F0F0F0", borderRadius:"20px"}}>
                <Card.Content>
                    <Card.Header><b style={{fontSize:"35px", fontFamily:"Poppins",color:"#362F70",fontWeight:"900"}}>TICKET</b><br/> <b style={{fontSize:"20px"}}>POSTVENTA</b>
                    <img src={Tag} style={{width:"40px",position:"absolute", marginLeft:"100px", marginTop:"-30px"}}/>

                    </Card.Header>
                    <Card.Description>
                    <p style={{fontSize:"30px", fontFamily:"Poppins",color:"#362F70",fontWeight:"900", opacity:"0.6"}}>0 Ticket</p>
                    <hr style={{marginTop:"-20px"}}/> 
                    
                    </Card.Description>
                </Card.Content>
                </Card>
                </Grid.Row>
                <Grid.Row>
                <Card style={{height:"150px",width:"350px",padding:"10px",border:"10px solid #F0F0F0", borderRadius:"20px"}}>
                <Card.Content>
                    <Card.Header><b style={{fontSize:"30px", fontFamily:"Poppins",color:"#362F70",fontWeight:"900"}}>SOPORTE</b><br/> <b style={{fontSize:"20px"}}>TECNOLÓGICO</b>
                    <img src={Tag} style={{width:"40px",position:"absolute", marginLeft:"100px", marginTop:"-30px"}}/>

                    </Card.Header>
                    <Card.Description>
                    <p style={{fontSize:"30px", fontFamily:"Poppins",color:"#362F70",fontWeight:"900", opacity:"0.6"}}>0 Ticket</p>
                    <hr style={{marginTop:"-20px"}}/> 
                    
                    </Card.Description>
                </Card.Content>
                </Card>
                </Grid.Row>
            </Grid.Column>
        </Grid>
    </div>
  )
}

export default Datos