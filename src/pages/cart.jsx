import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
import '../index.css';
const Cart = () => {
  return (
                 
<div className="wishlist-container">
     <FiShoppingCart className="cart icon-btn toggle" />
      {/* <div className="modal modal1">
        <p><strong>Cart (0)</strong></p>
        <p className='ppp'>Your Cart is empty</p>
        <button className='modal-btn'  style={{
          marginTop: '10px',
          backgroundColor: '#3b82f6',
          color: 'white',
          padding: '5px 10px',
          borderRadius: '5px',
          border: 'none',
          cursor: 'pointer'
        }}>View Cart</button>
      </div> */}
    </div>
    
  )
}

export default Cart