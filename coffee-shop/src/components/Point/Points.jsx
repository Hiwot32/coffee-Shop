import React from 'react'
import decore from './point.module.css'
import cup from '../../Images/imgi_35_coffee-cup-1.png'

function Points() {
  return (
    <div className={decore.outerSection}>
        <div className={decore.container}>
            <div className={decore.left}>
                <div className={decore.top}>
                    <p className={decore.topText}>More Than</p>
                    <h1>5400</h1>
                    <p className={decore.bottom}>Customers<br />trust us</p>
                </div>
                <img className={decore.cup} src={cup} />

            </div>
            <div className={decore.right}>
                <h1>Become Our Dealer</h1>
                <p>Join our growing network and share the love of great coffee. As a dealer, you’ll enjoy premium products, reliable supply, and dedicated support to help your business thrive. Partner with us and bring authentic coffee experiences to your community.</p>
                <button>Contact Us</button>
            </div>
        </div>
      
    </div>
  )
}

export default Points
