import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'
import TerminosyCondiciones  from "./../../../PDF/TerminosyCondiciones.pdf"
import BajaDelServicioWASIv2  from "./../../../PDF/BajaDelServicioWASIv2.pdf"
import FormularioDeReclamoWASI  from "./../../../PDF/FormularioDeReclamoWASI.pdf"
import CondicionesUsoSitioWebWASIv2  from "./../../../PDF/CondicionesUsoSitioWebWASIv2.pdf"
import NeutralidadDeLaRedWASIv2  from "./../../../PDF/NeutralidadDeLaRedWASIv2.pdf"
import PoliticaDeUsoDeInternet  from "./../../../PDF/PoliticaDeUsoDeInternet.pdf"
import ProtecciondeDatosWasi  from "./../../../PDF/ProtecciondeDatosWasi.pdf"
import RequisitoDeAccesoAlServicioWASIv2  from "./../../../PDF/RequisitoDeAccesoAlServicioWASIv2.pdf"
import TarifasWASIv2  from "./../../../PDF/TarifasWASIv2.pdf"

export default class Legal extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Accordion styled>
        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          
         <div style={{fontSize:"20px"}}><Icon name='dropdown' />
        Legal y Regulatorio
        </div>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
        <li >            
                <a href={TerminosyCondiciones} target="_blank">
                    Términos y Condiciones
                </a>
            </li>
            <li >            
                <a href={BajaDelServicioWASIv2} target="_blank">
                    Baja del servicio
                </a>
            </li>
            <li >            
                <a href={FormularioDeReclamoWASI} target="_blank">
                    Formulario de Reclamo
                </a>
            </li>
            <li >            
                <a href={PoliticaDeUsoDeInternet} target="_blank">
                    Condiciones del uso de Servicio
                </a>
            </li>
            <li >            
                <a href={RequisitoDeAccesoAlServicioWASIv2} target="_blank">
                    Requisitos de acceso al servicio
                </a>
            </li>
            <li >            
                <a href={TarifasWASIv2} target="_blank">
                    Tarifas Wasi
                </a>
            </li>
            <li >            
                <a href={NeutralidadDeLaRedWASIv2} target="_blank">
                    Neutralidad de la Red
                </a>
            </li>
            <li >            
                <a href={CondicionesUsoSitioWebWASIv2} target="_blank">
                    Condiciones uso sitio web Wasi
                </a>
            </li>
            <li >            
                <a href={ProtecciondeDatosWasi} target="_blank">
                    Protección de Datos Wasi
                </a>
            </li>
        </Accordion.Content>
        
      </Accordion>
    )
  }
}