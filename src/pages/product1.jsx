import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../index.css';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import Footer from '../components/footer';

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [likedProducts, setLikedProducts] = useState(new Set());
  const [quantity, setQuantity] = useState(1);

  const toggleLike = (id) => {
    setLikedProducts((prev) => {
      const updated = new Set(prev);
      updated.has(id) ? updated.delete(id) : updated.add(id);
      return updated;
    });
  };

  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then(res => {
        setProduct(res.data);
      })
      .catch(err => console.error('Xatolik:', err));
  }, [id]);

  if (!product) return <p className="loading-text">Loading...</p>;

  const isLiked = likedProducts.has(product.id);

  return (
    <div className="single-product-container">
      <div className="product-image-section">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="product-info-section">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-rating">★ {product.rating?.rate || "4.5"} ({product.rating?.count || 132} reviews)</p>
        <p className="product-price">${product.price}</p>

        <div className="tab-buttons">
          <button className="active-tab">Description</button>
          <button>Details</button>
          <button>Shipping</button>
        </div>

        <p className="product-description">{product.description}</p>

        <div className="quantity-control">
          <span>Quantity</span>
          <div className="quantity-buttons">
            <button onClick={decrement}>-</button>
            <span>{quantity}</span>
            <button onClick={increment}>+</button>
          </div>
        </div>

        <div className="action-buttons">
          <button className="add-to-cart">Add to Cart</button>
          <button
            className={`favorite-btn like-btn ${isLiked ? "liked" : ""}`}
            onClick={() => toggleLike(product.id)}
          >
            {isLiked ? <FaHeart size={17} color="red" /> : <FaRegHeart size={17} />}
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SingleProduct;
