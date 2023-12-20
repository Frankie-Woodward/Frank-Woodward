import './style.css'
import React from 'react';
import arrowImage from '../../assets/arrow.jpg';

export default function Homepage() {

const ArrowAnimation = () => {
    return (
        <div className="arrow-container">
            <img src={arrowImage} alt="Right Arrow" className="arrow right-arrow" />
        </div>
    );
    }

    return (
      <>
        <div className="homepage-container">
            <h1>Welcome to Frankie's Portfolio!</h1>
            <br></br>
            <h3></h3>
            
            <br></br>
            <ArrowAnimation />
        </div>
      </>
    )
  }