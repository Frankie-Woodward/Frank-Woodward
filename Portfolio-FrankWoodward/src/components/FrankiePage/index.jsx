import './style.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

export default function FrankiePage() {
  

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
                <div className='career'>
                    <h1>From Flight To Terminal</h1>
                        <p>Career Journey</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='school'>
                    <h1>Life and Chicago</h1>
                        <p></p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='army'>
                    <h1>All Aviation</h1>
                        <p></p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='family'>
                    <h1>Colorado Springs & Herme</h1>
                        <p></p>
                </div>
            </SwiperSlide>
        
        </Swiper>
      </>
    )
  }