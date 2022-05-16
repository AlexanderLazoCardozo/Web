import React from 'react'
import Comunicate from './Comunicate'
import ContactateCon from './ContactateCon'
import ContactoWallpaper from './ContactoWallpaper'
import FinishFormuVali from './FinishFormuVali'
import { TabTitle } from '../../utils/GeneralFuntions'
import {Helmet} from "react-helmet"
import Footer from '../../components/Footer/Footer'

const Contacto = () => {
  TabTitle("Contacto - Wasi Perú")
  window.scrollTo(0, 0);

  return (
    <>
      <Helmet>
        <title>Contacto - Wasi Perú</title>
        <meta name='description' content="En Wasi te ofrecemos una atención rápida y eficaz, estamos para ti ¡Contáctanos!." />
      </Helmet>
      <ContactoWallpaper />
      <FinishFormuVali />
      <ContactateCon/>
      <Comunicate />
      <Footer/>
    </>    
  )
}

export default Contacto