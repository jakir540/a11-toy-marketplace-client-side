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
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  useTitle("home");
  return (
    <main>
      <div className=" subHeader w-full lg:mb-16 mb-[500px]">
        <div className="relative">
          <div className="relative top-0 " data-aos="fade-up">
            {" "}
            <img
              src="https://www.piletasyjuguetes.com/wp-content/uploads/2019/08/jugetes.png"
              alt=""
            />
          </div>
        </div>

        <div>
          <div
            className="w-80  border-gray-600 border-8  h-60 bg-transparent shadow-2xl  absolute lg:top-[95px] top-[650px] right-0 lg:right-56  "
            data-aos="fade-right"
          ></div>
          <div
            className="w-80  bg-gray-800 px-10  font-semibold  text-white h-60  absolute lg:top-[130px] lg:right-48 right-10 text-center  "
            data-aos="fade-left"
          >
            <h2 className="font-serif mt-5 text-xl">
              <TypeAnimation
                sequence={[
                  "Remote",
                  2000,
                  "Vehicles",
                  2000,
                  "AutoCar",
                  1000,
                  "Trucks",
                  1000,
                  "Buses",
                  1000,
                  "ATVs",
                  1000,
                ]}
                wrapper="span"
                speed={5}
                style={{ fontSize: "2em", display: "inline-block" }}
                repeat={Infinity}
              />
            </h2>
            <p></p>
            <button className="btn mt-16 border-none bg-orange-800 capitalize">
              visit more
            </button>
          </div>
        </div>

        <div>
          <div
            className="w-80  border-gray-600 border-8  h-60 bg-transparent shadow-2xl  absolute lg:top-[390px] top-[950px] lg:right-20 right-0  "
            data-aos="fade-left"
          ></div>
          <div
            className="w-80  bg-gray-800 px-10  font-semibold  text-white h-60  absolute lg:top-[430px] top-[930px] right-10 lg:right-10 text-center  "
            data-aos="fade-right"
          >
            <h2 className="font-serif mt-5 text-xl">
              {/* <span className="text-orange-500">RACING</span> <br /> CAR */}

              <TypeAnimation
                sequence={[
                  "Racing",
                  2000,
                  "Mazda MX-5",
                  2000,
                  "Alpine ",
                  1000,
                  "BMW M3",
                  1000,
                  "McLaren",
                  1000,
                  "Toyota",
                  1000,
                ]}
                wrapper="span"
                speed={5}
                style={{ fontSize: "2em", display: "inline-block" }}
                repeat={Infinity}
              />




            </h2>
            <p></p>
            <button className="btn mt-16 border-none bg-orange-800 capitalize">
              Visit More
            </button>
          </div>
        </div>
      </div>
      {/* gallery seciton */}
      <section>
        <div>
          <h2 className="text-center mt-24  text-5xl text-orange-500 font-semibold">
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
