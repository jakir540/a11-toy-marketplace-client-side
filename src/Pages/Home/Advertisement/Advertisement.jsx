import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Advertisement = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div>
      <div
        className="hero min-h-screen relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1610019080778-471083eb5965?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-60 absolute inset-0 z-0"></div>

        <div className="hero-content flex flex-col md:flex-row justify-between items-center relative z-10 px-6 md:px-20">
          {/* Text Content */}
          <div
            className="text-center md:text-left max-w-lg p-8 rounded-xl shadow-xl bg-gray-800 bg-opacity-20 backdrop-blur-lg transform transition-all hover:scale-105"
            data-aos="fade-up"
          >
            <h1 className="text-6xl font-extrabold mb-4 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              Coming Soon
            </h1>
            <h2 className="text-4xl text-orange-400 font-semibold mb-4">
              Car: Ferrari
            </h2>
            <h1
              className="text-5xl font-bold text-orange-500 mb-6 animate-pulse"
              data-aos="fade-right"
            >
              Discount 60%!!!
            </h1>
            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
              Unleash the power of luxury and speed. Be among the first to grab
              this exclusive offer and own the thrill of a Ferrari.
            </p>

            <div className="space-y-4">
              <div
                tabIndex={0}
                className="collapse collapse-arrow border border-orange-500 rounded-lg shadow-sm"
              >
                <div className="collapse-title text-lg font-medium">
                  <span className="text-orange-400 font-bold">Q:</span> How fast
                  does the car go?
                </div>
                <div className="collapse-content">
                  <p className="text-gray-300">
                    The car reaches speeds up to 160km/h.
                  </p>
                </div>
              </div>

              <div
                tabIndex={0}
                className="collapse collapse-arrow border border-orange-500 rounded-lg shadow-sm"
              >
                <div className="collapse-title text-lg font-medium">
                  <span className="text-orange-400 font-bold">Q:</span> What is
                  the price of this car?
                </div>
                <div className="collapse-content">
                  <p className="text-gray-300">The price is $50,000.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div
            className="hidden md:block p-10 rounded-3xl bg-gray-800 bg-opacity-80 backdrop-blur-xl shadow-2xl transition-transform transform hover:scale-105 hover:shadow-orange-500/50 hover:shadow-2xl hover:translate-y-2 duration-500"
            data-aos="fade-left"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1610019080778-471083eb5965?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Ferrari"
                className="rounded-lg shadow-lg w-96 transition-transform transform hover:scale-110"
              />
              <div className="absolute top-2 left-2 bg-orange-500 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-lg animate-pulse">
                New Arrival
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-orange-500 to-red-500 rounded-full opacity-30 blur-xl animate-bounce"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-orange-500 to-red-500 rounded-full opacity-20 blur-2xl animate-pulse"></div>
      </div>
    </div>
  );
};

export default Advertisement;
