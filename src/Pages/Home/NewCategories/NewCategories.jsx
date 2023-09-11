import "./NewCategories.css";

import React, { useRef, useState } from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const NewCategories = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="my-10 px-10">
      <div className="text-center text-2xl capitalize font-semibold">
        <h1>Upcoming New Categories</h1>
      </div>

      <div className="lg:flex justify-between items-center">
        <div className="animate-bounce-slow ms-5">
          {" "}
          {/* Apply the animation class here */}
          <img
            src="https://cdn.pixabay.com/photo/2014/12/21/23/41/baby-mobile-575826_1280.png"
            alt=""
          />
        </div>

        <div className="lg:w-1/3 p-6 ">
          <h2 className="text-2xl capitalize font-semibold">Fish Toys</h2>
          <div className="my-10">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="card w-96 bg-base-100 shadow-2xl">
                  <figure className="px-10 pt-10">
                    <img
                      src="https://cdn.pixabay.com/photo/2013/07/18/14/59/doll-164215_1280.jpg"
                      alt="ToysFish"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="">Doll Hina</h2>
                    <p className="text-yellow-400 flex gap-1">
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                    </p>
                    <p className="font-semibold">
                      {" "}
                      <span>32</span> $
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card w-96 bg-base-100 shadow-2xl">
                  <figure className="px-10 pt-10">
                    <img
                      src="https://cdn.pixabay.com/photo/2016/10/10/16/17/puzzle-ball-1728990_1280.jpg"
                      alt="ToysFish"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="capitalize">Puzzle ball</h2>
                    <p className="text-yellow-400 flex gap-1">
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                    </p>
                    <p className="font-semibold">
                      {" "}
                      <span>100</span> $
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card w-96 bg-base-100 shadow-2xl">
                  <figure className="px-10 pt-10">
                    <img
                      src="https://cdn.pixabay.com/photo/2013/07/18/14/59/doll-164215_1280.jpg"
                      alt="ToysFish"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="">Doll Hina</h2>
                    <p className="text-yellow-400 flex gap-1">
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                    </p>
                    <p className="font-semibold">
                      {" "}
                      <span>32</span> $
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card w-96 bg-base-100 shadow-2xl">
                  <figure className="px-10 pt-10">
                    <img
                      src="https://cdn.pixabay.com/photo/2013/07/12/18/19/fish-153279_1280.png"
                      alt="BlueFish"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="">BlueFish</h2>
                    <p className="text-yellow-400 flex gap-1">
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                    </p>
                    <p className="font-semibold">
                      {" "}
                      <span>32</span> $
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card w-96 bg-base-100 shadow-2xl">
                  <figure className="px-10 pt-10">
                    <img
                      src="https://cdn.pixabay.com/photo/2019/07/29/19/51/summer-4371392_1280.jpg"
                      alt="ToysFish"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="">sand toys</h2>
                    <p className="text-yellow-400 flex gap-1">
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                    </p>
                    <p className="font-semibold">
                      {" "}
                      <span>52</span> $
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card w-96 bg-base-100 shadow-2xl">
                  <figure className="px-10 pt-10">
                    <img
                      src="https://cdn.pixabay.com/photo/2016/12/31/21/22/discus-fish-1943755_1280.jpg"
                      alt="ToysFish"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="">Aquarium image</h2>
                    <p className="text-yellow-400 flex gap-1">
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                    </p>
                    <p className="font-semibold">
                      {" "}
                      <span>32</span> $
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card w-96 bg-base-100 shadow-2xl">
                  <figure className="px-10 pt-10">
                    <img
                      src="https://cdn.pixabay.com/photo/2013/07/18/14/59/doll-164215_1280.jpg"
                      alt="ToysFish"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="">Doll Hina</h2>
                    <p className="text-yellow-400 flex gap-1">
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                    </p>
                    <p className="font-semibold">
                      {" "}
                      <span>32</span> $
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className=" lg:w-1/3  p-5 ">
          <h2 className="text-center font-semibold text-2xl mt-10">Dragon Toys</h2>

          <div className="my-10">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              onAutoplayTimeLeft={onAutoplayTimeLeft}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="card w-96 bg-base-100 shadow-2xl">
                  <figure className="px-10 pt-10">
                    <img
                      src="https://cdn.pixabay.com/photo/2019/12/08/10/40/toy-4680829_1280.jpg"
                      alt="Dragon"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="capitalize">Dragon</h2>
                    <p className="text-yellow-400 flex gap-1">
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                    </p>
                    <p className="font-semibold">
                      {" "}
                      <span>150</span> $
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card w-96 bg-base-100 shadow-2xl">
                  <figure className="px-10 pt-10">
                    <img
                      src="https://cdn.pixabay.com/photo/2020/01/19/14/22/children-toys-4777979_1280.jpg"
                      alt="Dragon"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="capitalize">Dragon</h2>
                    <p className="text-yellow-400 flex gap-1">
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                    </p>
                    <p className="font-semibold">
                      {" "}
                      <span>159</span> $
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card w-96 bg-base-100 shadow-2xl">
                  <figure className="px-10 pt-10">
                    <img
                      src="https://cdn.pixabay.com/photo/2019/12/08/10/40/toy-4680829_1280.jpg"
                      alt="Dragon"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="capitalize">Dragon</h2>
                    <p className="text-yellow-400 flex gap-1">
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                    </p>
                    <p className="font-semibold">
                      {" "}
                      <span>150</span> $
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card w-96 bg-base-100 shadow-2xl">
                  <figure className="px-10 pt-10">
                    <img
                      src="https://cdn.pixabay.com/photo/2019/12/08/10/39/toy-4680825_1280.jpg"
                      alt="Dragon"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="capitalize">Dragon</h2>
                    <p className="text-yellow-400 flex gap-1">
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                    </p>
                    <p className="font-semibold">
                      {" "}
                      <span>85</span> $
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card w-96 bg-base-100 shadow-2xl">
                  <figure className="px-10 pt-10">
                    <img
                      src="https://cdn.pixabay.com/photo/2019/12/08/10/38/animal-4680818_1280.jpg"
                      alt="Dragon"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="capitalize"> Two Dragon</h2>
                    <p className="text-yellow-400 flex gap-1">
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                    </p>
                    <p className="font-semibold">
                      {" "}
                      <span>355</span> $
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card w-96 bg-base-100 shadow-2xl">
                  <figure className="px-10 pt-10">
                    <img
                      src="https://cdn.pixabay.com/photo/2019/12/08/10/38/animal-4680821_1280.jpg"
                      alt="Dragon"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="capitalize">Dragon</h2>
                    <p className="text-yellow-400 flex gap-1">
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                    </p>
                    <p className="font-semibold">
                      {" "}
                      <span>125</span> $
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card w-96 bg-base-100 shadow-2xl">
                  <figure className="px-10 pt-10">
                    <img
                      src="https://cdn.pixabay.com/photo/2019/12/08/10/40/toy-4680828_1280.jpg"
                      alt="Dragon"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="capitalize">Dragon</h2>
                    <p className="text-yellow-400 flex gap-1">
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                    </p>
                    <p className="font-semibold">
                      {" "}
                      <span>155</span> $
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card w-96 bg-base-100 shadow-2xl">
                  <figure className="px-10 pt-10">
                    <img
                      src="https://cdn.pixabay.com/photo/2019/12/08/10/39/toy-4680823_1280.jpg"
                      alt="Dragon"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="capitalize">animal Dragon</h2>
                    <p className="text-yellow-400 flex gap-1">
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                    </p>
                    <p className="font-semibold">
                      {" "}
                      <span>150</span> $
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card w-96 bg-base-100 shadow-2xl">
                  <figure className="px-10 pt-10">
                    <img
                      src="https://cdn.pixabay.com/photo/2015/02/25/12/16/dino-648711_1280.jpg"
                      alt="Dragon"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="capitalize">Dinosaur</h2>
                    <p className="text-yellow-400 flex gap-1">
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                    </p>
                    <p className="font-semibold">
                      {" "}
                      <span>150</span> $
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card w-96 bg-base-100 shadow-2xl">
                  <figure className="px-10 pt-10">
                    <img
                      src="https://cdn.pixabay.com/photo/2019/12/08/10/40/toy-4680829_1280.jpg"
                      alt="Dragon"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="capitalize">Dragon</h2>
                    <p className="text-yellow-400 flex gap-1">
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                      <AiTwotoneStar></AiTwotoneStar>
                    </p>
                    <p className="font-semibold">
                      {" "}
                      <span>150</span> $
                    </p>
                  </div>
                </div>
              </SwiperSlide>


            
              <div
                className="autoplay-progress mt-[-130px]"
                slot="container-end"
              >
                <svg ref={progressCircle}></svg>
                <span ref={progressContent}></span>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCategories;
