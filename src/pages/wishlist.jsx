import React from 'react';
import { IoMdHeartEmpty } from "react-icons/io";
import '../index.css';
const Wishlist = () => {
  return (
    <div className="wishlist-container" >
      <IoMdHeartEmpty className="heart icon-btn toggle"  />
      {/* <div className="modal">
        <p><strong>Wishlist (0)</strong></p>
        <p className='ppp'>Your wishlist is empty</p>
        <button className='modal-btn'  style={{
          marginTop: '10px',
          backgroundColor: '#3b82f6',
          color: 'white',
          padding: '5px 10px',
          borderRadius: '5px',
          border: 'none',
          cursor: 'pointer'
        }}>View Wishlist</button>
      </div> */}
    </div>
  );
};

export default Wishlist;
