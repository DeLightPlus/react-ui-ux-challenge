import prodImgthumb from '../assets/images/image-product-1-thumbnail.jpg';
import deleteButton from '../assets/images/icon-delete.svg';

import React from 'react';

const CartCard = () => {
  return (
    <div className="cart-card">
        <div style={{ color: "black", width:'100%', textAlign:'left', borderBottom:'#8080802b solid 2px'}}> 
          <h3>Cart</h3>
        </div>  

        <div className="cart-card-info">
          <p><b>Your cart is empty.</b></p> 
        </div>

        {/* <div className="cart-card-info">
          <div className="cart-card-image">
              <img cart-product-img src={prodImgthumb} alt=''/>
          </div>

          <div style={{height:'64px', padding:'10px 0px', textAlign:'left'}}>
              <small> Fall Limited Edition Sneakers</small> <br/>
              <small> $125.00 x 3 <strong>$375.00</strong></small>
          </div> 
          
          <button className='del_btn'>
            <img src={deleteButton} />
          </button>
        </div> */}
    
      {/* <button className="_btn" id='checkout' onClick={ console.log('checkout') }>Checkout</button>  */}
     
    </div>
  );
};

export default CartCard;