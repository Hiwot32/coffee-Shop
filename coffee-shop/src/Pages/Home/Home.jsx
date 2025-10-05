import React from 'react'
import home from './home.module.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Products from '../../components/Products/Products'
import Points from '../../components/Point/Points'
import Brands from '../../components/Brands/Brands'
import Discount from '../../components/Discount/Discount'
import Blog from '../../components/Blog/Blog'


function Home() {
  return (
    <div>
        <Hero />
        <About />
        <Products />
        <Points />
        <Brands />
        <Discount />
        <Blog />
        
      
    </div>
  )
}

export default Home
