import React, { useState } from 'react';
import './style.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../HomePage';
import ProjectsPage from '../ProjectsPage';
import FrankiePage from '../FrankiePage';
import ContactPage from '../ContactPage';
import { Swiper, SwiperSlide } from 'swiper/react';
import Navbar from '../NavBar';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  let swiperInstance = null;

  const updateActiveIndex = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  const navigateToSlide = (index) => {
    setActiveIndex(index);
    swiperInstance.slideTo(index);
  };

  return (
    <div>
      <Navbar activeIndex={activeIndex} navigateToSlide={navigateToSlide} />
      <Swiper
        className="mySwiper swiper-h"
        spaceBetween={50}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        onSwiper={(swiper) => (swiperInstance = swiper)}
        onSlideChange={updateActiveIndex}
      >
        {/* Link tags removed as they should not wrap SwiperSlide */}
        <SwiperSlide key="home-slide" style={{ width: '100vw', height: '100vh' }}>
          <Homepage />
        </SwiperSlide>

        <SwiperSlide key="projects-slide" style={{ width: '100vw', height: '100vh' }}>
          <ProjectsPage />
        </SwiperSlide>

        <SwiperSlide key="frankie-slide" style={{ width: '100vw', height: '100vh' }}>
          <FrankiePage />
        </SwiperSlide>

        <SwiperSlide key="contact-slide" style={{ width: '100vw', height: '100vh' }}>
          <ContactPage />
        </SwiperSlide>
      </Swiper>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/frankie" element={<FrankiePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}
