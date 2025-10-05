import React from 'react'
import contact from './contact.module.css'
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

function Contact() {
  return (
    <div className={contact.outer}>
      <div className={contact.topSection}>
                  <div className={contact.texts}>
                  <h1>Contact Us</h1>
                  <p>CoffeeKing</p>
                  </div>
      </div>

      <div className={contact.outerSection}>
        <div className={contact.container}>
          <div className={contact.left}>
              <h3>Central Office</h3>
              <p className={contact.text}>Our central office is the heart of our operations. It coordinates our global network to ensure smooth service. Here, ideas turn into quality coffee experiences.</p>
              <p><PhoneIcon /> +2519 4567 8976</p>
              <p><LocationOnIcon /> Addis Ababa, Ethiopia</p>

              <h5 className={contact.social}>Socials:</h5>
              <div className={contact.medias}>
                <ul>
                  <li><a href="#" className={contact.face}><FacebookRoundedIcon /></a></li>
                  <li><a href="#" className={contact.twit}><TwitterIcon /></a></li>
                  <li><a href="#" className={contact.you}><YouTubeIcon /></a></li>
                  <li><a href="#" className={contact.ig}><InstagramIcon /></a></li>
                </ul>
              </div>
          </div>

          <div className={contact.middle}>
            <div className={contact.days}>
            <h2>Opening Hours</h2>
            <p><span>Monday: </span>9:00-19:00</p>
            <p><span>Tuesday: </span>9:00-19:00</p>
            <p><span>Wednesday: </span>9:00-19:00</p>
            <p><span>Thursday: </span>9:00-19:00</p>
            <p><span>Friday: </span>9:00-19:00</p>
            <p><span>Saturday: </span>9:00-19:00</p>
            <p><span>Sunday: </span>9:00-19:00</p>
            </div>

          </div>
          <div className={contact.right}>
            <div className={contact.form}>
            <h3>Your Name</h3>
            <input className={contact.small} type='text' />
            <h3>Your Email</h3>
            <input className={contact.small} type='text' />
            <h3>Your Message</h3>
            <input className={contact.large} type='text' /><br />
            <button>Submit</button>
            </div>

          </div>
        </div>
      </div>
      
      
    </div>
  )
}

export default Contact
