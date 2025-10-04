import React from 'react'
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
        <Header />
        <Hero />
        <About />
        <Products />
        <Points />
        <Brands />
        <Discount />
        <Blog />
        <Footer />
        
      
    </div>
  )
}

export default Home
