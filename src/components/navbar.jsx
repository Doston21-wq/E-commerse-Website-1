  import React from 'react';
  import { Link } from 'react-router-dom';
  import '../index.css';
  import img from '../assets/logo4.png';
  import ThemeToggle from './ThemeToggle';
  import Wishlist from '../pages/wishlist';
  import Cart from '../pages/cart'; 
  import Login from '../pages/login'; 
  // import WishlistPage from '../pages/wishlistpage';
  const Navbar = () => {
    const form = JSON.parse(localStorage.getItem("Form")) || {};
    console.log(form);
    return (
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/"><img src={img} alt="logo alt" /></Link>
        </div>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Product</Link></li>
          <li><Link to="/categories">Categories</Link></li>
        </ul>
        <ThemeToggle />
        <Link to="/wishlistpage"> <Wishlist /></Link>
      <Link to="/cartpage"> <Cart /></Link>
      {
        form.email ? (
          <Link to="/profile">
            <button className="login-btn">{form.email.slice(0,2)}</button>
          </Link>
        ) : (
          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>
        )
      }
      </nav>
    );
  };

  export default Navbar;
    