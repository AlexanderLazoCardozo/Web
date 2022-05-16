import React from 'react'
import Plan1 from './Plan1'
import CardsSlider from './../../components/SliderPlanes/CardsSlider'
import PlanesWallpaper from './PlanesWallpaper'
import { TabTitle } from '../../utils/GeneralFuntions'
import {Helmet} from "react-helmet"
import Footer from '../../components/Footer/Footer'

const Planes = () => {
  window.scrollTo(0, 0);
  TabTitle("Planes - Wasi Perú")

  return (
      <>
        <Helmet>
        <title>Planes - Wasi Perú</title>
        <meta name='description' content="En wasi tenemos todo tipo de precios a tu alcance para toda tu familia." />
        </Helmet>
        <PlanesWallpaper />
        <CardsSlider />

        <Plan1 />
        <Footer/>
      </>
    
  )
}

export default Planes