import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './HOME/Home'
import Nosotros from './pages/Nosotros/Nosotros'
import Contacto from './pages/Contacto/Contacto'
import Solicitar  from './pages/Solicitar/Solicitar'
import Navbar from './components/Navbar/Navbar'
import Planes from './pages/Planes/Planes'
import Footer from './components/Footer/Footer'
import Blog from './pages/Blog/Blog'
import Reclamaciones from './components/Forms/Reclamaciones/Reclamaciones'
import Soporte from './components/Forms/Soporte/Soporte'
import Venta from './components/Forms/Venta/Venta'
import SemanaSanta from './pages/Blog/Articulos/SemanaSanta'
import RegalosTec from './pages/Blog/Articulos/RegalosTec'
import PostVenta from './components/PostVenta/PostVenta'
import WifiMesh from './pages/Blog/Articulos/WifiMesh'
import ComidasSemS from './pages/Blog/Articulos/ComidasSemS'
import PeliculasM from './pages/Blog/Articulos/PeliculasM'
import FibraVS from './pages/Blog/Articulos/FibraVs'
import SanVal from './pages/Blog/Articulos/SanVal'
import MiWasi from './MW/MiWasi'
import LoginView from './MW/LoginView'
import Datos from './MW/Datos'

const App = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path='Nosotros' element={<Nosotros />} />
              <Route path='Contacto' element={<Contacto />} />
              <Route path='Planes' element={<Planes />} />
              <Route path='Blog' element={<Blog />} />

              <Route path='/2022/04/15/las-mejores-peliculas-para-esta-semana-santa/' element={<SemanaSanta />} />
              <Route path='Blog/Mejores-Regalos-tecnologicos-para-mama' element={<RegalosTec />} />
              <Route path='/2021/12/27/wifimesh/' element={<WifiMesh />} />
              <Route path='2022/02/14/wasi-san-valentin/' element={<SanVal />}/>
              <Route path='/2021/07/12/ffth-vs-hfc-cual-es-el-mejor/' element={<FibraVS />} />
              <Route path='2022/04/09/platos-semana-santa/' element={<ComidasSemS />} />
              <Route path='Blog/5-peliculas-imperdibles-para-este-dia-internacional-de-la-mujer' element={<PeliculasM />} />

              <Route path='Solicitar' element={<Solicitar />} />
              <Route path='AtencionReclamos' element={<Reclamaciones />} />
              <Route path='Soporte' element={<Soporte />} />
              <Route path='PostVenta' element={<PostVenta />} />
              <Route path='solicitudes-en-linea-venta/' element={<Venta />} />

          </Route>
        </Routes>
      {/*
        <Routes>
        <Route path='MiWasi'  element={<MiWasi />}/>
        <Route path='/MiWasi/Login' element={<LoginView />}/>
        <Route path='/MiWasi/Login/Datos' element={<Datos />}/>

  </Routes>*/}
    </BrowserRouter>

    </>
  )
}

export default App