import prodImgthumb from '../assets/images/image-product-1-thumbnail.jpg';
import deleteButton from '../assets/images/icon-delete.svg';

import React from 'react';

const CartCard = () => {
  return (
    <div className="cart-card">
       <div style={{ width:'100%', textAlign:'left'}}> <h3>Cart</h3><hr /></div>      
        <div className="cart-card-info">
        <div className="cart-card-image">
            <img cart-product-img src={prodImgthumb} alt=''/>
        </div>
        <div style={{height:'64px', padding:'16px 0px', flex:'1'}}>
            <small> Fall Limited Edition Sneakers</small> <br/>
            <small> $125.00 x 3 <strong>$375.00</strong></small>
        </div> 
        <button className='del_btn'><img src={deleteButton} /></button>
        </div><br/>
      <button className="_btn" onClick={console.log()}>Checkout</button> 
     
    </div>
  );
};

export default CartCard;