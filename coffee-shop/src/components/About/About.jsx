import React from 'react'
import designs from './about.module.css';
import sign from '../../Images/imgi_3_sign-1.png'
import first from '../../Images/imgi_4_about-icon-1.png'
import second from '../../Images/imgi_6_about-icon-2.png'
import third from '../../Images/imgi_5_about-icon-3.png'
import fourth from '../../Images/imgi_7_about-icon-4.png'


function About() {
  return (
    <div>
   
    <div className={designs.outerSection}>
        
        <div className={designs.container}>
            <div className={designs.left}>
                <p className={designs.head}>Who We Are</p>
                <h1>About Market</h1>
                <p>Our market is built on a passion for quality and trust. We bring together carefully selected products, ensuring freshness, authenticity, and value for our customers. With a focus on excellence and a commitment to service, we aim to create a shopping experience that goes beyond transactions — one that connects people, products, and purpose.</p>

                <div className='image'>
                    <img src={sign} />
                </div>

            </div>
            <div className={designs.right}>
                <div className={designs.first}>
                    <img src={first} />
                    <h3>The Best World Sorts</h3>
                    <p>We source premium coffee beans from the finest regions across the globe, ensuring every cup delivers authentic taste and unmatched quality.</p>

                </div>
                <div className={designs.second}>
                    <img src={second} />
                    <h3>Many Points of Sale</h3>
                    <p>With multiple locations and partners, our products are always within your reach, making it easy to enjoy quality wherever you are.</p>

                </div>
                <div className={designs.third}>
                    <img src={third} />
                    <h3> Professional Baristas</h3>
                    <p>With multiple locations and partners, our products are always within your reach, making it easy to enjoy quality wherever you are.</p>

                </div>
                <div className={designs.fourth}>
                    <img src={fourth} />
                    <h3>24/7 Fast Delivery</h3>
                    <p>We value your time — that’s why we provide round-the-clock delivery services, bringing fresh coffee and products straight to your door.</p>

                </div>

            </div>

        </div>
      
    </div>
    </div>
  )
}

export default About
