import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Advertisement = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);
  return (
    <div className="">
      <div
        className="hero min-h-screen relative"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1610019080778-471083eb5965?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>

        <div className="hero-content text-center text-neutral-content absolute md:top-20 md:right-48">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold" data-aos="fade-up">
              Coming Soon
            </h1>
            <h2 className="text-orange-500 text-3xl ">Car: Ferrari</h2>
            <h1
              className="mb-5 text-4xl font-bold text-orange-500"
              data-aos="fade-right"
            >
              Discount 60% !!!!
            </h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>

            <div
              tabIndex={0}
              className="collapse collapse-arrow border border-base-300  rounded-box my-5"
            >
              <div className="collapse-title text-xl font-medium">
                <span className="text-orange-500 font-bold ">Q: </span> How car
                speed per hour?
              </div>
              <div className="collapse-content">
                <p>car speed per hour 160km/h</p>
              </div>
            </div>

            <div
              tabIndex={0}
              className="collapse collapse-arrow border border-base-300  rounded-box my-5"
            >
              <div className="collapse-title text-xl font-medium">
                <span className="text-orange-500 font-bold ">Q: </span> How much
                this car?
              </div>
              <div className="collapse-content">
                <p>this car price is $50000</p>
              </div>
            </div>

            <button className="btn bg-orange-900">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
