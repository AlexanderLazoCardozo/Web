import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

export default class ModalAcordeon5 extends Component {
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
          Tengo latencia y ping elevados
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <li>Debemos validar el servidory región al cual nos conectamos (el pingy latencia se verán directamente afectados según la distancia en la que se
encuentre el servidor del juego).
</li>
          <li>Para una mejor conexión lo recomendable es conexión directa con cable ya que el wif1 puede presentar intermitencia ala hora de conectarse a los
servidores.</li>

            <li>Validar nuestro horario de conexión (recordar que algunosjuegos presentan saturación de servidores porla cantidad de usuarios conectados al
mismo tiempo).</li>

            <li>Si tenemos amistades que se encuentren conectados al mismojuego, realizarla consulta si presentan en mismo inconveniente, esto nos ayudara a
saber si el problema es por parte de nuestro proveedor de servicios o con el mismo servidor del juego.</li>
              <li>Comunicarse con el área de Soporte Wasi para poder realizarlas pruebas a través de sistema.</li>
        </Accordion.Content>

       
      </Accordion>
    )
  }
}