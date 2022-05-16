import React from 'react'
import SomosWasi from './SomosWasi'
import Valores from './Valores'
import NosotrosWallpaper from './NosotrosWallpaper'
import { TabTitle } from '../../utils/GeneralFuntions'
import {Helmet} from "react-helmet"
import Footer from '../../components/Footer/Footer'

const Nosotros = () => {
  window.scrollTo(0, 0);

  TabTitle("Nosotros - Wasi Perú")
  return (
    <>
        <Helmet>
          <title>Nosotros - Wasi Perú</title>
          <meta name='description' content="Somos Wasi, una empresa 100% peruana, buscamos darte el mejor internet y la más calida atención." />
        </Helmet>

        <NosotrosWallpaper />
        <SomosWasi />
        <Valores />
        <Footer />
    </>
  )
}

export default Nosotros