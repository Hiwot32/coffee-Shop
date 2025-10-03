import React from 'react'
import design from './hero.module.css';
import img from '../../Images/imgi_2_home-2-logo-1.png'
import line from '../../Images/imgi_34_coffee_cut_long.png'


function Hero() {
  return (
    <div>
    
        <div className={design.outerSection}>

            <div className={design.container}>
                <img src={img} />
                <button className={design.btn}>View Products</button>

            </div>
            <img className={design.lineImg} src={line} />
              
        </div>
        
         
    </div>
  )
}

export default Hero
