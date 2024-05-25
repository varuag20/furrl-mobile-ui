// src/App.js
import React from 'react';
import NavBar from './components/Navbar.js';
import ProductList from './components/ProductList';
import './App.css'; // Create corresponding CSS for styling

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ProductList />
    </div>
  );
};

export default App;
