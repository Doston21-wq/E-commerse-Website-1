import React, { useEffect, useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("wishlist");
    if (saved) {
      setWishlist(JSON.parse(saved));
    }
  }, []);

  const handleRemoveFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter((item) => item.idDrink !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div className="wishlist-container">
      <h2 className="hh2">My Wishlist</h2>

      {wishlist.length === 0 ? (
        <>
          <p className="pp1">Add some products to your wishlist to see them here.</p>
          <button className="buttonn">Continue Shopping</button>
        </>
      ) : (
        <div className="product-list">
          {wishlist.map((item) => (
            <div className="cardca" key={item.idDrink}>
              <img src={item.strDrinkThumb} alt={item.strDrink} />
              <h4 className="itit">{item.strDrink}</h4>
              <p className="price1">100.00$</p>
              <button className="cart-btn">Add to cart</button>
              <button
                onClick={() => handleRemoveFromWishlist(item.idDrink)}
                className="remove-btn"
              >
                <FaRegTrashCan className="remove-icon" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
