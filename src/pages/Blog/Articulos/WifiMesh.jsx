import React from 'react'
import { Grid, Image, Icon } from 'semantic-ui-react'
import Mesh from "./../images/Mesh.jpeg"
import B1 from "./../images/B1.png"
import B2 from "./../images/B2.jpg"

import BlogMesh from '../../../components/Acordeon/BlogMesh'
import { NavLink } from 'react-router-dom'
import {Helmet} from "react-helmet"

const WifiMesh = () => {
  window.scrollTo(0, 0);

  return (
    <>
    <Helmet>
        <title>Blog - Wasi Perú</title>
        <meta name='description' content="Las redes Wifi-Mesh, descubre junto a Wasi los enormes beneficios que conllevar contar con una." />
    </Helmet>
    <div>

      <p style={{fontSize:"40px",textAlign:"center"}}>Las redes Wifi-Mesh, una solución de conexión en grandes
espacios</p>
<p style={{fontSize:"40px",textAlign:"center", fontFamily:"Poppins, sans-serif", fontWeight:"400",color:"#00267d"}}><strong>Las redes Wifi-Mesh, una solución de conexión en grandes
espacios.</strong></p>
      <img  style={{
        width:"40%",
        minWidth:"400px",
        display:"flex",
        margin:" auto",
        
        }} src={Mesh} />

    </div>

    <div style={{margin:"auto 10%"}}>
    <Grid doubling columns={2} style={{marginTop:"50px"}}>

    <Grid.Column style={{width:"400px", marginLeft:"auto"}}>
      <Image  style={{margin:"0 auto", minWidth:"256px"}} src={B1} />
    </Grid.Column>

    <Grid.Column style={{display:"flex",alignItems:"center"}}>
      <p style={{textAlign:"justify" ,fontSize:"120%", width:"400px"}}>¿Quién no ha pasado momentos molestos debido al alcance
promedio de una red Wifi? Creo que todos. Precisamente para
este problema es que, hoy hablaremos sobre los dispositivos
Mesh. Ala vanguardia, Wasi, aparte dela velocidad simétrica
que ofrece su fibra óptica, nos trae la tecnología de ampliación
de redes wifi—Mesh. De seguro ahora te estás preguntando
qué son y cómo funcionan, no te preocupes de que esta guía
será para responder todas esas dudas.</p>
    </Grid.Column>
    
    </Grid>




    <Grid doubling columns={1} style={{marginTop:"50px"}}>

    <Grid.Column style={{margin:"0 auto", minWidth:"256px", maxWidth:"60%"}}>
      
      <p style={{fontSize:"120%", textAlign:"justify" }}>
      <b style={{fontSize:"140%"}}> ¿Que son y cuando son necesarios?
</b><br/><br/>
Cuando contratamos un servicio de internet, generalmente lo hacemos para que cubra todo nuestro hogar. No obstante, lo que no
muchos sabemos es que, el alcance que tienen las redes Wifi son limitadas. Es por eso que, a veces tenemos problemas para
conectarnos en ciertas zonas de nuestro hogar y las pasamos a llamar “zonas muertas”.
      <br/>
      Los equipos Mesh, son la solución a estas “zonas muertas”, pues las “revive” mediante una alimentación de nodos. ¿Cómo pasa eso?
Simple, estos dispositivos de ampliación de red comienzan a compartir datos sin perdidas con el router principal.
      <br/>Durante el proceso de intercambio de datos, estos dispositivos de ampliación de cobertura comienzan a distribuir el ancho de
banda. Además, inteligentemente decide qué aparato nos otorgará una mejor conexión. Es así que no notaremos diferencia cuando
nos conectemos cerca de nuestro router principal, asicomo en situaciones donde estemos lejos y solo dependamos del Mesh.
      </p>



    </Grid.Column>
    
    </Grid>

    <Grid doubling columns={1} style={{marginTop:"50px"}}>

<Grid.Column style={{margin:"0 auto", minWidth:"256px", maxWidth:"60%"}}>
  
  <p style={{fontSize:"120%", textAlign:"justify" }}>
  <b style={{fontSize:"140%"}}>Una misma señal y una amplia cobertura
</b><br/><br/>
Algo que diferencia alos dispositivos Mesh, de los repetidores habituales, sin duda alguna, son la manera de conectarse ala red y
el alcance que puede aprovechar de esa alimentación de datos. En los segundos, tenemos la necesidad de estar reconectándonos
de forma manual al usuario Wifi que crea el repetidor.

  <br/>
  En cambio, en las redes malladas, nuestros dispositivos siempre usarán la misma red de Wifi. Es decir, no hay necesidad de una
conexión extra para que nuestros equipos puedan sincronizar con los amplificadores de señal conocidos como Mesh.
  <br/>Otro beneficio del uso de redes Wifi Mesh es que, podremos conectarnos al wiñ principal sin disminución de señalo de datos. Es
trascendental resaltar esto, pues los repetidores, si bien amplían nuestra cobertura, suelen tener perdidas en el intercambio de
ancho de banda que, a la larga, terminan afectando nuestra navegación. Para nuestro alivio, con estos potentes ampliadores de
señal estaremos conectados con la mejor velocidad, ideal para disfrutar de buena conexión para tareas,juegos, trabajo y más.
  </p>



</Grid.Column>

</Grid>   

<Grid doubling columns={1} style={{marginTop:"50px"}}>

<Grid.Column style={{margin:"0 auto", minWidth:"256px", maxWidth:"60%"}}>
  
  <p style={{fontSize:"120%", textAlign:"justify" }}>
  <b style={{fontSize:"140%"}}>Una conexión múltiple de dispositivos Mesh

</b><br/><br/>Esta es otra característica por las cuales los Mesh están un paso adelante que los repetidores habituales. ¿Cómo así? Cuando
conectamos dispositivos Mesh en nuestro hogar, estos trabajan de forma conjunta. Esto se traduce en más cobertura para
nuestra casa, pues tanto el repetidor, como el router principal pueden otorgarnos una navegación veloz.
  
  </p>



</Grid.Column>

</Grid>   

    


    <Grid doubling columns={1} style={{marginTop:"0px"}}>
    <Grid.Column style={{width:"400px", margin:"auto"}}>
      <Image  style={{margin:"0 auto", minWidth:"256px"}} src={B2} />
    </Grid.Column>
    </Grid>

    <Grid doubling columns={1} style={{marginTop:"50px"}}>

<Grid.Column style={{margin:"0 auto", minWidth:"256px", maxWidth:"60%"}}>
  
  <p style={{fontSize:"120%", textAlign:"justify" }}>
  <b style={{fontSize:"140%"}}>Cuáles son las ventajas de tener un Wifi Mesh


</b><br/><br/>Contar conla tecnologia Mesh en casa nos puede otorgar múltiples beneficios a la hora de realizar nuestras principales tareas o
actividades de entretenimiento. A continuación, algunas de sus ventajas.
  
  </p>
</Grid.Column>

</Grid>  

<Grid doubling columns={1} style={{marginTop:"50px"}}>

<Grid.Column style={{margin:"0 auto", minWidth:"256px", maxWidth:"60%"}}>
  
  <p style={{fontSize:"120%", textAlign:"justify" }}>
  <b style={{fontSize:"140%"}}>¿Wasi cuenta con Mesh dentro de sus planes?


</b><br/><br/>Wasi sabe de nuestra necesidad, por eso sus planes de 100 y 150 megas incluyen dispositivos Mesh para ampliarla señal
dentro de nuestro hogar. Cabe recalcar que, cuando adquirimos uno de estos dispositivos, siempre será en calidad de préstamo.
<br/><br/>
<BlogMesh />
  </p>
</Grid.Column>

</Grid>  
    
<Grid doubling columns={1} style={{marginTop:"20px"}}>

<Grid.Column style={{margin:"0 auto", minWidth:"256px", maxWidth:"60%"}}>
  
  <p style={{fontSize:"120%", textAlign:"justify" }}>
  <b style={{fontSize:"140%"}}>¿Son indispensables los Mesh en casa?


</b><br/><br/>A decir verdad, esto depende más dela estructura de nuestra casa. En otras palabras, si tenemos un mini departamento, la
utilización de un dispositivo Mesh no seria de mucha utilidad. En cambio, cuando nuestro hogar es grande y necesita llegar alos
espacios “muertos”, ahisi es necesario adquirir uno de estos amplificadores de señal.
  
  </p>
</Grid.Column>

</Grid>  

<Grid doubling columns={1} style={{marginTop:"20px"}}>

<Grid.Column style={{margin:"0 auto", minWidth:"256px", maxWidth:"60%"}}>
  
  <p style={{fontSize:"120%", textAlign:"justify" }}>
  <b style={{fontSize:"140%"}}>¿Deseas conocer más sobre la fibra óptica de Wasi?

</b><br/><br/>En este escrito nos dedicamos a conocer sobre los dispositivos Mesh. No obstante, te invitamos a visitar otros de nuestros
articulos, donde se destacan temas como la tecnologia doble banda, el Nat 2 para juegos, la importancia de una velocidad
simétrica, comparativos de tecnología y más. Además, si deseas saber sobre otros temas, puedes sugerirlos en la sección de
comentarios.
  
  </p>
</Grid.Column>

</Grid>  


    </div>

    <NavLink to="/Blog">

    <div style={{color:"#66277d",textAlign:"center", fontSize:"60px", marginTop:"100px",marginBottom:"60px"}}>
    <Icon  name='arrow alternate circle left'/>
    <b >Volver</b>
    </div>

    </NavLink>
    
    

    </>
  )
}

export default WifiMesh