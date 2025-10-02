import React from 'react'
import styles from './footer.module.css'
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import playStore from '../../Images/playStore.png';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <div className={styles.outerSection}>
        <div className={styles.container}>
            <div className={styles.lists}>
            <div className={styles.first}>
                        <div className={styles.start}><h2 className={styles.logo}>Coffee-Store</h2>
                        <p>Easy Packing Any Items</p>
                        </div>
                <ul>
                    <li>We're coffee shop, an injunative team of food supliers.</li>
                    <li className={styles.call}>
                        <HeadsetMicIcon style={{ fontSize: 40 }}/>
                        <div>
                        <p>Got Questions? 24/7H online</p>
                        <p>Call</p>
                        <p style={{ fontWeight:'bold' }}>+2519-4567-8990</p>
                        </div>
                    </li>
                    <li className={styles.playStore}>
                        <img src={playStore} width={250}/>
                    </li>
                </ul>


            </div>
            <div className={styles.second}>
                <h3>About Company</h3>
                <ul>
                    <li>Privacy Policy</li>
                    <li>Awards & Ranking</li>
                    <li>Affilate Program</li>
                    <li>Newsroom</li>
                    <li>Hours & Locations</li>
                </ul>

            </div>
            <div className={styles.third}>
                <h3>Custoner Support</h3>
                <ul>
                    <li>Help Center</li>
                    <li>Track an Order</li>
                    <li>Return an Item</li>
                    <li>Policies and Dispute</li>
                    <li>Gift Card</li>
                </ul>

            </div>
            <div className={styles.fourth}>
                <h3>My Account</h3>
                <ul>
                    <li>Login/Register</li>
                    <li>Browing History</li>
                    <li>Order History</li>
                    <li>Return History</li>
                    <li>Email Notification</li>
                </ul>

            </div>
            <div className={styles.fifth}>
                <h3>Tools & Resources</h3>
                <ul>
                    <li>Become a Supplier</li>
                    <li>Shop by Brand</li>
                    <li>Mobile App</li>
                    <li>Build Showcase</li>
                    <li>Rules & Policy</li>
                </ul>
            </div>
            </div>
            <div className={styles.media}>
                <div className={styles.iconBox}><a href="#"><FacebookOutlinedIcon /></a></div>
                <div className={styles.iconBox}><a href="#"><TwitterIcon /></a></div>
                <div className={styles.iconBox}><a href="#"><InstagramIcon /></a></div>
                <div className={styles.iconBox}><a href="#"><LinkedInIcon /></a></div>
                <div className={styles.iconBox}><a href="#"><YouTubeIcon /></a></div>
                <div className={styles.iconBox}><a href="#"><TelegramIcon /></a></div>

            </div>
        </div>
        <div className={styles.bottom}>
            <p>&copy; 2025 Coffee-Store. All rights reserved.</p>


        </div>
      
    </div>
  )
}

export default Footer
