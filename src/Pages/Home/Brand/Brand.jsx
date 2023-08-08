
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';

const Brand = () => {
  return (
    <div className="h-96  bg-slate-500  text-white my-10">
      <h2 className="text-center text-4xl font-bold text-orange-500">
        Our Brands
      </h2>

      <h3 className="text-center text-3xl font-semibold">
        More Than Your Average Toy Store
      </h3>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>

    </div>
  );
};

export default Brand;
