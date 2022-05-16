import React from 'react'
import BlogArticulos from '../../components/BlogArticulos/BlogArticulos'
import SliderBlog from '../../components/SliderBlog/SliderBlog'
import WallpBlog from "./images/WallpBlog.webp"
import BlogMovil from "./images/BlogMovil.webp"

import styled from "styled-components";
import { TabTitle } from '../../utils/GeneralFuntions'
import {Helmet} from "react-helmet"
import Footer from '../../components/Footer/Footer'

const Pc = styled.div`

@media screen and (max-width: 800px) {
    display:none;
}`;  
const Movil = styled.div`
@media screen and (min-width: 800px) {
    display:none;
}
@media screen and (max-width: 800px) {
    display:block;
}`;  
const Blog = () => {
  window.scrollTo(0, 0);
  TabTitle("Blog - Wasi Perú")


  return (
    <>
     <Helmet>
        <title>Blog - Wasi Perú</title>
        <meta name='description' content="Compartimos noticias y articulos relevantes para toda la comunidad Wasi." />
      </Helmet>
      <Pc>
      <img style={{width:"100%"}} src={WallpBlog} />
    </Pc>
    <Movil>
      <img style={{width:"110%", marginTop:"40px"}} src={BlogMovil} />
    </Movil>
      <SliderBlog />
      <BlogArticulos/>
      <Footer />
    </>
  )
}

export default Blog