import React from 'react'
import './MainCard.css'

function MainCard({ featuredNft }) {
  if (!featuredNft) {
    return null;
  }

  // Calculate discount (25% off)
  const discountPercentage = 25;
  const originalPrice = featuredNft.price;
  const discountedPrice = (originalPrice * (1 - discountPercentage / 100)).toFixed(2);

  return (
    <div className="main-card-container">
      <div className="featured-badge">Featured Offer</div>
      <div className="discount-badge">{discountPercentage}% OFF</div>
      <div className="main-card-content">
        <div className="main-card-image-wrapper">
          <img 
            src={featuredNft.image} 
            alt={featuredNft.name} 
            className="main-card-image" 
          />
        </div>
        <div className="main-card-info">
          <div className="main-card-category">{featuredNft.category}</div>
          <h2 className="main-card-name">{featuredNft.name}</h2>
          <p className="main-card-description">{featuredNft.discription}</p>
          <div className="main-card-artist">
            <span className="artist-label">Created by</span>
            <span className="artist-name">{featuredNft.artist}</span>
          </div>
          <div className="main-card-footer">
            <div className="main-card-price-section">
              <span className="price-label">Special Price</span>
              <div className="price-container">
                <span className="original-price">{originalPrice} $</span>
                <span className="discounted-price">{discountedPrice} $</span>
              </div>
            </div>
            <button className="main-card-button">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainCard