import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'
import {NavLink } from 'react-router-dom';
import PlanesDeServicioYConsideracionesWasi  from "./../../../PDF/PlanesDeServicioYConsideracionesWasi.pdf"

export default class Atencion extends Component {
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
        Atención de Reclamos y Solicitudes en Línea
        </div>

        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
            <li >            
            <a  href="/AtencionReclamos" target="_blank">
                Atención de Reclamos
            </a>
            </li>
            <li >            
                <a href='/Soporte'  target="_blank">
                Solicitudes en Línea - Soporte
                </a>
            </li>
            <li >            
                <a href='/PostVenta' target="_blank">
                Solicitudes en Línea - Post Venta
                </a>
            </li>
            <li >            
                <a href='/solicitudes-en-linea-venta/'  target="_blank">
                Solicitudes en Línea - Venta
                </a>
            </li>

        </Accordion.Content>
        <Accordion.Title
          active={activeIndex ===2}
          index={2}
          onClick={this.handleClick}
        >
          
        <div style={{fontSize:"20px"}}><Icon name='dropdown' />
        Condiciones del Uso de Servicio

        </div>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
        <li >            
            <a href={PlanesDeServicioYConsideracionesWasi} target="_blank">
            Planes de Servicio y Consideraciones 
            </a>     
        </li>

        </Accordion.Content>
       
        
      </Accordion>
    )
  }
}