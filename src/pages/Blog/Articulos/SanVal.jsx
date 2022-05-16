import React from 'react'
import { Grid, Image, Icon } from 'semantic-ui-react'
import sanV from "./../images/sanV.jpg"
import C1 from "./../images/C1.jpeg"
import C2 from "./../images/C2.jpeg"
import C3 from "./../images/C3.jpeg"
import C4 from "./../images/C4.jpeg"
import C5 from "./../images/C5.jpeg"
import { NavLink } from 'react-router-dom'
import {Helmet} from "react-helmet"


const SanVal = () => {
  window.scrollTo(0, 0);

  return (
    <>
     <Helmet>
        <title>Blog - Wasi Perú</title>
        <meta name='description' content="Cada vez el dia del amor esta mas cerca, por lo que hoy en Wasi te recomendamos una lista de las mejores peliculas romanticas. " />
    </Helmet>
    <div>

      <p style={{fontSize:"40px",textAlign:"center"}}>Las 5 películas que Wasi te recomienda en este San Valentín
espacios</p>
<p style={{fontSize:"40px",textAlign:"center", fontFamily:"Poppins, sans-serif", fontWeight:"400",color:"#00267d"}}><strong>Las 5 películas que Wasi te recomienda en este San Valentín
espacios.</strong></p>
      <img  style={{
        width:"40%",
        minWidth:"400px",
        display:"flex",
        margin:" auto",
        
        }} src={sanV} />

    </div>

    <div style={{margin:"auto 10%"}}>
   

    <Grid doubling columns={1} style={{marginTop:"0px"}}>

    <Grid.Column style={{margin:"0 auto", minWidth:"256px", maxWidth:"60%"}}>
      
      <p style={{fontSize:"120%", textAlign:"justify" }}>
     <br/><br/>
     El día del amor está cada vez más cerca, en consecuencia, buscamos inspirarnos un poco. Por eso, Wasi te brindará una lista de las
mejores películas románticas que no deben faltar en nuestra sala de casa. Entre ellas, tenemos inñnidades de historias que, de
seguro te sentirás identificado y traerán a la memoria a esa persona especial.
      <br/><br/>
    
Esta lista se la recomendamos a todos nuestros clientes que de seguro buscaran sorprender a su pareja en este día especial. De igual
forma, en caso no tengas a alguien o has terminado recientemente, no te preocupes, porque estos filmes también grañcan esos amores
fallidos y qué no siempre hay final feliz. Para cualquier fase del amor en que estés, asegúrate de no perderte estas cintas.
      </p>

    </Grid.Column>
    
    </Grid>

    <Grid doubling columns={2} style={{marginTop:"50px"}}>

<Grid.Column style={{width:"400px", marginLeft:"auto"}}>
<p style={{fontSize:"120%", textAlign:"justify" }}>
      <b style={{fontSize:"140%"}}>1. THE NOTEBOOK (DIARIO DE UNA PASIÓN)</b>
      
      </p>
  <Image  style={{margin:"0 auto", minWidth:"256px"}} src={C1} />
</Grid.Column>

<Grid.Column style={{display:"flex",alignItems:"center"}}>
  <p style={{textAlign:"justify" ,fontSize:"120%", width:"400px"}}>Abriremos nuestra lista con un clásico de clásicos, infaltable para
muchos, nos referíamos The Notebook, o también conocido como,
Diario de una pasión. Esta novelesca pareja tiene de protagonistas a
Noah yAllie.<br/><br/>
La película comienza con un anciano que, muy enamorado él, va a leer
sus viejas historias de amor a una anciana de quien se encuentra
embelesado. Para sorprenderla, cuenta su romance adolescente con
una chica de clase alta con quien pasó muchas aventuras. Risas,
lágrimas, ternura, rencor son solo alguna delas emociones que
sentiremos con este filme imperdible.
Noah yAllie.
</p>
</Grid.Column>

</Grid>
<Grid doubling columns={2} style={{marginTop:"50px"}}>

<Grid.Column style={{width:"400px", marginLeft:"auto"}}>
<p style={{fontSize:"120%", textAlign:"justify" }}>
      <b style={{fontSize:"140%"}}>2. BEFORE YOU (YO ANTES DE TI)</b>
      
      </p>
  <Image  style={{margin:"0 auto", minWidth:"256px"}} src={C2} />
</Grid.Column>

<Grid.Column style={{display:"flex",alignItems:"center"}}>
  <p style={{textAlign:"justify" ,fontSize:"120%", width:"400px"}}>La segunda de nuestra lista de recomendaciones románticas de Wasi
es otra película que, coincidentemente, también es otra adaptación de
un libro. Before You, nos llenará de sensaciones únicas capaces de
hacernos sentir ese amor que parece imposible de ser.<br/><br/>
La historia inicia con un William, un joven apuesto y muy adinerado
que queda tetrapléjico luego de un accidente. Decaído por su cambio
brusco de vida, Will no tiene muchas ganas de seguir en este mundo.
Justamente, a cuidarlo y salvarlo de tal sentimiento desolador llegará
Emilie Clark, con quien comenzará un romance muy único e
inolvidable.
</p>
</Grid.Column>

</Grid>
<Grid doubling columns={2} style={{marginTop:"50px"}}>

<Grid.Column style={{width:"400px", marginLeft:"auto"}}>
<p style={{fontSize:"120%", textAlign:"justify" }}>
      <b style={{fontSize:"140%"}}>3. LOVE ROSIE (LOS IMPREVISTOS DEL AMOR)</b>
      
      </p>
  <Image  style={{margin:"0 auto", minWidth:"256px"}} src={C3} />
</Grid.Column>

<Grid.Column style={{display:"flex",alignItems:"center"}}>
  <p style={{textAlign:"justify" ,fontSize:"120%", width:"400px"}}>
  Love Rosie es otro de los filmes que Wasi recomienda, pues es perfecta
para estos días San Valentín. La historia de dos mejores amigos que
forjan una amistad desde la niñez.<br/><br/>
Alex y Rosie prácticamente habían planeado todo desde su infancia a
la adultez, pero un pequeño suceso cambia sus rumbos,justo antes de
arrancar su vida universitaria, una noticia inesperada llega a sus vidas.
Si tienes algún mejor amigo, o algún amor a distancia, estamos seguros
de que esta película es para ti. Las risas están aseguradas en esta cinta,
asique prepara canchíta y el sillón, pues será un filme que no olvidaras.
</p>
</Grid.Column>

</Grid>

<Grid doubling columns={2} style={{marginTop:"50px"}}>

<Grid.Column style={{width:"400px", marginLeft:"auto"}}>
<p style={{fontSize:"120%", textAlign:"justify" }}>
      <b style={{fontSize:"140%"}}>4. ORGULLOY PREJUICIO</b>
      
      </p>
  <Image  style={{margin:"0 auto", minWidth:"256px"}} src={C4} />
</Grid.Column>

<Grid.Column style={{display:"flex",alignItems:"center"}}>
  <p style={{textAlign:"justify" ,fontSize:"120%", width:"400px"}}>
  Otro clásico que en Wasi siempre recomendamos es Orgullo y
Prejuicio. Si bien, para muchos, la obra es aún mejor, esta adaptación
va ala altura gracias a la sorprendente actuación de Matthew
Macfadyen, quien personifica al señor Darcy.<br/><br/>
En esta historia los protagonistas empiezan odiándose, debido al
presumido y orgulloso que parece ser el señor Darcy. Para quienes
empezaron su historia de amor, odiándose, o mejor aún, si es que tu
crush te odia, pues no pierdas las esperanzas. Ambientada en siglo
XVIII, Orgullo y prejuicio es una película que te dará mucho que
pensar, no solo por el amor, sino por la crítica ala sociedad respecto al
mismo.
</p>
</Grid.Column>

</Grid>
    

<Grid doubling columns={1} style={{marginTop:"50px"}}>

<Grid.Column style={{margin:"0 auto", minWidth:"256px", maxWidth:"60%"}}>
  
  <p style={{fontSize:"120%", textAlign:"justify" }}>
  <b style={{fontSize:"140%"}}>5. YOUR NAME (TU NOMBRE)


</b><br/><br/>
Culminamos esta primera lista de recomendaciones de Wasi, con una película que, si estás en pareja, ¿qué esperas? Tienen que verla. Your Name

es un anime que combina fantasia, distancia, amor, perdidas y suspenso.<br/><br/>Nos enganchará desde el principio, tanto Mítsuha, como Taki intercambian de cuerpos de manera inesperada. Desde ese particular vínculo entre sus
vidas, de a pocos se va tejiendo un amor prácticamente a ciegas. Las lágrimas están aseguradas, por ello te recomendamos un pañuelo en mano y los
brazos listos para las escenas más tristes.
  
  </p>

  <Grid doubling columns={1} style={{marginTop:"0px"}}>
    <Grid.Column style={{minWidth:"256px", margin:"auto"}}>
      <Image  style={{margin:"0 auto", minWidth:"256px"}} src={C5} />
    </Grid.Column>
    </Grid>

</Grid.Column>

</Grid>   

<Grid doubling columns={1} style={{marginTop:"50px"}}>

<Grid.Column style={{margin:"0 auto", minWidth:"256px", maxWidth:"60%"}}>
  
  <p style={{fontSize:"120%", textAlign:"justify" }}>
  <b style={{fontSize:"140%"}}>¿Que otros temas te gustarnan que tocaramos?

</b><br/><br/>
De seguro en esta lista faltan infinidad de nombres que para muchos de nuestros clientes son imprescindibles. Pero, en esta ocasión
fue Wasi, quien humildemente, recomienda estas 5 películas. De igual manera, te invitamos a comentar cuál es, para ti, la mejor
película romántica que has visto.
  
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

export default SanVal