import React from 'react'
import { Link } from 'react-router-dom';
import styles from './footer.module.css'
import logo from '../../Images/imgi_1_logo_white-7.png'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    
    <div className={styles.outerSection}>
        <div className={styles.container}>
            <div className={styles.inner}>
            <div className={styles.left}>
                <img src={logo} />
                <p>At CoffeeHouse, we believe that every cup tells a story. From carefully selected beans to expertly brewed blends, our mission is to bring warmth, comfort, and quality to your everyday moments. Whether you’re starting your morning or unwinding after a long day, we’re here to make every sip special.</p>


            </div>
            <div className={styles.right}>
                <h1>Explore</h1>
                <div className={styles.links}>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/product">Products</Link></li>
                        <li><Link to="blog">Blog</Link></li>
                        <li><Link to="/about">About US</Link></li>
                    </ul>
                </div>

            </div>
            </div>

            <div className={styles.icons}>
                <ul>
                    <li><a href="#"><FacebookOutlinedIcon /></a></li>
                    <li><a href="#"><TwitterIcon /></a></li>
                    <li><a href="#"><LinkedInIcon /></a></li>
                    <li><a href="#"><InstagramIcon /></a></li>
                    <li><a href="#"><TelegramIcon /></a></li>
                </ul>
            </div>
                       <div className={styles.copy}>
            <p>CoffeKing &copy; All rights reserved.</p>
        </div> 
        </div>

    </div>

   
  )
}

export default Footer
