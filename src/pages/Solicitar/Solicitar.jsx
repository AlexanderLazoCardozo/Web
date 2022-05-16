import React from 'react'
import FinishFormuVali from '../Contacto/FinishFormuVali'
import "./estilos.css"
import FondoInferior from "./FondoInferior.png"
import { TabTitle } from '../../utils/GeneralFuntions'
import {Helmet} from "react-helmet"
import Footer from '../../components/Footer/Footer'

const Solicitar = () => {
  window.scrollTo(0, 0);
  TabTitle("Solicitar - Wasi Perú")

  return (
    <>
    <Helmet>
        <title>Solicitar - Wasi Perú</title>
        <meta name='description' content="Contrata el mejor internet de fibra optica 100% peruano 100% fibra óptica." />
        </Helmet>
    <FinishFormuVali />
    <img style={{width:"100%"}} src={FondoInferior} />
    <Footer />
    </>
  )
}

export default Solicitar;