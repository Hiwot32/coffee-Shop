import React from 'react'
import {Link} from 'react-router-dom'
import design from './hero.module.css';
import img from '../../Images/imgi_2_home-2-logo-1.png'
import line from '../../Images/imgi_34_coffee_cut_long.png'
import Product from '../../Pages/Product/Product';


function Hero() {
  return (
    <div>
    
        <div className={design.outerSection}>

            <div className={design.container}>
                <img src={img}/>
                <Link to="/product">
                <button className={design.btn}>View Products</button>
                </Link>

            </div>
            <img className={design.lineImg} src={line} />
              
        </div>
        
         
    </div>
  )
}

export default Hero
