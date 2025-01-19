import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";
import carSvg from "../../assets/carlogin.jpg"; // Import your SVG image here

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  useTitle("Login");
  const { googleSignIn, signIn } = useContext(AuthContext);

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    setError("");
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successfully",
          showConfirmButton: false,
          timer: 2000,
        });
        console.log(loggedUser);
      })
      .catch((error) => setError(error.message));
  };

  const handleGoogleLogin = () => {
    setError("");
    googleSignIn()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Google Login Successfully",
          showConfirmButton: false,
          timer: 2000,
        });
        console.log(user);
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#ffffff]">
      {/* Left Side: Illustration */}
      <div className="hidden md:flex w-full md:w-1/2 items-center justify-center p-8">
        <img
          src={carSvg}
          alt="Car Illustration"
          className="w-full object-cover rounded-lg   transition-transform transform hover:scale-105 duration-300 ease-in-out"
        />
      </div>

      {/* Right Side: Login Form */}
      <div className="flex items-center justify-center w-full md:w-1/2 p-8">
        <div className="w-full max-w-md bg-white shadow-2xl rounded-lg p-8 transform hover:translate-y-[-5px] hover:shadow-xl transition duration-300 ease-in-out">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
            Welcome Back!
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Login to access your account and start your journey.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="w-full p-4 border border-gray-300 rounded-lg shadow-inner focus:ring-2 focus:ring-orange-400 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-2"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                className="w-full p-4 border border-gray-300 rounded-lg shadow-inner focus:ring-2 focus:ring-orange-400 focus:outline-none"
                placeholder="Enter your password"
              />
            </div>
            {error && (
              <p className="text-red-500 text-sm text-center mb-4">{error}</p>
            )}
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-orange-500 to-orange-700 text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition transform hover:scale-105"
            >
              Login
            </button>
          </form>

          <p className="text-center text-gray-600 mt-6">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-orange-500 font-semibold hover:underline"
            >
              Register Now
            </Link>
          </p>

          <div className="my-6 flex items-center justify-center">
            <div className="h-px w-1/3 bg-gray-300"></div>
            <p className="text-sm text-gray-500 px-3">OR</p>
            <div className="h-px w-1/3 bg-gray-300"></div>
          </div>

          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center w-full py-3 bg-blue-500 text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition transform hover:scale-105"
          >
            <FaGoogle className="mr-2 text-lg" /> Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
