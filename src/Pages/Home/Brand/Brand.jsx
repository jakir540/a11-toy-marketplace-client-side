import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import "./Brand.css";

const Brand = () => {
  return (
    <div className="h-auto my-16 py-8 bg-gradient-to-b from-white to-gray-100">
      <h2 className="text-center text-4xl font-extrabold text-orange-500 my-5 tracking-wider">
        Our Brands
      </h2>
      <h3 className="text-center text-xl font-medium text-gray-600 mb-10">
        More Than Your Average Toy Store
      </h3>

      <div className="px-6 md:px-16 lg:px-32">
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          autoplay={{
            delay: 3000,
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
          <SwiperSlide>
            <div className="brand-slide bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <img
                src="https://i.ibb.co/MC0NVN4/1-3a.webp"
                alt="Brand 1"
                className="h-24 mx-auto mb-4"
              />
              <p className="text-center text-lg font-semibold text-gray-700">
                Baby Cloth
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="brand-slide bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <img
                src="https://i.ibb.co/bXLdQgk/3-2a.webp"
                alt="Brand 2"
                className="h-24 mx-auto mb-4"
              />
              <p className="text-center text-lg font-semibold text-gray-700">
                Hid
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="brand-slide bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <img
                src="https://i.ibb.co/VjLymZR/4-3.webp"
                alt="Brand 3"
                className="h-24 mx-auto mb-4"
              />
              <p className="text-center text-lg font-semibold text-gray-700">
                Princes
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="brand-slide bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <img
                src="https://i.ibb.co/VjLymZR/4-3.webp"
                alt="Brand 4"
                className="h-24 mx-auto mb-4"
              />
              <p className="text-center text-lg font-semibold text-gray-700">
                Princes
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="brand-slide bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <img
                src="https://i.ibb.co/0tMX4wH/5-1a.webp"
                alt="Brand 5"
                className="h-24 mx-auto mb-4"
              />
              <p className="text-center text-lg font-semibold text-gray-700">
                Baby Stor
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="brand-slide bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <img
                src="https://i.ibb.co/LzZf4Hw/2-3.webp"
                alt="Brand 6"
                className="h-24 mx-auto mb-4"
              />
              <p className="text-center text-lg font-semibold text-gray-700">
                Children
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Brand;
