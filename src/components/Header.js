"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../styles/Header.css';
  
const Header = ({ cartItems }) => {  // Receive cartItems as a prop
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="top-header">
        Upto 25% OFF + Extra 10% OFF on Prepaid Orders | Free Delivery above ₹999/-
      </div>
      <nav className="nav">
        <div className="nav-left">
          <Link href="/">Home</Link>
           {/* <Link href="/About-Us">About Us</Link> */}
          <div
            className="dropdown"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <span className="dropdown-toggle">Products</span>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <Link href="/products/category1">
                  <Image src="/images/Header_NavbarOne.webp" alt="Category 1" width={50} height={50} />
                  Category 1
                </Link>
                <Link href="/products/category2">
                  <Image src="/images/Header_NavbarTwo.webp" alt="Category 2" width={50} height={50} />
                  Category 2
                </Link>
                <Link href="/products/category3">
                  <Image src="/images/Header_NavbarThree.webp" alt="Category 3" width={50} height={50} />
                  Category 3
                </Link>
                <Link href="/products/category4">
                  <Image src="/images/Header_NavbarFour.webp" alt="Category 4" width={50} height={50} />
                  Category 4
                </Link>
              </div>
            )}
          </div>
          <Link href="/combo-pack">Combo Pack</Link>
        </div>

        <div className="nav-center">
          <Link href="/">
            <Image src="/images/Logo.avif" alt="Logo" width={100} height={50} className="logo" />
          </Link>
        </div>

        <div className="nav-right">
          <Link href="/shop">Shop</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/account">Account</Link>

          {/* Cart link with item count */}
          <Link href="/cart" className="cart-link position-relative">
            Cart
            {cartItems?.length > 0 && (
              <span className="cart-count-badge">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>

        <div className="hamburger-menu" onClick={toggleMenu}>
          ☰
        </div>
      </nav>

      {isMenuOpen && (
        <div className="mobile-menu">
          <Link href="/">Home</Link>
          {/* <Link href="/About-Us">About Us</Link> */}
          <Link href="/products">Products</Link>
          <Link href="/combo-pack">Combo Pack</Link>
          <Link href="/cart">Cart</Link>
          <Link href="/account">Account</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
