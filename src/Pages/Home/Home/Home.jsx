import React from "react";
import Gallery from "../Gallery/Gallery";
import Toys from "../Category/Category";
import Category from "../Category/Category";
import Advertisement from "../Advertisement/Advertisement";
import CustomerReview from "../CustomerReview/CustomerReview";
import useTitle from "../../../hooks/useTitle";
import Services from "../Services/Services";
import Brand from "../Brand/Brand";
import "./Home.css";
import Blog from "../Blog/Blog";

const Home = () => {
  useTitle("home");
  return (
    <main>
      <div className=" subHeader w-full lg:mb-16 mb-[500px]">
        <div className="relative">
          <div className="relative top-0">
            {" "}
            <img
              src="https://www.piletasyjuguetes.com/wp-content/uploads/2019/08/jugetes.png"
              alt=""
            />
          </div>
        </div>
        <div>
          <div className="w-80  border-gray-600 border-8  h-60 bg-transparent shadow-2xl  absolute lg:top-[95px] top-[650px] right-0 lg:right-56  "></div>
          <div className="w-80  bg-gray-800 px-10  font-semibold  text-white h-60  absolute lg:top-[130px] lg:right-48 right-10 text-center  ">
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
        <Advertisement></Advertisement>
        <Brand></Brand>
        <Services></Services>
        <Blog></Blog>
        <CustomerReview></CustomerReview>
      </section>
    </main>
  );
};

export default Home;
