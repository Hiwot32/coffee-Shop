import React from 'react'
import design from './hero.module.css';
import img from '../../Images/imgi_2_home-2-logo-1.png'

function Hero() {
  return (
    <>
        <div className={design.outerSection}>
            <div className={design.container}>
                <img src={img} />
                <button className={design.btn}>View Products</button>

            </div>
        </div>
      
    </>
  )
}

export default Hero
