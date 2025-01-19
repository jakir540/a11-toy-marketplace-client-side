import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import useTitle from "../../hooks/useTitle";
import carSvg from "../../assets/carlogin.jpg"; // Import your SVG image here

const Register = () => {
  const { createAuthUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useTitle("Register");

  const handleRegistration = (event) => {
    setError("");
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    form.reset();

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    createAuthUser(email, password)
      .then((result) => {
        const user = result.user;
        updateProfile(user, { displayName: name, photoURL: photo })
          .then(() => {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Registered Successfully",
              showConfirmButton: false,
              timer: 2000,
            });
            navigate("/login");
          })
          .catch((error) => setError(error.message));
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
          className="w-full object-cover rounded-lg transition-transform transform hover:scale-105 duration-300 ease-in-out"
        />
      </div>

      {/* Right Side: Registration Form */}
      <div className="flex items-center justify-center w-full md:w-1/2 p-8">
        <div className="w-full max-w-md bg-white shadow-2xl rounded-lg p-8 transform hover:translate-y-[-5px] hover:shadow-xl transition duration-300 ease-in-out">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
            Create an Account
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Register to start your journey with us.
          </p>

          <form onSubmit={handleRegistration}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                className="w-full p-4 border border-gray-300 rounded-lg shadow-inner focus:ring-2 focus:ring-orange-400 focus:outline-none"
                placeholder="Enter your full name"
                required
              />
            </div>
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
                required
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
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="photo"
                className="block text-gray-700 font-medium mb-2"
              >
                Photo URL
              </label>
              <input
                id="photo"
                type="url"
                name="photo"
                className="w-full p-4 border border-gray-300 rounded-lg shadow-inner focus:ring-2 focus:ring-orange-400 focus:outline-none"
                placeholder="Enter your photo URL"
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center mb-4">{error}</p>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-orange-500 to-orange-700 text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition transform hover:scale-105"
            >
              Register
            </button>
          </form>

          <p className="text-center text-gray-600 mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-orange-500 font-semibold hover:underline"
            >
              Login Now
            </Link>
          </p>

          <div className="my-6 flex items-center justify-center">
            <div className="h-px w-1/3 bg-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
