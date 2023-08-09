import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Brand.css';

// import required modules
import { Pagination } from 'swiper/modules';
const Brand = () => {
  return (
    <div className="h-96 my-16">
      <h2 className="text-center text-4xl font-bold text-orange-500 my-5">
        Our Brands
      </h2>

      <h3 className="text-center text-3xl font-semibold">
        More Than Your Average Toy Store
      </h3>
      <div>
      <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-5"
      >
        <div className='my-10'>
        <SwiperSlide><img src="https://junotoys-html.themerex.net/images/1-3a.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://junotoys-html.themerex.net/images/5-1a.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://junotoys-html.themerex.net/images/2-3.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://junotoys-html.themerex.net/images/4-3.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://junotoys-html.themerex.net/images/2-3.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://junotoys-html.themerex.net/images/4-3.png" alt="" /></SwiperSlide>
        <SwiperSlide ><img src="https://junotoys-html.themerex.net/images/3-2a.png" alt="" /></SwiperSlide>
        </div>
      
       
      </Swiper>
    </>
      </div>
    </div>
  );
};

export default Brand;
