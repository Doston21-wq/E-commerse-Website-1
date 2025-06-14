import React, { useState } from 'react';
import '../index.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={toggleSidebar}>✖</button>
    <h1 className='sidebar-h1'>Filter Products</h1>
    <p className='sidebar-p'>Narrow down products by applying filters</p>
    <h4 className='sidebar-h4'>Category</h4>
      <div className="dropdown">
        <button onClick={toggleDropdown} className="dropdown-toggle ">
        All Categories
        </button>

        {isDropdownOpen && (
          <ul className="dropdown-menu">
            <li ><a href="">All Categories</a></li>
            <li ><a href="">Electronics</a></li>
            <li ><a href="">Jewelery</a></li>
            <li ><a href="">Men's clothing</a></li>
            <li ><a href="">Women's clothing</a></li>
                      </ul>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
