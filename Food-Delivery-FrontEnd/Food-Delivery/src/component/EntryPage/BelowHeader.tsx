import React from 'react';
import './style/BelowHeader.css';
import driverImage from '../../assets/motorist-removebg-preview.png'; // Import the image

const BelowHeader: React.FC = () => {
  return (
    <div className="container">
      <div className="content">
        <h1 className="main-heading">
          <span className="best-text">BEST</span> 
          </h1>
        <h2 className="main-heading2">
          <span className="food-text">Food</span> <br /> 
          <span className="delivery-text">Delivery</span>
          </h2>
        <p className="subheading">Delivering your cravings at lightning speed.</p>
        <button className="order-button">Order Now</button>
      </div>
      <div className="image-container">
        <img className="driver-image" src={driverImage} alt="Driver" />
      </div>
    </div>
  );
}

export default BelowHeader;
