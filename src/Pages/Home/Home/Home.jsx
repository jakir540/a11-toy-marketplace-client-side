import React from "react";
import Gallery from "../Gallery/Gallery";
import Toys from "../Category/Category";
import Category from "../Category/Category";
import Advertisement from "../Advertisement/Advertisement";
import CustomerReview from "../CustomerReview/CustomerReview";
import useTitle from "../../../hooks/useTitle";

const Home = () => {
  useTitle('home')
  return (
    <main>
      <div className=" w-full lg:mb-16 mb-[500px]">
        <div className="relative w-full">
          <img
            src="https://images.unsplash.com/photo-1613517254043-901337adc0c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80"
            className="w-full h-[600px] object-contain"
          />
        </div>
        <div>
          <div className="w-80  border-gray-600 border-8  h-60 bg-transparent shadow-2xl  absolute lg:top-[95px] top-[650px] right-0 lg:right-64  "></div>
          <div className="w-80  bg-gray-800 px-10  font-semibold  text-white h-60  absolute lg:top-[130px] lg:right-72 right-10 text-center  ">
            <h2 className="font-serif mt-5 text-5xl">
            <span className="text-orange-500">REMOTE</span> <br /> CAR
            </h2>
            <p></p>
            <button className="btn my-2 border-none bg-orange-800">
              visite more
            </button>
          </div>
        </div>
        <div>
          <div className="w-80  border-gray-600 border-8  h-60 bg-transparent shadow-2xl  absolute lg:top-[390px] top-[950px] lg:right-20 right-0  "></div>
          <div className="w-80  bg-gray-800 px-10  font-semibold  text-white h-60  absolute lg:top-[430px] top-[930px] right-10 lg:right-10 text-center  ">
            <h2 className="font-serif mt-5 text-5xl">
              <span className="text-orange-500">RACING</span> <br /> CAR
            </h2>
            <p></p>
            <button className="btn my-2 border-none bg-orange-800">
              visite more
            </button>
          </div>
        </div>
      </div>
      {/* gallery seciton */}
      <section>
        <div>
          <h2 className="text-center text-5xl text-orange-500 font-semibold">
            Photo Gallery
          </h2>
        </div>
        <Gallery></Gallery>
        <Category></Category>
        <CustomerReview></CustomerReview>
        <Advertisement></Advertisement>
      </section>
    </main>
  );
};

export default Home;
