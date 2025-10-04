import React from 'react'
import discount from './discount.module.css'
import disc from '../../Images/imgi_24_card.png'
import disc2 from '../../Images/imgi_38_coffe_back.png'

function Discount() {
  return (
    <div className={discount.outerSection}>
        <div className={discount.container}>
            <div className={discount.left}>
                <h4>Special Offer</h4>
                <h1>Get Your Discount</h1>
                <img src={disc} />
                <p>Don't miss out on our limited-time offer. Enjoy special savings on your favorite items — shop now and make the most of this exclusive deal!</p>
                <button>Get Now</button>

            </div>
            <div className={discount.right}>
                <img src={disc2} />


            </div>
        </div>
      
    </div>
  )
}

export default Discount
