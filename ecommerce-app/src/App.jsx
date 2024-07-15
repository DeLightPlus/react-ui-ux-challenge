import { useState } from 'react';
import sneakersLogo from './assets/images/logo.svg';

import cartLogo from './assets/images/icon-cart.svg';
import avatar from './assets/images/image-avatar.png';

import productImg from './assets/images/image-product-1.jpg';
import prodImgthumb from './assets/images/image-product-1-thumbnail.jpg';

import minusIcon from './assets/images/icon-minus.svg';
import plusIcon from './assets/images/icon-plus.svg';


import viteLogo from '/vite.svg'
import './App.css'

function App() 
{

  return (

      <div className='wrapper' >
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
                  <li className='cart'><a href=""><img src={cartLogo} alt="Cart" /></a> </li>
                  <li className='profile'> <a href=""><img src={avatar} alt="KP" /></a> </li>
                </ul>
              </ul>
            </nav>
          </div>
         
        </header>  

        <main>
          <div className="container side1" id='showcase'>
            <div className='productView'>
              <section className='productImg'>
                <img src={productImg} height='500'width='500'/>

              </section>

              <section className='thumbnails'>
                <img src={prodImgthumb} height='100' width='100'/>
                <img src={prodImgthumb} height='100' width='100'/>
                <img src={prodImgthumb} height='100' width='100'/>
                <img src={prodImgthumb} height='100' width='100'/>
              </section>
            </div>
          </div>

          <div className="side 2" id='details'>
            <div>
                <h4>SNEAKER COMPANY</h4>
            </div>

            <div>
              <h2>Fall Limited Edition <br/> Sneakers</h2>
            </div>

            <p>
              These low-profile sneakers are your perfect casual wear companion. 
              Featuring a durable rubber outer sole, 
              they’ll withstand everything the weather can offer.
            </p>

            <div className="pricing">
              <div style={{display:"flex"}}>  
                <strong> $125.00 </strong>
                <div className='perc'> 50% </div>
              </div>               
              <div> <p> $250.00 </p></div>
            </div> 
              
              
            <div className="bottomWrapper">
            <div className="counter-wrap">
                <button className="crementBtn"> <img src={minusIcon} alt="-" /> </button> 
                  <span> 0 </span> 
                <button className="crementBtn"> <img src={plusIcon} alt="+" /> </button>
              </div> 

              <button className="_btn">
                <img src={cartLogo} alt='' />
                  Add to Cart                
              </button>
            </div>

              
          
          </div>
        </main>

      </div> 
 
  )
}

export default App
