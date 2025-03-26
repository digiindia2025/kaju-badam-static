import React from 'react';
import "../styles/ShopOne.css";
import { productList } from "../components/Data.js";
const copyData = productList.filter((item) => item.type === "Mobile");
const HomeTwo = () => {
  return (
    <div className="page-container">
      <div className="sidebar">
        <h2>Products</h2>
        <ul>
          <li>Mobile Phones</li>
          <li>Laptops</li>
          <li>Tablets</li>
          <li>Accessories</li>
        </ul>

        <h2>Categories</h2>
        <ul>
          <li>New Arrivals</li>
          <li>Best Sellers</li>
          <li>Discounted Items</li>
          <li>Premium Range</li>
        </ul>
      </div>

      <div className="main-content">
        <h1 className="bestseller-header">Best Seller</h1>
        <p className="bestseller-description">
          Discover our top-selling mobile devices, loved by customers for their performance, design, and value. Upgrade your tech game today!
        </p>
        <div className="product-list">
          {copyData.map((item, index) => {
            return (
              <div className="container" key={item.id || index}>
                <img src={item.img} alt={item.model} />
                <p className="name">{item.model}</p>
                <p className="price">{"₹"}{item.price}</p>
                <button type="submit">Add to cart</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeTwo;
