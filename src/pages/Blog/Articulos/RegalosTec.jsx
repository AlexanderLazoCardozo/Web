import React from 'react'
import RegalosTecno from "./../images/RegalosTecno.jpg"
import { Grid, Image, Icon } from 'semantic-ui-react'
import A1 from "./../images/A1.png"
import A2 from "./../images/A2.jpg"
import A3 from "./../images/A3.jpg"
import A4 from "./../images/A4.png"
import A5 from "./../images/A5.jpg"
import { NavLink } from 'react-router-dom'
import {Helmet} from "react-helmet"

const RegalosTec = () => {

  window.scrollTo(0, 0);

  return (
    <>
     <Helmet>
        <title>Blog - Wasi Perú</title>
        <meta name='description' content="En este articulo te brindaremos una lista de ¡Los mejores regalos para sorprender a mamá!." />
    </Helmet>
    <div>

      <p style={{fontSize:"40px",textAlign:"center"}}>Los mejores regalos tecnológicos para mamá</p>
      <p style={{fontSize:"40px",textAlign:"center", fontFamily:"Poppins, sans-serif", fontWeight:"400",color:"#00267d"}}><strong>Los mejores regalos tecnológicos para mamá.</strong></p>

      <img  style={{
        width:"40%",
        minWidth:"400px",
        display:"flex",
        margin:" auto",
        
        }} src={RegalosTecno} />

    </div>

    <div style={{margin:"auto 10%"}}>
    <Grid doubling columns={2} style={{marginTop:"50px"}}>

    <Grid.Column style={{width:"400px", marginLeft:"auto"}}>
      <Image  style={{margin:"0 auto", minWidth:"256px"}} src={A1} />
    </Grid.Column>

    <Grid.Column style={{display:"flex",alignItems:"center"}}>
      <p style={{textAlign:"justify" ,fontSize:"120%", width:"400px"}}>Madres, ¿qué sería de muchos de nosotros sin ustedes? El amor más incondicional que traspasa especies, pues es incomparable el sentimiento de una madre hacia su hijo. 
No por nada es que, en las santas escrituras, el primer mandamiento con promesa es el que incita a honrar a los padres. En Wasi, estamos profundamente emocionados por este día, por eso brindaremos una lista de ideas para sorprender a esa mujer que alegra nuestra vida.
</p>
    </Grid.Column>
    
    </Grid>




    <Grid doubling columns={1} style={{marginTop:"50px"}}>

    <Grid.Column style={{margin:"0 auto", minWidth:"256px", maxWidth:"60%"}}>
      
      <p style={{fontSize:"120%", textAlign:"justify" }}>
      <b style={{fontSize:"140%"}}>¿Qué regalarle a mamá?</b><br/><br/>
      ¿Qué regalo escoger? Sin duda las flores son infaltables en este día, pero porque no cambiamos el paradigma de regalos para nuestras mamitas. En Wasi, ya hemos pensado en esas opciones que no solo emocionaran a quienes nos dieron vida, sino que serán la sensación en los detalles hacia ella. Nos referimos a los mejores obsequios tecnológicos con los que sorprenderemos a mamá.
      </p>



    </Grid.Column>
    
    </Grid>

    <Grid doubling columns={1} style={{marginTop:"50px"}}>

    <Grid.Column style={{margin:"0 auto", minWidth:"256px", maxWidth:"60%"}}>
      
      <p style={{fontSize:"120%", textAlign:"justify" }}>
      <b style={{fontSize:"140%"}}>¿Por qué lo celebramos en mayo?</b><br/><br/>
      Antes de empezar con la lista, hoy nos enteraremos por qué es que se celebra el día de la madre en mayo en Perú y en muchos países latinoamericanos. Aunque existen algunas excepciones. Dato Wasi, Argentina, por ejemplo, lo celebra en octubre y Panamá, por su parte, en diciembre.
      <br/><br/>
      No obstante, la gran mayoría seguimos la tradición que sea en el sexto mes del año, debido a la conmemoración de un antiguo concilio en Estados Unidos, donde miles de progenitores atendieron a los heridos de guerra de la guerra civil de 1865. En agradecimiento a tal acto de amor, Woodrow Wilson, presidente del país norteamericano, indicó como fecha conmemorativa el 10 de mayo.
      </p>

    </Grid.Column>

    </Grid>

    <Grid doubling columns={1} style={{marginTop:"50px"}}>

    <Grid.Column style={{margin:"0 auto", minWidth:"256px", maxWidth:"60%"}}>
      
      <p style={{fontSize:"120%", textAlign:"justify" }}>
      <b style={{fontSize:"140%"}}>La lista de mejores regalos tecnológicos para mamá</b><br/><br/>
      Dado ya nuestro repaso histórico de Wasi, pasaremos a brindarte la lista que no puede faltar como regaló para mamá este primer domingo de mayo.
   
      </p>



    </Grid.Column>

    </Grid>

<br />


    <Grid doubling columns={2} style={{marginTop:"0px"}}>

    <Grid.Column style={{width:"400px", marginLeft:"auto"}}>
      <b style={{fontSize:"120%"}}>Altavoz inteligente</b><br/><br/>
      <Image  style={{maxHeight:"300px",margin:"0 auto", minWidth:"256px"}} src={A2} />
     


    </Grid.Column>

    <Grid.Column style={{display:"flex",alignItems:"center"}}>
      <p style={{textAlign:"justify" ,fontSize:"120%", width:"400px"}}><br/>Un altavoz inteligente es uno de los mejores regalos que podemos escoger para mamá, pues le permitiremos realizar una infinidad de tareas, solo con su voz. Si quisiera escuchar sus canciones favoritas de antaño, bastará con sugerirlo al altavoz inteligente. No es todo, este dispositivo nos permitirá controlar diferentes dispositivos inteligentes que tengamos en casa como, Tv, consolas, sistema de audio y más. 
</p>
    </Grid.Column>
    
    </Grid>

    <Grid doubling columns={2} style={{marginTop:"50px"}}>

<Grid.Column style={{width:"400px", marginLeft:"auto"}}>
  <b style={{fontSize:"120%"}}>Convertidor smart</b><br/><br/>
  <Image  style={{margin:"0 auto", minWidth:"256px"}} src={A3} />
 
</Grid.Column>

<Grid.Column style={{display:"flex",alignItems:"center"}}>
  <p style={{textAlign:"justify" ,fontSize:"120%", width:"400px"}}>Muchas de nuestras madres, incluyo a la mía, es fan de las series o novelas antiguas. Aunque varias de ellas ya no están en señal abierta, podemos traerlas a la actualidad mediante plataformas streaming. ¿Cómo hacemos posible algo así? Los convertidores smart son la solución, pues logran convertir cualquier pantalla en un smartv a fin de que las mamitas logren disfrutar del contenido que deseen. 

</p>
</Grid.Column>

</Grid>

    <Grid doubling columns={2} style={{marginTop:"50px"}}>

<Grid.Column style={{width:"400px", marginLeft:"auto"}}>
  <b style={{fontSize:"120%"}}>Mesh </b><br/><br/>
  <Image  style={{margin:"0 auto", minWidth:"256px"}} src={A4} />
</Grid.Column>

<Grid.Column style={{display:"flex",alignItems:"center"}}>
  <p style={{textAlign:"justify" ,fontSize:"120%", width:"400px"}}>Esta es una recomendación con excelencia de la familia Wasi, incluso varios de nosotros ya hemos elegido este dispositivo como regalo para esta fecha. ¿Por qué un Mesh? Un Mesh, nos ayuda a optimizar la señal de wifi a fin de llegar a los lugares más recónditos de la casa. Esto se traduce en la facilidad para que mamá pueda conectarse, ya sea con su celular, laptop, pc y más, por todo el hogar. No tiene pierde.

</p>
</Grid.Column>

</Grid>


<Grid doubling columns={2} style={{marginTop:"50px"}}>

<Grid.Column style={{width:"400px", marginLeft:"auto"}}>
  <b style={{fontSize:"120%"}}>Pantalla inteligente </b><br/><br/>
  <Image  style={{margin:"0 auto", minWidth:"256px"}} src={A5} />
</Grid.Column>

<Grid.Column style={{display:"flex",alignItems:"center"}}>
  <p style={{textAlign:"justify" ,fontSize:"120%", width:"400px"}}>Las pantallas inteligentes son otra excelente opción para facilitar la relación de mamá con la tecnología, pues permite llamar, ver contenido multimedia, cuidar el hogar y controlar dispositivos, solo con la voz. Lo más interesante de este dispositivo es que logra realizar videollamadas de forma sencilla a fin de conectarnos con nuestras madres a la distancia y siempre estar conectados. 
</p>
</Grid.Column>

</Grid>

    <Grid doubling columns={1} style={{marginTop:"50px"}}>

    <Grid.Column style={{margin:"0 auto", minWidth:"256px", maxWidth:"60%"}}>
      
      <p style={{fontSize:"120%", textAlign:"justify" }}>
      <b style={{fontSize:"140%"}}>“Yo amo a mi mami”</b><br/><br/>
      Este escrito va en dedicación para todas las madres que nos siguen, yo por ejemplo mando un saludo cordial a la mía, quien lleva por nombre Rosalinda. No sería justo que únicamente yo mande saludos, por eso te invitamos a comentar el nombre de quien te enseño el amor verdadero. ¿Cómo debo comentar?, escríbelo junto al hashtag #yoamoamimami. Todas las mamitas que estén mencionadas en los comentarios estarán presentes en nuestro siguiente post en conmemoración al día de la madre. 
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

export default RegalosTec