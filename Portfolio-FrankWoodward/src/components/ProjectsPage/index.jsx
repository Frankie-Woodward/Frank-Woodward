import './style.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import nodejs_logo from '../../assets/nodejs_logo.png';
import CSS3_logo from '../../assets/CSS3 - logo .png';
import express_js_logo from '../../assets/Expressjs-logo.svg';
import HTML5_logo from '../../assets/html5-logo.png';
import javaScript_logo from '../../assets/JavaScript-Logo.png';
import mongoDB_logo from '../../assets/MongoDB-Logo.jpg';
import pj_logo from '../../assets/python_django.png';
import react_logo from '../../assets/react-logo.png';
import postgresql_logo from '../../assets/postgresql-logo.png';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import arrowImage from '../../assets/arrow.jpg';


export default function ProjectsPage() {
    const DownArrowAnimation = () => {
        return (
            <div className="arrow-container">
                <div className='d-arrow'>
                <img src={arrowImage} alt="Down Arrow" className="arrow down-arrow" />
                </div>
               
            </div>
        )};
    const LeftArrowAnimation = () => {
        return (
            <div className="arrow-container">
                <div className='l-arrow'>
                <img src={arrowImage} alt="Left Arrow" className="arrow left-arrow" />
                </div>
               
            </div>
        )};
    const RightArrowAnimation = () => {
        return (
            <div className="arrow-container">
                <div className='r-arrow'>
                <img src={arrowImage} alt="Right Arrow" className="arrow right-arrow" />
                </div>
               
            </div>
        )};
        

    return (
      <>
       

        <div className='projectspage-container'>
        <LeftArrowAnimation />
        <RightArrowAnimation />
        </div>
        <Swiper
            className="mySwiper2 swiper-v"
            direction={'vertical'}
            spaceBetween={50}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            style={{ width: '100%', height: '100%' }}
        >
          
            <SwiperSlide>
                <div className='identify'>
                    <h1>Identify Quest</h1>
                    <figure className="figure">
                        <img src="..." className="figure-img img-fluid rounded" alt="..."/>
                        <figcaption className="figure-caption">A caption for the above image.</figcaption>
                    </figure>
                    <figure className="figure">
                        <img src="..." className="figure-img img-fluid rounded" alt="..."/>
                        <figcaption className="figure-caption">A caption for the above image.</figcaption>
                    </figure>
                    <div className='project-description'>
                        <p>An AI Composite-Sketch application which allows users to create ai-generated 
                            composite sketches of individuals who have committed a crime and save them 
                            to submit to their local 911 emergency teams.
                        </p>
                    </div>
                    <div className='languages_used'>
                        <img src={mongoDB_logo} alt="mongodb"></img>
                        <img src={express_js_logo}></img>
                        <img src={react_logo}></img>
                       
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='c-forge'>
                    <h1>Character Forge</h1>
                    <figure className="figure">
                        <img src="..." className="figure-img img-fluid rounded" alt="..."/>
                        <figcaption className="figure-caption">A caption for the above image.</figcaption>
                    </figure>
                    <figure className="figure">
                        <img src="..." className="figure-img img-fluid rounded" alt="..."/>
                        <figcaption className="figure-caption">A caption for the above image.</figcaption>
                    </figure>
                    <div className='project-description'>
                    <p> A Dungeons and Dragons Character Creation Application that allows users to perform
                         a variety of tasks related to the Dungeons and Dragons game, such as:
                         <br></br>
                        a. Choosing from several character race and alignments 
                        <br></br>
                        b. The ability for users to roll the dice for their created character’s stats</p>
                    </div>
                    <div className='languages_used'>
                        <img src={pj_logo}></img>
                        <img src={postgresql_logo}></img>
                        
                     
                       
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='catchem-all'>
                    <h1>Catchem All</h1>
                    <div className='project-images'>
                        <figure className="figure">
                            <img src="..." className="figure-img img-fluid rounded" alt="..."/>
                            <figcaption className="figure-caption">A caption for the above image.</figcaption>
                        </figure>
                        <figure className="figure">
                            <img src="..." className="figure-img img-fluid rounded" alt="..."/>
                            <figcaption className="figure-caption">A caption for the above image.</figcaption>
                        </figure>
                    </div>
                    <div className='project-description'>
                    <p>A Pokémon TCG Card Collector that allows users to view the latest standard pokemon 
                        TCG sets/decks as well as save their own custom decks to view at their leisure</p>
                    </div>
                    <div className='languages_used'>
                        <img src={mongoDB_logo} alt="mongodb"></img>
                        <img src={express_js_logo}></img>
                     
                       
                    </div>
                        
                </div>
            </SwiperSlide>
         
        
        </Swiper>
       
        
       <div>
       <DownArrowAnimation />
       </div>
      </>
      
    )
  }