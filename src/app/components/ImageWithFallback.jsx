// src/app/components/ImageWithFallback.jsx
"use client";

import React from 'react';

const ImageWithFallback = ({ 
  src, 
  alt, 
  className = "", 
  fallbackSrc = "https://placehold.co/600x400?text=MH+Wiki",
  fill,
  ...props 
}) => {
  const handleError = (e) => {
    e.target.onerror = null;
    e.target.src = fallbackSrc;
  };

  return fill ? (
    <div className={`relative ${className}`} style={{...props.style, position: 'relative', width: '100%', height: '100%'}}>
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
        onError={handleError}
        {...props}
        style={undefined}
      />
    </div>
  ) : (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={handleError}
      {...props}
    />
  );
};

export default ImageWithFallback;