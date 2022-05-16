import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

export default class ModalAcordeon1 extends Component {
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
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          Al realizar test de velocidad no me figura la velocidad contratada.
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>
            <li>Recuerda que debes realizar los test de velocidad por conexion directa.</li>
            <li>Cuando realizamos el test por WIFI la velocidad puede variar por distintos factores (cobertura y tipo de señal, 2.4 y 5G).</li>
            <li>Mantenga un ojo en los saboteadores. Verifiquemos la cantidad de dispositivos conectados a nuestra red y el consumo que realizan al momento de realizar el test.</li>
            <li>Debemos tener en cuenta la tecnología del equipo donde se realiza el test (equipos de gama baja solo reconocen red 2.4g).</li>
            <li>Cuando nuestro equipo está conectado a la red por medio de adaptadores es posible que la velocidad se vea afectada (ejemplo: Conector usb a cable
            de red, este no garantiza el correcto flujo de la velocidad otorgada porla fibra óptica).</li>
          </p>
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          Mi señal WIFI se conecta y desconecta
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
            <li>Es importante validar nuestra cobertura de red wifi, a mayor distancia o cambio de ambiente, menor la potencia de la señal (en caso de la señal 5G la velocidad es mayor por la cobertura es menor). </li>
            <li>Nuestra conexión debe ser directa al router Wasi (en caso conectarse con repetidores no proporcionados por la empresa, esta no garantiza el correcto funcionamiento).</li>
            <li>Nuestro dispositivo debe estar en estado óptimo (daños por caida y otros que afecten al correcto funcionamiento del dispositivo).</li>

          </p>
        </Accordion.Content>
      </Accordion>
    )
  }
}