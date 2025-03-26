"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import "../styles/HomeOne.css";

const Homeone = () => {
  const images = [
    '/images/1.jpg',
    '/images/2.jpg',
    '/images/3.jpg',
    '/images/4.jpg',
    '/images/5.jpg',
    '/images/6.jpg',
    '/images/7.jpg',
    '/images/8.jpg',
    '/images/9.jpg',
    '/images/10.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const nextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    timeoutRef.current = setTimeout(nextImage, 3000); 

    return () => clearTimeout(timeoutRef.current); 
  }, [currentImageIndex]);

  return (
    <div className="slider-container">
      <Image
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        layout="fill"
        className="slider-image"
      />
    </div>
  );
};

export default Homeone;
