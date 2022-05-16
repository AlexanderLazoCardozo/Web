import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'
import facturacionWasi  from "./../../PDF/facturacionWasi.pdf"

export default class ModalAcordeon3 extends Component {
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
          ¿Como funciona mi Facturación?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>
            Descarga nuestro sencillo manual de facturacion Wasi  
            <a href={facturacionWasi} target="_blank"> 
            &nbsp; Descarga Aquí.
            </a>
          </p>
        </Accordion.Content>

       
      </Accordion>
    )
  }
}