import './style.css'
import React from 'react';
import arrowImage from '../../assets/arrow.jpg';


export default function ContactPage() {
  const LeftArrowAnimation = () => {
    return (
        <div className="arrow-container">
            <div className='l-arrow'>
            <img src={arrowImage} alt="Left Arrow" className="arrow left-arrow" />
            </div>
           
        </div>
    )};

  return (
      <>
    
        <div className="contact-info">
        <LeftArrowAnimation />
            <div className="socials-container">
                <h1>Contact Me</h1>
                <p>
                Github
                Linkedin
                Message board
                Email - submit a message to me
                </p>
           

     
            </div>
            {/* <div className="submit-note-container">
            <textarea className="submit-box"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Let me know you dropped by..."
            />
            <button className="submit-note" onClick={handleSubmit}>Submit</button>
            </div> */}


        </div>
      </>
    )
  }