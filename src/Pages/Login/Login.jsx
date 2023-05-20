import React, { useContext, useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const Login = () => {
  const location =useLocation();
  console.log(location);
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [user ,setUser] = useState(null)
  useTitle("login")
  const { googleSignIn, signIn } = useContext(AuthContext);

  

  const from = location.state?.from?.pathname || "/"
  console.log(from);

  const handleSubmit = (event) => {
    setError("");
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        navigate(from,{replace:true})
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
        navigate(from,{replace:true})
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
    <div className=" w-[400px]  bg-slate-200 mx-auto h-[450px] my-32 rounded-lg shadow-2xl">
      <form onSubmit={handleSubmit} className="">
        <div className="flex flex-col items-center mt-20 p-12  ">
          <input
            className="p-3  mb-6 mt-5  shadow-2xl rounded-md "
            type="email"
            placeholder="Enter Your Email"
            name="email"
          />

          <input
            className="p-3  shadow-2xl rounded-md "
            type="password"
            placeholder="Password"
            name="password"
          />

          <input
            type="submit"
            value="Login"
            className="bg-slate-500 p-3 mt-10 btn border-none w-32"
          />
          <div className="text-center text-orange-400">
            <p>{error}</p>
          </div>
          <div className="my-3">
            <p>
              <small>
                if you have not an account please{" "}
                <Link to="/register" className="text-orange-600">
                  Register
                </Link>{" "}
                first
              </small>
            </p>
          </div>
        </div>
      </form>
      <div className="flex justify-center mt-[-45px]">
        <button
          onClick={handleGoogleLogin}
          className="bg-slate-500 text-white flex items-center font-semibold rounded-lg  p-3"
        >
          SignIn with Google <FaGoogle className="m-2"></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default Login;
