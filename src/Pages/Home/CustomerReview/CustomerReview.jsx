import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules"; // Import Autoplay

const CustomerReview = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-6">
      <h2 className="text-center text-orange-600 font-bold text-5xl mb-10">
        Customer Reviews
      </h2>

      <Swiper
        navigation={true}
        autoplay={{
          delay: 5000, // 5 seconds autoplay delay
          disableOnInteraction: false, // Keeps autoplay after user interaction
        }}
        modules={[Navigation, Autoplay]} // Add Autoplay module
        loop={true} // Infinite loop for carousel
        className="mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="hero bg-base-200 shadow-xl rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <div className="hero-content text-center">
              <div className="max-w-sm mx-auto">
                <div className="avatar mb-4">
                  <div className="w-24 rounded-full">
                    <img
                      src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                      alt="Reviewer 1"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <Rating
                    placeholderRating={5}
                    readonly
                    emptySymbol={<FaRegStar />}
                    placeholderSymbol={<FaStar className="text-yellow-500" />}
                    fullSymbol={<FaStar className="text-yellow-500" />}
                  />
                </div>
                <h3 className="text-3xl font-semibold text-gray-800">
                  James Charlie
                </h3>
                <p className="text-gray-600 mt-3">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="hero bg-base-200 shadow-xl rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <div className="hero-content text-center">
              <div className="max-w-sm mx-auto">
                <div className="avatar mb-4">
                  <div className="w-24 rounded-full">
                    <img
                      src="https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                      alt="Reviewer 2"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <Rating
                    placeholderRating={5}
                    readonly
                    emptySymbol={<FaRegStar />}
                    placeholderSymbol={<FaStar className="text-yellow-500" />}
                    fullSymbol={<FaStar className="text-yellow-500" />}
                  />
                </div>
                <h3 className="text-3xl font-semibold text-gray-800">
                  Oliver Jpoh
                </h3>
                <p className="text-gray-600 mt-3">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="hero bg-base-200 shadow-xl rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <div className="hero-content text-center">
              <div className="max-w-sm mx-auto">
                <div className="avatar mb-4">
                  <div className="w-24 rounded-full">
                    <img
                      src="https://images.unsplash.com/photo-1513152697235-fe74c283646a?ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1248&q=80"
                      alt="Reviewer 3"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <Rating
                    placeholderRating={5}
                    readonly
                    emptySymbol={<FaRegStar />}
                    placeholderSymbol={<FaStar className="text-yellow-500" />}
                    fullSymbol={<FaStar className="text-yellow-500" />}
                  />
                </div>
                <h3 className="text-3xl font-semibold text-gray-800">
                  William Daniel
                </h3>
                <p className="text-gray-600 mt-3">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="hero bg-base-200 shadow-xl rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <div className="hero-content text-center">
              <div className="max-w-sm mx-auto">
                <div className="avatar mb-4">
                  <div className="w-24 rounded-full">
                    <img
                      src="https://images.unsplash.com/photo-1602471615287-d733c59b79c4?ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                      alt="Reviewer 4"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <Rating
                    placeholderRating={5}
                    readonly
                    emptySymbol={<FaRegStar />}
                    placeholderSymbol={<FaStar className="text-yellow-500" />}
                    fullSymbol={<FaStar className="text-yellow-500" />}
                  />
                </div>
                <h3 className="text-3xl font-semibold text-gray-800">
                  Oliver Joshua
                </h3>
                <p className="text-gray-600 mt-3">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CustomerReview;
