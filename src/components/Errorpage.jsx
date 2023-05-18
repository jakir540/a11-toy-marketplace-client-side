import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Errorpage = () => {
  const { status, error } = useRouteError();
  return (
    <section>
      <div className="flex items-center h-screen p-16 bg-gray-300 text-gray-900">
        <div className="flex flex-col items-center justify-center px-5  mx-auto my-16">
          <div>
            <img
              src="https://www.computerhope.com/jargon/e/error.png"
              alt="ErrorImage"
            />
          </div>

          <div className="mx-w-md text-center">
            <h2 className="mb-8 text-extrabold text-9xl text-gray-700">
              {status || "404"}
            </h2>

            <p className="text-2xl font-semibold md:text-3xl mb-7">
              {error.message}
            </p>

            <Link
              to={"/"}
              className="px-8 py-3 font-semibold rounded bg-blue-500 text-gray-900"
            >
              Back to HomePage
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Errorpage;
