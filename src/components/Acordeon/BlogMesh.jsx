import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

export default class BlogMesh extends Component {
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
          
        <div style={{fontSize:"18px"}}><Icon name='dropdown' />
        No tiene perdida de datos
        </div>

        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
        Cómo ya mencionamos, los Mesh no sufren de perdida de datos al momento de conectarse con otros dispositivos
        inteligentes de nuestro hogar. Aún más, también podremos conectarnos vía cable Lan.

        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          
        <div style={{fontSize:"18px"}}><Icon name='dropdown' />
        Cuenta con redes 2,4 y 5G
        </div>

        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
        Los nuevos Mesh que han salido al mercado nos permiten una conexión a doble banda, tal cual lo hace el router principal.
        ¿Qué diferencia hace esto? Ayudará a que podamos sacarle el máximo provecho a equipos modernos que navegan a más
        de 50 megas.

        </Accordion.Content>
       
        <Accordion.Title
          active={activeIndex === 3}
          index={3}
          onClick={this.handleClick}
        >
          
        <div style={{fontSize:"18px"}}><Icon name='dropdown' />
        Amplía la cobertura en nuestro hogar
        </div>

        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3}>
        Sin lugar a debate, los Mesh son la solución perfecta cuando deseemos ampliarla cobertura de nuestra señal wiñ en el
        hogar.

        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 4}
          index={4}
          onClick={this.handleClick}
        >
          
        <div style={{fontSize:"18px"}}><Icon name='dropdown' />
        Facilidad de conexión
        </div>

        </Accordion.Title>
        <Accordion.Content active={activeIndex === 4}>
        Contrario alo que muchos creen, conectar un Mesh es más sencillo delo que se cree. Actualmente la mayoría de estos
        amplificadores de señal se manejan mediante apps que realizan el emparejamiento con el router principal de forma
        remota.

        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 5}
          index={5}
          onClick={this.handleClick}
        >
          
        <div style={{fontSize:"18px"}}><Icon name='dropdown' />
        Bajo consumo de energía
        </div>

        </Accordion.Title>
        <Accordion.Content active={activeIndex === 5}>
        Esto no solo se traduce en un hogar sostenible con el medio ambiente, sino que puede signiñcar un ahorro en nuestro
        bolsillo a la hora delas rentas de luz eléctrica. Pues, las redes malladas están diseñadas para minorar el consumo de
        energía.

        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 6}
          index={6}
          onClick={this.handleClick}
        >
          
        <div style={{fontSize:"18px"}}><Icon name='dropdown' />
        Mucho más estético
        </div>

        </Accordion.Title>
        <Accordion.Content active={activeIndex === 6}>
        No podemos dejar de lado su atractivo estético, pues los Mesh tienen ñguras futuristas que fácilmente pueden simular
        ser adornos en nuestro hogar. Algo como esto no pasaría con otro tipo de repetidores, donde el tamaño y estructura es
        más funcional.

        </Accordion.Content>
        
      </Accordion>
    )
  }
}