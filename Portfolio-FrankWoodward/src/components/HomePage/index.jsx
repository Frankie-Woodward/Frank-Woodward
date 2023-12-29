import './style.css'
import React from 'react';
import arrowImage from '../../assets/arrow.jpg';
import profile_pic from '../../assets/profile_picture.jpg';
import FrankieChatBot from '../AIFrankieBot';
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
            
            
            <div className="frankie-chat-box">
                    <FrankieChatBot />
            </div>
            <div className="profile-and-arrow">
            <div className="card" id='profile-info' style={{ width: '20rem' }}>
              <img src={profile_pic} className="card-img-top" alt="profile_pic"/>
              <div className="card-body">
                <h5 className="card-title">Frank Dale Woodward III</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">An item</li>
              </ul>
              <div className="card-body">
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
              </div>
            </div>
          
            <ArrowAnimation />
            </div>
            <div className="languages-section">
                    <h2>Programming Languages</h2>
                    <ul className="languages-list">
                        <li className="language-item">
                            <img className="language-icon" src="path_to_js_icon" alt="JavaScript" />
                            <span>JavaScript</span>
                        </li>
                        <li className="language-item">
                            <img className="language-icon" src="path_to_python_icon" alt="Python" />
                            <span>Python</span>
                        </li>
                        <li className="language-item">
                            <img className="language-icon" src="path_to_css_icon" alt="CSS" />
                            <span>CSS</span>
                        </li>
                        {/* ... add more as needed */}
                    </ul>
                </div>
        </div>
      </>
    )
  }