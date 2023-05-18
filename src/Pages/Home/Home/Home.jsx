import React from "react";
import Gallery from "../Gallery/Gallery";
import Toys from "../AllToys/AllToys";

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
        <div className="w-48 bg-gray-300  text-white h-48  absolute top-[250px] right-32  "></div>
        <div className="w-60  bg-gray-800 p-2 font-semibold  text-white h-48  absolute top-[300px] right-40 text-center  ">
          <h2 className="font-serif text-5xl">
            REMOTE <br /> CAR
          </h2>
          <p></p>
          <button>visite more</button>
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
      
      </section>
      
    </main>
  );
};

export default Home;
