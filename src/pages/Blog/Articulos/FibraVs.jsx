import React from 'react'
import ffthVS from "./../images/ffthVS.jpg"
import { Grid, Image, Icon } from 'semantic-ui-react'
import D1 from "./../images/D1.jpg"
import D2 from "./../images/D2.jpg"
import D3 from "./../images/D3.jpg"
import D4 from "./../images/D4.png"
import { NavLink } from 'react-router-dom'
import {Helmet} from "react-helmet"


const FibraVS = () => {
  window.scrollTo(0, 0);

  return (
    <>
  
    <Helmet>
        <title>Blog - Wasi Perú</title>
        <meta name='description' content="FFTH VS HFC el versus del cual algunos se preguntan ¿Cual es mejor? Pues hoy junto a Wasi conoceras la respuesta." />
    </Helmet>
    <div>

      <p style={{fontSize:"40px",textAlign:"center"}}>
      FFTH VS HFC ¿Cuál es el mejor?
      </p>
      <p style={{fontSize:"40px",textAlign:"center", fontFamily:"Poppins, sans-serif", fontWeight:"400",color:"#00267d"}}>
      <strong>FFTH VS HFC ¿Cuál es el mejor?</strong>
      </p>
      <img  style={{
        width:"40%",
        minWidth:"400px",
        display:"flex",
        margin:" auto",
        
        }} src={ffthVS} />

    </div>

    <div style={{margin:"auto 10%"}}>
    <Grid doubling columns={1} style={{marginTop:"50px", marginBottom:"-50px"}}>

<Grid.Column style={{margin:"0 auto", minWidth:"256px", maxWidth:"60%"}}>
  
  <p style={{fontSize:"120%", textAlign:"justify" }}>
  <b style={{fontSize:"140%"}}>FTTH vs HFC - Dos tecnologías compitiendo en el mercado.
</b><br/><br/> </p>
</Grid.Column>
</Grid>
  

    <Grid doubling columns={2} style={{marginTop:"0px"}}>

    <Grid.Column style={{width:"400px", marginLeft:"auto", marginTop:"50px"}}>
      <br/><br/>
      <Image  style={{maxHeight:"300px",margin:"0 auto", minWidth:"256px"}} src={D1} />
     


    </Grid.Column>

    <Grid.Column style={{display:"flex",alignItems:"center"}}>
      <p style={{textAlign:"justify" ,fontSize:"120%", width:"400px"}}><br/>
      En lo que se reñere a redes de nueva generación, tenemos dos
tecnologías que se disputan el mercado. Por un lado, la última
gran apuesta delos operadores es el FTTH o fibra óptica
hasta el hogar que, como su nombre bien indica, lleva ese
material hasta dentro de nuestra casa. Por otro lado, tenemos
el HFC o cable coaxial, que se basa en f|bra óptica, pero que a
nuestro hogar llega a través de un cable coaxial. A nivel de
instalación, sus diferencias son importantes y lo mostramos
en este FTTH vs HFC. A groso modo, la gran diferencia, al
menos a nivel físico, es la forma en que llegan hasta nuestro
hogar. FTTH recibe su nombre de Fiber to the home o fibra
óptica hasta el hogar en castellano mientras que HFC son las
siglas de Hybrid Fiber Coaxial o Híbrido de Fibra-Coaxial. En
el primero, el cable de fibra entra en casa. En el segundo, a
casa llega un cable coaxial y la fibra se queda en el nodo.</p>
    </Grid.Column>
    
    </Grid>
    <Grid doubling columns={1} style={{marginTop:"50px"}}>

<Grid.Column style={{margin:"0 auto", minWidth:"256px", maxWidth:"60%"}}>
  
  <p style={{fontSize:"120%", textAlign:"justify" }}>
  <b style={{fontSize:"140%"}}>FTTH vs HFC - ¿Cuáles son sus diferencias en la instalación?
</b><br/><br/>
Si comparamos la instalación que tenemos en nuestro edificio yla que nos realizan en nuestro hogar, las diferencias también son evidentes. Através
de un reportaje fotográfico delos dos tipos de instalaciones en detalle. En el interior de nuestro edificio, dentro del armario o cuarto de
telecomunicaciones, encontramos los diferentes elementos que dan servicio a cada vivienda.   </p>
</Grid.Column>
</Grid>
<Grid doubling columns={2}  style={{width:"80%", margin:"auto"}}  >

<Grid.Column >
  <Image style={{margin:"auto"}} src={D3} /><br/>
  <div style={{textAlign:"justify" ,fontSize:"120%"}}>
  <b>FTTH</b><br/><br/>

En la imagen superior vemos el registro principal de fibra óptica
instalado por el operador para dar servicio a todo el ediñcio. Este se
conecta con el punto de distribución de cables de fibra óptica, lugar
donde se fusiona el cable con el que viene dela vivienda y lleva la señal
hasta dentro dela misma.<br/><br/>

Una vez dentro de la vivienda, la instalación para el usuario consiste
en una roseta óptica. Esta la podemos ver en la siguiente imagen
colocada ya dentro dela casa y en la zona acordada para su instalación
con el técnico. <br/><br/>

La “toma” de color verde que vemos en la misma esla que sirve para
conectar un latiguillo de fibra directamente a la ONT o al router que
cuenta con este dispositivo integrado.<br/><br/>

El uso de la ONT es básico ya que es necesario convertirlas señales de
luz dela fibra óptica en señales eléctricas para el router. Después de
esto, el router será el encargado de toda la gestión del tráñco,
conexión delos diferentes equipos, redes WiFi y demás aspectos. La
complejidad de la instalación, en este caso de ejemplo, dependerá del
tiempo que necesite el instalador en “pasar" los diferentes cables por
los conductos interiores de la vivienda.
  </div>
</Grid.Column>

<Grid.Column >
  <Image style={{margin:"auto"}} src={D2} />
  <div style={{textAlign:"justify" ,fontSize:"120%"}}><br/>
  <b>HFC</b><br/><br/>

  La instalación de cable, HFC o Hybrid Fiber Coaxial es bastante
diferente ala dela fibra óptica, al menos en gran parte. En el cuarto de
telecomunicaciones vemos únicamente un splitter coaxial que lleva la
señal de Internet con dos salidas, en este caso al existir dos viviendas
en esa planta. El esquema se repite en las diferentes plantas, quedando
la instalación principal oculta en otra localización del ediñco. Junto a la
instalación FITH del operador, vemos exactamente lo que contamos.<br/><br/>

En este caso, el cable entra ala vivienda hasta unaisladorcolocado en
la caja de telecomunicaciones de nuestro hogar. A su vez, de este
splitter-asilador sale un cable coaxial hasta la ubicación que albergará
el cable router y el sintonizador de televisión. De nuevo, contamos con
un splitter que separa el cable en dos. En la siguiente imagen vemos los
dos elementos que hemos mencionado.<br/><br/>

  </div>
</Grid.Column>

</Grid>

<Grid doubling columns={1}  style={{width:"80%", margin:"auto"}}  >

<Grid.Column >
<div style={{border:"2px solid black", borderRadius:"10px", backgroundColor:"#fbfbeb"}}>
<p style={{margin:"20px", fontSize:"120%", textAlign:"justify"}}>Como vemos, se trata de tecnologías diferentes en todos sus aspectos, incluso en el de las conexiones e instalaciones. Mientras que en la
fibra óptica hasta el hogar tenemos un proceso más complejo con fusión de la fibra para los “empalmes", en el HFC vemos como el uso de
splitters o divisores de señal se convierte en uno de los elementos fundamentales.</p>
</div>
</Grid.Column>

</Grid>

<Grid doubling columns={1}  style={{width:"80%", margin:"auto"}}  >

<Grid.Column >
<p style={{fontSize:"120%", textAlign:"justify" }}>
  <b style={{fontSize:"140%"}}>FTTH vs HFC - Diferencias entre fibra óptica y cable coaxial
</b><br/><br/>
Dentro de las conexiones de Internet que podemos contratar en el territorio nacional, hay dos que destacan por su velocidad: la fibra óptica y el
cable coaxial.</p>
</Grid.Column>

</Grid>
<br/>

<Grid doubling columns={1}  style={{width:"80%", margin:"auto"}}  >

<Grid.Column >
<p style={{fontSize:"120%", textAlign:"justify" }}>
  <b style={{fontSize:"140%"}}>Qué es la fibra óptica

</b><br/><br/>
Expresado de la forma más sencilla posible, la fibra óptica es un hilo fabricado con un material transparente que transporta los datos a través de
pulsos de luz.<br/><br/>
Las conexiones de fibra óptica que dan servicio alos hogares son conocidas como FTTH (Fiber To The Home) y consisten en hacer llegar el cable
de fibra óptica directamente al domicilio, sin intermediarios.<br/><br/>
Como gran ventaja, la fibra óptica cuenta conla capacidad de poder transmitir datos a lo largo de muchos kilómetros sin perder calidad en su
señal ni sufrir interferencias.<br/><br/>
Por citar alguna desventaja, cabe destacarlo delicado que es este material, pero con el debido cuidado podrás disfrutar de tu conexión siempre
sin problemas.<br/><br/>
</p>
<Image  style={{margin:"0 auto", minWidth:"256px"}} src={ffthVS} />

</Grid.Column>

</Grid>

<Grid doubling columns={1}  style={{width:"80%", margin:"auto"}}  >

<Grid.Column >
<p style={{fontSize:"120%", textAlign:"justify" }}>
  <b style={{fontSize:"140%"}}>Qué es el cable coaxial

</b><br/><br/>
El cable coaxial es un cable de cobre que transmite los datos a través de señales eléctricas, por lo que en este caso no es inmune a interferencias
de tipo electromagnético.<br/><br/>
Este tipo de conexiones no son válidas para cubrir largas distancias, por lo que el cable coaxial suele ser el tramo final delas conexiones HFC
(Hibrido Fibra Coaxial).<br/><br/>
Así, este tipo de conexiones también se nutren de fibra óptica, pero que solo llega al barrio 0 bloque en cuestión, y desde ese punto, es el cable
coaxial quien dota de conexión a los hogares.<br/><br/>
</p>
<p style={{fontSize:"120%", textAlign:"justify" }}>
  <b style={{fontSize:"140%"}}>Diferencias entre fibra óptica y cable coaxial

</b><br/><br/>
Tal y como has leido en los dos apartados anteriores, existen diferencias entre ambos métodos de conexión, con la fibra óptica como claro
vencedor.<br/><br/>
Para dejar más alas claras la superioridad dela fibra óptica con respecto al cable coaxial, te ofrecemos una tabla resumen con las principales
ventajas y limitaciones de cada método de conexión:<br/><br/>
</p>
<Image  style={{margin:"0 auto", minWidth:"256px"}} src={D4} />

</Grid.Column>

</Grid>


<Grid doubling columns={1} style={{marginTop:"0px"}}>
    <Grid.Column style={{width:"100%", margin:"auto"}}>
    </Grid.Column>
</Grid>

<Grid doubling columns={1} style={{marginTop:"50px"}}>

<Grid.Column style={{margin:"0 auto", minWidth:"256px", maxWidth:"60%"}}>
  
  
</Grid.Column>
</Grid>


  
    </div>

    <NavLink to="/Blog">

    <div style={{color:"#66277d",textAlign:"center", fontSize:"60px",marginBottom:"60px"}}>
    <Icon  name='arrow alternate circle left'/>
    <b >Volver</b>
    </div>

    </NavLink>
    
    

    </>
  )
}

export default FibraVS;