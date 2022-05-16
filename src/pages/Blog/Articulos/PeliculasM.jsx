import React from 'react'
import HistoriasMujer from "./../images/HistoriasMujer.png"
import { Grid, Image, Icon } from 'semantic-ui-react'

import E1 from "./../images/E1.jpeg"
import E2 from "./../images/E2.jpeg"
import E3 from "./../images/E3.jpeg"
import E4 from "./../images/E4.jpeg"
import E5 from "./../images/E5.jpeg"
import { NavLink } from 'react-router-dom'
import {Helmet} from "react-helmet"
import "./stylesBlog.css" 

const PeliculasM = () => {
  window.scrollTo(0, 0);

  return (
    <>
     <Helmet>
        <title>Blog - Wasi Perú</title>
        <meta name='description' content="El mundo no seria el mismo sin ellas, asi que en agradecimiento Wasi recomienda estas 5 peliculas las cuales considaramos imperdibles para conmemorar el dia de la mujer." />
    </Helmet>
    <div id='tituloBLog'>

      <p style={{fontSize:"40px",textAlign:"center"}}>5 películas imperdibles para este día internacional de la mujer</p>
      <p  style={{fontSize:"40px",textAlign:"center", fontFamily:"Poppins, sans-serif", fontWeight:"400",color:"#00267d"}}><strong >5 películas imperdibles para este día internacional de la mujer.</strong></p>

      <img  style={{
        width:"40%",
        minWidth:"400px",
        display:"flex",
        margin:" auto",
        
        }} src={HistoriasMujer} />

    </div>

    <div style={{margin:"auto 10%"}}>
    
<Grid doubling columns={1}  style={{width:"80%", margin:"auto"}}  >

<Grid.Column >
<p style={{fontSize:"120%", textAlign:"justify" }}>
  <br/><br/>
  Transcurrió ya más de un siglo, donde miles de trabajadoras mujeres saltaron alas calles de Nueva York un 8 de marzo de 1910, esto a
fin de exigir mejores condiciones salariales por su trabajo. Desde ahí, y gracias a la propuesta de Clara Zetkin, es que todos los años
celebramos este día que nos rememora la importancia de las mujeres en el progreso del mundo. En Wasi también estamos
emocionados, por eso hemos seleccionado 5 películas que no puedes dejar de ver en esta fecha memorable.
<br/><br/>
De una mujer nació cristo, María, una mujer cambió y convirtió a Alemania como una delas mejores economías del mundo, Angela
Merkel, y de miles de ellas hemos nacido nosotros. El mundo no sería el mismo sin ellas, Albert Boadella diría: “Nazco en un mundo sin
mujeres y me muero”. En agradecimiento, o en deuda quizá, es que el cine ha rendido tributo con algunas películas con un mensaje que
reivindica la figura femenina.</p>
</Grid.Column>

</Grid>

<Grid doubling columns={2} style={{marginTop:"0px"}}>

<Grid.Column style={{width:"400px", marginLeft:"auto"}}>
  <b style={{fontSize:"120%"}}>1. Figuras Ocultas</b><br/><br/>
  <Image  style={{margin:"0 auto", minWidth:"256px"}} src={E1} />


</Grid.Column>

<Grid.Column style={{display:"flex",alignItems:"center"}}>
  <p style={{textAlign:"justify" ,fontSize:"120%", width:"400px"}}><br/>Comenzamos esta lista de filmes imperdibles en semana santa con un clásico de clásicos, hablamos de “Los Diez Mandamientos” de Cecil B. DeMille. Aunque ya debe tener más de 60 años de antigüedad, aún no deja de ser una de las preferidas en estos días santos. Te contaremos el porqué. <br/>
  Abrimos nuestra selección de películas para ver en este día dela mujer
con Figuras Ocultas, pelicula estrenada en 2006 que nos llenará de
nostalgia. Pues, aqui nos encontraremos con la vida, basada en hechos
reales, de Katherine Jhonson, quien es una científica dela NASA que
es parte dela operación espacial de 1961. El filme trasladará y
recordará la indiferencia que sufrían las mujeres durante aquellos
años, más aún si fuesen afrodescendientes.<br/><br/>
Opinión: Sin duda alguna lo mejor de la película esla brillante
actuación de Octavia Spenser, quien ya sabelo que es encarnar
papeles de mujeres luchadoras. Podemos agregar también que cuenta
con la dirección musical de Pharrell Williams, es decir, el espectáculo
está asegurado en todo sentido.
</p>
</Grid.Column>

</Grid>
<br/><br/>

<Grid doubling columns={2} style={{marginTop:"0px"}}>

<Grid.Column style={{width:"400px", marginLeft:"auto"}}>
  <b style={{fontSize:"120%"}}>2. MUSTANG</b><br/><br/>
  <Image  style={{margin:"0 auto", minWidth:"256px"}} src={E2} />


</Grid.Column>

<Grid.Column style={{display:"flex",alignItems:"center"}}>
  <p style={{textAlign:"justify" ,fontSize:"120%", width:"400px"}}><br/>Comenzamos esta lista de filmes imperdibles en semana santa con un clásico de clásicos, hablamos de “Los Diez Mandamientos” de Cecil B. DeMille. Aunque ya debe tener más de 60 años de antigüedad, aún no deja de ser una de las preferidas en estos días santos. Te contaremos el porqué. <br/>
  Otra película que Wasi recomienda es Mustang, aquí nos
trasladaremos hasta la lejana Turquia. La cinta narra la vida de 5
adolescentes que crecen en una sociedad conservadora, como los son
en la actualidad muchos países de medio oriente, donde la misma
cultura y familia siguen viejas tradiciones que afectan los derechos de
las mujeres. En protesta a ello, estásjóvenes se embarcan en una lucha
contra ese entorno conservador. Muy recomendada, y si eres
sentimental, las lágrimas están aseguradas.
<br/><br/>
Opinión: El filme denota mucho el sentimiento de reivindicación que
desea transmitir la directora, más aún si esta fue inspirada en su propia
vida adolescente. Las cinco hermanas tienen una interpretación
fantástica, pero será Gúnes, la última de ellas, será quien nos robará el
corazón.
</p>
</Grid.Column>

</Grid>
<br/><br/>
<Grid doubling columns={2} style={{marginTop:"0px"}}>

<Grid.Column style={{width:"400px", marginLeft:"auto"}}>
  <b style={{fontSize:"120%"}}>3. JUNO</b><br/><br/>
  <Image  style={{margin:"0 auto", minWidth:"256px"}} src={E3} />


</Grid.Column>

<Grid.Column style={{display:"flex",alignItems:"center"}}>
  <p style={{textAlign:"justify" ,fontSize:"120%", width:"400px"}}><br/>Comenzamos esta lista de filmes imperdibles en semana santa con un clásico de clásicos, hablamos de “Los Diez Mandamientos” de Cecil B. DeMille. Aunque ya debe tener más de 60 años de antigüedad, aún no deja de ser una de las preferidas en estos días santos. Te contaremos el porqué. <br/>
  Otro clásico del cine que te recomendamos en Wasi es Juno, pelicula
que narra la vida de una adolescente que, luego de sus primeras
experiencias sexuales, queda en cinta. La escuela, familia y entorno
tienen un fuerte protagonismo en esta ficción, pues nos rememorará lo
que es nuestra sociedad actual ante estos eventos. En el proceso, la
protagonista se hace mucho más fuerte y madura que al comienzo de
la cinta, gracias a todas sus vivencias.
<br/><br/>
Opinión: Ellen Page interpreta a Juno, y de qué manera, nos permite
entenderla, odiarla y amarla al mismo tiempo. Dato no menor, la
película fue filmada en solo 31 días. Si hablamos de esta cinta, no
podemos dejar de lado la musicalización que cierra con Anyone Else
But You a viva voz.
</p>
</Grid.Column>

</Grid>
<br/><br/>

<Grid doubling columns={2} style={{marginTop:"0px"}}>

<Grid.Column style={{width:"400px", marginLeft:"auto"}}>
  <b style={{fontSize:"120%"}}>4. MULÁN</b><br/><br/>
  <Image  style={{margin:"0 auto", minWidth:"256px"}} src={E4} />


</Grid.Column>

<Grid.Column style={{display:"flex",alignItems:"center"}}>
  <p style={{textAlign:"justify" ,fontSize:"120%", width:"400px"}}><br/>Comenzamos esta lista de filmes imperdibles en semana santa con un clásico de clásicos, hablamos de “Los Diez Mandamientos” de Cecil B. DeMille. Aunque ya debe tener más de 60 años de antigüedad, aún no deja de ser una de las preferidas en estos días santos. Te contaremos el porqué. <br/>
  Disney se ha caracterizado por presentarnos bellas princesas en
peligro que son salvadas por un príncipe, pero ese no es el caso de
Mulán. Ambientada en la antigua china, nuestra protagonista busca
demostrar que puede proteger a su anciano padre y a su pueblo de una
cruel invasión, a pesar de que mujeres no son tomadas en cuenta por
su condición de género.

<br/><br/>
A pesar de ser un dibujo animado, en Wasi creemos que este filme
remeció lo que venía siendo en elmundo animado de esta compañía,
pues sele otorgó a la mujer un rol, donde ella era quien demostraba su
valía por símisma.
<br/><br/>

Opinión: Mulan no necesita corona para ser la mejor princesa de
Disney. Aparte de su mensaje de reivindicación dela figura, este filme
tiene una cuota importante de comedia gracias a Mushu, quien tiene el
doblaje de Eugenio Derbez, reconocido actor de comedia. Mención
que no está de más, recomendamos verla película animada, pues el live
action del 2020 no alcanzó a su animada antecesora.
</p>
</Grid.Column>

</Grid>

<Grid doubling columns={1}  style={{width:"80%", margin:"auto"}}  >

<Grid.Column >
<br/><br/>
<p style={{fontSize:"120%", textAlign:"justify" }}>
  <b style={{fontSize:"140%"}}>5. HISTORIAS CRUZADAS


</b><br/><br/>
Cerramos esta lista de películas para ver en este día dela mujer con una recomendación wasiana, Historias Cruzadas, no solo nos habla dela
desigualdad entre diferentes sexos, sino aquella que hubo en algún momento entre propias mujeres. Historia basada en hechos reales que tiene
como protagonista a Skeeter Phelan, unajoven escritora que empezaba a escribir en un diario local. Su pasión la llevó a tocar un tema olvidado por
muchos en su época y que trastocó a la sociedad de su época, pues ponía en evidencias las desigualdades e indiferencias que sufrían las empleadas
afrodescendientes. Opinión: Octavia Spencer es garantía de espectáculo asegurado,justamente es con esta película que se consagró para obtener
el premio dela academia. Además, para quienes son fans de Spiderman, algo curioso pasa en esta cinta, pues se encuentran las dos Gwen Stacy del
MCU, nos referimos a Emma Stone y Bryce Dallas, asique otra excusa para ver hay.
</p>
<Image  style={{margin:"0 auto", minWidth:"256px"}} src={E5} />

</Grid.Column>

</Grid>

<Grid doubling columns={1}  style={{width:"80%", margin:"auto"}}  >

<Grid.Column >
<br/><br/>
<p style={{fontSize:"120%", textAlign:"justify" }}>
  <b style={{fontSize:"140%"}}>¿Qué otras maneras hay de disfrutar del día
internacional de la mujer?


</b><br/><br/>
Si lo tuyo en estos días es saliry no estar en casa, en Wasi también le hemos pensado antes. A continuación, te presentaremos algunos
de los eventos que se están desarrollando por este día festivo.<br/><br/>
—Festival del Cine Peruano hecho por mujeres.<br/>
—El rol dela mujer en el antiguo Perú del museo Larco.<br/>
—Recorrido de calles de escritoras peruanas propuesto porla CLP.<br/>
—Taller de defensa personal para mujeres organizado por el IPD.<br/><br/>
¿Quién o quienes son las mujeres importantes en tu vida?<br/><br/>
Aparte de nosotros, siempre existe una mujer a quien admiramos o amamos en nuestra vida. Te invitamos a mencionarla en los
comentarios con una pequeña descripción del porqué desearías que nunca te falte. Por lo pronto, quien escribe, diría quela más
importante es mi madre y es a quien dedico este escrito.
</p>

</Grid.Column>

</Grid>


<Grid doubling columns={1}  style={{width:"80%", margin:"auto"}}  >

<Grid.Column >
<br/><br/>
<p style={{fontSize:"120%", textAlign:"justify" }}>
  <b style={{fontSize:"140%"}}>Elige el próximo tema

</b><br/><br/>
En Wasi, queremos darte contenido variado sobre diferentes temas como cine, series, videojuegos, libros, propuestas de lugares y
más. Por eso, también hacemos llegar la invitación para que como público puedan sugerimos temas que deseen que profundicemos
enla página. Desde la base central, hacemos llegar un saludo con mucho cariño para todas esas mujeres que son parte dela familia
wasiana.
</p>

</Grid.Column>

</Grid>
  
    </div>

    <NavLink to="/Blog">

    <div style={{color:"#66277d",textAlign:"center", fontSize:"60px",marginTop:"100px",marginBottom:"60px"}}>
    <Icon  name='arrow alternate circle left'/>
    <b >Volver</b>
    </div>

    </NavLink>
    

    </>
  )
}

export default PeliculasM