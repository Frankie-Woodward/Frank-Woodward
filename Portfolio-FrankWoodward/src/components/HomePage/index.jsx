import './style.css'
import React from 'react';
import arrowImage from '../../assets/arrow.jpg';
import bootstrap_logo from '../../assets/bootstrap-logo.svg';
import CSS3_logo from '../../assets/CSS3 - logo .png';
import express_js_logo from '../../assets/Expressjs-logo.svg';
import HTML5_logo from '../../assets/html5-logo.png';
import javaScript_logo from '../../assets/JavaScript-Logo.png';
import mongoDB_logo from '../../assets/MongoDB-Logo.jpg';
import python_logo from '../../assets/python-logo.png';
import react_logo from '../../assets/react-logo.png';
import postgresql_logo from '../../assets/postgresql-logo.png';
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
              <img src={profile_pic} className="card-img" alt="profile_pic"/>
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
          <div className='right-arrow'>
            <ArrowAnimation />
            </div>
            </div>
            <div className="languages-section">
                    <h2>Programming Languages</h2>
                    <ul className="languages-list">
                        <li className="language-item">
                            <img className="language-icon" src={javaScript_logo} alt="JavaScript" style={{ width: '50px', height: '50px' }} />
                            <span>JavaScript</span>
                        </li>
                        <li className="language-item">
                            <img className="language-icon" src={python_logo} alt="Python" />
                            <span>Python</span>
                        </li>
                        <li className="language-item">
                            <img className="language-icon" src={CSS3_logo} alt="CSS" />
                            <span>CSS</span>
                        </li>
                        <li className="language-item">
                            <img className="language-icon" src={express_js_logo} alt="express.js" />
                            <span>Express.js</span>
                        </li>
                        <li className="language-item">
                            <img className="language-icon" src={HTML5_logo} alt="HTML5" />
                            <span>HTML5</span>
                        </li>
                        <li className="language-item">
                            <img className="language-icon" src={mongoDB_logo} alt="mongodb" />
                            <span>MongoDB</span>
                        </li>
                        <li className="language-item">
                            <img className="language-icon" src={postgresql_logo} alt="postgresql" />
                            <span>Postgresql</span>
                        </li>
                        <li className="language-item">
                            <img className="language-icon" src={react_logo} alt="react" />
                            <span>React</span>
                        </li>
                        <li className="language-item">
                            <img className="language-icon" src={CSS3_logo} alt="CSS" />
                            <span>CSS</span>
                        </li>
                        {/* ... add more as needed */}
                    </ul>
                </div>
        </div>
      </>
    )
  }