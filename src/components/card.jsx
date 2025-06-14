import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import "../index.css";
import { Link } from "react-router-dom";

const CustomLoader = () => (
  <div className="car11d">
    <div className="loader">
      <p>loading</p>
      <div className="words">
        <span className="word">buttons</span>
        <span className="word">forms</span>
        <span className="word">switches</span>
        <span className="word">cards</span>
        <span className="word">buttons</span>
      </div>
    </div>
  </div>
);

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a")
      .then((res) => setProducts(res.data.drinks || []))
      .catch((err) => console.error("Xatolik:", err))
      .finally(() => setLoading(false));
  }, []);

  const toggleLike = (drink) => {
    setWishlist((prev) => {
      const exists = prev.find((item) => item.idDrink === drink.idDrink);
      let updated;
      if (exists) {
        updated = prev.filter((item) => item.idDrink !== drink.idDrink);
      } else {
        updated = [...prev, drink];
      }
      localStorage.setItem("wishlist", JSON.stringify(updated));
      return updated;
    });
  };

  const isLiked = (id) => wishlist.some((item) => item.idDrink === id);

  if (loading) return <CustomLoader />;

  return (
    <div className="product-list">
      {products.map((product) => {
        const id = product.idDrink;
        const title = product.strDrink;
        const image = product.strDrinkThumb;

        return (
          <div className="product-card" key={id}>
            <div className="image-wrapper">
              <img src={image} alt={title} />
             <button
  className={`favorite-btn ${isLiked(id) ? "liked" : ""}`}
  onClick={() => toggleLike(product)}
>
  {isLiked(id) ? <FaHeart size={17} color="red" /> : <FaRegHeart size={17} />}
  {isLiked(id) && (
    <span className="like-count-badge">1</span>
  )}
</button>

            </div>
            <div className="card-body">
              <h4>
                <Link className="product-title" to={`/product1/${id}`}>
                  {title}
                </Link>
              </h4>
              <p className="product-description">
                {product.strInstructions?.slice(0, 100)}...
              </p>
              <p className="product-price">$0.00</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
