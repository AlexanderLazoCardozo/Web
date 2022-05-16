import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

export default class ModalAcordeon2 extends Component {
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
          Deseo cambiar la contraseña de mi router
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>
            Proceso:
          </p>
          <li>Comunicarse con el área de Soporte Wasi.</li>
          <li>Debemos validar correctamente los datos del titular del servicio  (DNI, nombres y apellidos completos).</li>
          <li>Brindar nueva contraseña.</li>
          <li>Realizaremos las pruebas para confirmar el cambio exitoso.</li>
          <br/>
          Consejos para crear una contraseña segura:
          <br/><br/>
          <li>Crea tu contraseña con 8 caracteres o más. Puede ser cualquier combinación de letras, números y símbolos. No se admiten acentos ni caracteres
acentuados.</li>
          <li>No puedes usar una contraseña que; sea poco segura, por ejemplo, “contrasena123”.

Contraseñas que hayas usado antes en tus cuentas.</li>

        </Accordion.Content>

        
      </Accordion>
    )
  }
}