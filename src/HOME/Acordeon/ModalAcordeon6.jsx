import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

export default class ModalAcordeon6 extends Component {
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
          Acabo de resetear mi router
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <li>Si cuando tenemos problemas conla conexión del internet, en lugar de reiniciar nuestro router, lo restablecemos a valores de fábrica, este pierde
toda la configuración realizada al momento de instalar el servicio.</li>
          <li> En ese caso nos debemos comunicar con el área de Soporte Wasi para poder realizar nuevamente la configuración y reconectar el servicio.</li>
          <li>No debemos modificar dichas configuraciones porque de realizarlo presentaremos problemas con la conexión.</li>
        </Accordion.Content>

       
      </Accordion>
    )
  }
}