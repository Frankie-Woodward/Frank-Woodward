import './style.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import arrowImage from '../../assets/arrow.jpg';
import workspace from '../../assets/swe.jpeg';
import pilot from '../../assets/pilot_me.jpeg';
import chicago from '../../assets/chicago_skyline.jpg';
import apache from '../../assets/apache.jpeg'
import herme from '../../assets/Herme.jpeg'
import csprings from '../../assets/cSprings_skyline.jpg'
import snowboard from '../../assets/snowboard Large.jpeg'


import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

export default function FrankiePage() {
    const DownArrowAnimation = () => {
        return (
            <div className="arrow-container">
                <div className='d-arrow'>
                <img src={arrowImage} alt="Down Arrow" className="arrow down-arrow" />
                </div>
               
            </div>
        )};
        const UpArrowAnimation = () => {
            return (
                <div className="arrow-container">
                    <div className='up-arrow'>
                    <img src={arrowImage} alt="Up Arrow" className="arrow up-arrow" />
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
        

        <Swiper
            className="mySwiper2 swiper-v"
            direction={'vertical'}
            spaceBetween={50}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            style={{ width: '100%', height: '100%' }}
        >
          
            <SwiperSlide>
            <div className='slide-container'>
                    <div className='left-arrow'>
                <LeftArrowAnimation />
                </div>
                <div className='career'>
                    <h1>From Flight To Terminal</h1>
                    <figure className="figure">
                            <img src={pilot} className="figure-img img-fluid rounded" alt="..."/>
                            <figcaption className="figure-caption">some text</figcaption>
                        </figure>
                        <figure className="figure">
                            <img src={workspace} className="figure-img img-fluid rounded" alt=""/>
                            <figcaption className="figure-caption">some text</figcaption>
                        </figure>
                        <div className='career-description'>
                            <p> 
                            Why I wanted to get into swe - 
                            I understand the irony, but I have to say that the technical skills required for operating an 
                            AH64E helicopter provided me with the attention to detail needed to be a successful software engineer. 
                            From planning, rehearsals, and troubleshooting software issues in the helicopter, to planning, testing, 
                            and debugging software code in the terminal of my computer.
                            General Assembly
                            I attended General Assembly’s Software Engineering Immersive course and graduated in November of 2023. 
                            I had only been slowly progressing in my  HTML at that point, and the course was able to give me the 
                            tools needed to code applications with React, JS, HTML, CSS, Python, and SQL database operations. 
                            DefendUS - 65square
                            I am currently volunteering for a nonprofit ran organization as a backend Python tester for their 
                            social media application, 65square. 
                            </p>
                        </div>
                </div>
                <div className='down-arrow'>
                        <DownArrowAnimation />
                        </div>
                    <div className='right-arrow'>
                    <RightArrowAnimation />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='slide-container'>
            <div className='up-arrow'>
                        <UpArrowAnimation />
                    </div>
                    <div className='left-arrow'>
                <LeftArrowAnimation />
                </div>
                <div className='school'>
                    <h1>Life and Chicago</h1>
                    <figure className="figure">
                            <img src={chicago} className="figure-img img-fluid rounded" alt="..."/>
                            <figcaption className="figure-caption">some text</figcaption>
                        </figure>
                        <div className='career-description'>
                            <p>
                            Born and raised in Chicago, IL in the era of Michael Jordon. I attended DeVry University Advantage Academy 
                            where I graduated with my HS Diploma and Associates degree in Network Systems Administration in 2006. 
                            I attended Illinois Institute Of Technology and graduated with my Bachelor’s in Business Administration in 2010.
                            </p>
                        </div>
                </div>
                <div className='down-arrow'>
                        <DownArrowAnimation />
                        </div>
                    <div className='right-arrow'>
                    <RightArrowAnimation />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='slide-container'>
            <div className='up-arrow'>
                        <UpArrowAnimation />
                    </div>
                    <div className='left-arrow'>
                <LeftArrowAnimation />
                </div>
                <div className='army'>
                    <h1>All Aviation</h1>
                    <figure className="figure">
                            <img src={apache} className="figure-img img-fluid rounded" alt="..."/>
                            <figcaption className="figure-caption">some text</figcaption>
                        </figure>
                        <div className='career-description'>
                            <p> 
                            I joined the United States Army one year after graduation and served as an air traffic controller (air traffic control technician) 
                            for the first half of my career. I then went to flight school to become an Aviator and became trained and proficient 
                            in operating the H-64E Apache Guardian Helicopter. I served a tour in Korea for two years and deployed to Iraq in June of 2020.
                            </p>
                        </div>
                </div>
                <div className='down-arrow'>
                        <DownArrowAnimation />
                        </div>
                    <div className='right-arrow'>
                    <RightArrowAnimation />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='slide-container'>
            <div className='up-arrow'>
                        <UpArrowAnimation />
                    </div>
                    <div className='left-arrow'>
                <LeftArrowAnimation />
                </div>
                <div className='family'>
                    <h1>Colorado Springs & Herme</h1>
                    <figure className="figure">
                            <img src={csprings} className="figure-img img-fluid rounded" alt="..."/>
                            <figcaption className="figure-caption">some text</figcaption>
                        </figure>
                        <figure className="figure">
                            <img src={herme} className="figure-img img-fluid rounded" alt=""/>
                            <figcaption className="figure-caption">some text</figcaption>
                        </figure>
                        <figure className="figure">
                            <img src={snowboard} className="figure-img img-fluid rounded" alt=""/>
                            <figcaption className="figure-caption">some text</figcaption>
                        </figure>
                        <div className='career-description'>
                            <p> 
                            My Army career brought me to Fort Carson, CO after being in Korea for two years. I decided to stay in Colorado Springs, CO 
                            after leaving the army and found a place I can call home. I work at a local k-8 charter school along with volunteering with DefendUS. 
                            I met my best friend (my dog Herme) in November of 2021 and we have been close ever since. 
                            One of the best parts of living so close to the rockies, is the ability to snowboard whenever I want during the season!
                            </p>
                        </div>
                </div>
                    <div className='right-arrow'>
                    <RightArrowAnimation />
                    </div>
            </div>
            </SwiperSlide>
        </Swiper>
      </>
    );
  }