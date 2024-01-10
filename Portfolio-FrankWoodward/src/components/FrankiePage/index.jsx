import './style.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import arrowImage from '../../assets/arrow.jpg';

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
                            <img src='' className="figure-img img-fluid rounded" alt="..."/>
                            <figcaption className="figure-caption">some text</figcaption>
                        </figure>
                        <figure className="figure">
                            <img src='' className="figure-img img-fluid rounded" alt=""/>
                            <figcaption className="figure-caption">some text</figcaption>
                        </figure>
                        <div className='career-description'>
                            <p> 
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
                            <img src='' className="figure-img img-fluid rounded" alt="..."/>
                            <figcaption className="figure-caption">some text</figcaption>
                        </figure>
                        <figure className="figure">
                            <img src='' className="figure-img img-fluid rounded" alt=""/>
                            <figcaption className="figure-caption">some text</figcaption>
                        </figure>
                        <div className='career-description'>
                            <p> 
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
                            <img src='' className="figure-img img-fluid rounded" alt="..."/>
                            <figcaption className="figure-caption">some text</figcaption>
                        </figure>
                        <figure className="figure">
                            <img src='' className="figure-img img-fluid rounded" alt=""/>
                            <figcaption className="figure-caption">some text</figcaption>
                        </figure>
                        <div className='career-description'>
                            <p> 
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
                            <img src='' className="figure-img img-fluid rounded" alt="..."/>
                            <figcaption className="figure-caption">some text</figcaption>
                        </figure>
                        <figure className="figure">
                            <img src='' className="figure-img img-fluid rounded" alt=""/>
                            <figcaption className="figure-caption">some text</figcaption>
                        </figure>
                        <div className='career-description'>
                            <p> 
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