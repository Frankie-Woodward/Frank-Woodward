import './style.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';


export default function ProjectsPage() {
  

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
       
      </>
    )
  }