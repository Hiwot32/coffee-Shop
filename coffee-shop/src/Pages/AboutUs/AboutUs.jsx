import React from 'react'
import about from './aboutUs.module.css'
import cup from '../../Images/imgi_2_coffee_video.png'
import sign from '../../Images/imgi_3_sign-1.png'
import first from '../../Images/imgi_4_about-icon-1.png'
import second from '../../Images/imgi_6_about-icon-2.png'
import third from '../../Images/imgi_5_about-icon-3.png'
import fourth from '../../Images/imgi_7_about-icon-4.png'


function AboutUs() {
  return (
    <div className={about.outer}>
        <div className={about.topSection}>
            <div className={about.texts}>
            <h1>About Us</h1>
            <p>CoffeeKing</p>
            </div>
        </div>

        <div className={about.outerSection}>
            <div className={about.container}>
            <div className={about.left}>
                <p className={about.head}>Who We Are</p>
                <h1>About Market</h1>
                <p>Our market is built on a passion for quality and trust. We bring together carefully selected products, ensuring freshness, authenticity, and value for our customers. With a focus on excellence and a commitment to service, we aim to create a shopping experience that goes beyond transactions — one that connects people, products, and purpose.</p>

            </div>
                <div className={about.right}>
                    <img src={cup} />

                </div>
            </div>
            <div className={about.grids}>
                            <div className={about.first}>
                                <img src={first} />
                                <h3>The Best World Sorts</h3>
                                <p>We source premium coffee beans from the finest regions across the globe, ensuring every cup delivers authentic taste and unmatched quality.</p>
            
                            </div>
                            <div className={about.second}>
                                <img src={second} />
                                <h3>Many Points of Sale</h3>
                                <p>With multiple locations and partners, our products are always within your reach, making it easy to enjoy quality wherever you are.</p>
            
                            </div>
                            <div className={about.third}>
                                <img src={third} />
                                <h3> Professional Baristas</h3>
                                <p>With multiple locations and partners, our products are always within your reach, making it easy to enjoy quality wherever you are.</p>
            
                            </div>
                            <div className={about.fourth}>
                                <img src={fourth} />
                                <h3>24/7 Fast Delivery</h3>
                                <p>We value your time — that’s why we provide round-the-clock delivery services, bringing fresh coffee and products straight to your door.</p>
            
                            </div>
            
                        </div>
        </div>

        <div className={about.skilsSection}>
                <h1>Our Skills</h1>
            <div className={about.skills}>
                <div>
                    <h1>390</h1>
                    <h2>Online Stores</h2>
                    <p>We work with 380 online stores worldwide. Each store receives carefully selected products to ensure quality. </p>
                </div>
                <div>
                    <h1>19</h1>
                    <h2>Product Types</h2>
                    <p>We offer 19 unique product types for every taste. This variety ensures something for everyone.</p>

                </div>
                <div>
                    <h1>12</h1>
                    <h2>Years Experiance</h2>
                    <p>We have 12 years of experience in the coffee industry. Over time, we’ve perfected our service. Our expertise ensures quality you can trust.</p>

                </div>
                <div>
                    <h1>768</h1>
                    <h2>Happy Buyers</h2>
                    <p>768 buyers trust us every day. Their satisfaction drives our passion for coffee. We aim to keep every cup special.</p>

                </div>
            </div>
        </div>
        
      
    </div>
  )
}

export default AboutUs
