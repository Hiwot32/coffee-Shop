import React from "react";
import { motion } from "framer-motion";
import about from "./aboutUs.module.css";
import cup from "../../Images/imgi_2_coffee_video.png";
import first from "../../Images/imgi_4_about-icon-1.png";
import second from "../../Images/imgi_6_about-icon-2.png";
import third from "../../Images/imgi_5_about-icon-3.png";
import fourth from "../../Images/imgi_7_about-icon-4.png";

function AboutUs() {
  // Function to create different float animations
  const createFloatAnimation = (duration, delay) => ({
    y: [0, -20, 0], // moves up and down
    transition: {
      duration,
      delay,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    },
  });

  return (
    <div className={about.outer}>
      {/* Top Section */}
      <div className={about.topSection}>
        <div className={about.texts}>
          <h1>About Us</h1>
          <p>CoffeeKing</p>
        </div>
      </div>

      {/* About Section */}
      <div className={about.outerSection}>
        <div className={about.container}>
          <div className={about.left}>
            <p className={about.head}>Who We Are</p>
            <h1>About Market</h1>
            <p>
              Our market is built on a passion for quality and trust. We bring
              together carefully selected products, ensuring freshness,
              authenticity, and value for our customers. With a focus on
              excellence and a commitment to service, we aim to create a
              shopping experience that goes beyond transactions — one that
              connects people, products, and purpose.
            </p>
          </div>
          <div className={about.right}>
            <img src={cup} alt="Coffee" />
          </div>
        </div>

        {/* Grid Icons */}
        <div className={about.grids}>
          <div className={about.first}>
            <img src={first} alt="Best Sorts" />
            <h3>The Best World Sorts</h3>
            <p>
              We source premium coffee beans from the finest regions across
              the globe, ensuring every cup delivers authentic taste and
              unmatched quality.
            </p>
          </div>
          <div className={about.second}>
            <img src={second} alt="Points of Sale" />
            <h3>Many Points of Sale</h3>
            <p>
              With multiple locations and partners, our products are always
              within your reach, making it easy to enjoy quality wherever you
              are.
            </p>
          </div>
          <div className={about.third}>
            <img src={third} alt="Professional Baristas" />
            <h3>Professional Baristas</h3>
            <p>
              With multiple locations and partners, our products are always
              within your reach, making it easy to enjoy quality wherever you
              are.
            </p>
          </div>
          <div className={about.fourth}>
            <img src={fourth} alt="Fast Delivery" />
            <h3>24/7 Fast Delivery</h3>
            <p>
              We value your time — that’s why we provide round-the-clock
              delivery services, bringing fresh coffee and products straight
              to your door.
            </p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className={about.skilsSection}>
        <h1>Our Skills</h1>
        <div className={about.skills}>
          <motion.div animate={createFloatAnimation(3, 0)}>
            <h1>390</h1>
            <h2>Online Stores</h2>
            <p>
              We work with 380 online stores worldwide. Each store receives
              carefully selected products to ensure quality.
            </p>
          </motion.div>

          <motion.div animate={createFloatAnimation(2.5, 0.2)}>
            <h1>19</h1>
            <h2>Product Types</h2>
            <p>
              We offer 19 unique product types for every taste. This variety
              ensures something for everyone.
            </p>
          </motion.div>

          <motion.div animate={createFloatAnimation(3.2, 0.4)}>
            <h1>12</h1>
            <h2>Years Experience</h2>
            <p>
              We have 12 years of experience in the coffee industry. Over
              time, we’ve perfected our service. Our expertise ensures
              quality you can trust.
            </p>
          </motion.div>

          <motion.div animate={createFloatAnimation(2.8, 0.6)}>
            <h1>768</h1>
            <h2>Happy Buyers</h2>
            <p>
              768 buyers trust us every day. Their satisfaction drives our
              passion for coffee. We aim to keep every cup special.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
