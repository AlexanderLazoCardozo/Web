import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

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
          
        <div ><Icon name='dropdown' />
            Dirección Fiscal
        </div>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
        Av santa rosa 1050 - Santa anita<br />
        Lima, Perú

        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 4}
          index={4}
          onClick={this.handleClick}
        >
          
        <div ><Icon name='dropdown' />
        Ventas
        </div>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 4}>
          <a href='https://wa.link/glj5x0'>956 880 681</a>
        <br />
        ventas@wasiperu.pe

        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          
        <div ><Icon name='dropdown' />
        Atención al Cliente

        </div>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
        <a href='https://wa.link/t7k9o5'>956 859 217</a><br />
        atencioncliente@wasiperu.pe

        </Accordion.Content>
        
       
        <Accordion.Title
          active={activeIndex ===5}
          index={5}
          onClick={this.handleClick}
        >
          
        <div ><Icon name='dropdown' />
        Facturación
        </div>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 5}>
          <a href='https://wa.link/oglrs5'>981 056 606</a>
        <br />
facturacion@wasiperu.pe

        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 3}
          index={3}
          onClick={this.handleClick}
        >
          
        <div ><Icon name='dropdown' />
       
        Soporte Técnico
        </div>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3}>
        <a href='https://wa.link/nfqq7m'> 946 436 658</a>
       <br />
        soporte@wasiperu.pe

        </Accordion.Content>
        
      </Accordion>
    )
  }
}