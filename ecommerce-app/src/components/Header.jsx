import sneakersLogo from '../assets/images/logo.svg';
import cartLogo from '../assets/images/icon-cart.svg';
import avatar from '../assets/images/image-avatar.png';

import React, { useState } from 'react';
import CartCard from './Cart_Card';



const Header = () => {

    const [showCartCard, setCartCar] = useState();
  return (
    <>
        <header>
          <div className='nav'>
            <nav>
              <img className='logo' src={sneakersLogo} alt='sneakers' height='20'/>
              <ul>
                <li>
                  <a href=""> Collections </a> 
                </li>

                <li className='active'>
                  <a href=""> Man </a>  
                </li>

                <li>
                  <a href=""> Woman </a>  
                </li>

                <li>
                  <a href=""> About </a>  
                </li>

                <li >
                  <a href=""> Contact </a>  
                </li>

                <ul className='withCart'>
                  <li className='cart'><a href=""><img src={cartLogo} alt="Cart" /></a> 
                  <CartCard/>
                  </li>
                  
                  <li className='profile'> <a href=""><img src={avatar} alt="KP" /></a> </li>
                </ul>
              </ul>
            </nav>
          </div>         
        </header>

       
        
    </>
      
  );
};

export default Header;