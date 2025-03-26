import React from 'react';
import "../styles/HomeTwo.css";
import { productList } from "../components/Data.js";
const copyData = productList.filter((item) => item.type === "Mobile");

const HomeTwo = () => {
  return (
    <div className='main-container'>
      {/* Best Seller Header */}
      <h1 className='bestseller-header'>Best Seller</h1>
      <p className='bestseller-description'>
        Discover our top-selling mobile devices, loved by customers for their performance, design, and value. Upgrade your tech game today!
      </p>

      {/* Product List */}
      <div className="product-list">
        {copyData.map((item, index) => {
          return (
            <div className="container" key={item.id || index}>
              <img src={item.img} alt={item.model} />
              <p className='name'>{item.model}</p>
              <p className='price'>{"₹"}{item.price}</p>
              <button type='submit'>Add to cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeTwo;
