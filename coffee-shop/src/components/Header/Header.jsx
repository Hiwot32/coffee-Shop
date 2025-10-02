import React, { useState } from "react";
import style from "./header.module.css";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import coffee from "../../Images/coffee-logo.jpg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className={style.outerSection}>
      <div className={style.container}>

        {/* Left section */}
        <div className={style.left}>
          <img src={coffee} width={60} alt="Coffee Logo" />
          <h2 className={style.logo}>Coffee-Store</h2>
        </div>

        {/* Hamburger icon */}
        <div className={style.hamburger} onClick={toggleMenu}>
          <MenuIcon />
        </div>

        {/* Middle menu */}
        <div className={`${style.middle} ${menuOpen ? style.active : ""}`}>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Reviews</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Blog</a></li>
        
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
