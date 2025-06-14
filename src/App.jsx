import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Products from './pages/products';
import Categories from './pages/categories';
import WishlistPage from './pages/wishlist';
import WishlistPage2 from './pages/wishlistpage'; 
import CardPage from './pages/cartpage'; 
import Product1 from './pages/product1';
import Login from './pages/login'; 
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
         <Route path="/wishlist" element={<WishlistPage />} />
         <Route path="/wishlistpage" element={<WishlistPage2 />} />
         <Route path='/cartpage' element={<CardPage />} />
         <Route path='/product1/:id' element={<Product1 />} />
         <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
