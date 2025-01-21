import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import "./Brand.css";

const Brand = () => {
  return (
    <div className="h-auto my-16 py-8 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200">
      {/* Section Title */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-orange-500 tracking-wide">
          Our Brands
        </h2>
        <h3 className="text-lg md:text-xl font-medium text-gray-600">
          More Than Your Average Toy Store
        </h3>
      </div>

      {/* Swiper Container */}
      <div className="px-4 md:px-12 lg:px-24 mt-12">
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {/* Swiper Slides */}
          {[
            {
              img: "https://i.ibb.co/MC0NVN4/1-3a.webp",
              label: "Baby Cloth",
            },
            {
              img: "https://i.ibb.co/bXLdQgk/3-2a.webp",
              label: "Hid",
            },
            {
              img: "https://i.ibb.co/VjLymZR/4-3.webp",
              label: "Princes",
            },
            {
              img: "https://i.ibb.co/VjLymZR/4-3.webp",
              label: "Princes",
            },
            {
              img: "https://i.ibb.co/0tMX4wH/5-1a.webp",
              label: "Baby Stor",
            },
            {
              img: "https://i.ibb.co/LzZf4Hw/2-3.webp",
              label: "Children",
            },
          ].map((brand, index) => (
            <SwiperSlide key={index}>
              <div className="brand-slide bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <img
                  src={brand.img}
                  alt={brand.label}
                  className="h-28 mx-auto mb-4 object-cover"
                />
                <p className="text-center text-xl font-semibold text-gray-800">
                  {brand.label}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Brand;
