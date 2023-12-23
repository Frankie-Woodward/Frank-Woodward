import './style.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';

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
                        <p></p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='c-forge'>
                    <h1>Character Forge</h1>
                        <p></p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='catchem-all'>
                    <h1>Catchem All</h1>
                        <p></p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='identify'>
                    <h1>Retro Funko</h1>
                        <p></p>
                </div>
            </SwiperSlide>
        
        </Swiper>
       
        
       <div>
       <DownArrowAnimation />
       </div>
      </>
      
    )
  }