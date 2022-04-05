import React from 'react'
import { Grid } from 'semantic-ui-react';
import WasiFooter from "../../images/WasiFooter.png"
import styled from "styled-components";


const Footer = () => {
    const StyleFooter = styled.div`

        @media screen and (max-width: 1000px) {
            display:none;
        }`;  
    const StyleFooter2 = styled.div`
        @media screen and (min-width: 1000px) {
            display:none;
        }
        @media screen and (max-width: 1000px) {
            display:block;
    }`;  
       
  return (
    <>
    <StyleFooter>
    <div  id='computer'>   
        <br /><br /><br />
        <Grid centered  >
        <Grid.Row  columns={5}>
        <Grid.Column>
            <img style={{width:"200px",marginTop:"90px",marginLeft:"-40px"}} src={WasiFooter}></img>
        </Grid.Column>   
        <Grid.Column> 
            <h1>Contáctanos</h1>
            <b>Dirección Fiscal</b><br />
            <>Av santa rosa 1050 - Santa anita</><br/>
            <>Lima, Perú</>
            
            <br /><br />
            <b>Atención al Cliente</b><br />
            <>956 859 217</><br />
            <>atencioncliente@wasiperu.pe</>

            <br /><br />
            <b>Soporte Técnico</b><br />
            <>946 436 658</><br />
            <>soporte@wasiperu.pe</>

            <br /><br />
            <b>Soporte Técnico</b><br />
            <>956 880 681</><br />
            <>ventas@wasiperu.pe</>

            <br /><br />
            <b>Soporte Técnico</b><br />
            <>981 056 606</><br />
            <>facturacion@wasiperu.pe</>
        </Grid.Column>
        <Grid.Column>
            <h1>Legal y Regulatorio</h1><br/>
            <li>Términos y Condiciones</li>
            <li>Baja del servicio</li>
            <li>Formulario de Reclamo</li>
            <li>Condiciones del uso de Servicio</li>
            <li>Requisitos de acceso al servicio</li>
            <li>Tarifas Wasi</li>
            <li>Neutralidad de la Red</li>
            <li>Condiciones uso sitio web Wasi</li>
            <li>Protección de Datos Wasi</li>
        </Grid.Column>
        <Grid.Column>
            <h1>Atención de Reclamos y Solicitudes en Línea</h1>
            <li>Atención de Reclamos</li>
            <li>Solicitudes en Línea - Soporte</li>
            <li>Solicitudes en Línea - Post Venta</li>
            <li>Solicitudes en Línea - Venta</li>
            <h1>Condiciones del Uso de Servicio</h1>
            <li>Planes de Servicio y Consideraciones</li>
        </Grid.Column>
        </Grid.Row>
        </Grid>
    </div>
    <br/><br/><br/>
    </StyleFooter>
    <StyleFooter2 >
    <div id='movil'>
        <br /><br /><br />
        <Grid centered columns={2} >
        <Grid.Row style={{marginLeft:"50px"}} >
        <Grid.Column>
            <img style={{width:"200px",marginTop:"90px",marginLeft:"20px"}} src={WasiFooter}></img>
        </Grid.Column>   
        <Grid.Column  >
            <h1>Contáctanos</h1>
            <b>Dirección Fiscal</b><br />
            <>Av santa rosa 1050 - Santa anita</><br/>
            <>Lima, Perú</>
            
            <br /><br />
            <b>Atención al Cliente</b><br />
            <>956 859 217</><br />
            <>atencioncliente@wasiperu.pe</>

            <br /><br />
            <b>Soporte Técnico</b><br />
            <>946 436 658</><br />
            <>soporte@wasiperu.pe</>

            <br /><br />
            <b>Soporte Técnico</b><br />
            <>956 880 681</><br />
            <>ventas@wasiperu.pe</>

            <br /><br />
            <b>Soporte Técnico</b><br />
            <>981 056 606</><br />
            <>facturacion@wasiperu.pe</>
        </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{marginLeft:"50px"}}>
        <Grid.Column >
            <h1>Legal y Regulatorio</h1><br/>
            <li>Términos y Condiciones</li>
            <li>Baja del servicio</li>
            <li>Formulario de Reclamo</li>
            <li>Condiciones del uso de Servicio</li>
            <li>Requisitos de acceso al servicio</li>
            <li>Tarifas Wasi</li>
            <li>Neutralidad de la Red</li>
            <li>Condiciones uso sitio web Wasi</li>
            <li>Protección de Datos Wasi</li>
        </Grid.Column>
        <Grid.Column>
            <h1>Atención de Reclamos y Solicitudes en Línea</h1>
            <li>Atención de Reclamos</li>
            <li>Solicitudes en Línea - Soporte</li>
            <li>Solicitudes en Línea - Post Venta</li>
            <li>Solicitudes en Línea - Venta</li>
            <h1 style={{marginTop:"8px"}}>Condiciones del Uso de Servicio</h1>
            <li>Planes de Servicio y Consideraciones</li>
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