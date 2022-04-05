import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/contacto'
import { Solicitar } from './pages/Solicitar'
import Navbar from './components/Navbar/Navbar'
import Planes from './pages/Planes'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
    <BrowserRouter>
         <Navbar/>   
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Nosotros' element={<Nosotros />} />
          <Route path='/Contacto' element={<Contacto />} />
          <Route path='/Planes' element={<Planes />} />
          <Route path='/Solicitar' element={<Solicitar />} />

        </Routes>
        <Footer />
    </BrowserRouter>

    </>
  )
}

export default App