import { useState, useEffect } from 'react'
import './style.css'
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Homepage from '../HomePage';
import ProjectsPage from '../ProjectsPage';
import FrankiePage from '../FrankiePage';
import ContactPage from '../ContactPage';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

export default function App() {
  

  return (
    <>
      <Swiper
        className="mySwiper swiper-h"
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide><Homepage /></SwiperSlide>
        <SwiperSlide style={{ width: '100vw', height: '100vh' }}>
      
          <ProjectsPage />
       
          </SwiperSlide>
        <SwiperSlide style={{ width: '100vw', height: '100vh' }}><FrankiePage /></SwiperSlide>
        <SwiperSlide><ContactPage /></SwiperSlide>
      </Swiper>
    </>
  )
}

