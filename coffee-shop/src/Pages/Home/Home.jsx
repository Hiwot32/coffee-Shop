import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Products from '../../components/Products/Products'
import Points from '../../components/Point/Points'


function Home() {
  return (
    <div>
        <Header />
        <Hero />
        <About />
        <Products />
        <Points />
        <Footer />
        
      
    </div>
  )
}

export default Home
