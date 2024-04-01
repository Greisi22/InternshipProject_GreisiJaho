import React from 'react';
import './style/BelowHeader.css';
import driverImage from '../../assets/motorist-removebg-preview.png'; // Import the image
import { StarIcon } from '@heroicons/react/24/solid'; // Import the StarIcon

const BelowHeader: React.FC = () => {
  return (
    <div className="container">
      <div className="content">
        <h1 className="main-heading">
          <span className="best-text">BEST</span> 
          <span className="food-text">Food</span> <br /> 
          <span className="delivery-text">Delivery</span>
        </h1>
        <p className="subheading">Delivering your cravings at lightning speed.</p>
        <button className="order-button">Order Now</button>
        <div className="rating">
          <p className="rating-text">
            <span className="star-icons">
              <StarIcon className="h-5 w-5 text-yellow-400" />
              <StarIcon className="h-5 w-5 text-yellow-400" />
              <StarIcon className="h-5 w-5 text-yellow-400" />
              <StarIcon className="h-5 w-5 text-yellow-400" />
              <StarIcon className="h-5 w-5 text-yellow-400" />
            </span>
            5-star rating <br />
            based on 1788 reviews
          </p>
        </div>
      </div>
      <div className="image-container">
        <img className="driver-image" src={driverImage} alt="Driver" />
      </div>
    </div>
  );
}

export default BelowHeader;
