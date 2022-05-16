import React from 'react'
import PreguntasFrecuentes from './PreguntasFrecuentes'
import InicioWallpaper from './InicioWallpaper'
import CardsSlider from '../components/SliderPlanes/CardsSlider'
import SliderHome from './Slider/SliderHome'
import TestimoniosVideo from './TestimoniosVideo'
import {Helmet} from "react-helmet"
import Footer from '../components/Footer/Footer'
const Home = () => {
  window.scrollTo(0, 0);
  
  return (
    <>
    <div>
      <Helmet>
        <title>Wasi Perú</title>
        <meta name='description' content="Da lo mejor con el mejor internet de fibra optica, contrata Wasi. Navega a altas velocidades gracias a nuestro internet simetrico y fibra optica Wasi." />
      </Helmet>


      <InicioWallpaper />
      <CardsSlider />
      <SliderHome />
      <PreguntasFrecuentes />
      <TestimoniosVideo />
      <Footer />

    </div>  
    </>
  )
}

export default Home