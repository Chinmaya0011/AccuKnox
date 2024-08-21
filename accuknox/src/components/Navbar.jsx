import React from 'react';
import { FaPlus, FaSync, FaClock, FaSearch } from 'react-icons/fa'; // Import the search icon
import style from '../assets/styles/Navbar.module.css';

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.header}>
        <h1>CNPP Dashboard</h1>
      </div>
      <div className={style.search}>
        <FaSearch className={style.searchIcon} />
        <input 
          type="text" 
          placeholder="Search Anything..." 
          className={style.searchInput}
        />
      </div>
      <div className={style.actions}>
        <button className={style.addButton}>
          Add Widget <FaPlus />
        </button>
        <button className={style.refreshButton}>
          <FaSync />
        </button>
        <button className={style.timeButton}>
          <FaClock />
          <select className={style.timeSelect}>
            <option value="24h">Last 24 hours</option>
            <option value="2d">Last 2 Days</option>
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
          </select>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
