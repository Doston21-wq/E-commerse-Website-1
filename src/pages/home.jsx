import React from 'react'
import { CiFilter } from "react-icons/ci";
import '../index.css'; 
import Sidebar from '../components/sidebar';
import { useState } from 'react';
import ProductCard from '../components/card';
import Footer from '../components/footer';
const Home = () => {
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  return (
    <div>
      <h1 className='home-h1'>Online Drink Store</h1>
      <form >
        <input className='input' type="search" placeholder='Search products...' />
      </form>
     <button  className='filter-button ' onClick={toggleSidebar}>
        <CiFilter className='filter-icon' />
        <span>Show Filters</span>
      </button>
      
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
     
   <ProductCard />
   <Footer />
    </div>
  )
}

export default Home