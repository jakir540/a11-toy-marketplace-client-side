import React from "react";
import Gallery from "../Gallery/Gallery";
import Toys from "../AllToys/AllToys";
import AllToys from "../AllToys/AllToys";
import Advertisement from "../Advertisement/Advertisement";
import CustomerReview from "../CustomerReview/CustomerReview";

const Home = () => {
  return (
    <main>
      <div className=" w-full mb-16">
        <div className="relative w-full">
          <img
            src="https://images.unsplash.com/photo-1613517254043-901337adc0c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80"
            className="w-full h-[600px] object-contain"
          />
        </div>
        <div>
          <div className="w-80  border-gray-600 border-8  h-60 bg-transparent shadow-2xl  absolute top-[165px] right-64  "></div>
          <div className="w-80  bg-gray-800 px-10  font-semibold  text-white h-60  absolute top-[200px] right-72 text-center  ">
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
          <div className="w-80  border-gray-600 border-8  h-60 bg-transparent shadow-2xl  absolute top-[500px] right-20  "></div>
          <div className="w-80  bg-gray-800 px-10  font-semibold  text-white h-60  absolute top-[550px] right-10 text-center  ">
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
        <AllToys></AllToys>
        <CustomerReview></CustomerReview>
        <Advertisement></Advertisement>
      </section>
    </main>
  );
};

export default Home;
