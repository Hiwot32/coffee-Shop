import React from 'react'
import brand from './brand.module.css'
import firstImg from '../../Images/imgi_18_restaurants.png'
import secondImg from '../../Images/imgi_19_vintage.png'
import thirdImg from '../../Images/imgi_20_cupcake.png'
import fourthImg from '../../Images/imgi_21_coffe_logo2.png'
import fifthImg from '../../Images/imgi_22_bakery.png'
import sixthImg from '../../Images/imgi_23_brandit.png'

function Brands() {
  return (
    <div className={brand.outerSection}>
        <div className={brand.container}>
            <ul>
                <li><img src={firstImg} /></li>
                <li><img src={secondImg} /></li>
                <li><img src={thirdImg} /></li>
                <li><img src={fourthImg} /></li>
                <li><img src={fifthImg} /></li>
                <li><img src={sixthImg} /></li>
            </ul>
        </div>
      
    </div>
  )
}

export default Brands
