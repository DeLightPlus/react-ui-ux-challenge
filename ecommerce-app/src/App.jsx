import { useState } from 'react';
import sneakersLogo from './assets/images/logo.svg';

import cartLogo from './assets/images/icon-cart.svg';
import avatar from './assets/images/image-avatar.png';

import productImg from './assets/images/image-product-1.jpg';
import prodImgthumb from './assets/images/image-product-1-thumbnail.jpg';
import prodImgthumb2 from './assets/images/image-product-2-thumbnail.jpg';
import prodImgthumb3 from './assets/images/image-product-3-thumbnail.jpg';
import prodImgthumb4 from './assets/images/image-product-4-thumbnail.jpg';

import minusIcon from './assets/images/icon-minus.svg';
import plusIcon from './assets/images/icon-plus.svg';


import Header from './components/Header';
import './App.css';
import './styles.css';

import CartCard from './components/Cart_Card';

function App() 
{

  return (

      < >
        <Header/>

        <main>
          <div className="container side1" id='showcase'>
            <div className='productView'>
              <section className='productImg'>
                <img src={productImg} height='500'width='500'/>

              </section>

              <section className='thumbnails'>
                <div className='thumb-image active'>
                  <img src={prodImgthumb} height='100' width='100' />
                </div>

                <div className='thumb-image'>
                  <img src={prodImgthumb2} height='100' width='100' />
                </div>

                <div className='thumb-image'>
                  <img src={prodImgthumb3} height='100' width='100' />
                </div>

                <div className='thumb-image'>
                  <img src={prodImgthumb4} height='100' width='100' />
                </div>                
              </section>
            </div>
          </div>

          <div className="side2" id='details'>
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
                <img src={cartLogo} alt='' style={{color:'black'}} width='16' height='16'/>
                  Add to Cart                
              </button>
            </div>

              
          
          </div>
        </main>

      </> 
 
  )
}

export default App
