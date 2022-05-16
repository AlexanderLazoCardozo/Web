import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

export default class ModalAcordeon4 extends Component {
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
          Mi servicio se cae cuando estoy navegando con normalidad
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <li>Si tenemos problemas con la conexión por cable de red, debemos revisar que las conexiones se encuentren en su lugar, tanto en el equipo como en el
router.</li>
          <li>Verificar el estado de nuestro cable de red (no debe tener cortes ni cualquier desgaste que afecte el funcionamiento).
</li>
          <li>
          Confirmar si el problema de conexión afecta a todos nuestros dispositivos. Si solo es con uno en específico, reiniciary realizar nuevamente las
pruebas.
          </li>

          <li>Reinicia el router, todo un clásico.</li>
          <li>Comunicarse con el área de Soporte Wasi para revisar su servicio de manera interna.</li>
        </Accordion.Content>

       
      </Accordion>
    )
  }
}