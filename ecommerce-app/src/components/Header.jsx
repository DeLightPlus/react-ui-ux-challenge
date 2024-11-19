import React, { useState } from 'react';
import sneakersLogo from '../assets/images/logo.svg';
import cartLogo from '../assets/images/icon-cart.svg';
import avatar from '../assets/images/image-avatar.png';
import closeIcon from '../assets/images/icon-close.svg';

import CartCard from './Cart_Card';

import "./header.css";

const Header = () => {
  const [showCartCard, setShowCartCard] = useState(false); // Corrected state setter name
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // State to toggle the hamburger menu

  // Toggle menu on mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header>
        <div className='nav'>
          <nav>           

            <div style={{ display: "flex", alignItems: "center", gap: "8%" }}>
              {/* Hamburger Menu */}
              <div className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>

              <img className='logo' src={sneakersLogo} alt='Sneakers' height='20' />
            
              {/* Menu */}
              <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                <div className={`closeBtn`} style={{ margin: "8px 0 48px" }}>
                  <img src={closeIcon} alt='Close' height='20' onClick={toggleMenu} />
                </div>
                <li><a href="">Collections</a></li>
                <li><a href="">Man</a></li>
                <li className='active'><a href="">Woman</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
              </ul> 
            </div>

            <div className='withCart'>
              <li className='cart'>
                <a onClick={() => setShowCartCard(!showCartCard)}> {/* Updated handler */}
                  <img src={cartLogo} alt="Cart" />
                </a>
                { showCartCard && <CartCard /> } {/* CartCard toggles based on state */}
              </li>
              <li className='profile'>
                <a href=""><img src={avatar} alt="Profile" /></a>
              </li>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
