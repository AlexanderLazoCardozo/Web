import React from 'react'
import ComidasSS from "./../images/ComidasSS.jpeg"
import { Grid, Image, Icon } from 'semantic-ui-react'
import F1 from "./../images/F1.jpg"
import F2 from "./../images/F2.jpg"
import F3 from "./../images/F3.jpg"
import F4 from "./../images/F4.jpg"
import F5 from "./../images/F5.jpg"
import F6 from "./../images/F6.jpg"
import F7 from "./../images/F7.jpg"
import F8 from "./../images/F8.jpg"
import F9 from "./../images/F9.jpg"
import F10 from "./../images/F10.jpg"
import F11 from "./../images/F11.jpg"
import { NavLink } from 'react-router-dom'
import {Helmet} from "react-helmet"

const ComidasSemS = () => {
  window.scrollTo(0, 0);

  return (
    
    <>
    <Helmet>
        <title>Blog - Wasi Perú</title>
        <meta name='description' content="Entramos ya en semana santa, aunque tiene un sabor diferente el de este año, de a pocos volvemos a esa añorada normalidad, por eso es que el dia de hoy te recomendaremos exquisitos platos para que logres prepararte para esta semana santa junto a Wasi." />
    </Helmet>
    <div>
    
      <p style={{fontSize:"40px",textAlign:"center"}}>¿Comida santa? Los mejores platos para disfrutar en esta semana
santa</p>
<p style={{fontSize:"40px",textAlign:"center", fontFamily:"Poppins, sans-serif", fontWeight:"400",color:"#00267d"}}><strong>¿Comida santa? Los mejores platos para disfrutar en esta semana
santa.</strong></p>
      <img  style={{
        width:"40%",
        minWidth:"400px",
        display:"flex",
        margin:" auto",
        
        }} src={ComidasSS} />

    </div>
   
    <div style={{margin:"auto 10%"}}>
 
  

    <Grid doubling columns={2} style={{marginTop:"0px"}}>

    <Grid.Column style={{width:"400px", marginLeft:"auto", marginTop:"50px"}}>
      <br/><br/>
      <Image  style={{maxHeight:"300px",margin:"0 auto", minWidth:"256px"}} src={F1} />
     


    </Grid.Column>

    <Grid.Column style={{display:"flex",alignItems:"center"}}>
      <p style={{textAlign:"justify" ,fontSize:"120%", width:"400px"}}><br/>
      Entramos ya en semana santa, aunque tiene un sabor diferente el de
este año, de a pocos volvemos a esa añorada normalidad, pero a su vez,
literalmente es así, pues nuestro país acostumbra cambiar sus recetas
en estos días festivos. Los grandes protagonistas, como si recordará el
mar rojo dividido por Dios, son los mariscos y pescados.
<br/><br/>¿Te has preguntado por qué nuestra dieta varía? En Wasi hemos
encontrado algunas respuestas que pueden saciar esa curiosidad. No
es todo, porque también saciaremos ese apetito entrante con nuevas
recetas variadas que seleccionamos para ustedes.</p>
    </Grid.Column>
    
    </Grid>

    <Grid doubling columns={1} style={{marginTop:"50px"}}>

<Grid.Column style={{margin:"0 auto", minWidth:"256px", maxWidth:"60%"}}>
  
  <p style={{fontSize:"120%", textAlign:"justify" }}>
  <b style={{fontSize:"140%"}}>¿Por qué se come pescado en semana santa?
</b>
</p>
</Grid.Column>
</Grid>

    <Grid doubling columns={2} style={{marginTop:"0px"}}>

<Grid.Column style={{width:"400px", marginLeft:"auto"}}>
  <b style={{fontSize:"150%"}}></b><br/><br/>
  <Image  style={{margin:"0 auto", minWidth:"256px"}} src={F2} />


</Grid.Column>

<Grid.Column style={{display:"flex",alignItems:"center"}}>
  <p style={{textAlign:"justify" ,fontSize:"120%", width:"400px"}}><br/>

  Esta pregunta también nos la hemos hecho en Wasi, pues si buscamos
en pasajes bíblicos, no encontraremos dicha recomendación como
tal. No obstante, la tradición de sustituir las carnes rojas por pescado,
según teólogos e historiadores, a un respeto porla cruciñxión de
cristo, donde el rojo representa su sangre.
</p>
</Grid.Column>

</Grid>

<Grid doubling columns={2} style={{marginTop:"0px"}}>

<Grid.Column style={{width:"400px", marginLeft:"auto"}}>
  <b style={{fontSize:"150%"}}></b><br/><br/>
  <Image  style={{margin:"0 auto", minWidth:"256px"}} src={F3} />


</Grid.Column>

<Grid.Column style={{display:"flex",alignItems:"center"}}>
  <p style={{textAlign:"justify" ,fontSize:"120%", width:"400px"}}><br/>

  Dato Wasi: No sé si muchos lo sabían, pero losjudíos, al igual que
muchos de nosotros, también cambian su dieta en estos dias. Aunque
el motivo es otro, ellos celebran el Séder de Pésaj. Este ritual milenario
recuerda el dolor delos antiguos israelis en tierras egipcias, donde
fueron esclavos por más de 400 años. El keará, plato representativo de
esta celebración, tiene como ingredientes hiervas amargas y pan sin
levadura, todo a fm de tener presente quien los rescato detal esclavitud.
</p>
</Grid.Column>

</Grid>

    <Grid doubling columns={1} style={{marginTop:"50px"}}>

<Grid.Column style={{margin:"0 auto", minWidth:"256px", maxWidth:"60%"}}>
  
  <p style={{fontSize:"120%", textAlign:"justify" }}>
  <b style={{fontSize:"140%"}}>¿Que platos recomendamos para esta semana santa?

</b><br/><br/>
Ahora que ya conocemos un poco dela historia delas dietas de semana santa, pasemos a lo que nos gusta, especialmente a los peruanos, nos
referimos a los platos que podemos disfrutar en estos días santos.</p>
</Grid.Column>
</Grid>
<br/>

<Grid doubling columns={2} style={{marginTop:"0px"}}>

<Grid.Column style={{width:"400px", marginLeft:"auto"}}>
  <b style={{fontSize:"150%"}}>Juanes de Pescado</b><br/>
  <Image  style={{margin:"0 auto", minWidth:"256px"}} src={F4} />
  Link: <a target="_blank" href='https://www.youtube.com/watch?v=rqm_bGlZSbg'>https://www.youtube.com/watch?v=rqm_bGlZSbg</a>

</Grid.Column>

<Grid.Column style={{display:"flex",alignItems:"center"}}>
  <p style={{textAlign:"justify" ,fontSize:"120%", width:"400px"}}><br/>

  ¿Juanes? Si, esta comida es muy popular en nuestra selva peruana y
más aún por su simbólica representación de uno delos santos delas
escrituras bíblicas. La forma de este manjar, nos recuerda a la cabeza
de san Juan Bautista en recompensa por el famoso baile de Salomé.
¿Cómo lo preparamos? A continuación, te brindaremos un video donde
podremos realizarlo paso a paso. Recuerda que, podemos usar
cualquier variedad de pescados para este platillo, por ejemplo, en
Ucayali, tierra de su origen, se suele preparar con paiche.
</p>
</Grid.Column>

</Grid>
<br/>
<br/>

<Grid doubling columns={2} style={{marginTop:"0px"}}>

<Grid.Column style={{width:"400px", marginLeft:"auto"}}>
  <b style={{fontSize:"150%"}}>Chupe de camarones</b><br/>
  <Image  style={{margin:"0 auto", minWidth:"256px"}} src={F5} />
  Link: <a target="_blank" href='https://www.youtube.com/watch?v=prFQXvs3nys'>https://www.youtube.com/watch?v=prFQXvs3nys</a>

</Grid.Column>

<Grid.Column style={{display:"flex",alignItems:"center"}}>
  <p style={{textAlign:"justify" ,fontSize:"120%", width:"400px"}}><br/>

  En la ciudad blanca, Arequipa, un plato que no puede faltar en la
mesa delos arequipeños durante semana santa es el chupe de
camarones. Una receta de más de 300 años que está inmortalizado por
el sabor placentero que, a su vez, nos ayuda a controlar nuestros
niveles de colesterol. Rico y saludable, ¿cómo lo preparamos? A
continuación, un video para que tu caldo salga con ese sabor

volcánico.
</p>
</Grid.Column>

</Grid>
<br/><br/>
<Grid doubling columns={2} style={{marginTop:"0px"}}>

<Grid.Column style={{width:"400px", marginLeft:"auto"}}>
  <b style={{fontSize:"150%"}}>Caldo verde</b><br/>
  <Image  style={{margin:"0 auto", minWidth:"256px"}} src={F6} />
  Link: <a target="_blank" href='https://www.youtube.com/watch?v=k4wHNG1vn0M'>https://www.youtube.com/watch?v=k4wHNG1vn0M</a>

</Grid.Column>

<Grid.Column style={{display:"flex",alignItems:"center"}}>
  <p style={{textAlign:"justify" ,fontSize:"120%", width:"400px"}}><br/>

  El caldo verde es infaltable en el centro de nuestro país durante
semana santa, más aún en lugares como Ayacucho, Junín, Cerro de
Pasco. A diferencia delos platos anteriores, la receta de esta sopa no
contiene carne, pero si está llena de hierbas que le dan un sabor
inigualable. Una combinación de aromas que van acompañadas con
papas andinas y huevo, riquísimo. Ya se nos hizo agua la boca, por eso
te mostraremos un video de cómo prepararlo.
</p>
</Grid.Column>

</Grid>

<br/><br/>
<Grid doubling columns={2} style={{marginTop:"0px"}}>

<Grid.Column style={{width:"400px", marginLeft:"auto"}}>
  <b style={{fontSize:"150%"}}>Sopa de los dioses </b><br/>
  <Image  style={{margin:"0 auto", minWidth:"256px"}} src={F7} />
  Link: <a target="_blank" href='https://www.youtube.com/watch?v=qaSVhtQFK6A'>https://www.youtube.com/watch?v=qaSVhtQFK6A</a>

</Grid.Column>

<Grid.Column style={{display:"flex",alignItems:"center"}}>
  <p style={{textAlign:"justify" ,fontSize:"120%", width:"400px"}}><br/>
  Si nos vamos al norte, no podemos dejar de mencionar a la sopa delos
dioses o también conocida como sopa teóloga. Este caldo nació entre
los primeros años de conquista, donde los moches de aquellas épocas
juntaban sus conocimientos culinarios con los españoles. No es un
manjar fácil de preparar, ya que cuenta con más de 20 ingredientes,
pero el sabor final lo convertirá no solo en un plato para semana
santa, sino uno que busquemos realizar en eventos especiales. A
continuación, una breve gu ia de cómo prepararlo.
</p>
</Grid.Column>

</Grid>
<br/><br/>
<Grid doubling columns={1}  style={{width:"80%", margin:"auto"}}  >

<Grid.Column >
<p style={{fontSize:"120%", textAlign:"justify" }}>
  <b style={{fontSize:"140%"}}>Una mini lista para ti

</b><br/><br/>
En Wasi, elegimos recomendarte estos platos para disfrutar tu semana santa, como puedes apreciar, hemos hecho una búsqueda para no
exclusivamente quedarnos con el clásico ceviche ojalea. Aunque la lista quedó un poco corta, creemos que estos siguientes platillos también
pueden ser de tu agrado. Descuida, pues no olvidaremos colocar sus guías respectivas.</p>
</Grid.Column>

</Grid>
<br/>
<Grid doubling columns={2} style={{marginTop:"0px"}}>

<Grid.Column style={{width:"400px", marginLeft:"auto"}}>
  <b style={{fontSize:"150%"}}> Malarrabia - Piura</b><br/>
  <Image  style={{margin:"0 auto", minWidth:"256px"}} src={F8} />

</Grid.Column>

<Grid.Column style={{display:"flex",alignItems:"center"}}>
  <p style={{textAlign:"center" ,fontSize:"120%", width:"400px"}}><br/>
  Link: <a target="_blank" href='https://www.youtube.com/watch?v=wr_S1OBCK2w'>https://www.youtube.com/watch?v=wr_S1OBCK2w</a>

</p>
</Grid.Column>

</Grid>
<br/>

<Grid doubling columns={2} style={{marginTop:"0px"}}>

<Grid.Column style={{width:"400px", marginLeft:"auto"}}>
  <b style={{fontSize:"150%"}}> Chorizo ayacuchano - Ayacucho</b><br/>
  <Image  style={{margin:"0 auto", minWidth:"256px"}} src={F9} />

</Grid.Column>

<Grid.Column style={{display:"flex",alignItems:"center"}}>
  <p style={{textAlign:"center" ,fontSize:"120%", width:"400px"}}><br/>
  Link: <a target="_blank" href='https://www.youtube.com/watch?v=gJg8IAKa_X4'>https://www.youtube.com/watch?v=gJg8IAKa_X4</a>

</p>
</Grid.Column>

</Grid>

<br/>
<Grid doubling columns={2} style={{marginTop:"0px"}}>

<Grid.Column style={{width:"400px", marginLeft:"auto"}}>
  <b style={{fontSize:"150%"}}> Patarashca - Iquitos</b><br/>
  <Image  style={{margin:"0 auto", minWidth:"256px"}} src={F10} />

</Grid.Column>

<Grid.Column style={{display:"flex",alignItems:"center"}}>
  <p style={{textAlign:"center" ,fontSize:"120%", width:"400px"}}><br/>
  Link: <a target="_blank" href='https://www.youtube.com/watch?v=BRmJN12tz0c'>https://www.youtube.com/watch?v=BRmJN12tz0c</a>

</p>
</Grid.Column>

</Grid>

<br/>
<Grid doubling columns={2} style={{marginTop:"0px"}}>

<Grid.Column style={{width:"400px", marginLeft:"auto"}}>
  <b style={{fontSize:"150%"}}> Lawa de choclo - Cuzco </b><br/>
  <Image  style={{margin:"0 auto", minWidth:"256px"}} src={F11} />

</Grid.Column>

<Grid.Column style={{display:"flex",alignItems:"center"}}>
  <p style={{textAlign:"center" ,fontSize:"120%", width:"400px"}}><br/>
  Link: <a target="_blank" href='https://www.youtube.com/watch?v=ZsrZE26TgHA'>https://www.youtube.com/watch?v=ZsrZE26TgHA</a>

</p>
</Grid.Column>

</Grid><br/><br/>
<Grid doubling columns={1}  style={{width:"80%", margin:"auto"}}  >

<Grid.Column >
<p style={{fontSize:"120%", textAlign:"justify" }}>
  <b style={{fontSize:"140%"}}>¿Qué platos son los favoritos de la familia
wasíana?

</b><br/><br/>
En este escrito vimos un poco sobre qué platos son las mejores opciones para disfrutar en esta semana santa. Sabemos que nuestra
elección puede ser subjetiva, por eso queremos saber qué es lo que más comen nuestros seguidores por estas fechas. ¿Quién sabe?
Quizá podríamos invitar el plato que tenga mayor alcance en los comentarios.</p>
</Grid.Column>

</Grid>

  
    </div>

    <NavLink to="/Blog">

    <div style={{color:"#66277d",textAlign:"center", fontSize:"60px",marginBottom:"60px",marginTop:"120px"}}>
    <Icon  name='arrow alternate circle left'/>
    <b >Volver</b>
    </div>

    </NavLink>
    </>
  )
}

export default ComidasSemS