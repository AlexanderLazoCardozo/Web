import React from 'react'
import CardsSlider from '../components/SlideCards/CardsSlider'
import Navbar from '../components/Navbar/Navbar'
import InicioWallpaper from '../components/Wallpaper/InicioWallpaper'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <InicioWallpaper />
      <CardsSlider />
    </div>
  )
}

export default Home