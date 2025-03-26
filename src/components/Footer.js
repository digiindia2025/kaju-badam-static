// src/components/Footer.js
'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  const [openSections, setOpenSections] = useState({
    menu: false,
    information: false,
    featured: false,
    contact: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <div className="logo">
            <Image src="/images/Logo.avif" alt="Kunuts Logo" width={150} height={50} className="logo-image" />
          </div>
          <p className="tagline">Nutrition in every bite.</p>
          <p className="para_aman">
            We are more than just a brand of dry fruits. We are a passion-driven
            enterprise committed to crafting exceptional quality products and
            making them accessible to all.
          </p>
        </div>

        <div className={`footer-section ${openSections.menu ? 'open' : ''}`}>
          <h3 onClick={() => toggleSection('menu')}>Menu</h3>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about-us">About Us</Link></li>
            <li><Link href="/collections">Collections</Link></li>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </div>

        <div className={`footer-section ${openSections.information ? 'open' : ''}`}>
          <h3 onClick={() => toggleSection('information')}>Information</h3>
          <ul>
            <li><Link href="/terms">Terms & Conditions</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/cancellation">Cancellation & Refund</Link></li>
            <li><Link href="/shipping">Shipping & Delivery</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className={`footer-section ${openSections.featured ? 'open' : ''}`}>
          <h3 onClick={() => toggleSection('featured')}>Featured Products</h3>
          <ul>
            <li><Link href="/products/almonds">Almonds</Link></li>
            <li><Link href="/products/anjeer">Anjeer</Link></li>
            <li><Link href="/products/dates">Dates</Link></li>
            <li><Link href="/products/cashew">Cashew</Link></li>
            <li><Link href="/products/walnuts">Walnuts</Link></li>
            <li><Link href="/products/pistachio">Pistachio</Link></li>
          </ul>
        </div>

        <div className={`footer-section ${openSections.contact ? 'open' : ''}`}>
          <h3 onClick={() => toggleSection('contact')}>Contact Us</h3>
          <ul>
            <li>Email: support@kunuts.com</li>
            <li>Phone: +91 9876543210</li>
            <li>Address: 123 Nut Street, Healthy City, India</li>
          </ul>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Kunuts. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
