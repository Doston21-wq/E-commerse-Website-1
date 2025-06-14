import React, { useState, useEffect } from 'react';
import '../index.css';
import Footer from '../components/footer';

const CustomLoader = () => {
  return (
    <div className="loader">
      <p>loading</p>
      <span className="word">loading...</span>
    </div>
  );
};

const Categories = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <CustomLoader />;

  return (
    <div>
      <div className="categories-container">
        <h1 className="title">Categories</h1>

        <div className="card card1">
          <h1>Electronics</h1>
          <p>All electronics products</p>
          <button>View Products</button>
        </div>

        <div className="card card2">
          <h1>Jewelery</h1>
          <p>All jewelery products</p>
          <button>View Products</button>
        </div>

        <div className="card card3">
          <h1>Men's Clothing</h1>
          <p>All men's clothing products</p>
          <button>View Products</button>
        </div>

        <div className="card card4">
          <h1>Women's Clothing</h1>
          <p>All women's clothing products</p>
          <button>View Products</button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Categories;
