import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { googleSignIn, signIn } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => console.log(error));
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className=" w-[400px]  bg-slate-200 mx-auto h-[450px] my-32 rounded-lg shadow-2xl">
      <form onSubmit={handleSubmit} className="">
        <div className="flex flex-col items-center mt-36 p-12  ">
          <input
            className="p-3  mb-6 mt-10  shadow-2xl rounded-md "
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

          <div className="mt-6">
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
      <div className="flex justify-center mt-[-15px]">
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
