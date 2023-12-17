import { useState, useEffect } from 'react'
import './style.css'
import { Routes, Route, Link } from "react-router-dom";
import Homepage from '../HomePage';
import ProjectsPage from '../ProjectsPage';
import FrankiePage from '../FrankiePage';
import ContactPage from '../ContactPage';

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
        <SwiperSlide><ProjectsPage /></SwiperSlide>
        <SwiperSlide><FrankiePage /></SwiperSlide>
        <SwiperSlide><ContactPage /></SwiperSlide>
      </Swiper>
    </>
  )
}

