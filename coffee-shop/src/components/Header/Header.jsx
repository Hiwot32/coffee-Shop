import React, { useState } from "react";
import { Link } from "react-router-dom"
import style from "./header.module.css";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import coffee from "../../Images/imgi_1_logo_white-7.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className={style.outerSection}>
      <div className={style.container}>

        {/* Left section */}
        <div className={style.left}>
          <img src={coffee}  alt="Coffee Logo" />
        </div>

        {/* Hamburger icon */}
        <div className={style.hamburger} onClick={toggleMenu}>
          <MenuIcon />
        </div>

        {/* Middle menu */}
        <div className={`${style.middle} ${menuOpen ? style.active : ""}`}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/product">Products</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
        
          </ul>
        </div>

        {/* Right section */}
        <div className={style.right}>
          <ul>
            {/* Desktop login/register */}
            <li className={style.desktopLogin}>
              <a href="#"><PersonIcon />Login/Register</a>
            </li>
            <li><a href="#"><ShoppingCartIcon /></a></li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Header;
