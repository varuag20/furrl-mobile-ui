// src/components/NavBar.js
import React from 'react';
import './Navbar.css'; // Create corresponding CSS for styling

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="logo">#Vibe Page</div>
      <div className="nav-icons">
        <a href="https://furrl.in/wishlist">
          <i className="fas fa-heart"></i>
        </a>
        <a href="https://furrl.in/cart">
          <i className="fas fa-shopping-cart"></i>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
