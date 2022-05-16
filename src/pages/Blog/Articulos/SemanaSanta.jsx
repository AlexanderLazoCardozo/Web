import React from 'react'
import MejoresPeliculas from "./../images/MejoresPeliculas.jpeg"
import { Grid, Image, Icon } from 'semantic-ui-react'
import I1 from "./../images/I1.jpg"
import I2 from "./../images/I2.jpg"
import I3 from "./../images/I3.jpg"
import I4 from "./../images/I4.jpg"
import I5 from "./../images/I5.jpg"
import { NavLink } from 'react-router-dom'
import {Helmet} from "react-helmet"

const SemanaSanta = () => {
  window.scrollTo(0, 0);

  return (
    <>
    <Helmet>
        <title>Blog - Wasi Perú</title>
        <meta name='description' content="Wasi te recomienda las mejores peliculas para esta semana Santa. Reflexivas, emocionantes y épicaspara ver con toda la familia." />
    </Helmet>
    <div>

      <p style={{fontSize:"40px",textAlign:"center"}}>Las mejores peliculas para esta Semana Santa</p>
      <p style={{fontSize:"40px",textAlign:"center", fontFamily:"Poppins, sans-serif", fontWeight:"400",color:"#00267d"}}><strong>Las mejores peliculas para esta Semana Santa.</strong></p>

      <img  style={{
        width:"40%",
        minWidth:"400px",
        display:"flex",
        margin:" auto",
        
        }} src={MejoresPeliculas} />

    </div>

    <div style={{margin:"auto 10%"}}>
    <Grid doubling columns={2} style={{marginTop:"50px"}}>

    <Grid.Column style={{width:"400px", marginLeft:"auto"}}>
      <Image  style={{margin:"0 auto", minWidth:"256px"}} src={I1} />
    </Grid.Column>

    <Grid.Column style={{display:"flex",alignItems:"center"}}>
      <p style={{textAlign:"justify" ,fontSize:"120%", width:"400px"}}>Ya en semana santa, aprovechando el feriado, muchos optamos por viajar con la familia, pero otros, más fieles a las tradiciones familiares, pasamos viendo una película a fin de afianzar más y recordar nuestra fe. No obstante, ¿qué podemos ver? En Wasi te presentaremos algunos de los filmes que son imperdibles en estos días santos.</p>
    </Grid.Column>
    
    </Grid>




    <Grid doubling columns={1} style={{marginTop:"50px"}}>

    <Grid.Column style={{margin:"0 auto", minWidth:"256px", maxWidth:"60%"}}>
      
      <p style={{fontSize:"120%", textAlign:"justify" }}>
      <b style={{fontSize:"140%"}}>Los filmes bíblicos a lo largo del tiempo</b><br/><br/>
      Los relatos bíblicos han pasado de boca en boca por miles de años, pero solo era la mente quien graficaba a los personajes. Hoy, en cambio, tenemos el privilegio de apreciar filmes muy realistas sobre diferentes pasajes que relata el libro sagrado, como la liberación de Israel, la vida de sus primeros reyes o la misma vida de Jesús. 
      <br /><br />Lo fascinante de todo esto es que, estás películas también denotan el paso del tiempo y de la tecnología, tan es así que veremos que la escena del mar rojo en los Diez Mandamientos fue un efecto pasmoso para la época. Estas y otras curiosidades las conoceremos en el siguiente escrito.
      </p>



    </Grid.Column>
    
    </Grid>
    <Grid doubling columns={1} style={{marginTop:"50px"}}>

    <Grid.Column style={{margin:"0 auto", minWidth:"256px", maxWidth:"60%"}}>
      
      <p style={{fontSize:"120%", textAlign:"justify" }}>
      <b style={{fontSize:"140%"}}>Lista de mejores películas para semana santa</b><br/><br/>
      
      </p>
      
    </Grid.Column>
    </Grid>


    <Grid doubling columns={2} style={{marginTop:"0px"}}>

    <Grid.Column style={{width:"400px", marginLeft:"auto"}}>
      <b style={{fontSize:"120%"}}>Los Diez Mandamientos</b><br/><br/>
      <Image  style={{margin:"0 auto", minWidth:"256px"}} src={I2} />
     <b>¿Dónde la encuentro? </b> Actualmente, se encuentra en la lista de filmes de Amazon Prime.


    </Grid.Column>

    <Grid.Column style={{display:"flex",alignItems:"center"}}>
      <p style={{textAlign:"justify" ,fontSize:"120%", width:"400px"}}><br/>Comenzamos esta lista de filmes imperdibles en semana santa con un clásico de clásicos, hablamos de “Los Diez Mandamientos” de Cecil B. DeMille. Aunque ya debe tener más de 60 años de antigüedad, aún no deja de ser una de las preferidas en estos días santos. Te contaremos el porqué. <br/>
Más allá de la historia de Moisés que, en su gran mayoría, ya conocemos, estamos seguros de que pocos sabían que el niño que interpreta al salvador de Israel es en realidad hijo de Charlton Heston. No es todo, además de su fiel interpretación, los productores se encargaron de que las tablas sagradas fueran hechas con piedras del mismo monte Sinaí, impresionante. Sin duda, es imprescindible en nuestra maratón de películas en semana santa. 
</p>
    </Grid.Column>
    
    </Grid>

    <Grid doubling columns={2} style={{marginTop:"50px"}}>

    <Grid.Column style={{width:"400px", marginLeft:"auto"}}>
      <b style={{fontSize:"120%"}}>La pasión de cristo</b><br/><br/>
      <Image  style={{margin:"0 auto", minWidth:"256px"}} src={I3} />
      <b>¿Dónde la encuentro?</b> La cinta la encontraremos en Amazon Prime. Lo mejor es que tenemos a disposición varios idiomas, aunque recomendamos verla en su idioma original.
    </Grid.Column>

    <Grid.Column style={{display:"flex",alignItems:"center"}}>
      <p style={{textAlign:"justify" ,fontSize:"120%", width:"400px"}}><br/><br/> A lo largo de la historia del cine se han producido múltiples películas sobre la vida y crucifixión de cristo, pero ninguna es tan fiel a las escrituras como la de Mel Gibson. Prueba de esto es que la cinta se grabó en el idioma original, es decir, en arameo y latín.<br/> 
Presta atención, pues si estamos atentos, escucharemos el “Eli, Eli, ¿lama sabactaní?” de Jesús en la cruz. ¿Por qué verla? La principal razón para verla es para rememorar cómo fue que el hijo de dios dio su vida por nuestros pecados, aun cuando su martirio hacía el calvario fue muy cruel y despiadado. Recomendación wasiana para reflexionar y afianzar nuestra fe. 


</p>
    </Grid.Column>
    
    </Grid>

    <Grid doubling columns={2} style={{marginTop:"50px"}}>

<Grid.Column style={{width:"400px", marginLeft:"auto"}}>
  <b style={{fontSize:"120%"}}>El príncipe de Egipto </b><br/><br/>
  <Image  style={{margin:"0 auto", minWidth:"256px"}} src={I4} />
  <b>¿Dónde la encuentro?</b> Coincidentemente, esta película la podemos encontrar en dos plataformas, Amazon Prime y HBO Max.
</Grid.Column>

<Grid.Column style={{display:"flex",alignItems:"center"}}>
  <p style={{textAlign:"justify" ,fontSize:"120%", width:"400px"}}>Nuestra tercera recomendación wasiana es una que fácilmente puede cautivar no solo a mayores, sino a los niños de casa. El príncipe de Egipto, es una película animada que nos adapta la vida de Moisés de una manera entretenida a fin de poder unir a los engreídos en esta experiencia familiar. La forma como Jeffrey Katzenberg, director de la cinta, logra retratar las diferentes plagas es un verdadero deleite a la vista. <br/><br/>

Dato: Esta cinta es muy recordada en la industria animada de Dreamworks, pues fue uno de los primeros éxitos animados que explotaron, aun cuando Disney se encontraba en pleno apogeo. 


</p>
</Grid.Column>

</Grid>


<Grid doubling columns={2} style={{marginTop:"50px"}}>

<Grid.Column style={{width:"400px", marginLeft:"auto"}}>
  <b style={{fontSize:"120%"}}>Desafiando Gigantes</b><br/><br/>
  <Image  style={{margin:"0 auto", minWidth:"256px"}} src={I5} />
  <b>¿Dónde la encuentro?</b> La película se encuentra disponible en la plataforma Netflix. 
</Grid.Column>

<Grid.Column style={{display:"flex",alignItems:"center"}}>
  <p style={{textAlign:"justify" ,fontSize:"120%", width:"400px"}}>Cerramos esta corta lista de películas para ver en semana santa con una que no necesariamente relata un suceso bíblico, sino que más bien refuerzan nuestra fe cristiana. ¿Cómo se llama? La película se llama Desafiando Gigantes y nos cuenta la vida de Grant Taylor, un entrenador de fútbol en una escuela estadounidense.  <br/>
El protagonista pasa por diferentes dificultades tanto laborales, como maritales, que solo su fe en Dios puede ayudarlo a salir de ese estado. Muy recomendada para disfrutarla en familia y preparemos pañuelos en casa, pues tendremos muchas lágrimas de felicidad al verla. 
 <br/><br/>

</p>
</Grid.Column>

</Grid>


<Grid doubling columns={1} style={{marginTop:"50px"}}>

    <Grid.Column style={{margin:"0 auto", minWidth:"256px", maxWidth:"60%"}}>
      
      <p style={{fontSize:"120%", textAlign:"justify" }}>
      <b style={{fontSize:"140%"}}>Series bíblicas que no podemos dejar de ver</b><br/><br/>
      En este escrito nos hemos enfocado en las películas, pero no está de más recomendarte algunas series bíblicas. Estamos seguros de que te dejarán fascinado, tanto que no querremos perdernos ningún capítulo. A continuación, la lista wasiana de series para ver en semana santa.
      <br /><br />
      <b>1.-José de Egipto:</b> Esta novela brasileña nos muestra el crecimiento de un joven José, quien debe vivir tristezas, desamores, perdidas, traiciones a fin de convertirse en el salvador de su pueblo y de Egipto.<br/><br/>

<b>2.-La Biblia: </b>La serie consta de diez capítulos que relatan los más importantes sucesos de la biblia. El que haya sido producida por History Chanel le da un valor agregado en cuanto a fidelidad histórica a los relatos bíblicos. <br/><br/>

<b>3.-El Rey David:</b> Otra producción brasileña que tuvo éxito en todo Latinoamérica, seguro muchos ya la han visto en señal abierta, pero para quienes aún no, creemos que es una serie que no puedes perderte

      </p>



    </Grid.Column>
    
    </Grid>


    <Grid doubling columns={1} style={{marginTop:"50px"}}>

    <Grid.Column style={{margin:"0 auto", minWidth:"256px", maxWidth:"60%"}}>
      
      <p style={{fontSize:"120%", textAlign:"justify" }}>
      <b style={{fontSize:"140%"}}>¿Cuál es tu película favorita para semana santa?</b><br/><br/>
      En este escrito, nosotros fuimos quienes recomendamos algunas de las mejores películas y series que podemos ver en semana santa. No obstante, queremos que nuestros wasianos nos recomienden las suyas. Por eso, lanzamos la siguiente pregunta ¿cuál es tu película favorita en semana santa?, escríbela en los comentarios.
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

export default SemanaSanta