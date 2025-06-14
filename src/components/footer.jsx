import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "../index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h4>Store</h4>
          <p>
            Your one-stop shop for all your shopping needs. Quality products,
            competitive prices, and exceptional service.
          </p>
          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaYoutube />
          </div>
        </div>

        <div className="footer-section">
          <h4>Shop</h4>
          <ul>
            <li>All Products</li>
            <li>Categories</li>
            <li>Wishlist</li>
            <li>Cart</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Account</h4>
          <ul>
            <li>Login</li>
            <li>Register</li>
            <li>My Account</li>
            <li>Order History</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li><FaMapMarkerAlt /> 123 Shopping Street, Retail City, 10001</li>
            <li><FaPhone /> (123) 456-7890</li>
            <li><FaEnvelope /> info@store.com</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2023 Store. All rights reserved.</p>
        <div className="footer-links">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Shipping Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
